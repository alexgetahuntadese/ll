import type { Question as Grade12Question } from "@/data/naturalScienceQuizzes";

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

const normalizeQuestion = (question: any, fallbackId: string): QuizQuestion => ({
  id: question.id?.toString() || fallbackId,
  question: question.question || "Question not available",
  options: Array.isArray(question.options) ? question.options : [],
  correct: question.correct || question.correctAnswer || "",
  explanation: question.explanation || "No explanation provided.",
});

const filterValidQuestions = (questions: QuizQuestion[]) =>
  questions.filter(
    (question) =>
      question.question !== "Question not available" &&
      question.options.length >= 2 &&
      question.correct &&
      question.options.includes(question.correct),
  );

const filterByDifficulty = (questions: any[], difficulty: string) =>
  questions.filter((question) => {
    if (!question.difficulty) {
      return true;
    }

    return question.difficulty.toLowerCase() === difficulty.toLowerCase();
  });

const sliceQuestions = (questions: QuizQuestion[], count: number) =>
  [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(count, questions.length));

const getSubjectListTitles = async (grade: string, subject: string) => {
  if (grade === "11") {
    const { grade11Subjects } = await import("@/data/grade11Subjects");
    return (
      grade11Subjects.find((item) =>
        item.name === subject || (subject === "Civic Education" && item.name === "Civics"),
      )?.chapters ?? []
    );
  }

  if (grade === "10") {
    const { grade10Subjects } = await import("@/data/grade10Subjects");
    return grade10Subjects.find((item) => item.name === subject)?.chapters ?? [];
  }

  if (grade === "9") {
    const { grade9Subjects } = await import("@/data/grade9Subjects");
    return grade9Subjects.find((item) => item.name === subject)?.chapters ?? [];
  }

  return [];
};

export const getQuizChapterTitles = async (subject: string, grade: string) => {
  if (grade !== "12") {
    return getSubjectListTitles(grade, subject);
  }

  switch (subject) {
    case "Mathematics": {
      const { grade12Mathematics } = await import("@/data/grade12Mathematics");
      return Object.keys(grade12Mathematics);
    }
    case "Biology": {
      const { grade12BiologyQuestions } = await import("@/data/grade12BiologyQuestions");
      return Object.keys(grade12BiologyQuestions);
    }
    case "Chemistry": {
      const { grade12ChemistryQuestions } = await import("@/data/grade12ChemistryQuestions");
      return Object.keys(grade12ChemistryQuestions);
    }
    case "Physics": {
      const { grade12PhysicsQuestions } = await import("@/data/grade12PhysicsQuestions");
      return Object.keys(grade12PhysicsQuestions);
    }
    case "English": {
      const { grade12EnglishQuestions } = await import("@/data/grade12EnglishQuestions");
      return Object.keys(grade12EnglishQuestions);
    }
    case "Agriculture": {
      const { grade12AgricultureQuestions } = await import("@/data/grade12AgricultureQuestions");
      return Object.keys(grade12AgricultureQuestions);
    }
    case "Economics": {
      const { grade12EconomicsQuestions } = await import("@/data/grade12EconomicsQuestions");
      return Object.keys(grade12EconomicsQuestions);
    }
    case "Amharic": {
      const { grade12AmharicQuestions } = await import("@/data/grade12AmharicQuestions");
      return Object.keys(grade12AmharicQuestions);
    }
    case "Civics":
    case "Civic Education": {
      const { grade12CivicsQuestions } = await import("@/data/grade12CivicsQuestions");
      return Object.keys(grade12CivicsQuestions);
    }
    case "History": {
      const { grade12HistoryQuestions } = await import("@/data/grade12HistoryQuestions");
      return Object.keys(grade12HistoryQuestions);
    }
    case "Information Technology":
    case "IT": {
      const { grade12ITQuestions } = await import("@/data/grade12ITQuestions");
      return Object.keys(grade12ITQuestions);
    }
    case "Geography": {
      const {
        grade12GeographyQuestions,
        getGrade12GeographyDisplayTitle,
      } = await import("@/data/grade12GeographyQuestions");
      return Object.keys(grade12GeographyQuestions).map((unitName) =>
        getGrade12GeographyDisplayTitle(unitName),
      );
    }
    default:
      return [];
  }
};

