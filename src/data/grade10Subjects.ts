
export interface Grade10Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  chapters: string[];
  category: 'Natural Sciences' | 'Social Sciences' | 'Mathematics' | 'Languages' | 'Other';
}

export const grade10Subjects: Grade10Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: 'Calculator',
    description: 'Advanced algebra, trigonometry, coordinate geometry, and calculus introduction',
    chapters: [
      'Unit 1: Relations and Functions',
      'Unit 2: Polynomial Functions',
      'Unit 3: Exponential and Logarithmic Functions',
      'Unit 4: Trigonometric Functions',
      'Unit 5: Circles',
      'Unit 6: Solid Figures',
      'Unit 7: Coordinate Geometry'
    ],
    category: 'Mathematics'
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: 'Atom',
    description: 'Motion, forces, electricity, magnetism, and modern physics',
    chapters: [
      'Unit 1: Vector Quantities',
      'Unit 2: Uniformly Accelerated Motion',
      'Unit 3: Elasticity and Static Equilibrium of Rigid Body',
      'Unit 4: Static and Current Electricity',
      'Unit 5: Magnetism',
      'Unit 6: Electromagnetic Waves and Geometrical Optics'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'Flask',
    description: 'Organic chemistry, electrochemistry, and industrial chemistry',
    chapters: [
      'Unit 1: Chemical Reactions And Stoichiometry',
      'Unit 2: Solutions',
      'Unit 3: Important Inorganic Compounds',
      'Unit 4: Energy Changes And Electro-Chemistry',
      'Unit 5: Metals And Non Metals',
      'Unit 6: Hydrocarbons And Their Natural Sources'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: 'Leaf',
    description: 'Genetics, evolution, ecology, and biotechnology',
    chapters: [
      'Unit 1: Sub-fields of Biology',
      'Unit 2: Plants',
      'Unit 3: Biochemical molecules',
      'Unit 4: Cell reproduction',
      'Unit 5: Human Biology',
      'Unit 6: Ecological interaction'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'english',
    name: 'English',
    icon: 'BookOpen',
    description: 'Advanced reading, writing, literature, and communication skills',
    chapters: [
      'Unit 1: Population Growth',
      'Unit 2: Travel Behaviors',
      'Unit 3: Punctuality',
      'Unit 4: Tourist Attractions',
      'Unit 5: Honey Processing',
      'Unit 6: Migration',
      'Unit 7: Branding Ethiopia and National Identity',
      'Unit 8: The Healing Power of Plants',
      'Unit 9: Multilingualism',
      'Unit 10: Digital Vs Satellite Television'
    ],
    category: 'Languages'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: 'Globe',
    description: 'World geography, resources, urbanization, and development',
    chapters: [
      'Unit 1: Land-forms Of Africa',
      'Unit 2: Climate Of Africa',
      'Unit 3: Natural Resource Base Of Africa',
      'Unit 4: Population of Africa',
      'Unit 5: Major Economic and Cultural Activities of Africa',
      'Unit 6: Human - Natural Environment Interactions',
      'Unit 7: Geographic Issues And Public Concerns In Africa',
      'Unit 8: Geospatial Information And Data Processing'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'history',
    name: 'History',
    icon: 'Clock',
    description: 'Modern world history and Ethiopian modernization',
    chapters: [
      'Unit 1: Development of Capitalism and Nationalism 1815-1914',
      'Unit 2: Africa & the Colonial Experience (1880s-1960s)',
      'Unit 3: Social, Economic & Political Developments in Ethiopia mid-19th C. to 1941',
      'Unit 4: Society and Politics in the Age of World Wars 1914-1945',
      'Unit 5: Global and Regional Developments Since 1945',
      'Unit 6: Ethiopia: Internal Developments and External Influences from 1941 to 1991',
      'Unit 7: Africa Since 1960',
      'Unit 8: Post-1991 Developments in Ethiopia',
      'Unit 9: Indigenous Knowledge and Heritages of Ethiopia'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'civics',
    name: 'Civic Education',
    icon: 'Scale',
    description: 'Government systems, constitution, human rights, and global citizenship',
    chapters: [
      'Unit 1: Democracy And Democratization',
      'Unit 2: Citizens In The Digital Technology Age',
      'Unit 3: Understanding Good Governance',
      'Unit 4: Peace And Indigenous Conflict Resolution Mechanisms',
      'Unit 5: Federalism In Ethiopia',
      'Unit 6: Human Rights',
      'Unit 7: Patriotism',
      'Unit 8: Globalization And Global Issues'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'amharic',
    name: 'Amharic',
    icon: 'Type',
    description: 'Advanced Amharic language, literature, and critical analysis',
    chapters: [
      'ምዕራፍ አንድ: ቋንቋና ማህበረሰብ',
      'ምዕራፍ ሁለት: ባህላዊ ጋብቻ',
      'ምዕራፍ ሶስት: ሴቶች እና እድገት',
      'ምዕራፍ አራት: በልዩነት ውስጥ ያለ አንድነት',
      'ምዕራፍ አምስት: የቋንቋ ለዛ',
      'ምዕራፍ ስድስት: የታላላቆች ሚና',
      'ምዕራፍ ሰባት: ረጅም ልቦለድ',
      'ምዕራፍ ስምንት: ማህበራዊ መገናኛ ብዙኀን',
      'ምዕራፍ ዘጠኝ: ሥራ ፈጠራ'
    ],
    category: 'Languages'
  },
  {
    id: 'economics',
    name: 'Economics',
    icon: 'TrendingUp',
    description: 'Introduction to economics, markets, and Ethiopian economy',
    chapters: [
      'Unit 1: Theory of Consumer Behaviour',
      'Unit 2: Theories of Demand and Supply',
      'Unit 3: Theories of Production and Cost',
      'Unit 4: Market Structure',
      'Unit 5: Banking and Finance',
      'Unit 6: Economic Growth',
      'Unit 7: The Ethiopian Economy',
      'Unit 8: Business Startups and Innovation'
    ],
    category: 'Social Sciences'
  }
];
