
export interface Grade11Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  chapters: string[];
  category: 'Natural Sciences' | 'Social Sciences' | 'Mathematics' | 'Languages' | 'Other';
}

export const grade11Subjects: Grade11Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: 'Calculator',
    description: 'Advanced mathematical concepts including algebra, geometry, and trigonometry',
    chapters: [
      'Unit 1: Relations and Functions',
      'Unit 2: Rational Expressions and Rational Functions',
      'Unit 3: Matrices',
      'Unit 4: Determinants and their Properties',
      'Unit 5: Vectors',
      'Unit 6: Transformations of the Plane',
      'Unit 7: Statistics',
      'Unit 8: Probability'
    ],
    category: 'Mathematics'
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: 'Atom',
    description: 'Kehulum-aligned Grade 11 Physics based on the Ethiopian new curriculum 7-unit structure',
    chapters: [
      'Unit 1: Physics and Human Society',
      'Unit 2: Vectors',
      'Unit 3: Motion in One and Two Dimensions',
      'Unit 4: Dynamics',
      'Unit 5: Heat Conduction and Calorimetry',
      'Unit 6: Electrostatics and Electric Circuit',
      'Unit 7: Nuclear Physics'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'Flask',
    description: 'Chemical principles, reactions, and laboratory techniques',
    chapters: [
      'Unit 1: Atomic Structure And Periodic Properties Of The Elements',
      'Unit 2: Chemical Bonding',
      'Unit 3: Physical State Of Matter',
      'Unit 4: Chemical Kinetics',
      'Unit 5: Chemical Equilibrium',
      'Unit 6: Some Important Oxygen-containing Organic Compounds'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: 'Leaf',
    description: 'Study of living organisms, cells, genetics, and ecosystems',
    chapters: [
      'Unit 1: Biology and Technology',
      'Unit 2: Characteristics of animals',
      'Unit 3: Enzymes',
      'Unit 4: Genetics',
      'Unit 5: The human body systems',
      'Unit 6: Population and natural resources'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: 'Wheat',
    description: 'Agricultural practices, crop production, and animal husbandry',
    chapters: [
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
    ],
    category: 'Other'
  },
  {
    id: 'civics',
    name: 'Civics',
    icon: 'Scale',
    description: 'Civic and ethical education covering democracy, rights, governance, and ethics',
    chapters: [
      'Unit 1: Building a Democratic System',
      'Unit 2: Democratic Rights of Citizens',
      'Unit 3: Nations, Nationalities and Peoples of Ethiopia',
      'Unit 4: Constitutionalism and the Ethiopian Constitution',
      'Unit 5: Ethics and Ethical Conduct',
      'Unit 6: Patriotism and National Identity',
      'Unit 7: Gender Equality and Development',
      'Unit 8: Conflict Resolution and Peace Building',
      'Unit 9: Good Governance',
      'Unit 10: Economic Rights and Financial Literacy',
      'Unit 11: Environmental Ethics and Sustainable Development'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'economics',
    name: 'Economics',
    icon: 'TrendingUp',
    description: 'Economic theories, market structures, national income, trade, and development',
    chapters: [
      'Unit 1: Theory Of Consumer Behavior And Demand',
      'Unit 2: Market Structure And The Decision Of Firms',
      'Unit 3: National Income Accounting',
      'Unit 4: Consumption, Saving And Investment',
      'Unit 5: Trade And Finance',
      'Unit 6: Economic Development',
      'Unit 7: Main Sectors, Sectorial Policies And Strategies Of Ethiopia'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'amharic',
    name: 'Amharic',
    icon: 'Type',
    description: 'Comprehensive Amharic language, literature, and cultural heritage studies',
    chapters: [
      'ምዕራፍ አንድ: ቋንቋና ህብረተሰብ (Language and Society)',
      'ምዕራፍ ሁለት: ቅርሶቻችን (Our Heritage)',
      'ምዕራፍ ሦስት: ወግ (Traditional Literature)',
      'ምዕራፍ አራት: ልቦለድ (Novel)',
      'ምዕራፍ አምስት: የቋንቋ ስዛ (Linguistic Relevance)',
      'ምዕራፍ ስድስት: ግጥም (Poetry)',
      'ምዕራፍ ሰባት: አርበኝነት (Patriotism)',
      'ምዕራፍ ስምንት: ትውፊት (Tradition and Lifestyle)',
      'ምዕራፍ ዘጠኝ: ስኬት (Success)',
      'ምዕራፍ አስር: ኪነጥበብ (Art)'
    ],
    category: 'Languages'
  },
  {
    id: 'english',
    name: 'English',
    icon: 'BookOpen',
    description: 'English language skills, literature, and communication',
    chapters: [
      'Unit 1: Environmental Hazards',
      'Unit 2: Civilization',
      'Unit 3: Causes of Road Traffic Accidents',
      'Unit 4: People and Natural Resources',
      'Unit 5: Irrigation',
      'Unit 6: Global Warming',
      'Unit 7: Patriotism',
      'Unit 8: Efficiency of Health Services',
      'Unit 9: Indigenous Conflict Resolution',
      'Unit 10: Artificial Intelligence'
    ],
    category: 'Languages'
  },
  {
    id: 'information-technology',
    name: 'Information Technology',
    icon: 'Monitor',
    description: 'Digital literacy, information systems, databases, web development, troubleshooting, and programming',
    chapters: [
      'Unit 1: Information Systems and Its Applications',
      'Unit 2: Emerging Technologies',
      'Unit 3: Database Management',
      'Unit 4: Web Development',
      'Unit 5: Hardware Troubleshooting and Preventive Maintenance',
      'Unit 6: Fundamentals of Programming'
    ],
    category: 'Other'
  },
  {
    id: 'history',
    name: 'History',
    icon: 'Clock',
    description: 'Ethiopian and world history, civilizations, and historical analysis',
    chapters: [
      'Unit 1: History, Historiography, And Human Evolution',
      'Unit 2: Major Spots Of Ancient World Civilizations Up To C.500 A.D',
      'Unit 3: Peoples, States, And Historical Processes In Ethiopia And The Horn To The End Of The 13th Century',
      'Unit 4: The Middle Ages And Early Modern World, C. 500 AD-1789',
      'Unit 5: Peoples And States Of Africa To 1500',
      'Unit 6: Africa And The Outside World: 1500-1880',
      'Unit 7: States, Principalities, Population Movements, And Interactions In Ethiopia',
      'Unit 8: Political, Social, And Economic Processes In Ethiopia, Mid 16th To Mid-19th Century',
      'Unit 9: The Age Of Revolutions, 1789 To 1815'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: 'Globe',
    description: 'Physical and human geography, mapping, and environmental studies',
    chapters: [
      'Chapter 1: Formation of the Continents',
      'Chapter 2: Climate Classification and Climate Regions of Our World',
      'Chapter 3: Natural Resources and Conflicts Over Resources',
      'Chapter 4: Global Population Dynamics and Challenges',
      'Chapter 5: Geography and Economic Development',
      'Chapter 6: Major Global Environmental Changes',
      'Chapter 7: Geographic Issues and Public Concerns',
      'Chapter 8: Geo-spatial Information and Data Processing'
    ],
    category: 'Social Sciences'
  }
];

export const getGrade11SubjectsByCategory = () => {
  const categories = ['Mathematics', 'Natural Sciences', 'Social Sciences', 'Languages', 'Other'];
  
  return categories.map(category => ({
    name: category,
    subjects: grade11Subjects.filter(subject => subject.category === category)
  })).filter(category => category.subjects.length > 0);
};
