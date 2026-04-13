import { grade12BiologyQuestions, getGrade12BiologyQuestions } from './grade12BiologyQuestions';
import { grade12ChemistryQuestions, getGrade12ChemistryQuestions } from './grade12ChemistryQuestions';
import { grade12EnglishQuestions } from './grade12EnglishQuestions';
import { grade12GeographyQuestions, getGrade12GeographyQuestions } from './grade12GeographyQuestions';
import { grade12HistoryQuestions, getGrade12HistoryQuestions } from './grade12HistoryQuestions';
import { grade12CivicsQuestions, getGrade12CivicsQuestions } from './grade12CivicsQuestions';
import { grade12ITQuestions, getGrade12ITQuestions } from './grade12ITQuestions';
import { grade11AgricultureQuestions, getGrade11AgricultureQuestions } from './grade11AgricultureQuestions';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

interface Quiz {
  id: number;
  title: string;
  subject: string;
  difficulty: string;
  duration: number;
  questions: number;
  completed: boolean;
  score: number | null;
}

const biologyQuizzes: Quiz[] = [
  {
    id: 101,
    title: 'Cell Biology Basics',
    subject: 'biology',
    difficulty: 'Easy',
    duration: 20,
    questions: 15,
    completed: true,
    score: 75
  },
  {
    id: 102,
    title: 'Genetics Fundamentals',
    subject: 'biology',
    difficulty: 'Medium',
    duration: 30,
    questions: 20,
    completed: false,
    score: null
  }
];

const physicsQuizzes: Quiz[] = [
  {
    id: 201,
    title: 'Motion and Forces',
    subject: 'physics',
    difficulty: 'Medium',
    duration: 30,
    questions: 20,
    completed: false,
    score: null
  },
  {
    id: 202,
    title: 'Energy and Momentum',
    subject: 'physics',
    difficulty: 'Hard',
    duration: 45,
    questions: 25,
    completed: true,
    score: 88
  }
];

const chemistryQuizzes: Quiz[] = [
  {
    id: 301,
    title: 'Atomic Structure',
    subject: 'chemistry',
    difficulty: 'Easy',
    duration: 25,
    questions: 18,
    completed: false,
    score: null
  },
  {
    id: 302,
    title: 'Chemical Reactions',
    subject: 'chemistry',
    difficulty: 'Medium',
    duration: 35,
    questions: 22,
    completed: true,
    score: 92
  }
];

const technicalDrawingQuizzes: Quiz[] = [
  {
    id: 401,
    title: 'Basic Drawing Principles',
    subject: 'technical drawing',
    difficulty: 'Easy',
    duration: 20,
    questions: 15,
    completed: true,
    score: 80
  },
  {
    id: 402,
    title: 'Advanced Projection Techniques',
    subject: 'technical drawing',
    difficulty: 'Hard',
    duration: 40,
    questions: 25,
    completed: false,
    score: null
  }
];

const grade11BiologyQuestions: { [chapter: string]: Question[] } = {
  'Cell Biology': [
    {
      id: '11bio_cell_e1',
      question: 'What is the basic unit of life?',
      options: ['Cell', 'Tissue', 'Organ', 'System'],
      correct: 'Cell',
      explanation: 'The cell is the basic structural and functional unit of all known living organisms.'
    },
  ],
  'Genetics': [
    {
      id: '11bio_gen_m1',
      question: 'What is a gene?',
      options: ['A unit of heredity', 'A type of protein', 'A cell organelle', 'A type of carbohydrate'],
      correct: 'A unit of heredity',
      explanation: 'A gene is a unit of heredity that is transferred from a parent to offspring and determines some characteristic of the offspring.'
    },
  ],
  'Ecology': [
    {
      id: '11bio_eco_h1',
      question: 'What is an ecosystem?',
      options: ['A community of living organisms and their physical environment', 'A single species in a habitat', 'The Earth', 'A collection of cells'],
      correct: 'A community of living organisms and their physical environment',
      explanation: 'An ecosystem includes all of the living things (plants, animals and organisms) in a given area, interacting with each other, and also with their non-living environments (weather, earth, sun, soil, climate, atmosphere).'
    },
  ],
  'Human Biology': [
    {
      id: '11bio_hum_e1',
      question: 'What is the function of the heart?',
      options: ['To pump blood', 'To digest food', 'To filter air', 'To produce hormones'],
      correct: 'To pump blood',
      explanation: 'The heart is a muscular organ that pumps blood through the blood vessels by repeated, rhythmic contractions.'
    },
  ]
};

