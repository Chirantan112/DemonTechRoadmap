import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { readdir, copyFile, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { ensureVercelRoutesManifest, watchVercelRoutesManifest } from "./ensure-vercel-routes-manifest.mjs";

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");
const projectRoot = new URL("../", import.meta.url);
const controller = new AbortController();

const watcher = watchVercelRoutesManifest({ signal: controller.signal });
const build = spawn(process.execPath, [nextBin, "build", "--webpack"], {
  cwd: projectRoot,
  stdio: "inherit",
});

const exitCode = await new Promise((resolve) => {
  build.on("close", resolve);
});

controller.abort();

if (exitCode === 0) {
  await watcher;
  await ensureVercelRoutesManifest();

  // Vercel's post-build validator ALWAYS checks /vercel/path0/.next/ (the repo root)
  // regardless of outputDirectory or rootDirectory settings. The build outputs to
  // project/.next/. We mirror only the pure JSON manifest files — NOT .nft.json trace
  // files or JavaScript server bundles — to avoid trace resolution errors when those
  // files are read from a different directory depth.
  const srcNextDir = new URL("../.next/", import.meta.url).pathname;   // project/.next/
  const dstNextDir = new URL("../../.next/", import.meta.url).pathname; // repo root .next/

  async function copyJsonManifests(src, dst) {
    await mkdir(dst, { recursive: true });
    const entries = await readdir(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = join(src, entry.name);
      const dstPath = join(dst, entry.name);
      if (entry.isDirectory()) {
        await copyJsonManifests(srcPath, dstPath);
      } else if (entry.name.endsWith(".json") && !entry.name.endsWith(".nft.json")) {
        // Only copy pure JSON manifests — skip .nft.json trace files and JS bundles
        await copyFile(srcPath, dstPath);
      }
    }
  }

  try {
    await rm(dstNextDir, { recursive: true, force: true });
    await copyJsonManifests(srcNextDir, dstNextDir);
    console.log("Mirrored JSON manifests to repo root .next/ for Vercel post-build validation.");
  } catch (err) {
    console.error("Warning: could not mirror manifests to repo root:", err.message);
  }
}

process.exit(exitCode ?? 1);
