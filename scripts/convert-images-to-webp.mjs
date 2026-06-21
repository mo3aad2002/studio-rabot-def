import { readdirSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const PUBLIC_DIR = join(root, "public");

const MAX_DIMENSION = 1600;
const QUALITY = 78;
const IMAGE_RE = /\.(jpe?g|png)$/i;

const CATEGORIES = ["SELECTIE PROJECTEN", "SELECTIE SCHETSONTWERPEN"];

function formatBytes(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
}

async function convertDir(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true });
  let before = 0;
  let after = 0;
  let count = 0;

  for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = join(srcDir, entry.name);

    if (entry.isDirectory()) {
      const sub = await convertDir(srcPath, join(destDir, entry.name));
      before += sub.before;
      after += sub.after;
      count += sub.count;
      continue;
    }

    if (!entry.isFile() || !IMAGE_RE.test(entry.name)) continue;

    const outName = entry.name.replace(IMAGE_RE, ".webp");
    const outPath = join(destDir, outName);
    const srcSize = statSync(srcPath).size;

    await sharp(srcPath)
      .rotate()
      .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    const outSize = statSync(outPath).size;
    before += srcSize;
    after += outSize;
    count += 1;

    console.log(
      `${srcPath.slice(PUBLIC_DIR.length + 1)} -> ${outName}  ${formatBytes(srcSize)} -> ${formatBytes(outSize)} (-${Math.round((1 - outSize / srcSize) * 100)}%)`,
    );
  }

  return { before, after, count };
}

let grandBefore = 0;
let grandAfter = 0;
let grandCount = 0;

for (const category of CATEGORIES) {
  console.log(`\n=== ${category} ===`);
  const { before, after, count } = await convertDir(join(PUBLIC_DIR, category), join(PUBLIC_DIR, `${category}-webp`));
  grandBefore += before;
  grandAfter += after;
  grandCount += count;
  console.log(`${category}: ${count} files, ${formatBytes(before)} -> ${formatBytes(after)}`);
}

console.log(
  `\nTotal: ${grandCount} files, ${formatBytes(grandBefore)} -> ${formatBytes(grandAfter)} (-${Math.round((1 - grandAfter / grandBefore) * 100)}%)`,
);
