/**
 * Fills correctAnswer and explanation for 2013 EUEE matric data.
 * Run from repo root: node scripts/applyMatric2013Answers.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import bioArr from "../tmp/keys/matric2013Bio.mjs";
import civicsArr from "../tmp/keys/matric2013Civics.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const keysDir = path.join(root, "tmp", "keys");

function loadJson(name) {
  return JSON.parse(fs.readFileSync(path.join(keysDir, name), "utf8"));
}

const chemMap = loadJson("matric2013Chem.json");
const englishMap = loadJson("matric2013English.json");
const mathArr = loadJson("matric2013Math.json");
const physicsArr = loadJson("matric2013Physics.json");
const socMathArr = loadJson("matric2013SocMath.json");

function extractJsonArray(tsContent, exportConstName) {
  const marker = `export const ${exportConstName}`;
  const i = tsContent.indexOf(marker);
  if (i < 0) throw new Error(`Missing ${exportConstName}`);
  const eq = tsContent.indexOf("= [", i);
  if (eq < 0) throw new Error(`Missing array for ${exportConstName}`);
  const br = tsContent.indexOf("[", eq);
  const end = tsContent.lastIndexOf("];");
  if (br < 0 || end < br) throw new Error(`Bad array bounds ${exportConstName}`);
  return JSON.parse(tsContent.slice(br, end + 1));
}

function stringifyFile(exportConstName, questions) {
  const body = JSON.stringify(questions, null, 2);
  return `import { MatricExamQuestion } from "./matricExams";

export const ${exportConstName}: MatricExamQuestion[] = ${body};
`;
}

function tailNum(id) {
  const m = String(id).match(/(\d+)$/);
  return m ? parseInt(m[1], 10) : NaN;
}

function explainFor(q, idx) {
  const letter = String.fromCharCode(65 + idx);
  const opt = q.options[idx] ?? "";
  return `${letter}) ${opt}`;
}

function applyArrayOrder(questions, answers) {
  const n = Math.min(questions.length, answers.length);
  for (let i = 0; i < n; i++) {
    const idx = answers[i];
    if (typeof idx !== "number" || idx < 0) continue;
    const q = questions[i];
    if (idx >= q.options.length) {
      console.warn("Skip bad index", q.id, idx);
      continue;
    }
    const opt = q.options[idx];
    if (!opt || String(opt).trim().length < 1) continue;
    q.correctAnswer = idx;
    q.explanation = explainFor(q, idx);
  }
}

function applyNumericMap(questions, map) {
  for (const q of questions) {
    const n = tailNum(q.id);
    if (!Number.isFinite(n)) continue;
    const idx = map[n] ?? map[String(n)];
    if (typeof idx !== "number" || idx < 0) continue;
    if (idx >= q.options.length) {
      console.warn("Skip bad map", q.id, idx);
      continue;
    }
    const opt = q.options[idx];
    if (!opt || String(opt).trim().length < 1) continue;
    q.correctAnswer = idx;
    q.explanation = explainFor(q, idx);
  }
}

const civicsMap = Object.fromEntries(civicsArr.map((v, i) => [i + 1, v]));

const JOBS = [
  { file: "src/data/matric2013BiologyQuestions.ts", name: "matric2013BiologyQuestions", mode: "array", data: bioArr },
  { file: "src/data/matric2013ChemistryQuestions.ts", name: "matric2013ChemistryQuestions", mode: "map", data: chemMap },
  { file: "src/data/matric2013CivicsQuestions.ts", name: "matric2013CivicsQuestions", mode: "map", data: civicsMap },
  { file: "src/data/matric2013SocialCivicsQuestions.ts", name: "matric2013SocialCivicsQuestions", mode: "map", data: civicsMap },
  { file: "src/data/matric2013EnglishQuestions.ts", name: "matric2013EnglishQuestions", mode: "map", data: englishMap },
  { file: "src/data/matric2013SocialEnglishQuestions.ts", name: "matric2013SocialEnglishQuestions", mode: "map", data: englishMap },
  { file: "src/data/matric2013MathQuestions.ts", name: "matric2013MathQuestions", mode: "array", data: mathArr },
  { file: "src/data/matric2013SocialMathQuestions.ts", name: "matric2013SocialMathQuestions", mode: "array", data: socMathArr },
  { file: "src/data/matric2013PhysicsQuestions.ts", name: "matric2013PhysicsQuestions", mode: "array", data: physicsArr },
];

for (const job of JOBS) {
  const fp = path.join(root, job.file);
  const raw = fs.readFileSync(fp, "utf8");
  const questions = extractJsonArray(raw, job.name);
  if (job.mode === "array") applyArrayOrder(questions, job.data);
  else applyNumericMap(questions, job.data);
  fs.writeFileSync(fp, stringifyFile(job.name, questions));
  console.log("Updated", job.file);
}