const grade11PhysicsQuestions: { [chapter: string]: Question[] } = {
  'Mechanics': [
    {
      id: '11phy_mech_e1',
      question: 'What is the SI unit of force?',
      options: ['Newton', 'Joule', 'Watt', 'Pascal'],
      correct: 'Newton',
      explanation: 'The Newton (N) is the SI unit of force.'
    },
  ],
  'Waves': [
    {
      id: '11phy_wave_m1',
      question: 'What is the relationship between frequency and wavelength?',
      options: ['Inversely proportional', 'Directly proportional', 'No relation', 'Exponentially related'],
      correct: 'Inversely proportional',
      explanation: 'Frequency and wavelength are inversely proportional; as one increases, the other decreases.'
    },
  ],
  'Electricity': [
    {
      id: '11phy_elec_h1',
      question: 'What is Ohm\'s Law?',
      options: ['V = IR', 'E = mc²', 'F = ma', 'PV = nRT'],
      correct: 'V = IR',
      explanation: 'Ohm\'s Law states that the voltage across a conductor is directly proportional to the current flowing through it, where V is voltage, I is current, and R is resistance.'
    },
  ],
  'Optics': [
    {
      id: '11phy_opt_e1',
      question: 'What is refraction?',
      options: ['The bending of light', 'The reflection of light', 'The absorption of light', 'The emission of light'],
      correct: 'The bending of light',
      explanation: 'Refraction is the bending of light as it passes from one medium to another.'
    },
  ]
};

const grade11ChemistryQuestions: { [chapter: string]: Question[] } = {
  'Organic Chemistry': [
    {
      id: '11chem_org_e1',
      question: 'What is the main element in organic compounds?',
      options: ['Carbon', 'Oxygen', 'Hydrogen', 'Nitrogen'],
      correct: 'Carbon',
      explanation: 'Carbon is the main element in organic compounds due to its ability to form stable bonds with itself and other elements.'
    },
  ],
  'Physical Chemistry': [
    {
      id: '11chem_phy_m1',
      question: 'What is the ideal gas law?',
      options: ['PV = nRT', 'E = mc²', 'F = ma', 'V = IR'],
      correct: 'PV = nRT',
      explanation: 'The ideal gas law states the relationship between pressure, volume, number of moles, ideal gas constant, and temperature.'
    },
  ],
  'Chemical Bonding': [
    {
      id: '11chem_bond_h1',
      question: 'What is electronegativity?',
      options: ['The ability of an atom to attract electrons', 'The size of an atom', 'The mass of an atom', 'The charge of an atom'],
      correct: 'The ability of an atom to attract electrons',
      explanation: 'Electronegativity is the measure of the ability of an atom to attract electrons in a chemical bond.'
    },
  ],
  'Reactions': [
    {
      id: '11chem_reac_e1',
      question: 'What is a chemical reaction?',
      options: ['A process that involves rearrangement of atoms', 'A physical change', 'A change in state', 'A nuclear process'],
      correct: 'A process that involves rearrangement of atoms',
      explanation: 'A chemical reaction is a process that involves rearrangement of atoms and molecules to form new substances.'
    },
  ]
};

