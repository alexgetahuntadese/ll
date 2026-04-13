import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dataDir = path.join(root, "src", "data");

/** Return true for math question TS files (including social math). */
function isMathFile(name) {
  return /MathQuestions\.ts$/.test(name);
}

const entries = fs.readdirSync(dataDir);

for (const entry of entries) {
  if (!isMathFile(entry)) continue;
  const filePath = path.join(dataDir, entry);
  let text = fs.readFileSync(filePath, "utf8");

  // Remove common LaTeX delimiters, keep inner content.
  text = text
    // Inline/block $...$ / $$...$$
    .replace(/\$\$/g, "")
    .replace(/\$/g, "")
    // \( ... \), \[ ... \]
    .replace(/\\\(/g, "")
    .replace(/\\\)/g, "")
    .replace(/\\\[/g, "")
    .replace(/\\\]/g, "");

  fs.writeFileSync(filePath, text);
  console.log("Stripped LaTeX delimiters in", `src/data/${entry}`);
}

