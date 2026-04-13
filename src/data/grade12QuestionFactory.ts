export interface GeneratedGrade12Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
  subject: string;
}

export interface Grade12ChapterBlueprint {
  chapter: string;
  primary: string;
  secondary: string;
  application: string;
  mastery: string;
}

const fallbackDistractors = [
  'isolated memorization without context',
  'content from a different chapter',
  'an idea unrelated to the unit focus',
  'a topic outside the Grade 12 syllabus',
];

const unique = (values: string[]) => Array.from(new Set(values));

const buildDistractors = (correct: string, pool: string[]) => {
  const candidates = pool.filter((item) => item !== correct);
  const picked = candidates.slice(0, 3);
  const filler = fallbackDistractors.filter((item) => item !== correct);
  return [...picked, ...filler].slice(0, 3);
};

const createQuestion = (
  id: string,
  subject: string,
  chapter: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  question: string,
  correct: string,
  distractorPool: string[],
  explanation: string,
): GeneratedGrade12Question => ({
  id,
  subject,
  chapter,
  difficulty,
  question,
  options: [correct, ...buildDistractors(correct, distractorPool)],
  correct,
  explanation,
});

const easyPromptBuilders = [
  (chapter: string) => `Which core idea is most central to ${chapter}?`,
  (chapter: string) => `A key supporting focus in ${chapter} is:`,
  (chapter: string) => `Which practical emphasis best matches ${chapter}?`,
  (chapter: string) => `Which topic is most directly studied in ${chapter}?`,
  (chapter: string) => `${chapter} first builds understanding of:`,
  (chapter: string) => `Which skill is clearly emphasized in ${chapter}?`,
  (chapter: string) => `Which classroom example best fits ${chapter}?`,
  (chapter: string) => `Which vocabulary cluster belongs most naturally to ${chapter}?`,
  (chapter: string) => `${chapter} mainly helps learners understand:`,
  (chapter: string) => `A good first revision note for ${chapter} would start with:`,
];

const mediumPromptBuilders = [
  (chapter: string) => `Which pairing shows the strongest Grade 12 study focus for ${chapter}?`,
  (chapter: string) => `Which classroom task best fits the intended application of ${chapter}?`,
  (chapter: string) => `Why is ${chapter} important in Grade 12 study?`,
  (chapter: string) => `Which summary best explains the relationship between the main ideas in ${chapter}?`,
  (chapter: string) => `If a teacher wants applied understanding from ${chapter}, which task fits best?`,
  (chapter: string) => `${chapter} goes beyond memorization because it asks learners to:`,
  (chapter: string) => `Which study plan is strongest for ${chapter}?`,
  (chapter: string) => `Which analytical lens is most appropriate for ${chapter}?`,
  (chapter: string) => `Which choice best connects theory and practice in ${chapter}?`,
  (chapter: string) => `A strong exam response from ${chapter} should connect:`,
];

const hardPromptBuilders = [
  (chapter: string) => `Which outcome best demonstrates strong mastery of ${chapter}?`,
  (chapter: string) => `Which revision strategy is most appropriate for high-level performance in ${chapter}?`,
  (chapter: string) => `Which statement most accurately captures the full intent of ${chapter}?`,
  (chapter: string) => `Which analytical question best matches the depth expected in ${chapter}?`,
  (chapter: string) => `Which answer shows the strongest synthesis for ${chapter}?`,
  (chapter: string) => `Which evaluative response would be strongest for ${chapter}?`,
  (chapter: string) => `Which option best shows transfer of learning from ${chapter}?`,
  (chapter: string) => `An advanced student in ${chapter} should be able to:`,
  (chapter: string) => `Which cross-topic argument fits ${chapter} best?`,
  (chapter: string) => `Which capstone outcome most fully represents success in ${chapter}?`,
];

