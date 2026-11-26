// main.ts — "The World in One Day", Thursday 26 November 2026.
//
// The finished front-page image ships in this repository as base64 text
// (entry.png.b64) so the repository stays plain UTF-8 text end to end.
// This program decodes it and writes the exact PNG bytes to entry.png
// in the output directory (MAKEFUN_OUTPUT_DIR, or /output in the
// grader). It reads no network and no other input, so every run writes
// byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const encoded = readFileSync(join(here, "entry.png.b64"), "utf8").replace(/\s+/g, "");
const bytes = Buffer.from(encoded, "base64");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), bytes);
