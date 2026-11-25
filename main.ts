// A warm, funny family scene entry for make.fun.
// Writes one short scene (two lines) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The scene: a small Sunday-table ritual, Mum's quiet care,
// Dad's quiet pride — and the tiny joke that keeps it going.
const SCENE = [
  "Mum still cuts the crusts off Dad's sandwiches, the way she did when he was six and scared of school.",
  "He pretends not to notice — and eats his first every time, so she'll never stop.",
].join("\n");

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), SCENE, "utf8");
}

main();
