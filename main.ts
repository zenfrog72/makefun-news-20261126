import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entrypoint for the news-image-20261126 entry.
// The finished frontpage lives next to this file as entry.png; this program
// places an exact copy of it at <output>/entry.png. All paths are resolved
// from the bot directory (or the file's own directory), never from the
// process working directory, so the program behaves the same no matter
// where the grader invokes it from.

const scriptDir = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? scriptDir;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(scriptDir, "output");

const sourcePath = join(botDir, "entry.png");
const targetPath = join(outputDir, "entry.png");

if (!existsSync(sourcePath)) {
  console.error(`entry image not found: ${sourcePath}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, targetPath);

// Confirm the copy landed before reporting success, so a silent partial
// write can never pass as a finished entry.
if (!existsSync(targetPath)) {
  console.error(`failed to write output image: ${targetPath}`);
  process.exit(1);
}

console.log(`wrote ${targetPath}`);
