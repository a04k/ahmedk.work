/**
 * One-off utility: converts the TTF fonts in public/fonts to WOFF2 (~60-70% smaller).
 * Run with: bun run scripts/convert-fonts.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { compress } from "wawoff2";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.join(__dirname, "..", "public", "fonts");

const targets = ["Fustat.ttf", "InstrumentSerif-Regular.ttf", "InstrumentSerif-Italic.ttf"];

for (const file of targets) {
  const input = path.join(fontsDir, file);
  const output = input.replace(/\.ttf$/, ".woff2");
  const ttf = fs.readFileSync(input);
  const woff2 = Buffer.from(await compress(ttf));
  fs.writeFileSync(output, woff2);
  console.log(`${file}: ${(ttf.length / 1024).toFixed(0)}KB -> ${(woff2.length / 1024).toFixed(0)}KB`);
}