const buildChapterQuestions = (
  subject: string,
  prefix: string,
  blueprint: Grade12ChapterBlueprint,
  conceptPool: string[],
  chapterIndex: number,
): GeneratedGrade12Question[] => {
  const { chapter, primary, secondary, application, mastery } = blueprint;
  const combinedFocus = `${primary} with ${secondary}`;
  const projectFocus = `${application} using ${primary}`;
  const outcomeFocus = `${primary}, ${secondary}, and ${application}`;

  const easyAnswers = [
    primary,
    secondary,
    application,
    primary,
    primary,
    secondary,
    application,
    combinedFocus,
    outcomeFocus,
    primary,
  ];

  const easyExplanations = [
    `${chapter} begins by grounding learners in ${primary.toLowerCase()} before moving into deeper applications.`,
    `${chapter} expects students to connect the main idea with ${secondary.toLowerCase()}.`,
    `The chapter is not only theoretical; it also emphasizes ${application.toLowerCase()}.`,
    `${chapter} treats ${primary.toLowerCase()} as a direct chapter focus.`,
    `A first-pass reading of ${chapter} should secure ${primary.toLowerCase()} clearly.`,
    `${chapter} strengthens ${secondary.toLowerCase()} as an essential supporting skill.`,
    `A fitting classroom example would revolve around ${application.toLowerCase()}.`,
    `${chapter} ties together ${combinedFocus.toLowerCase()} for understanding.`,
    `Learners use ${chapter} to connect ${outcomeFocus.toLowerCase()}.`,
    `A strong revision note starts from the chapter's anchor idea: ${primary.toLowerCase()}.`,
  ];

  const mediumAnswers = [
    combinedFocus,
    projectFocus,
    mastery,
    `${primary} is strengthened by ${secondary.toLowerCase()}`,
    `Apply ${application.toLowerCase()} to a chapter-based case`,
    `connect concepts to chapter-based examples and decisions`,
    `revise ${primary.toLowerCase()}, ${secondary.toLowerCase()}, and ${application.toLowerCase()} together`,
    `use ${primary.toLowerCase()} as the main lens, then test it through ${application.toLowerCase()}`,
    `${combinedFocus} for realistic decision making`,
    `${primary}, ${secondary}, and ${application}`,
  ];

  const mediumExplanations = [
    `A strong study plan for ${chapter} links ${primary.toLowerCase()} with ${secondary.toLowerCase()}.`,
    `A solid chapter task applies ${primary.toLowerCase()} to ${application.toLowerCase()}.`,
    mastery,
    `${chapter} is stronger when learners see how ${primary.toLowerCase()} and ${secondary.toLowerCase()} work together.`,
    `Applied understanding in ${chapter} means using ${application.toLowerCase()} in a realistic case.`,
    `${chapter} expects learners to go beyond recall and connect ideas to examples and choices.`,
    `The best revision pattern for ${chapter} integrates all three strands of the blueprint.`,
    `${chapter} should be read through its core idea first, then extended into application.`,
    `This chapter is strongest when theory and practice are connected, not separated.`,
    `Exam answers improve when they join the main concept, support idea, and application.`,
  ];

  const hardAnswers = [
    outcomeFocus,
    `Explain ${mastery.toLowerCase()} through chapter-based examples`,
    `${chapter} helps learners connect ${outcomeFocus.toLowerCase()}`,
    `How does ${primary.toLowerCase()} shape ${application.toLowerCase()} in authentic cases?`,
    `${outcomeFocus} integrated into one defensible explanation`,
    `Evaluate ${application.toLowerCase()} by using ${primary.toLowerCase()} and ${secondary.toLowerCase()}`,
    `Transfer ${primary.toLowerCase()} to new situations while justifying decisions with ${secondary.toLowerCase()}`,
    `synthesize ${primary.toLowerCase()}, ${secondary.toLowerCase()}, and ${application.toLowerCase()} clearly`,
    `${chapter} should connect its core concepts to broader chapter-based arguments`,
    `${chapter} culminates in using ${outcomeFocus.toLowerCase()} coherently`,
  ];

  const hardExplanations = [
    `High-level mastery of ${chapter} requires students to integrate ${outcomeFocus.toLowerCase()}.`,
    `At advanced level, learners should explain ${mastery.toLowerCase()} through concrete examples and chapter language.`,
    `${chapter} is designed to connect ${outcomeFocus.toLowerCase()} rather than treating them as isolated facts.`,
    `A good analytical question for ${chapter} must test how the main idea drives practical outcomes.`,
    `Synthesis means combining the chapter strands into one reasoned explanation.`,
    `Strong evaluation in ${chapter} uses both conceptual understanding and applied judgment.`,
    `Transfer shows that learning from ${chapter} can be reused in new situations with justification.`,
    `Advanced work in ${chapter} requires coherent synthesis rather than separate fact recall.`,
    `A chapter-wide argument should not isolate ideas that were meant to work together.`,
    `The capstone outcome of ${chapter} is integrated, defensible understanding.`,
  ];

  const easyQuestions = easyPromptBuilders.map((prompt, index) =>
    createQuestion(
      `${prefix}_${chapterIndex + 1}_e${index + 1}`,
      subject,
      chapter,
      'Easy',
      prompt(chapter),
      easyAnswers[index],
      [...conceptPool, combinedFocus, outcomeFocus],
      easyExplanations[index],
    ),
  );

  const mediumQuestions = mediumPromptBuilders.map((prompt, index) =>
    createQuestion(
      `${prefix}_${chapterIndex + 1}_m${index + 1}`,
      subject,
      chapter,
      'Medium',
      prompt(chapter),
      mediumAnswers[index],
      [...conceptPool, combinedFocus, projectFocus, outcomeFocus, ...fallbackDistractors],
      mediumExplanations[index],
    ),
  );

  const hardQuestions = hardPromptBuilders.map((prompt, index) =>
    createQuestion(
      `${prefix}_${chapterIndex + 1}_h${index + 1}`,
      subject,
      chapter,
      'Hard',
      prompt(chapter),
      hardAnswers[index],
      [...conceptPool, combinedFocus, projectFocus, outcomeFocus, ...fallbackDistractors],
      hardExplanations[index],
    ),
  );

  return [...easyQuestions, ...mediumQuestions, ...hardQuestions];
};

export const buildGrade12QuestionBank = (
  subject: string,
  prefix: string,
  blueprints: Grade12ChapterBlueprint[],
): Record<string, GeneratedGrade12Question[]> => {
  const conceptPool = unique(
    blueprints.flatMap((item) => [item.primary, item.secondary, item.application]),
  );

  return Object.fromEntries(
    blueprints.map((blueprint, index) => [
      blueprint.chapter,
      buildChapterQuestions(subject, prefix, blueprint, conceptPool, index),
    ]),
  );
};
