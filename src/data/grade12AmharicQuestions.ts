import {
  buildGrade12QuestionBank,
  type GeneratedGrade12Question,
  type Grade12ChapterBlueprint,
} from './grade12QuestionFactory';

const grade12AmharicBlueprints: Grade12ChapterBlueprint[] = [
  {
    chapter: 'Chapter 1: Language and Society',
    primary: 'language and community life',
    secondary: 'social meaning in language use',
    application: 'explaining how language shapes identity',
    mastery: 'The chapter develops an Amharic understanding of how language functions inside culture, society, and shared identity.',
  },
  {
    chapter: 'Chapter 2: Origin and Development of Amharic',
    primary: 'historical development of Amharic',
    secondary: 'language change over time',
    application: 'tracing the evolution of the language',
    mastery: 'The chapter asks learners to connect the history of Amharic with change in vocabulary, structure, and usage.',
  },
  {
    chapter: 'Chapter 3: Criticism',
    primary: 'critical reading',
    secondary: 'reasoned evaluation',
    application: 'judging texts with evidence',
    mastery: 'The chapter strengthens the ability to evaluate arguments, style, and meaning using disciplined literary judgment.',
  },
  {
    chapter: 'Chapter 4: Literature',
    primary: 'literary genres',
    secondary: 'interpretation of theme and style',
    application: 'reading Amharic texts closely',
    mastery: 'The chapter deepens literary appreciation by linking genre, theme, and artistic expression in Amharic texts.',
  },
  {
    chapter: 'Chapter 5: Humanity',
    primary: 'human values',
    secondary: 'ethical reflection in language',
    application: 'expressing social responsibility through writing',
    mastery: 'The chapter uses language study to explore empathy, dignity, and moral reflection in personal and social life.',
  },
  {
    chapter: 'Chapter 6: Research Writing',
    primary: 'research structure',
    secondary: 'evidence-based writing',
    application: 'organizing formal academic writing',
    mastery: 'The chapter trains learners to plan, support, and present ideas clearly through structured research writing.',
  },
  {
    chapter: 'Chapter 7: Poetry',
    primary: 'poetic devices',
    secondary: 'imagery and rhythm',
    application: 'interpreting poems in Amharic',
    mastery: 'The chapter develops sensitivity to figurative language, sound, tone, and the layered meaning of poetry.',
  },
  {
    chapter: 'Chapter 8: Reaching a Decision',
    primary: 'deliberation and judgment',
    secondary: 'persuasive communication',
    application: 'using language to justify decisions',
    mastery: 'The chapter focuses on how clear reasoning and effective language help people make and defend sound decisions.',
  },
  {
    chapter: 'Chapter 9: Society and Health',
    primary: 'health communication',
    secondary: 'social awareness',
    application: 'explaining public health issues clearly',
    mastery: 'The chapter combines language skill with civic awareness so learners can discuss health issues responsibly and persuasively.',
  },
];

export const grade12AmharicQuestions: Record<string, GeneratedGrade12Question[]> =
  buildGrade12QuestionBank('Amharic', 'g12amh', grade12AmharicBlueprints);

export const getGrade12AmharicQuestions = (
  chapter: string,
  difficulty?: string,
  count?: number,
) => {
  const chapterQuestions = grade12AmharicQuestions[chapter] || [];
  const filtered = difficulty
    ? chapterQuestions.filter((question) => question.difficulty === difficulty)
    : chapterQuestions;

  return typeof count === 'number' ? filtered.slice(0, count) : filtered;
};
