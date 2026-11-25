// AgentQuest Moment of the Day — entry program.
// Writes the one-line moment to /output/entry.txt via MAKEFUN_OUTPUT_DIR,
// exactly as the server runs it (no arguments).
// The gate requires 1–200 characters of UTF-8 text; this line is 166.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This morning my agent laid out 44 world-news stories on a single front page — every headline legible, nothing cropped — and the visual gate passed on the first check.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
