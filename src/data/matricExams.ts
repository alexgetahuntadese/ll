import { matricCatalog } from "./matricCatalog";

export interface MatricExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  sectionGroupTitle?: string;
  sectionTitle?: string;
  sectionDirection?: string;
}

export interface MatricExamSubject {
  subject: string;
  questionCount: number;
  questions?: MatricExamQuestion[];
}

export interface MatricExamStream {
  key: string;
  label: string;
  subjects: MatricExamSubject[];
}

export interface MatricExamYear {
  year: number;
  streams: MatricExamStream[];
}

type MatricQuestionModule = {
  [key: string]: unknown;
};

const questionModules: Record<string, () => Promise<MatricQuestionModule>> = {
  "./matric2013BiologyQuestions.ts": () => import("./matric2013BiologyQuestions"),
  "./matric2013ChemistryQuestions.ts": () => import("./matric2013ChemistryQuestions"),
  "./matric2013CivicsQuestions.ts": () => import("./matric2013CivicsQuestions"),
  "./matric2013EnglishQuestions.ts": () => import("./matric2013EnglishQuestions"),
  "./matric2013MathQuestions.ts": () => import("./matric2013MathQuestions"),
  "./matric2013PhysicsQuestions.ts": () => import("./matric2013PhysicsQuestions"),
  "./matric2013SocialCivicsQuestions.ts": () => import("./matric2013SocialCivicsQuestions"),
  "./matric2013SocialEconomicsQuestions.ts": () => import("./matric2013SocialEconomicsQuestions"),
  "./matric2013SocialEnglishQuestions.ts": () => import("./matric2013SocialEnglishQuestions"),
  "./matric2013SocialGeographyQuestions.ts": () => import("./matric2013SocialGeographyQuestions"),
  "./matric2013SocialHistoryQuestions.ts": () => import("./matric2013SocialHistoryQuestions"),
  "./matric2013SocialMathQuestions.ts": () => import("./matric2013SocialMathQuestions"),
  "./matric2014BiologyQuestions.ts": () => import("./matric2014BiologyQuestions"),
  "./matric2014ChemistryQuestions.ts": () => import("./matric2014ChemistryQuestions"),
  "./matric2014CivicsQuestions.ts": () => import("./matric2014CivicsQuestions"),
  "./matric2014EnglishQuestions.ts": () => import("./matric2014EnglishQuestions"),
  "./matric2014MathQuestions.ts": () => import("./matric2014MathQuestions"),
  "./matric2014PhysicsQuestions.ts": () => import("./matric2014PhysicsQuestions"),
  "./matric2014SatQuestions.ts": () => import("./matric2014SatQuestions"),
  "./matric2014SocialCivicsQuestions.ts": () => import("./matric2014SocialCivicsQuestions"),
  "./matric2014SocialEnglishQuestions.ts": () => import("./matric2014SocialEnglishQuestions"),
  "./matric2014SocialGeographyQuestions.ts": () => import("./matric2014SocialGeographyQuestions"),
  "./matric2014SocialHistoryQuestions.ts": () => import("./matric2014SocialHistoryQuestions"),
  "./matric2014SocialMathQuestions.ts": () => import("./matric2014SocialMathQuestions"),
  "./matric2014SocialSatQuestions.ts": () => import("./matric2014SocialSatQuestions"),
  "./matric2015BiologyQuestions.ts": () => import("./matric2015BiologyQuestions"),
  "./matric2015ChemistryQuestions.ts": () => import("./matric2015ChemistryQuestions"),
  "./matric2015CivicsQuestions.ts": () => import("./matric2015CivicsQuestions"),
  "./matric2015EnglishQuestions.ts": () => import("./matric2015EnglishQuestions"),
  "./matric2015MathQuestions.ts": () => import("./matric2015MathQuestions"),
  "./matric2015PhysicsQuestions.ts": () => import("./matric2015PhysicsQuestions"),
  "./matric2015SocialCivicsQuestions.ts": () => import("./matric2015SocialCivicsQuestions"),
  "./matric2015SocialEnglishQuestions.ts": () => import("./matric2015SocialEnglishQuestions"),
  "./matric2015SocialGeographyQuestions.ts": () => import("./matric2015SocialGeographyQuestions"),
  "./matric2015SocialHistoryQuestions.ts": () => import("./matric2015SocialHistoryQuestions"),
  "./matric2015SocialScholasticAptitudeQuestions.ts": () => import("./matric2015SocialScholasticAptitudeQuestions"),
  "./matric2016BiologyQuestions.ts": () => import("./matric2016BiologyQuestions"),
  "./matric2016ChemistryQuestions.ts": () => import("./matric2016ChemistryQuestions"),
  "./matric2016EnglishQuestions.ts": () => import("./matric2016EnglishQuestions"),
  "./matric2016MathQuestions.ts": () => import("./matric2016MathQuestions"),
  "./matric2016PhysicsQuestions.ts": () => import("./matric2016PhysicsQuestions"),
  "./matric2016ScholasticAptitudeQuestions.ts": () => import("./matric2016ScholasticAptitudeQuestions"),
  "./matric2016SocialEconomicsQuestions.ts": () => import("./matric2016SocialEconomicsQuestions"),
  "./matric2016SocialEnglishQuestions.ts": () => import("./matric2016SocialEnglishQuestions"),
  "./matric2016SocialGeographyQuestions.ts": () => import("./matric2016SocialGeographyQuestions"),
  "./matric2016SocialHistoryQuestions.ts": () => import("./matric2016SocialHistoryQuestions"),
  "./matric2016SocialMathQuestions.ts": () => import("./matric2016SocialMathQuestions"),
  "./matric2016SocialScholasticAptitudeQuestions.ts": () => import("./matric2016SocialScholasticAptitudeQuestions"),
  "./matric2017BiologyQuestions.ts": () => import("./matric2017BiologyQuestions"),
  "./matric2017ChemistryQuestions.ts": () => import("./matric2017ChemistryQuestions"),
  "./matric2017EnglishQuestions.ts": () => import("./matric2017EnglishQuestions"),
  "./matric2017MathQuestions.ts": () => import("./matric2017MathQuestions"),
  "./matric2017PhysicsQuestions.ts": () => import("./matric2017PhysicsQuestions"),
  "./matric2017ScholasticAptitudeQuestions.ts": () => import("./matric2017ScholasticAptitudeQuestions"),
  "./matric2017SocialEconomicsQuestions.ts": () => import("./matric2017SocialEconomicsQuestions"),
  "./matric2017SocialEnglishQuestions.ts": () => import("./matric2017SocialEnglishQuestions"),
  "./matric2017SocialGeographyQuestions.ts": () => import("./matric2017SocialGeographyQuestions"),
  "./matric2017SocialHistoryQuestions.ts": () => import("./matric2017SocialHistoryQuestions"),
  "./matric2017SocialMathQuestions.ts": () => import("./matric2017SocialMathQuestions"),
  "./matric2017SocialScholasticAptitudeQuestions.ts": () => import("./matric2017SocialScholasticAptitudeQuestions"),
};
const questionCache = new Map<string, Promise<MatricExamQuestion[]>>();

