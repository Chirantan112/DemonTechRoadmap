const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const README_PATH = path.join(process.env.GITHUB_WORKSPACE || ".", "README.md");

// Markers that wrap the auto-managed contributor grid in the README.
const START_MARKER = "<!-- CONTRIBUTORS-START -->";
const END_MARKER   = "<!-- CONTRIBUTORS-END -->";


function sh(cmd) {
  return execSync(cmd, {
    encoding: "utf8",
    cwd: process.env.GITHUB_WORKSPACE,
  }).trim();
}

function getNewCommitters() {
  const before = process.env.BEFORE_SHA;
  const after  = process.env.AFTER_SHA;
  const committers = new Map(); // username -> { username, name, email }

  let range = "";
  if (before && after && before !== "0000000000000000000000000000000000000000") {
    range = `${before}..${after}`;
  } else {
    // First push or missing SHAs – just inspect the latest commit(s).
    range = "HEAD~1..HEAD";
  }

  try {
    const log = sh(
      `git log --format='%an|%ae' --no-merges ${range} 2>/dev/null || git log --format='%an|%ae' -1 HEAD`
    );

    const lines = log.split("\n").filter(Boolean);
    for (const line of lines) {
      const [name, email] = line.split("|");
      if (!email) continue;

      let username = "";
      const noreplyMatch = email.match(/^\d+\+([^@]+)@users\.noreply\.github\.com$/);
      if (noreplyMatch) {
        username = noreplyMatch[1];
      } else {
        username = email.split("@")[0].toLowerCase();
      }

      if (username.includes("github-actions")) continue;

      if (!committers.has(username)) {
        committers.set(username, { username, name: name || username, email });
      }
    }
  } catch (err) {
    console.error("Failed to read git log:", err.message);
  }

  return Array.from(committers.values());
}

async function enrichContributor({ username, name, email }) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "update-contributors-bot",
      },
    });

    if (res.ok) {
      const data = await res.json();
      return {
        username: data.login,
        name: data.name || data.login,
        avatarUrl: data.avatar_url,
        htmlUrl: data.html_url,
      };
    }
  } catch (_) {
  }

  return {
    username,
    name: name || username,
    avatarUrl: `https://github.com/${username}.png`,
    htmlUrl: `https://github.com/${username}`,
  };
}


function getExistingContributors(content) {
  const startIdx = content.indexOf(START_MARKER);
  const endIdx   = content.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1) {
    return { usernames: new Set(), blockContent: "" };
  }

  const blockContent = content.slice(startIdx + START_MARKER.length, endIdx);
  const existing = new Set();

  const linkRegex = /href="https:\/\/github\.com\/([^"/]+)"/g;
  let match;
  while ((match = linkRegex.exec(blockContent)) !== null) {
    existing.add(match[1].toLowerCase());
  }

  return { usernames: existing, blockContent };
}


function parseExistingContributors(blockContent) {
  const contributors = [];
  const linkRegex = /href="https:\/\/github\.com\/([^"/]+)"/g;
  const seen = new Set();
  let match;

  while ((match = linkRegex.exec(blockContent)) !== null) {
    const username = match[1];
    if (!seen.has(username.toLowerCase())) {
      seen.add(username.toLowerCase());
      contributors.push({
        username,
        name: username,
        avatarUrl: `https://github.com/${username}.png`,
        htmlUrl: `https://github.com/${username}`,
      });
    }
  }

  return contributors;
}

function buildContributorRow({ username, name, avatarUrl, htmlUrl }) {
  const safeName = name
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  return [
    `    <td align="center">`,
    `      <a href="${htmlUrl}" title="${safeName}">`,
    `        <img src="${avatarUrl}&s=100" width="80px;" alt="${safeName}"/><br />`,
    `        <sub><b>${safeName}</b></sub>`,
    `      </a>`,
    `    </td>`,
  ].join("\n");
}

function buildContributorBlock(contributors, maxPerRow = 6) {
  const rows = [];
  for (let i = 0; i < contributors.length; i += maxPerRow) {
    const rowContributors = contributors.slice(i, i + maxPerRow);
    const cells = rowContributors.map(buildContributorRow).join("\n");
    rows.push(`  <tr>\n${cells}\n  </tr>`);
  }

  return [
    START_MARKER,
    "",
    "<table>",
    ...rows,
    "</table>",
    "",
    END_MARKER,
  ].join("\n");
}

