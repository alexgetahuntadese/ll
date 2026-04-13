import fs from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public", "books");
const pdfDir = path.join(publicDir, "pdfs");
const coverDir = path.join(publicDir, "covers");
const dataFile = path.join(rootDir, "src", "lib", "booksData.ts");

const grades = [
  {
    grade: 9,
    accent: "from-emerald-500 to-teal-500",
    description: "Foundation textbooks for lower secondary study with direct local PDF access.",
    slugs: [
      "amharic",
      "biology",
      "chemistry",
      "citizenship-education",
      "economics",
      "english-for-ethiopia",
      "geography",
      "health-and-physical-education-hpe",
      "history",
      "information-technology",
      "mathematics",
      "physics",
    ],
  },
  {
    grade: 10,
    accent: "from-sky-500 to-cyan-500",
    description: "Grade 10 textbooks for stronger subject mastery and exam preparation.",
    slugs: [
      "amharic",
      "biology",
      "chemistry",
      "citizenship-education",
      "economics",
      "english-for-ethiopia",
      "geography",
      "health-and-physical-education-hpe",
      "history",
      "information-technology",
      "mathematics",
      "physics",
    ],
  },
  {
    grade: 11,
    accent: "from-violet-500 to-fuchsia-500",
    description: "Upper-secondary textbooks for deeper science, social science, and language study.",
    slugs: [
      "agriculture",
      "amharic",
      "biology",
      "chemistry",
      "economics",
      "english-for-ethiopia",
      "geography",
      "history",
      "information-technology",
      "mathematics",
      "physics",
    ],
  },
  {
    grade: 12,
    accent: "from-amber-400 to-orange-500",
    description: "Final-year textbooks with local previews and direct downloads for revision.",
    slugs: [
      "agriculure",
      "amharic",
      "biology",
      "chemistry",
      "economics",
      "english-for-ethiopia",
      "geography",
      "history",
      "information-technology",
      "mathematics",
      "physics",
    ],
  },
];

const normalizeSubjectName = (name) =>
  name
    .replace(/\s+Student Textbook.*$/i, "")
    .replace(/^Ethiopian Grade \d+\s+/i, "")
    .replace(/\s+\(New Curriculum\)$/i, "")
    .replace(/^English For Ethiopia$/i, "English")
    .replace(/^Citizenship Education$/i, "Citizenship Education")
    .replace(/^Agriculure$/i, "Agriculture")
    .trim();

const slugToFilename = (grade, slug) =>
  `grade-${grade}-${slug.replace(/[^a-z0-9]+/gi, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")}`;

const fetchText = async (url) => {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
};

const fetchBuffer = async (url) => {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }
  return Buffer.from(await response.arrayBuffer());
};

const matchOrThrow = (text, regex, label) => {
  const match = text.match(regex);
  if (!match) throw new Error(`Could not parse ${label}`);
  return match[1];
};

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

const writeIfChanged = async (filePath, content) => {
  try {
    const existing = await fs.readFile(filePath, "utf8");
    if (existing === content) return;
  } catch {}
  await fs.writeFile(filePath, content, "utf8");
};

const escapeTs = (value) => value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

await ensureDir(pdfDir);
await ensureDir(coverDir);

const manifest = [];

for (const grade of grades) {
  const subjects = [];
  for (const slug of grade.slugs) {
    const pageUrl = `https://kehulum.com/student-textbook/new/grade-${grade.grade}/${slug}`;
    console.log(`Fetching ${pageUrl}`);
    const html = await fetchText(pageUrl);

    const bookJsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map((match) => match[1])
      .map((json) => {
        try {
          return JSON.parse(json);
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    const bookJson = bookJsonBlocks.find((entry) => entry["@type"] === "Book");
    if (!bookJson) throw new Error(`No Book JSON-LD found for ${pageUrl}`);

    const subject = normalizeSubjectName(bookJson.name);
    const pages = matchOrThrow(html, /<p><strong>Total Pages<\/strong>\s*([^<]+)<\/p>/i, "pages").trim();
    const size = matchOrThrow(html, /<p><strong>File Size<\/strong>\s*([^<]+)<\/p>/i, "file size").trim();
    const pdfUrl = matchOrThrow(html, /<a[^>]+href="(https:\/\/kehulum\.com\/(?:bfile_asset|books_asset)\/[^"]+\.pdf)"/i, "pdf url");
    const imageUrl = bookJson.image || matchOrThrow(html, /<img class="bkimg-size"[^>]+src="([^"]+)"/i, "cover image");

    const fileBase = slugToFilename(grade.grade, slug);
    const pdfLocal = `/books/pdfs/${fileBase}.pdf`;
    const coverLocal = `/books/covers/${fileBase}${path.extname(new URL(imageUrl).pathname) || ".png"}`;
    const pdfPath = path.join(rootDir, "public", pdfLocal.replace(/^\//, "").replace(/\//g, path.sep));
    const coverPath = path.join(rootDir, "public", coverLocal.replace(/^\//, "").replace(/\//g, path.sep));

    await fs.writeFile(pdfPath, await fetchBuffer(pdfUrl));
    await fs.writeFile(coverPath, await fetchBuffer(imageUrl));

    const shortDescription = `${subject} textbook for Grade ${grade.grade} with ${pages} and a local PDF copy inside the app.`;

    subjects.push({
      name: subject,
      description: shortDescription,
      pages,
      size,
      image: coverLocal,
      pdf: pdfLocal,
    });
  }

  subjects.sort((a, b) => a.name.localeCompare(b.name));
  manifest.push({
    grade: grade.grade,
    accent: grade.accent,
    description: grade.description,
    subjects,
  });
}

const ts = `export interface BookSubject {
  name: string;
  description: string;
  pages: string;
  size: string;
  image: string;
  pdf: string;
}

export interface BookGrade {
  grade: number;
  accent: string;
  description: string;
  subjects: BookSubject[];
}

export const booksByGrade: BookGrade[] = [
${manifest
  .map(
    (grade) => `  {
    grade: ${grade.grade},
    accent: "${escapeTs(grade.accent)}",
    description: "${escapeTs(grade.description)}",
    subjects: [
${grade.subjects
  .map(
    (subject) => `      {
        name: "${escapeTs(subject.name)}",
        description: "${escapeTs(subject.description)}",
        pages: "${escapeTs(subject.pages)}",
        size: "${escapeTs(subject.size)}",
        image: "${escapeTs(subject.image)}",
        pdf: "${escapeTs(subject.pdf)}",
      }`
  )
  .join(",\n")}
    ],
  }`
  )
  .join(",\n")}
];

export const getBooksGrade = (grade: number) =>
  booksByGrade.find((item) => item.grade === grade);
`;

await writeIfChanged(dataFile, ts);

console.log(`Synced ${manifest.reduce((sum, grade) => sum + grade.subjects.length, 0)} textbooks.`);
