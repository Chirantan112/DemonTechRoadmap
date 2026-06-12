import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";

const projectNextDir = new URL("../.next", import.meta.url);
const rootNextDir = new URL("../../.next", import.meta.url);

export async function ensureVercelRoutesManifest() {
  const dirs = [projectNextDir, rootNextDir];
  let succeeded = false;

  for (const dir of dirs) {
    const source = new URL("./routes-manifest.json", dir + "/");
    const target = new URL("./routes-manifest-deterministic.json", dir + "/");

    try {
      await access(source, constants.F_OK);
      try {
        await access(target, constants.F_OK);
      } catch {
        await copyFile(source, target);
        console.log(`Copied routes-manifest.json to routes-manifest-deterministic.json inside: ${dir.pathname}`);
      }
      succeeded = true;
    } catch {
      // Not found in this directory, skip
    }
  }
  return succeeded;
}

export async function watchVercelRoutesManifest({ signal, timeoutMs = 120000 } = {}) {
  const startedAt = Date.now();
  let copiedRoutesManifest = false;

  while (!signal?.aborted && Date.now() - startedAt < timeoutMs) {
    const check = await ensureVercelRoutesManifest();
    if (check) {
      copiedRoutesManifest = true;
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  return copiedRoutesManifest;
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  if (process.argv.includes("--watch")) {
    const copied = await watchVercelRoutesManifest();
    process.exit(copied ? 0 : 1);
  }

  const done = await ensureVercelRoutesManifest();
  process.exit(done ? 0 : 1);
}
