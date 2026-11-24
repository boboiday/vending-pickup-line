import { mkdirSync, writeFileSync } from "node:fs";

// One-line pickup line, spoken by a vending machine flirting with a passing human.
const LINE = "Hey. You've been staring at my buttons for a minute — press B4 and I'll fall for you. Literally. I fall for everyone.";

const MAX_CHARS = 200;
if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