async function main() {
  console.log("::group::📄 Reading README");
  const originalContent = fs.readFileSync(README_PATH, "utf8");
  console.log("✅ README loaded");
  console.log("::endgroup::");

  if (!originalContent.includes(START_MARKER)) {
    console.log("::warning:: START_MARKER not found in README.");
    console.log("Place these exactly where you want the contributor grid:");
    console.log(`  ${START_MARKER}`);
    console.log(`  ${END_MARKER}`);
    process.exit(0);
  }

  console.log("::group::🔍 Finding new committers");
  const newCommitters = getNewCommitters();
  console.log(`${newCommitters.length} unique author(s) in this push:`);
  newCommitters.forEach((c) => console.log(`  • ${c.username} <${c.email}>`));
  console.log("::endgroup::");

  if (newCommitters.length === 0) {
    console.log("ℹ️  No committers found. Exiting.");
    return;
  }

  console.log("::group::📋 Checking existing contributors");
  const { usernames: existingUsernames, blockContent } =
    getExistingContributors(originalContent);
  console.log(`${existingUsernames.size} contributor(s) already listed.`);
  console.log("::endgroup::");

  if (existingUsernames.size === 0) {
    console.log("::group::🌱 First run — seeding all historical contributors");
    const history = sh(
      "git log --format='%an|%ae' --no-merges --reverse"
    );
    const histLines = history.split("\n").filter(Boolean);
    const seen = new Set();
    const historicalCommitters = [];

    for (const line of histLines) {
      const [name, email] = line.split("|");
      if (!email) continue;

      const noreplyMatch = email.match(/^\d+\+([^@]+)@users\.noreply\.github\.com$/);
      const username = noreplyMatch
        ? noreplyMatch[1]
        : email.split("@")[0].toLowerCase();

      if (username.includes("github-actions")) continue;
      if (seen.has(username.toLowerCase())) continue;

      seen.add(username.toLowerCase());
      historicalCommitters.push({ username, name: name || username, email });
    }

    console.log(`Found ${historicalCommitters.length} historical contributor(s):`);
    historicalCommitters.forEach((c) => console.log(`  • ${c.username}`));

    const enrichedHistory = [];
    for (const c of historicalCommitters) {
      const profile = await enrichContributor(c);
      enrichedHistory.push(profile);
    }

    const seedBlock = buildContributorBlock(enrichedHistory);
    const startIdx = originalContent.indexOf(START_MARKER);
    const endIdx   = originalContent.indexOf(END_MARKER);
    const updatedContent =
      originalContent.slice(0, startIdx) +
      seedBlock +
      originalContent.slice(endIdx + END_MARKER.length);

    console.log("::group::💾 Writing seeded README");
    fs.writeFileSync(README_PATH, updatedContent, "utf8");
    console.log(`✅ Seeded ${enrichedHistory.length} contributor(s)`);
    console.log("::endgroup::");

    console.log("::group::🚀 Committing seed");
    sh(`git config user.name "github-actions[bot]"`);
    sh(`git config user.email "github-actions[bot]@users.noreply.github.com"`);
    sh(`git add README.md`);
    sh(`git commit -m "docs: seed contributor table with all historical contributors"`);
    sh(`git push origin HEAD:main`);
    console.log("✅ Seed committed");
    console.log("::endgroup::");
    return;
  }

  const trulyNew = [];
  for (const c of newCommitters) {
    if (!existingUsernames.has(c.username.toLowerCase())) {
      trulyNew.push(c);
    } else {
      console.log(`⏭️  @${c.username} – already in README, skipping`);
    }
  }

  if (trulyNew.length === 0) {
    console.log("✅ All committers already listed. Nothing to do.");
    return;
  }

  console.log("::group::✨ Enriching via GitHub API");
  const enriched = [];
  for (const c of trulyNew) {
    const profile = await enrichContributor(c);
    enriched.push(profile);
    console.log(`  ✓ @${profile.username} → ${profile.name}`);
  }
  console.log("::endgroup::");

  const existingContributors = parseExistingContributors(blockContent);
  const allContributors = [...existingContributors, ...enriched];
  const newBlock = buildContributorBlock(allContributors);

  // Replace old block with new block
  const startIdx = originalContent.indexOf(START_MARKER);
  const endIdx   = originalContent.indexOf(END_MARKER);
  const updatedContent =
    originalContent.slice(0, startIdx) +
    newBlock +
    originalContent.slice(endIdx + END_MARKER.length);

  console.log("::group::💾 Writing updated README");
  fs.writeFileSync(README_PATH, updatedContent, "utf8");
  console.log("✅ README written");
  console.log("::endgroup::");

  const names = enriched.map((c) => `@${c.username}`).join(", ");
  const commitMsg = `docs: add contributor(s) ${names} to README`;

  console.log("::group::🚀 Committing & pushing");
  sh(`git config user.name "github-actions[bot]"`);
  sh(`git config user.email "github-actions[bot]@users.noreply.github.com"`);

  const status = sh("git status --porcelain README.md");
  if (status) {
    sh(`git add README.md`);
    sh(`git commit -m "${commitMsg}"`);
    sh(`git push origin HEAD:main`);
    console.log(`✅ Committed: ${commitMsg}`);
  } else {
    console.log("⚠️  No changes detected (README unchanged).");
  }
  console.log("::endgroup::");
}

main().catch((err) => {
  console.error("❌ Fatal error:", err);
  process.exit(1);
});