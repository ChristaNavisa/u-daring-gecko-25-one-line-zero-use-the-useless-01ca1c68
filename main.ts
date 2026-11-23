import { mkdirSync, writeFileSync } from "node:fs";

// One line, zero use: a hilariously useless superpower.
// The joke pays off in the last few words: the grandest power
// (flight) reduced to the most mundane frustration (traffic).
// Deterministic: the same line is written on every run.
const LINE =
  "I can fly, but only at walking speed, and only three feet off the ground, so I mostly just hover in traffic.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