const grade11TechnicalDrawingQuestions: { [chapter: string]: Question[] } = {
  'Engineering Drawing': [
    {
      id: '11td_eng_e1',
      question: 'What is the purpose of engineering drawing?',
      options: ['To communicate design ideas', 'To create art', 'To decorate buildings', 'To write reports'],
      correct: 'To communicate design ideas',
      explanation: 'Engineering drawing is used to accurately and clearly communicate design ideas and specifications.'
    },
  ],
  '3D Modeling': [
    {
      id: '11td_3d_m1',
      question: 'What is CAD?',
      options: ['Computer-Aided Design', 'Chemical Analysis Device', 'Central Arithmetic Device', 'Creative Art Display'],
      correct: 'Computer-Aided Design',
      explanation: 'CAD stands for Computer-Aided Design, which is the use of computer software to create, modify, analyze, or optimize a design.'
    },
  ],
  'Geometric Construction': [
    {
      id: '11td_geo_h1',
      question: 'What is the purpose of geometric construction?',
      options: ['To create accurate geometric shapes', 'To draw freehand sketches', 'To paint landscapes', 'To write mathematical equations'],
      correct: 'To create accurate geometric shapes',
      explanation: 'Geometric construction is used to create accurate geometric shapes using only a compass and straightedge.'
    },
  ],
  'Technical Skills': [
    {
      id: '11td_tech_e1',
      question: 'What is the importance of accuracy in technical drawing?',
      options: ['Ensures proper fit and function', 'Makes the drawing look nice', 'Saves time', 'Is not important'],
      correct: 'Ensures proper fit and function',
      explanation: 'Accuracy in technical drawing is crucial to ensure that parts fit together correctly and function as intended.'
    },
  ]
};

const grade11AgricultureChapters = [
  'Chapter 1: Introduction to Crop Production',
  'Chapter 2: Field Crops Production and Management', 
  'Chapter 3: Industrial Crops Production and Management',
  'Chapter 4: Introduction to Farm Animals',
  'Chapter 5: Animal Feeds and Feeding Practices',
  'Chapter 6: Animal Genetics and Breeding Practices',
  'Chapter 7: Farm Animals Housing',
  'Chapter 8: Basic Animal Health and Disease Control',
  'Chapter 9: Dairy Cattle Production and Management',
  'Chapter 10: Introduction to Natural Resources',
  'Chapter 11: Management of Natural Resources',
  'Chapter 12: Concepts of Biodiversity',
  'Chapter 13: Climate Change Adaptation and Mitigation',
  'Chapter 14: Mechanized Farming',
  'Chapter 15: Introduction to Human Nutrition',
  'Chapter 16: Diversified Food Production and Consumption'
];

