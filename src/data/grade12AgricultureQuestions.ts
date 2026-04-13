import {
  buildGrade12QuestionBank,
  type GeneratedGrade12Question,
  type Grade12ChapterBlueprint,
} from './grade12QuestionFactory';

const grade12AgricultureBlueprints: Grade12ChapterBlueprint[] = [
  {
    chapter: 'Unit 1: Vegetable Crops Production and Management',
    primary: 'vegetable crop husbandry',
    secondary: 'nursery and field management',
    application: 'improving vegetable yield and quality',
    mastery: 'The chapter focuses on planning, managing, and protecting vegetable crops from nursery stage to harvest.',
  },
  {
    chapter: 'Unit 2: Fruit Crops Production and Management',
    primary: 'fruit crop production systems',
    secondary: 'orchard establishment and care',
    application: 'managing fruit quality and productivity',
    mastery: 'The chapter connects orchard practices, management decisions, and post-harvest thinking in fruit production.',
  },
  {
    chapter: 'Unit 3: Root and Tuber Crops Production and Management',
    primary: 'root and tuber agronomy',
    secondary: 'propagation and field care',
    application: 'supporting food security with root crops',
    mastery: 'The chapter shows how root and tuber crops are propagated, managed, and used to strengthen resilient food systems.',
  },
  {
    chapter: 'Unit 4: Coffee, Tea and Spices Production and Management',
    primary: 'high-value perennial crop management',
    secondary: 'quality-oriented cultivation practices',
    application: 'linking specialty crops to market readiness',
    mastery: 'The chapter emphasizes management practices that influence both field performance and market value in plantation crops.',
  },
  {
    chapter: 'Unit 5: Introduction to Plant Biotechnology',
    primary: 'plant biotechnology concepts',
    secondary: 'improved propagation and crop improvement',
    application: 'using biotechnology in modern agriculture',
    mastery: 'The chapter introduces biotechnology as a tool for crop improvement, propagation, and agricultural innovation.',
  },
  {
    chapter: 'Unit 6: Beef Cattle Production and Management',
    primary: 'beef production systems',
    secondary: 'feeding and health management',
    application: 'raising animals for productive meat output',
    mastery: 'The chapter links breed choice, feeding, housing, and herd health to efficient beef production.',
  },
  {
    chapter: 'Unit 7: Camel Production and Management',
    primary: 'camel production practices',
    secondary: 'adaptation to dryland environments',
    application: 'managing livestock in arid and semi-arid areas',
    mastery: 'The chapter highlights camel management as a strategic response to dryland livelihoods and pastoral production.',
  },
  {
    chapter: 'Unit 8: Poultry Production and Management',
    primary: 'poultry production systems',
    secondary: 'brooding, feeding, and disease prevention',
    application: 'improving egg and meat productivity',
    mastery: 'The chapter builds practical understanding of poultry care, housing, health, and enterprise management.',
  },
  {
    chapter: 'Unit 9: Fishery Production and Management',
    primary: 'aquaculture and fishery basics',
    secondary: 'water-based production management',
    application: 'using fisheries for food and income',
    mastery: 'The chapter links fish production methods with nutrition, enterprise planning, and aquatic resource use.',
  },
  {
    chapter: 'Unit 10: Beekeeping',
    primary: 'apiculture fundamentals',
    secondary: 'hive management and colony care',
    application: 'producing honey and related products',
    mastery: 'The chapter shows how sound hive management supports pollination services and beekeeping income.',
  },
  {
    chapter: 'Unit 11: Nursery and Plantation Technology',
    primary: 'seedling production systems',
    secondary: 'plantation establishment techniques',
    application: 'raising healthy planting materials',
    mastery: 'The chapter focuses on nursery quality, planting material preparation, and plantation establishment decisions.',
  },
  {
    chapter: 'Unit 12: Basics of Agro-Forestry Systems and Practices',
    primary: 'agroforestry systems',
    secondary: 'tree-crop-livestock integration',
    application: 'combining production with conservation',
    mastery: 'The chapter demonstrates how agroforestry links farm productivity with environmental stability and diversified livelihoods.',
  },
  {
    chapter: 'Unit 13: Soil and Water Conservation',
    primary: 'soil conservation measures',
    secondary: 'water management practices',
    application: 'protecting productive land resources',
    mastery: 'The chapter emphasizes long-term land productivity through erosion control, moisture retention, and watershed thinking.',
  },
  {
    chapter: 'Unit 14: Gender and Human Nutrition',
    primary: 'gender roles in agriculture',
    secondary: 'nutrition-sensitive production',
    application: 'improving household well-being through farming',
    mastery: 'The chapter connects agricultural work, equitable participation, and nutrition outcomes at household and community level.',
  },
  {
    chapter: 'Unit 15: Safe Food Production and Postharvest Handling',
    primary: 'food safety principles',
    secondary: 'postharvest handling systems',
    application: 'reducing losses and protecting quality',
    mastery: 'The chapter connects safe production, storage, transport, and handling to better food quality and reduced loss.',
  },
  {
    chapter: 'Unit 16: Application of Information and Communication Technologies (ICT) in Agriculture',
    primary: 'digital agriculture tools',
    secondary: 'information use in farm decisions',
    application: 'using ICT for smarter agricultural management',
    mastery: 'The chapter explores how communication and digital tools improve planning, extension, markets, and farm management.',
  },
];

export const grade12AgricultureQuestions: Record<string, GeneratedGrade12Question[]> =
  buildGrade12QuestionBank('Agriculture', 'g12agr', grade12AgricultureBlueprints);

export const getGrade12AgricultureQuestions = (
  chapter: string,
  difficulty?: string,
  count?: number,
) => {
  const chapterQuestions = grade12AgricultureQuestions[chapter] || [];
  const filtered = difficulty
    ? chapterQuestions.filter((question) => question.difficulty === difficulty)
    : chapterQuestions;

  return typeof count === 'number' ? filtered.slice(0, count) : filtered;
};
