import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

const botDir = process.env.MAKEFUN_BOT_DIR ?? here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");

const source = join(botDir, "entry.png");
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  console.error(`entry.png not found in bot directory: ${source}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

if (!existsSync(target)) {
  console.error(`copy failed, output file missing: ${target}`);
  process.exit(1);
}

console.log(`copied entry.png to ${target}`);