export const getQuestionsForQuiz = (subject: string, chapter: string, difficulty: string, count: number = 15) => {
  console.log('Getting questions for:', { subject, chapter, difficulty, count });
  
  // Handle Grade 11 Agriculture questions
  if (subject.toLowerCase() === 'agriculture' && chapter.includes('Chapter')) {
    console.log('Processing Grade 11 Agriculture for chapter:', chapter);
    
    const difficultyLevel = difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
    const questions = getGrade11AgricultureQuestions(chapter, difficultyLevel, count);
    console.log('Found Grade 11 Agriculture questions:', questions.length);
    
    if (questions.length > 0) {
      // Convert to standard Question format
      const convertedQuestions = questions.map(q => ({
        id: q.id,
        question: q.question,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation
      }));
      
      return convertedQuestions;
    }
    
    // If no specific questions found, return sample questions for all agriculture chapters
    const sampleQuestions: Question[] = grade11AgricultureChapters.map((chapterName, index) => ({
      id: `agr11_${index + 1}`,
      question: `What is the main focus of ${chapterName.replace('Chapter ' + (index + 1) + ': ', '')}?`,
      options: [
        `Understanding ${chapterName.replace('Chapter ' + (index + 1) + ': ', '').toLowerCase()}`,
        'General farming',
        'Animal care only',
        'Soil testing'
      ],
      correct: `Understanding ${chapterName.replace('Chapter ' + (index + 1) + ': ', '').toLowerCase()}`,
      explanation: `This chapter focuses on the principles and practices of ${chapterName.replace('Chapter ' + (index + 1) + ': ', '').toLowerCase()}.`
    }));
    
    return sampleQuestions.slice(0, count);
  }

  // Handle Grade 12 Biology questions
  if (subject.toLowerCase() === 'biology' && chapter.includes('Unit')) {
    console.log('Processing Grade 12 Biology for chapter:', chapter);
    
    const difficultyLevel = difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
    const questions = getGrade12BiologyQuestions(chapter, difficultyLevel, count);
    console.log('Found Grade 12 Biology questions:', questions.length);
    
    if (questions.length > 0) {
      return questions;
    }
    
    // If no questions found, log the available chapters
    console.log('Available Grade 12 Biology chapters:', Object.keys(grade12BiologyQuestions));
    console.log('Requested chapter:', chapter);
    return [];
  }

  // Handle Grade 12 Chemistry questions
  if (subject.toLowerCase() === 'chemistry' && chapter.includes('Unit')) {
    console.log('Processing Grade 12 Chemistry for chapter:', chapter);
    
    const difficultyLevel = difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
    const questions = getGrade12ChemistryQuestions(chapter, difficultyLevel, count);
    console.log('Found Grade 12 Chemistry questions:', questions.length);
    
    if (questions.length > 0) {
      return questions;
    }
    
    // If no questions found, log the available units
    console.log('Available Grade 12 Chemistry units:', Object.keys(grade12ChemistryQuestions));
    console.log('Requested unit:', chapter);
    return [];
  }

  // Handle Grade 12 English questions
  if (subject.toLowerCase() === 'english' && chapter.includes('Unit')) {
    console.log('Processing Grade 12 English for unit:', chapter);
    
    const questions = grade12EnglishQuestions[chapter];
    if (questions) {
      const filteredQuestions = questions.filter(q => 
        q.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
      console.log('Found Grade 12 English questions:', filteredQuestions.length);
      
      // Convert English questions to standard Question format
      const convertedQuestions = filteredQuestions.map(q => ({
        id: q.id,
        question: q.question,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation
      }));
      
      // Shuffle and return the requested count
      const shuffled = convertedQuestions.sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    }
    
    console.log('Available Grade 12 English units:', Object.keys(grade12EnglishQuestions));
    console.log('Requested unit:', chapter);
    return [];
  }

  // Handle Grade 12 Geography questions
  if (subject.toLowerCase() === 'geography' && chapter.includes('Unit')) {
    console.log('Processing Grade 12 Geography for unit:', chapter);
    
    const difficultyLevel = difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
    const questions = getGrade12GeographyQuestions(chapter, difficultyLevel, count);
    console.log('Found Grade 12 Geography questions:', questions.length);
    
    if (questions.length > 0) {
      return questions;
    }
    
    console.log('Available Grade 12 Geography units:', Object.keys(grade12GeographyQuestions));
    console.log('Requested unit:', chapter);
    return [];
  }

  // Handle Grade 12 History questions
  if (subject.toLowerCase() === 'history' && chapter.includes('Unit')) {
    console.log('Processing Grade 12 History for unit:', chapter);
    
    const difficultyLevel = difficulty.toLowerCase() as 'Easy' | 'Medium' | 'Hard';
    const questions = getGrade12HistoryQuestions(chapter, difficultyLevel, count);
    console.log('Found Grade 12 History questions:', questions.length);
    
    if (questions.length > 0) {
      // Convert to standard Question format
      const convertedQuestions = questions.map(q => ({
        id: q.id,
        question: q.question,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation
      }));
      
      return convertedQuestions;
    }
    
    console.log('Available Grade 12 History units:', Object.keys(grade12HistoryQuestions));
    console.log('Requested unit:', chapter);
    return [];
  }

  // Handle Grade 12 Civic Education questions
  if (subject.toLowerCase() === 'civic education' && chapter.includes('Unit')) {
    console.log('Processing Grade 12 Civic Education for unit:', chapter);
    
    const difficultyLevel = difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
    const questions = getGrade12CivicsQuestions(chapter, difficultyLevel, count);
    console.log('Found Grade 12 Civic Education questions:', questions.length);
    
    if (questions.length > 0) {
      return questions;
    }
    
    console.log('Available Grade 12 Civic Education units:', Object.keys(grade12CivicsQuestions));
    console.log('Requested unit:', chapter);
    return [];
  }

  // Handle Grade 12 Information Technology questions
  if (subject.toLowerCase() === 'information technology' && chapter.includes('Unit')) {
    console.log('Processing Grade 12 Information Technology for unit:', chapter);
    
    const difficultyLevel = difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
    const questions = getGrade12ITQuestions(chapter, difficultyLevel, count);
    console.log('Found Grade 12 Information Technology questions:', questions.length);
    
    if (questions.length > 0) {
      // Convert to standard Question format
      const convertedQuestions = questions.map(q => ({
        id: q.id,
        question: q.question,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation
      }));
      
      return convertedQuestions;
    }
    
    console.log('Available Grade 12 Information Technology units:', Object.keys(grade12ITQuestions));
    console.log('Requested unit:', chapter);
    return [];
  }

  let questions: Question[] = [];

  // Handle Grade 11 questions
  if (subject.toLowerCase() === 'biology' && !chapter.includes('Unit')) {
    if (grade11BiologyQuestions[chapter]) {
      questions = grade11BiologyQuestions[chapter];
    }
  } else if (subject.toLowerCase() === 'physics') {
    if (grade11PhysicsQuestions[chapter]) {
      questions = grade11PhysicsQuestions[chapter];
    }
  } else if (subject.toLowerCase() === 'chemistry' && !chapter.includes('Unit')) {
    if (grade11ChemistryQuestions[chapter]) {
      questions = grade11ChemistryQuestions[chapter];
    }
  } else if (subject.toLowerCase() === 'technical drawing') {
    if (grade11TechnicalDrawingQuestions[chapter]) {
      questions = grade11TechnicalDrawingQuestions[chapter];
    }
  }
  
  // Add some fallback questions for testing
  if (subject.toLowerCase() === 'physics') {
    switch (chapter) {
      case 'Chapter 1: Mechanics':
        if (difficulty === 'Easy') {
          questions.push(
            {
              id: 'phy_mech_e1',
              question: 'What is the SI unit of force?',
              options: ['Newton', 'Joule', 'Pascal', 'Watt'],
              correct: 'Newton',
              explanation: 'The Newton (N) is the SI unit of force, defined as kg⋅m/s².'
            },
            {
              id: 'phy_mech_e2',
              question: 'What is acceleration?',
              options: ['Rate of change of velocity', 'Rate of change of position', 'Force per unit mass', 'Both A and C'],
              correct: 'Both A and C',
              explanation: 'Acceleration is both the rate of change of velocity and force per unit mass (from Newton\'s second law).'
            }
          );
        }
        break;
    }
  } else if (subject.toLowerCase() === 'chemistry') {
    switch (chapter) {
      case 'Chapter 1: Atomic Structure and Periodic Properties':
        if (difficulty === 'Easy') {
          questions.push(
            {
              id: 'chem_atom_e1',
              question: 'What is an atom?',
              options: ['Smallest unit of matter', 'A molecule', 'An ion', 'A compound'],
              correct: 'Smallest unit of matter',
              explanation: 'An atom is the smallest unit of matter that retains the properties of an element.'
            }
          );
        }
        break;
    }
  }

  console.log('Final generated questions:', questions.length);
  
  // Shuffle and return the requested count
  const shuffled = questions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
