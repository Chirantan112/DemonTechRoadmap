import { copyFile, access, mkdir } from "node:fs/promises";
import { constants } from "node:fs";

const source = new URL("../.next/routes-manifest.json", import.meta.url);
const target = new URL("../.next/routes-manifest-deterministic.json", import.meta.url);
const rootNextDir = new URL("../../.next", import.meta.url);
const rootSource = new URL("../../.next/routes-manifest.json", import.meta.url);
const rootTarget = new URL("../../.next/routes-manifest-deterministic.json", import.meta.url);

export async function ensureVercelRoutesManifest() {
  try {
    await access(target, constants.F_OK);
  } catch {
    await copyFile(source, target);
  }

  // Also copy to root .next directory for Vercel's build environment
  try {
    await mkdir(rootNextDir, { recursive: true });
    await copyFile(source, rootSource);
    await copyFile(source, rootTarget);
  } catch (err) {
    console.error("Failed to copy routes manifest to root .next directory:", err);
  }
}

export async function watchVercelRoutesManifest({ signal, timeoutMs = 120000 } = {}) {
  const startedAt = Date.now();
  let copiedRoutesManifest = false;

  while (!signal?.aborted && Date.now() - startedAt < timeoutMs) {
    try {
      await access(source, constants.F_OK);
      await ensureVercelRoutesManifest();
      copiedRoutesManifest = true;
    } catch {
      // The file appears late in Next's build. Keep polling until it exists.
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

  await ensureVercelRoutesManifest();
}