const getYearMeta = (year: number) => matricCatalog.find((entry) => entry.year === year);

const getStreamMeta = (year: number, stream: string) =>
  getYearMeta(year)?.streams.find((entry) => entry.key === stream);

const getSubjectMeta = (year: number, stream: string, subject: string) =>
  getStreamMeta(year, stream)?.subjects.find((entry) => entry.subject === subject);

const toStreamSummary = (year: number): MatricExamStream[] =>
  getYearMeta(year)?.streams.map((stream) => ({
    key: stream.key,
    label: stream.label,
    subjects: stream.subjects.map((subject) => ({
      subject: subject.subject,
      questionCount: subject.questionCount,
    })),
  })) ?? [];

export const getMatricYears = () => matricCatalog.map((entry) => entry.year);

export const getMatricStreamsForYear = (year: number) => toStreamSummary(year);

export const getMatricSubjectsForYear = (year: number, stream: string) =>
  getStreamMeta(year, stream)?.subjects
    .filter((subject) => subject.questionCount > 0)
    .map((subject) => ({
      subject: subject.subject,
      questionCount: subject.questionCount,
    })) ?? [];

export const getMatricQuestions = async (
  year: number,
  stream: string,
  subject: string,
) => {
  const source = getSubjectMeta(year, stream, subject);

  if (!source?.modulePath) {
    return [];
  }

  const cached = questionCache.get(source.modulePath);
  if (cached) {
    return cached;
  }

  const loader = questionModules[source.modulePath];
  if (!loader) {
    throw new Error(`Missing matric question module: ${source.modulePath}`);
  }

  const promise = loader().then((module) => {
    const exportName = source.modulePath?.split("/").pop()?.replace(/\.ts$/, "");

    if (!exportName || !(exportName in module)) {
      throw new Error(`Missing export ${exportName} in ${source.modulePath}`);
    }

    return module[exportName as keyof typeof module] as MatricExamQuestion[];
  });

  questionCache.set(source.modulePath, promise);
  return promise;
};

export const getMatricSubjectIndex = (year: number, stream: string, subject: string) =>
  getMatricSubjectsForYear(year, stream).findIndex((entry) => entry.subject === subject);