export const getQuestionsForSubject = async (
  subject: string,
  chapter: string,
  difficulty: string,
  grade: string,
  count = 10,
): Promise<QuizQuestion[]> => {
  if (grade === "9") {
    const { getGrade9Questions } = await import("@/data/grade9Questions");
    return getGrade9Questions(
      subject,
      chapter,
      difficulty.toLowerCase() as "easy" | "medium" | "hard",
      count,
    ).map((question) => normalizeQuestion(question, question.id));
  }

  if (grade === "10") {
    const difficultyLevel = difficulty.toLowerCase() as "easy" | "medium" | "hard";
    const subjectLower = subject.toLowerCase();

    if (subjectLower === "biology") {
      const { getGrade10BiologyQuestions } = await import("@/data/grade10BiologyQuestions");
      return getGrade10BiologyQuestions(chapter, difficultyLevel, count).map((question) =>
        normalizeQuestion(question, question.id),
      );
    }

    const grade10Loaders: Record<string, () => Promise<Record<string, any[]>>> = {
      mathematics: async () => (await import("@/data/grade10MathematicsQuestions")).grade10MathematicsQuestions,
      physics: async () => (await import("@/data/grade10PhysicsQuestions")).grade10PhysicsQuestions,
      chemistry: async () => (await import("@/data/grade10ChemistryQuestions")).grade10ChemistryQuestions,
      english: async () => (await import("@/data/grade10EnglishQuestions")).grade10EnglishQuestions,
      "civic education": async () => (await import("@/data/grade10CivicsQuestions")).grade10CivicsQuestions,
      civics: async () => (await import("@/data/grade10CivicsQuestions")).grade10CivicsQuestions,
      geography: async () => (await import("@/data/grade10GeographyQuestions")).grade10GeographyQuestions,
      economics: async () => (await import("@/data/grade10EconomicsQuestions")).grade10EconomicsQuestions,
      history: async () => (await import("@/data/grade10HistoryQuestions")).grade10HistoryQuestions,
      amharic: async () => (await import("@/data/grade10AmharicQuestions")).grade10AmharicQuestions,
    };

    const subjectQuestions = await grade10Loaders[subjectLower]?.();
    const chapterData = subjectQuestions?.[chapter];
    if (!Array.isArray(chapterData)) {
      return [];
    }

    return sliceQuestions(
      filterValidQuestions(
        filterByDifficulty(chapterData, difficultyLevel).map((question, index) =>
          normalizeQuestion(question, `g10-${subjectLower}-${index}`),
        ),
      ),
      count,
    );
  }

  if (grade === "11") {
    const difficultyLevel = difficulty.toLowerCase() as "easy" | "medium" | "hard";

    switch (subject) {
      case "Biology": {
        const { getGrade11BiologyQuestions } = await import("@/data/grade11Biology");
        return getGrade11BiologyQuestions(chapter, difficultyLevel, count).map((question) =>
          normalizeQuestion(question, question.id),
        );
      }
      case "Physics": {
        const { getGrade11PhysicsQuestions } = await import("@/data/grade11Physics");
        return getGrade11PhysicsQuestions(chapter, difficultyLevel, count).map((question) =>
          normalizeQuestion(question, question.id),
        );
      }
      case "Chemistry": {
        const { getGrade11ChemistryQuestions } = await import("@/data/grade11Chemistry");
        return getGrade11ChemistryQuestions(chapter, difficultyLevel, count).map((question) =>
          normalizeQuestion(question, question.id),
        );
      }
      case "Agriculture": {
        const { getGrade11AgricultureQuestions } = await import("@/data/grade11AgricultureQuestions");
        return getGrade11AgricultureQuestions(chapter, difficultyLevel, count).map((question) =>
          normalizeQuestion(question, question.id),
        );
      }
      case "Mathematics": {
        const { getGrade11MathematicsQuestions } = await import("@/data/grade11MathematicsQuestions");
        return sliceQuestions(
          filterValidQuestions(
            getGrade11MathematicsQuestions(chapter)
              .filter((question) => question.difficulty.toLowerCase() === difficultyLevel)
              .map((question) => normalizeQuestion(question, question.id)),
          ),
          count,
        );
      }
      case "Civics":
      case "Civic Education": {
        const { grade11CivicsQuestions } = await import("@/data/grade11CivicsQuestions");
        return sliceQuestions(
          filterValidQuestions(
            filterByDifficulty(grade11CivicsQuestions[chapter] ?? [], difficultyLevel).map(
              (question, index) => normalizeQuestion(question, `g11-civics-${index}`),
            ),
          ),
          count,
        );
      }
      case "Economics": {
        const { grade11EconomicsQuestions } = await import("@/data/grade11EconomicsQuestions");
        return sliceQuestions(
          filterValidQuestions(
            filterByDifficulty(grade11EconomicsQuestions[chapter] ?? [], difficultyLevel).map(
              (question, index) => normalizeQuestion(question, `g11-economics-${index}`),
            ),
          ),
          count,
        );
      }
      case "English": {
        const { grade11EnglishQuestions } = await import("@/data/grade11EnglishQuestions");
        return sliceQuestions(
          filterValidQuestions(
            filterByDifficulty(grade11EnglishQuestions[chapter] ?? [], difficultyLevel).map(
              (question, index) => normalizeQuestion(question, `g11-english-${index}`),
            ),
          ),
          count,
        );
      }
      case "History": {
        const { grade11HistoryQuestions } = await import("@/data/grade11HistoryQuestions");
        return sliceQuestions(
          filterValidQuestions(
            filterByDifficulty(grade11HistoryQuestions[chapter] ?? [], difficultyLevel).map(
              (question, index) => normalizeQuestion(question, `g11-history-${index}`),
            ),
          ),
          count,
        );
      }
      case "Geography": {
        const { grade11GeographyQuestions } = await import("@/data/grade11GeographyQuestions");
        return sliceQuestions(
          filterValidQuestions(
            filterByDifficulty(grade11GeographyQuestions[chapter] ?? [], difficultyLevel).map(
              (question, index) => normalizeQuestion(question, `g11-geography-${index}`),
            ),
          ),
          count,
        );
      }
      case "Amharic": {
        const { grade11AmharicQuestions } = await import("@/data/grade11AmharicQuestions");
        return sliceQuestions(
          filterValidQuestions(
            filterByDifficulty(grade11AmharicQuestions[chapter] ?? [], difficultyLevel).map(
              (question, index) => normalizeQuestion(question, `g11-amharic-${index}`),
            ),
          ),
          count,
        );
      }
      default:
        return [];
    }
  }

  switch (subject) {
    case "Mathematics": {
      const { grade12Mathematics } = await import("@/data/grade12Mathematics");
      return sliceQuestions(
        filterValidQuestions(
          filterByDifficulty(grade12Mathematics[chapter] ?? [], difficulty).map((question, index) =>
            normalizeQuestion(question, `g12-math-${index}`),
          ),
        ),
        count,
      );
    }
    case "Physics": {
      const { grade12PhysicsQuestions } = await import("@/data/grade12PhysicsQuestions");
      return sliceQuestions(
        filterValidQuestions(
          filterByDifficulty(grade12PhysicsQuestions[chapter] ?? [], difficulty).map((question, index) =>
            normalizeQuestion(question, `g12-physics-${index}`),
          ),
        ),
        count,
      );
    }
    case "Biology": {
      const { grade12BiologyQuestions } = await import("@/data/grade12BiologyQuestions");
      return sliceQuestions(
        filterValidQuestions(
          filterByDifficulty(grade12BiologyQuestions[chapter] ?? [], difficulty).map((question, index) =>
            normalizeQuestion(question, `g12-biology-${index}`),
          ),
        ),
        count,
      );
    }
    case "English": {
      const { grade12EnglishQuestions } = await import("@/data/grade12EnglishQuestions");
      return sliceQuestions(
        filterValidQuestions(
          filterByDifficulty(grade12EnglishQuestions[chapter] ?? [], difficulty).map((question, index) =>
            normalizeQuestion(question, `g12-english-${index}`),
          ),
        ),
        count,
      );
    }
    case "Agriculture": {
      const { grade12AgricultureQuestions } = await import("@/data/grade12AgricultureQuestions");
      return sliceQuestions(
        filterValidQuestions(
          filterByDifficulty(grade12AgricultureQuestions[chapter] ?? [], difficulty).map((question, index) =>
            normalizeQuestion(question, `g12-agriculture-${index}`),
          ),
        ),
        count,
      );
    }
    case "Economics": {
      const { grade12EconomicsQuestions } = await import("@/data/grade12EconomicsQuestions");
      return sliceQuestions(
        filterValidQuestions(
          filterByDifficulty(grade12EconomicsQuestions[chapter] ?? [], difficulty).map((question, index) =>
            normalizeQuestion(question, `g12-economics-${index}`),
          ),
        ),
        count,
      );
    }
    case "Amharic": {
      const { grade12AmharicQuestions } = await import("@/data/grade12AmharicQuestions");
      return sliceQuestions(
        filterValidQuestions(
          filterByDifficulty(grade12AmharicQuestions[chapter] ?? [], difficulty).map((question, index) =>
            normalizeQuestion(question, `g12-amharic-${index}`),
          ),
        ),
        count,
      );
    }
    case "Civics":
    case "Civic Education": {
      const { grade12CivicsQuestions } = await import("@/data/grade12CivicsQuestions");
      return sliceQuestions(
        filterValidQuestions(
          filterByDifficulty(grade12CivicsQuestions[chapter] ?? [], difficulty).map((question, index) =>
            normalizeQuestion(question, `g12-civics-${index}`),
          ),
        ),
        count,
      );
    }
    case "History": {
      const { grade12HistoryQuestions } = await import("@/data/grade12HistoryQuestions");
      return sliceQuestions(
        filterValidQuestions(
          filterByDifficulty(grade12HistoryQuestions[chapter] ?? [], difficulty).map((question, index) =>
            normalizeQuestion(question, `g12-history-${index}`),
          ),
        ),
        count,
      );
    }
    case "IT":
    case "Information Technology": {
      const { grade12ITQuestions } = await import("@/data/grade12ITQuestions");
      return sliceQuestions(
        filterValidQuestions(
          filterByDifficulty(grade12ITQuestions[chapter] ?? [], difficulty).map((question, index) =>
            normalizeQuestion(question, `g12-it-${index}`),
          ),
        ),
        count,
      );
    }
    case "Geography": {
      const {
        getGrade12GeographyQuestions,
        normalizeGrade12GeographyUnit,
      } = await import("@/data/grade12GeographyQuestions");
      return getGrade12GeographyQuestions(
        normalizeGrade12GeographyUnit(chapter),
        difficulty.toLowerCase() as "easy" | "medium" | "hard",
        count,
      ).map((question: Grade12Question, index: number) =>
        normalizeQuestion(question, `g12-geography-${index}`),
      );
    }
    case "Chemistry": {
      const { grade12ChemistryQuestions } = await import("@/data/grade12ChemistryQuestions");
      const chapterData = grade12ChemistryQuestions[chapter];
      if (!chapterData) {
        return [];
      }

      const levelQuestions = chapterData[difficulty.toLowerCase() as keyof typeof chapterData] ?? [];
      return sliceQuestions(
        filterValidQuestions(
          levelQuestions.map((question, index) => normalizeQuestion(question, `g12-chemistry-${index}`)),
        ),
        count,
      );
    }
    default:
      return [];
  }
};
