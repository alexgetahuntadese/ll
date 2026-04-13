import { grade9Subjects } from "@/data/grade9Subjects";
import { grade10Subjects } from "@/data/grade10Subjects";
import { grade11Subjects } from "@/data/grade11Subjects";
import { grade12Mathematics } from "@/data/grade12Mathematics";
import { grade12BiologyQuestions } from "@/data/grade12BiologyQuestions";
import { grade12ChemistryQuestions } from "@/data/grade12ChemistryQuestions";
import { grade12PhysicsQuestions } from "@/data/grade12PhysicsQuestions";
import { grade12EnglishQuestions } from "@/data/grade12EnglishQuestions";
import { grade12HistoryQuestions } from "@/data/grade12HistoryQuestions";
import { grade12ITQuestions } from "@/data/grade12ITQuestions";

export interface NotesSubject {
  name: string;
  description: string;
  chapters: string[];
}

export interface NotesGrade {
  grade: number;
  accent: string;
  description: string;
  subjects: NotesSubject[];
}

const grade12GeographyChapters = [
  "Unit 1: Major Geological Processes Associated with Plate Tectonics",
  "Unit 2: Climate Change",
  "Unit 3: Management of Conflict Over Resources",
  "Unit 4: Population Policies, Programs and the Environment",
  "Unit 5: Challenges of Economic Development",
  "Unit 6: Solutions to Environmental and Sustainability Problems",
  "Unit 7: Contemporary Global Geographic Issues and Public Concerns",
  "Unit 8: Geographical Enquiry and Map Making",
];

const grade12AgricultureChapters = [
  "Unit 1: Vegetable Crops Production and Management",
  "Unit 2: Fruit Crops Production and Management",
  "Unit 3: Root and Tuber Crops Production and Management",
  "Unit 4: Coffee, Tea and Spices Production and Management",
  "Unit 5: Introduction to Plant Biotechnology",
  "Unit 6: Beef Cattle Production and Management",
  "Unit 7: Camel Production and Management",
  "Unit 8: Poultry Production and Management",
  "Unit 9: Fishery Production and Management",
  "Unit 10: Beekeeping",
  "Unit 11: Nursery and Plantation Technology",
  "Unit 12: Basics of Agro-Forestry Systems and Practices",
  "Unit 13: Soil and Water Conservation",
  "Unit 14: Gender and Human Nutrition",
  "Unit 15: Safe Food Production and Postharvest Handling",
  "Unit 16: Application of Information and Communication Technologies (ICT) in Agriculture",
];

const grade12EconomicsChapters = [
  "Unit 1: The Fundamental Concepts Of Macroeconomics",
  "Unit 2: Aggregate Demand And Aggregate Supply Analysis",
  "Unit 3: Market Failure And Consumer Protection",
  "Unit 4: Macroeconomic Policy Instruments",
  "Unit 5: Tax Theory And Practice",
  "Unit 6: Poverty And Inequality",
  "Unit 7: Macroeconomic Reforms In Ethiopia",
  "Unit 8: Economy, Environment And Climate Change",
];

const grade12AmharicChapters = [
  "Chapter 1: Language and Society (ቋንቋና ሕብረተሰብ)",
  "Chapter 2: Origin and Development of Amharic (የአማርኛ ቋንቋ አጀማመርና ዕድገት)",
  "Chapter 3: Criticism (ግምገማ)",
  "Chapter 4: Literature (ሥነጽሑፍ)",
  "Chapter 5: Humanity (ሰብዓዊነት)",
  "Chapter 6: Research Writing (ጥናታዊ ጽሑፍ)",
  "Chapter 7: Poetry (ሥነግጥም)",
  "Chapter 8: Reaching a Decision (ውሳኔ ላይ መድረስ)",
  "Chapter 9: Society and Health (ህብረተሰብና ጤና)",
];

const grade12AmharicChaptersClean = [
  "Chapter 1: Language and Society",
  "Chapter 2: Origin and Development of Amharic",
  "Chapter 3: Criticism",
  "Chapter 4: Literature",
  "Chapter 5: Humanity",
  "Chapter 6: Research Writing",
  "Chapter 7: Poetry",
  "Chapter 8: Reaching a Decision",
  "Chapter 9: Society and Health",
];

export const notesByGrade: NotesGrade[] = [
  {
    grade: 9,
    accent: "from-emerald-500 to-teal-500",
    description: "Build strong foundations with concise notes for every subject.",
    subjects: grade9Subjects.map((subject) => ({
      name: subject.name,
      description: subject.description,
      chapters: subject.chapters,
    })),
  },
  {
    grade: 10,
    accent: "from-sky-500 to-cyan-500",
    description: "Strengthen core concepts with chapter-by-chapter revision notes.",
    subjects: grade10Subjects.map((subject) => ({
      name: subject.name,
      description: subject.description,
      chapters: subject.chapters,
    })),
  },
  {
    grade: 11,
    accent: "from-violet-500 to-fuchsia-500",
    description: "Prepare for upper-secondary work with focused chapter guidance.",
    subjects: grade11Subjects
      .filter((subject) => subject.name !== "Amharic")
      .map((subject) => ({
        name: subject.name === "Civics" ? "Civic Education" : subject.name,
        description: subject.description,
        chapters: subject.chapters,
      })),
  },
  {
    grade: 12,
    accent: "from-amber-400 to-orange-500",
    description: "Review exam-facing topics with compact notes across all major subjects.",
    subjects: [
      {
        name: "Mathematics",
        description: "Advanced mathematics including sequences, calculus, vectors, and probability.",
        chapters: Object.keys(grade12Mathematics),
      },
      {
        name: "Biology",
        description: "Biology applications, biotechnology, genetics, evolution, and ecology.",
        chapters: Object.keys(grade12BiologyQuestions),
      },
      {
        name: "Chemistry",
        description: "Acid-base equilibrium, electrochemistry, polymers, and industrial chemistry.",
        chapters: Object.keys(grade12ChemistryQuestions),
      },
      {
        name: "Physics",
        description: "Motion, fluids, electromagnetism, electronics, and modern applications.",
        chapters: Object.keys(grade12PhysicsQuestions),
      },
      {
        name: "English",
        description: "Reading, writing, communication, and thematic language units.",
        chapters: Object.keys(grade12EnglishQuestions),
      },
      {
        name: "Agriculture",
        description: "Kehulum-aligned Grade 12 agriculture units from the new teacher-guide structure.",
        chapters: grade12AgricultureChapters,
      },
      {
        name: "Geography",
        description: "Kehulum-aligned geography units covering plate tectonics, development, sustainability, and GIS.",
        chapters: grade12GeographyChapters,
      },
      {
        name: "History",
        description: "Capitalism, colonial history, world wars, Ethiopia, and Africa since independence.",
        chapters: Object.keys(grade12HistoryQuestions),
      },
      {
        name: "Economics",
        description: "Macroeconomics, policy, tax, poverty, reform, and climate-economy linkages.",
        chapters: grade12EconomicsChapters,
      },
      {
        name: "Information Technology",
        description: "Information systems, databases, programming, web authoring, and emerging technologies.",
        chapters: Object.keys(grade12ITQuestions),
      },
    ],
  },
];

export const getNotesGrade = (grade: number) =>
  notesByGrade.find((item) => item.grade === grade);

export const getNotesSubject = (grade: number, subjectName: string) =>
  getNotesGrade(grade)?.subjects.find((subject) => subject.name === subjectName);

const cleanChapterTitle = (chapter: string) =>
  chapter
    .replace(/^Unit\s+\d+:\s*/i, "")
    .replace(/^Chapter\s+\d+:\s*/i, "")
    .trim();

const createDefaultFocusNote = (chapter: string) => {
  const title = cleanChapterTitle(chapter);
  return `Focus on the core ideas, main vocabulary, and real-life applications in ${title.toLowerCase()}.`;
};

export const getFocusNote = (subject: string, chapter: string) => {
  const normalizedSubject = subject.toLowerCase();
  const title = cleanChapterTitle(chapter);
  const normalizedTitle = title.toLowerCase();
  const hasKeyword = (keywords: string[]) =>
    keywords.some((keyword) => normalizedTitle.includes(keyword));

  const sharedRules = [
    { match: ["introduction", "study skills"], note: "Build the foundations first: core concepts, methods, and the basic tools used in this chapter." },
    { match: ["climate"], note: "Track the main causes, patterns, and local examples so you can explain both process and impact clearly." },
    { match: ["population"], note: "Focus on trends, distribution, and how population change affects development, resources, and planning." },
    { match: ["ecology", "environment"], note: "Study the relationships between organisms, resources, and sustainability issues using local examples." },
    { match: ["statistics"], note: "Practice interpreting data, choosing the right method, and explaining what the numbers mean." },
    { match: ["probability"], note: "Focus on event rules, counting logic, and solving problems step by step with clear reasoning." },
    { match: ["technology", "digital"], note: "Understand the key tools, responsible use, and how technology connects to everyday life and learning." },
    { match: ["conflict", "peace"], note: "Pay attention to causes, prevention strategies, and practical ways to build dialogue and cooperation." },
    { match: ["rights", "democracy", "constitution"], note: "Focus on key principles, rights and duties, and how institutions support democratic life." },
  ];

  for (const rule of sharedRules) {
    if (hasKeyword(rule.match)) return rule.note;
  }

  if (normalizedSubject.includes("mathematics")) {
    if (hasKeyword(["set", "number system"])) return "Focus on classification, operations, and the rules that organize number relationships and set notation.";
    if (hasKeyword(["function"])) return "Focus on definitions, graphs, relationships between variables, and how to solve application problems.";
    if (hasKeyword(["equation", "inequalit"])) return "Practice forming expressions, solving accurately, and checking each result against the given condition.";
    if (hasKeyword(["polynomial"])) return "Work on operations, factorization, zeros, and connecting algebraic form to graph behavior.";
    if (hasKeyword(["logarithmic", "exponential"])) return "Master exponent and logarithm rules, graph patterns, and real-life growth or decay questions.";
    if (hasKeyword(["trigon"])) return "Focus on ratios, identities, graphs, and applying trigonometry to measurement problems.";
    if (hasKeyword(["geometry", "circle", "polygon", "solid", "plane", "transform"])) return "Track the main properties, formulas, and diagram reasoning used to solve geometric problems.";
    if (hasKeyword(["vector"])) return "Practice direction, magnitude, and vector operations carefully, especially in diagram-based questions.";
    if (hasKeyword(["matrix", "determinant"])) return "Focus on matrix operations, determinants, and how they are used to solve systems and transformations.";
    if (hasKeyword(["sequence", "series"])) return "Focus on recognizing patterns, deriving nth terms, and using sums in practical contexts.";
    if (hasKeyword(["statistics", "probability"])) return "Practice data handling, event reasoning, and choosing the correct method for each problem type.";
    if (hasKeyword(["calculus"])) return "Study limits, change, and the meaning of derivatives or integrals before moving to heavy computation.";
    if (hasKeyword(["linear programming", "business"])) return "Focus on model building, constraints, and interpreting answers in real decision-making situations.";
  }

  if (normalizedSubject.includes("biology")) {
    if (hasKeyword(["cell", "enzyme", "biochemical"])) return "Focus on structure and function at the cell level, and how biological molecules support life processes.";
    if (hasKeyword(["reproduction", "genetics"])) return "Track key processes, stages, and inheritance ideas, then connect them to health and continuity of life.";
    if (hasKeyword(["health", "disease", "human body", "nutrition"])) return "Study body systems, prevention, and the links between nutrition, health choices, and disease control.";
    if (hasKeyword(["classification", "organisms", "animals", "plants"])) return "Focus on characteristics, grouping rules, and how structure helps organisms survive and reproduce.";
    if (hasKeyword(["biology and technology", "sub-fields", "biotechnology", "application"])) return "Pay attention to how biology is used in agriculture, medicine, and technology, especially through Ethiopian examples.";
    if (hasKeyword(["evolution", "population", "ecology", "ecological"])) return "Focus on change over time, adaptation, and how populations interact with resources and environments.";
  }

  if (normalizedSubject.includes("chemistry")) {
    if (hasKeyword(["importance", "scientific methods", "measurement"])) return "Focus on chemistry in daily life, accurate measurement, and the scientific habits used in investigation.";
    if (hasKeyword(["atomic", "periodic"])) return "Focus on atomic models, particle structure, electron arrangement, and periodic trends.";
    if (hasKeyword(["bond"])) return "Study how and why atoms bond, the types of bonds formed, and how structure affects properties.";
    if (hasKeyword(["state of matter", "solution", "inorganic compound"])) return "Track particle behavior, concentration, and how composition affects chemical and physical properties.";
    if (hasKeyword(["kinetics", "equilibrium"])) return "Focus on reaction rate, reversible change, and the conditions that shift chemical balance.";
    if (hasKeyword(["electro", "energy changes"])) return "Pay attention to energy transfer, electron transfer, cells, and electrolysis in chemical systems.";
    if (hasKeyword(["organic", "hydrocarbon", "polymer", "oxygen-containing"])) return "Study structure, naming patterns, reactions, and everyday uses of carbon compounds.";
    if (hasKeyword(["stoichiometry", "reaction", "metal", "non metal"])) return "Practice balancing, mole relationships, and linking chemical behavior to substance classification.";
  }

  if (normalizedSubject.includes("physics")) {
    if (hasKeyword(["human society", "physical quantities", "vector"])) return "Build the basics first: measurement, vectors, units, and how physics helps explain everyday systems.";
    if (hasKeyword(["motion", "mechanics", "equilibrium", "force", "work", "energy", "power", "machine"])) return "Focus on describing motion, using equations correctly, and linking force ideas to real movement.";
    if (hasKeyword(["wave", "sound", "optics", "electromagnetic waves"])) return "Track wave behavior, key quantities, and how light or sound principles explain everyday phenomena.";
    if (hasKeyword(["heat", "thermo", "temperature", "thermometer"])) return "Focus on energy transfer, temperature, and the laws that explain thermal processes.";
    if (hasKeyword(["electric", "magnet"])) return "Study fields, circuits, and interactions carefully, then practice applying formulas to practical setups.";
    if (hasKeyword(["fluid"])) return "Focus on pressure, buoyancy, flow ideas, and how fluid principles appear in natural and engineered systems.";
    if (hasKeyword(["electronics", "modern"])) return "Pay attention to components, modern applications, and the principles behind newer physical technologies.";
  }

  if (normalizedSubject.includes("english")) {
    if (hasKeyword(["traffic", "road"])) return "Focus on the main message, safety vocabulary, and how to discuss causes, evidence, and solutions clearly.";
    if (hasKeyword(["internet", "digital", "artificial intelligence", "robotics", "telemedicine"])) return "Track the main ideas, key vocabulary, and how technology themes are explained, discussed, and evaluated in writing.";
    if (hasKeyword(["national", "patriotism", "national pride", "identity"])) return "Focus on theme, persuasive language, and how to express values, identity, and supporting reasons clearly.";
    if (hasKeyword(["disease", "health", "health services"])) return "Pay attention to topic vocabulary, cause-and-effect language, and how to summarize health-related information clearly.";
    if (hasKeyword(["conflict", "resolution"])) return "Focus on the message, useful discussion vocabulary, and how to present balanced solutions in speech and writing.";
    return "Focus on the main reading theme, key vocabulary, and how to express ideas clearly in speaking and writing tasks.";
  }

  if (normalizedSubject.includes("amharic")) {
    if (normalizedTitle.includes("(")) return "Focus on the central theme, key vocabulary, and how to explain the text clearly in spoken and written Amharic.";
    return "Practice grammar, comprehension, and written expression while connecting the chapter theme to culture and daily life.";
  }

  if (normalizedSubject.includes("geography")) {
    if (hasKeyword(["geological", "land-forms", "formation of the continents", "topography"])) return "Focus on landform processes, major physical features, and how the Earth’s surface has developed over time.";
    if (hasKeyword(["map", "geo-spatial", "enquiry", "data processing"])) return "Practice map skills, data interpretation, and how to present geographic information accurately.";
    if (hasKeyword(["resource", "development", "economic and cultural activities"])) return "Focus on resource use, economic activity, and the trade-offs between growth and sustainability.";
    if (hasKeyword(["population", "demographic"])) return "Track distribution, movement, and the opportunities and challenges created by population change.";
    if (hasKeyword(["environmental", "natural environment interactions", "public concerns"])) return "Focus on human-environment links, current challenges, and practical responses at local and global scale.";
    return "Track place-based patterns, causes, and impacts, using Ethiopian examples whenever possible.";
  }

  if (normalizedSubject.includes("history")) {
    if (hasKeyword(["human evolution", "historiography", "discipline of history"])) return "Focus on how history is studied, the evidence historians use, and the big stages of early human development.";
    if (hasKeyword(["ancient world civilizations", "middle ages", "early modern", "age of revolutions"])) return "Track major turning points, the forces behind change, and the longer-term impact on societies and states.";
    if (hasKeyword(["ethiopia", "horn", "africa", "colonial", "world wars", "post-1991", "since 1945"])) return "Focus on major events, causes, consequences, and how historical change connects Ethiopia, Africa, and the wider world.";
    if (hasKeyword(["indigenous knowledge", "heritage"])) return "Focus on local knowledge systems, why they matter historically, and how they connect culture to identity.";
    return "Focus on major events, causes, consequences, and how historical change connects Ethiopia, Africa, and the wider world.";
  }

  if (normalizedSubject.includes("civic") || normalizedSubject.includes("citizenship")) {
    if (hasKeyword(["ethical", "ethics", "patriotism", "values"])) return "Focus on values, ethical behavior, and how personal character connects to community responsibility.";
    if (hasKeyword(["digital", "globalization"])) return "Track rights, responsibilities, and how civic choices apply in digital life and global citizenship.";
    if (hasKeyword(["constitution", "constitutionalism", "federalism", "democratic system", "democratization"])) return "Focus on state structure, democratic principles, and how constitutions guide citizenship and government.";
    if (hasKeyword(["human rights", "democratic rights", "economic rights"])) return "Focus on rights, duties, and how legal protection and civic action work together in society.";
    if (hasKeyword(["governance", "foreign relations", "peace", "conflict", "gender equality", "national unity"])) return "Pay attention to participation, fairness, and how civic principles help solve national and community challenges.";
    return "Focus on values, citizenship duties, and applying civic ideas to digital life, community issues, and national development.";
  }

  if (normalizedSubject.includes("economics")) {
    if (hasKeyword(["consumer", "demand", "supply", "market structure"])) return "Track how choice, incentives, and market forces shape prices, production, and competition.";
    if (hasKeyword(["production", "cost", "resource"])) return "Focus on inputs, efficiency, and how producers combine resources to make output decisions.";
    if (hasKeyword(["money", "banking", "finance", "saving", "investment"])) return "Focus on the role of money, financial institutions, and how saving or investment supports growth.";
    if (hasKeyword(["macroeconomics", "national income", "growth", "development"])) return "Track the big-picture indicators of economic performance and what drives development outcomes.";
    if (hasKeyword(["ethiopian economy", "sectorial policies", "trade"])) return "Connect the theory to Ethiopia by focusing on sectors, policy choices, and external trade links.";
    if (hasKeyword(["entrepreneurship", "startup", "innovation"])) return "Focus on enterprise skills, business planning, and how innovation creates economic opportunity.";
    return "Track definitions, market relationships, and how each topic explains decisions, growth, and the Ethiopian economy.";
  }

  if (normalizedSubject.includes("agriculture")) {
    if (hasKeyword(["crop", "field crops", "industrial crops"])) return "Focus on production steps, field management, and the conditions that improve yield and crop quality.";
    if (hasKeyword(["farm animals", "feeds", "breeding", "housing", "health", "dairy"])) return "Track animal care, feeding, breeding, and disease control as practical systems for better productivity.";
    if (hasKeyword(["natural resources", "biodiversity", "climate change"])) return "Focus on conservation, adaptation, and the role of agriculture in protecting natural systems.";
    if (hasKeyword(["mechanized farming"])) return "Focus on farm machinery, efficiency, and how technology improves agricultural work and scale.";
    if (hasKeyword(["nutrition", "food production"])) return "Connect agriculture to diet, food quality, and sustainable consumption at household and community level.";
    return "Focus on practical production methods, resource management, and the science behind sustainable farming decisions.";
  }

  if (normalizedSubject.includes("information technology")) {
    if (hasKeyword(["information systems", "applications"])) return "Focus on how digital systems solve real problems in education, business, government, and daily communication.";
    if (hasKeyword(["emerging technologies"])) return "Track new digital trends, their uses, and the opportunities and risks they create for society.";
    if (hasKeyword(["database"])) return "Focus on organizing data, designing simple structures, and understanding how information is stored and retrieved.";
    if (hasKeyword(["web authoring"])) return "Practice the structure of web pages, design choices, and how content is built for users online.";
    if (hasKeyword(["maintenance", "troubleshooting"])) return "Focus on diagnosis, safe maintenance habits, and step-by-step problem solving for computer systems.";
    if (hasKeyword(["programming"])) return "Track logic, algorithms, and the habit of breaking a problem into small, testable steps.";
    return "Focus on digital tools, system concepts, and hands-on skills that connect classroom knowledge to real computing tasks.";
  }

  return createDefaultFocusNote(chapter);
};

const grade12SpecificChapterNotes: Record<string, Record<string, string>> = {
  Mathematics: {
    "Unit 1: Sequence and Series":
      "Kehulum-aligned focus: build confidence with arithmetic and geometric progressions, nth-term rules, sigma notation, and finite/infinite sums. Practice converting word problems into sequence models, then justify each step with the correct formula. Prioritize mixed exercises that combine term-finding, summation, and proof-style reasoning.",
    "Unit 2: Introduction to Calculus":
      "Kehulum-aligned focus: connect limits, continuity, differentiation, and integration as one flow of ideas. Practice core derivative and integral rules first, then move to applications such as slope, optimization, area, and rate of change. Show clear working and interpretation of final results in context.",
    "Unit 3: Statistics":
      "Kehulum-aligned focus: strengthen data handling from tables and graphs through mean/median/mode, variation, and interpretation. Practice selecting the right statistical measure for each data type and explaining conclusions in full sentences. Emphasize accuracy in calculations plus insight from the data trend.",
    "Unit 4: Introduction to Linear Programming":
      "Kehulum-aligned focus: model real constraints with inequalities, graph feasible regions, and evaluate corner points for optimization. Practice translating daily-life and business scenarios into objective functions and constraints. Always check feasibility and interpret the best solution using the original problem context.",
    "Unit 5: Mathematical Application in Business":
      "Kehulum-aligned focus: apply mathematics to interest, annuities, pricing, break-even, and decision making. Practice building equations from business cases, then compare outcomes under different assumptions. Focus on interpretation skills so numerical answers become practical recommendations.",
  },
  Biology: {
    "Unit 1: Application of Biology":
      "Kehulum-aligned focus: connect biology to health, agriculture, environment, and biotechnology in daily life. Revise how biological knowledge solves practical Ethiopian problems, then support each point with a local example such as crop improvement, disease control, or conservation.",
    "Unit 2: Microorganisms":
      "Kehulum-aligned focus: classify microorganisms clearly and explain both their useful and harmful roles. Prioritize structure, reproduction, food production, disease transmission, and prevention so you can move from definition questions to short applied explanations.",
    "Unit 3: Energy transformation":
      "Kehulum-aligned focus: link photosynthesis, respiration, and fermentation as one energy flow story in living systems. Practice comparing inputs, outputs, locations, and importance of each process, then explain how energy conversion supports growth and survival.",
    "Unit 4: Evolution":
      "Kehulum-aligned focus: revise evidence for evolution, variation, natural selection, and human origins with clear scientific language. Practice comparing major theories and using fossils, adaptation, and Ethiopian discoveries as supporting evidence.",
    "Unit 5: Human Body System":
      "Kehulum-aligned focus: study coordination, control, and homeostasis by connecting organs to the functions they perform together. Focus on nervous and endocrine systems, sense organs, and regulation mechanisms so your answers show process rather than memorized labels only.",
    "Unit 6: Climate Change":
      "Kehulum-aligned focus: explain causes, effects, and responses to climate change through biology, biodiversity, and public health. Use Ethiopian examples such as drought stress, ecosystem disruption, and reforestation efforts to strengthen exam answers.",
  },
  Chemistry: {
    "Unit 1: ACID-BASE EQUILIBRIUM":
      "Kehulum-aligned focus: move from acid-base definitions to equilibrium calculations, buffers, indicators, and titrations. Practice pH reasoning step by step, explain common ion and hydrolysis effects clearly, and connect every calculation to the chemistry behind it.",
    "Unit 2: ELECTROCHEMISTRY":
      "Kehulum-aligned focus: connect oxidation-reduction ideas, electrolysis, galvanic cells, and industrial applications into one unit. Prioritize half-reactions, electron flow, electrode processes, and quantitative electrolysis so you can explain both setup and result.",
    "Unit 3: INDUSTRIAL CHEMISTRY":
      "Kehulum-aligned focus: study how chemical principles are used in large-scale production, resource processing, and Ethiopian industry. Focus on process flow, raw materials, products, environmental impact, and why industrial methods differ from laboratory methods.",
    "Unit 4: POLYMERS":
      "Kehulum-aligned focus: classify polymers, compare addition and condensation polymerization, and explain major uses of natural and synthetic polymers. Practice identifying monomers, linking structure to properties, and discussing waste and recycling issues.",
    "Unit 5: INTRODUCTION TO ENVIRONMENTAL CHEMISTRY":
      "Kehulum-aligned focus: connect pollution, atmospheric change, water and soil chemistry, and green chemistry ideas. Practice explaining causes, chemical effects, and cleaner responses so short essay answers move beyond naming pollutants only.",
  },
  Physics: {
    "Unit 1: Application of physics in other fields":
      "Kehulum-aligned focus: show how physics supports medicine, engineering, agriculture, communication, and other sciences. Build answers around the physics principle first, then explain the real-world tool or system that applies it.",
    "Unit 2: Two-dimensional motion":
      "Kehulum-aligned focus: combine vectors, projectile motion, circular ideas, and gravitational reasoning into one coherent model of motion. Practice separating horizontal and vertical components, drawing diagrams, and interpreting results physically after calculation.",
    "Unit 3: Fluid Mechanics":
      "Kehulum-aligned focus: study pressure, buoyancy, continuity, and fluid flow using both equations and practical examples. Prioritize how fluids behave in pipes, open systems, and engineering applications so you can justify each law you use.",
    "Unit 4: Electromagnetism":
      "Kehulum-aligned focus: link electric and magnetic fields, induction, force, and energy transfer in devices and circuits. Practice field direction, hand rules, and formula selection carefully, then connect the concepts to generators, motors, and transformers.",
    "Unit 5: Basics of electronics":
      "Kehulum-aligned focus: revise semiconductor basics, simple components, and how electronic circuits process signals. Focus on function of each component, reading circuit behavior, and explaining why electronics differs from ordinary conduction.",
  },
  English: {
    "Unit 1: Sustainable Development":
      "Kehulum-aligned focus: strengthen theme reading, sustainability vocabulary, and structured discussion of environment, economy, and society. Practice short summaries, opinion paragraphs, and evidence-based responses using the language of responsibility and long-term planning.",
    "Unit 2: Time Management":
      "Kehulum-aligned focus: build vocabulary and communication skills around planning, priorities, productivity, and self-discipline. Focus on extracting practical advice from passages and turning it into organized speaking and writing responses.",
    "Unit 3: Evidence on Traffic Accident":
      "Kehulum-aligned focus: read for cause, evidence, and prevention strategies related to road traffic accidents. Practice report-style language, data interpretation, and persuasive recommendations that are clear and logically supported.",
    "Unit 4: Natural Resource Management":
      "Kehulum-aligned focus: develop reading and writing around conservation, resource use, and stewardship. Prioritize topic vocabulary, paragraph cohesion, and the ability to explain balanced management choices in complete sentences.",
    "Unit 5: Mechanized Agriculture":
      "Kehulum-aligned focus: connect agriculture vocabulary with explanation, comparison, and discussion of technology in farming. Practice identifying benefits, limits, and local applications while keeping your written arguments concise and organized.",
    "Unit 6: Green Economies":
      "Kehulum-aligned focus: study how language is used to discuss jobs, growth, sustainability, and innovation together. Focus on main idea, supporting details, and persuasive language for explaining why green economic choices matter.",
    "Unit 7: National Pride":
      "Kehulum-aligned focus: build vocabulary and expressive writing around identity, patriotism, service, and civic contribution. Practice paragraph writing that states a clear position and supports it with reasons, examples, and appropriate tone.",
    "Unit 8: Telemedicine":
      "Kehulum-aligned focus: improve comprehension of health technology texts and practice speaking and writing about access, benefit, and challenge. Pay attention to technical vocabulary, cause-effect connectors, and summary skills.",
    "Unit 9: Conflict Management":
      "Kehulum-aligned focus: read and discuss conflict causes, negotiation, mediation, and peaceful solutions using balanced language. Practice giving reasons, comparing options, and presenting a respectful solution-focused argument.",
    "Unit 10: Robotics":
      "Kehulum-aligned focus: strengthen technology-themed vocabulary and analytical reading on robotics, automation, and future work. Practice explaining ideas clearly, distinguishing fact from opinion, and writing short responses with precise terminology.",
  },
  Agriculture: {
    "Unit 1: Vegetable Crops Production and Management":
      "Kehulum-aligned focus: revise site selection, nursery work, transplanting, irrigation, pest control, and harvesting for major vegetables. Organize answers by production stage so recommendations follow the real farming sequence.",
    "Unit 2: Fruit Crops Production and Management":
      "Kehulum-aligned focus: study propagation, orchard establishment, pruning, nutrition, and disease management for fruit crops. Focus on how management choices affect yield, quality, and market value over time.",
    "Unit 3: Root and Tuber Crops Production and Management":
      "Kehulum-aligned focus: connect planting material, field preparation, spacing, storage, and disease control for root and tuber crops. Practice practical recommendations that improve productivity and reduce post-harvest loss.",
    "Unit 4: Coffee, Tea and Spices Production and Management":
      "Kehulum-aligned focus: revise Ethiopia-relevant cash crop management from nursery to harvesting and quality handling. Prioritize ecological requirements, processing, and market importance alongside routine field management.",
    "Unit 5: Introduction to Plant Biotechnology":
      "Kehulum-aligned focus: explain tissue culture, genetic improvement, and the role of biotechnology in crop production. Balance scientific concepts with practical uses, benefits, and concerns in agriculture.",
    "Unit 6: Beef Cattle Production and Management":
      "Kehulum-aligned focus: study breed choice, feeding, housing, health, and marketing as one management system for beef production. Practice giving improvement advice tied to productivity and animal welfare.",
    "Unit 7: Camel Production and Management":
      "Kehulum-aligned focus: revise adaptation, feeding, breeding, health care, and economic importance of camels in dryland systems. Focus on management choices that match arid and semi-arid Ethiopian conditions.",
    "Unit 8: Poultry Production and Management":
      "Kehulum-aligned focus: cover housing, brooding, feeding, disease prevention, and egg or meat production in an organized way. Prioritize management routines and biosecurity measures that improve flock performance.",
    "Unit 9: Fishery Production and Management":
      "Kehulum-aligned focus: connect pond management, feed, breeding, water quality, harvesting, and sustainability in fish production. Practice explaining how environmental conditions affect growth and yield.",
    "Unit 10: Beekeeping":
      "Kehulum-aligned focus: revise hive management, colony behavior, forage resources, honey harvesting, and product handling. Focus on both productivity and bee health when giving practical recommendations.",
    "Unit 11: Nursery and Plantation Technology":
      "Kehulum-aligned focus: study propagation structures, seedling care, transplant preparation, and plantation establishment in sequence. Practice explaining how early-stage management determines later field success.",
    "Unit 12: Basics of Agro-Forestry Systems and Practices":
      "Kehulum-aligned focus: connect trees, crops, livestock, and land management as integrated systems. Focus on benefits such as soil improvement, income diversification, and environmental protection with practical local examples.",
    "Unit 13: Soil and Water Conservation":
      "Kehulum-aligned focus: explain erosion control, moisture management, and conservation structures used to protect productivity. Prioritize cause-effect reasoning and practical measures suited to slope, rainfall, and land use.",
    "Unit 14: Gender and Human Nutrition":
      "Kehulum-aligned focus: link food production, household nutrition, gender roles, and decision making in agricultural livelihoods. Practice showing how equitable participation supports both productivity and family well-being.",
    "Unit 15: Safe Food Production and Postharvest Handling":
      "Kehulum-aligned focus: revise hygiene, contamination prevention, storage, transport, and handling practices that protect food quality. Organize answers from field to market so safety is explained as a full chain.",
    "Unit 16: Application of Information and Communication Technologies (ICT) in Agriculture":
      "Kehulum-aligned focus: study how digital tools support extension, weather access, market information, farm records, and decision making. Focus on practical examples that show ICT improving efficiency and resilience.",
  },
  Geography: {
    "Unit 1: Major Geological Processes Associated with Plate Tectonics":
      "Kehulum-aligned focus: connect internal Earth processes, plate movement, earthquakes, volcanoes, and landform creation. Practice using process language clearly so explanations move from cause to visible geographic effect.",
    "Unit 2: Climate Change":
      "Kehulum-aligned focus: explain the drivers, evidence, impacts, and responses to climate change at local and global scale. Use Ethiopian examples where possible and link physical change to social and economic consequences.",
    "Unit 3: Management of Conflict Over Resources":
      "Kehulum-aligned focus: study why competition over land, water, minerals, and energy creates conflict and how governance can reduce it. Focus on stakeholders, causes, spatial patterns, and practical conflict-management approaches.",
    "Unit 4: Population Policies, Programs and the Environment":
      "Kehulum-aligned focus: connect demographic change, public policy, service provision, and environmental pressure. Practice discussing both opportunities and challenges created by population programs in specific contexts.",
    "Unit 5: Challenges of Economic Development":
      "Kehulum-aligned focus: revise uneven development, infrastructure gaps, resource constraints, and policy choices affecting growth. Focus on interpreting development patterns geographically rather than listing problems only.",
    "Unit 6: Solutions to Environmental and Sustainability Problems":
      "Kehulum-aligned focus: study conservation, restoration, sustainable planning, and community action as responses to environmental stress. Prioritize practical solution pathways and how they balance development with long-term resilience.",
    "Unit 7: Contemporary Global Geographic Issues and Public Concerns":
      "Kehulum-aligned focus: examine current global issues such as migration, security, environment, and inequality through a geographic lens. Practice linking scale, place, and public concern in clear analytical answers.",
    "Unit 8: Geographical Enquiry and Map Making":
      "Kehulum-aligned focus: strengthen map skills, field enquiry, data collection, presentation, and interpretation. Practice moving from raw geographic evidence to accurate conclusions with proper symbols, scale, and spatial language.",
  },
  History: {
    "Unit 1: Development of Capitalism and Nationalism from 1815 to 1914":
      "Kehulum-aligned focus: connect industrial change, liberalism, nationalism, and imperial competition in the long nineteenth century. Practice organizing answers by causes, developments, and consequences across Europe and beyond.",
    "Unit 2: Africa and the Colonial Experience (1880s – 1960s)":
      "Kehulum-aligned focus: study conquest, colonial administration, African resistance, and the road to decolonization in sequence. Focus on comparing colonial experiences and explaining long-term political and economic effects.",
    "Unit 3: Social, Economic, and Political Developments in Ethiopia, Mid, 19th C. to 1941":
      "Kehulum-aligned focus: revise state formation, modernization, resistance, diplomacy, and the Italian threat within Ethiopia's changing political landscape. Build timeline-based answers that show continuity and turning points clearly.",
    "Unit 4: Society and Politics in the Age of World Wars, 1914 - 1945":
      "Kehulum-aligned focus: connect the two world wars with ideology, economic crisis, diplomacy, and social transformation. Practice comparing causes and outcomes while keeping chronology and major actors accurate.",
    "Unit 5: Global and Regional Developments Since 1945":
      "Kehulum-aligned focus: study the post-war order through the Cold War, international organizations, regional blocs, and global change. Focus on how world events influenced states, economies, and political alignments.",
    "Unit 6: Ethiopia: Internal Developments and External Influences from 1941 to 1991":
      "Kehulum-aligned focus: trace reform, resistance, revolution, and regime change in Ethiopia after liberation. Prioritize cause-effect links between domestic pressures and international influences in every major transition.",
    "Unit 7: Africa since the 1960s":
      "Kehulum-aligned focus: examine independence, state-building, conflict, development, and regional cooperation across post-colonial Africa. Practice comparing different national paths while identifying shared continental challenges.",
    "Unit 8: Post-1991 Developments in Ethiopia":
      "Kehulum-aligned focus: revise political restructuring, economic change, social transformation, and foreign relations in contemporary Ethiopia. Focus on balanced explanation of reforms, achievements, and ongoing challenges.",
    "Unit 9: Indigenous Knowledge Systems and Heritages of Ethiopia":
      "Kehulum-aligned focus: study local knowledge, heritage practices, and their value in history, identity, and sustainable living. Practice explaining why indigenous systems are historically significant and how they should be preserved.",
  },
  Economics: {
    "Unit 1: The Fundamental Concepts Of Macroeconomics":
      "Kehulum-aligned focus: build the foundation of national output, unemployment, inflation, and broad economic performance indicators. Practice defining each concept clearly and linking it to real macroeconomic situations.",
    "Unit 2: Aggregate Demand And Aggregate Supply Analysis":
      "Kehulum-aligned focus: connect AD-AS curves, equilibrium, and shifts caused by policy or shocks. Focus on diagram accuracy, direction of change, and the ability to explain effects on output, prices, and employment.",
    "Unit 3: Market Failure And Consumer Protection":
      "Kehulum-aligned focus: study why markets can misallocate resources and how regulation protects consumers and society. Prioritize externalities, public goods, information problems, and practical policy responses.",
    "Unit 4: Macroeconomic Policy Instruments":
      "Kehulum-aligned focus: compare fiscal, monetary, and related policy tools in managing inflation, unemployment, and growth. Practice showing how each instrument works, its limits, and likely trade-offs.",
    "Unit 5: Tax Theory And Practice":
      "Kehulum-aligned focus: revise tax purposes, types, incidence, equity, and efficiency in both theory and real administration. Focus on how taxation raises revenue while influencing behavior and distribution.",
    "Unit 6: Poverty And Inequality":
      "Kehulum-aligned focus: explain measurement, causes, consequences, and policy responses to poverty and inequality. Build answers that distinguish the two concepts while linking them to development outcomes.",
    "Unit 7: Macroeconomic Reforms In Ethiopia":
      "Kehulum-aligned focus: connect reform programs, liberalization, stabilization, and structural change in the Ethiopian economy. Practice linking policy choices to growth, inflation, investment, and public welfare outcomes.",
    "Unit 8: Economy, Environment And Climate Change":
      "Kehulum-aligned focus: study how environmental limits and climate risks shape production, policy, and long-run development. Focus on sustainable growth, green policy choices, and the economic cost of environmental damage.",
  },
  Amharic: {
    "Chapter 1: Language and Society":
      "Kehulum-aligned focus: examine how language reflects identity, culture, social life, and communication in society. Focus on key vocabulary, main ideas, and organized written expression that links language to community experience.",
    "Chapter 2: Origin and Development of Amharic":
      "Kehulum-aligned focus: revise the historical growth of Amharic, its sources, and its place in Ethiopian society. Practice explaining language development clearly using sequence, evidence, and accurate terminology.",
    "Chapter 3: Criticism":
      "Kehulum-aligned focus: strengthen literary and language criticism by identifying viewpoint, evidence, and evaluative language. Focus on moving beyond summary to supported judgment in clear Amharic writing.",
    "Chapter 4: Literature":
      "Kehulum-aligned focus: study theme, character, style, and message in literary works with close reading skills. Practice extracting main ideas and writing concise interpretations supported by textual evidence.",
    "Chapter 5: Humanity":
      "Kehulum-aligned focus: build vocabulary and reflective writing around human values, dignity, responsibility, and social behavior. Prioritize clear idea development and meaningful examples from daily life.",
    "Chapter 6: Research Writing":
      "Kehulum-aligned focus: revise topic selection, structure, evidence use, and formal writing style in research-based work. Practice organizing introduction, body, and conclusion clearly while keeping language accurate.",
    "Chapter 7: Poetry":
      "Kehulum-aligned focus: study imagery, sound, message, and poetic language with attention to interpretation. Focus on explaining what the poem communicates and how language devices create meaning.",
    "Chapter 8: Reaching a Decision":
      "Kehulum-aligned focus: practice language for analysis, comparison, discussion, and decision making in personal and social contexts. Build strong reasoning so spoken and written answers show process, not only conclusion.",
    "Chapter 9: Society and Health":
      "Kehulum-aligned focus: connect health themes to society through vocabulary, comprehension, and short explanatory writing. Prioritize message, cause-effect relations, and practical recommendations expressed clearly in Amharic.",
  },
  "Information Technology": {
    "Unit 1: Information Systems and Their Applications":
      "Kehulum-aligned focus: study how information systems support education, business, health, and government services. Practice explaining inputs, processing, outputs, users, and benefits in real application scenarios.",
    "Unit 2: Emerging Technologies":
      "Kehulum-aligned focus: revise current technologies, their opportunities, risks, and social impact with clear examples. Focus on understanding the purpose of each technology rather than memorizing names only.",
    "Unit 3: Database Management System":
      "Kehulum-aligned focus: connect data, tables, keys, queries, and management tasks into one practical workflow. Practice moving from data organization concepts to simple design and retrieval logic.",
    "Unit 4: Web Authoring":
      "Kehulum-aligned focus: study page structure, design choices, and the basic tools used to create usable websites. Focus on how content, layout, and user needs fit together in web development.",
    "Unit 5: Maintenance and Troubleshooting":
      "Kehulum-aligned focus: build step-by-step habits for diagnosis, preventive care, and safe correction of common computer problems. Organize answers around symptoms, checks, action, and verification.",
    "Unit 6: Fundamentals of Programming":
      "Kehulum-aligned focus: strengthen algorithmic thinking, sequence, selection, iteration, and problem decomposition. Practice tracing logic carefully and explaining each programming step in plain language before coding.",
  },
};

const grade11SpecificChapterNotes: Record<string, Record<string, string>> = {
  Mathematics: {
    "Unit 1: Relations and Functions":
      "Kehulum-aligned focus: build confidence with relation-function definitions, mapping rules, domain-range, inverse ideas, and graph interpretation. Practice moving between symbolic form, table, and graph so each answer shows both meaning and method.",
    "Unit 2: Rational Expressions and Rational Functions":
      "Kehulum-aligned focus: simplify rational expressions carefully, identify excluded values, and study graph behavior of rational functions. Prioritize factorization, domain restrictions, asymptotes, and stepwise algebraic justification.",
    "Unit 3: Matrices":
      "Kehulum-aligned focus: organize matrix notation, operations, and applications to systems in a precise way. Practice checking order first, carrying out operations accurately, and explaining what the result represents.",
    "Unit 4: Determinants and their Properties":
      "Kehulum-aligned focus: connect determinant rules, row properties, and solving systems through structured reasoning. Focus on when determinants are zero, how operations affect value, and how the result supports inverse or Cramer-style methods.",
    "Unit 5: Vectors":
      "Kehulum-aligned focus: revise magnitude, direction, addition, scalar multiplication, and dot product with clear diagrams. Practice connecting coordinate methods to geometric meaning in displacement and angle problems.",
    "Unit 6: Transformations of the Plane":
      "Kehulum-aligned focus: study translation, reflection, rotation, and enlargement as coordinate rules with geometric meaning. Focus on describing each transformation precisely and avoiding sign-direction mistakes.",
    "Unit 7: Statistics":
      "Kehulum-aligned focus: strengthen collection, organization, and interpretation of data using measures of center and spread. Practice deciding which summary measure fits the data and explain conclusions clearly from tables or graphs.",
    "Unit 8: Probability":
      "Kehulum-aligned focus: build from sample space and event notation to conditional reasoning and simple probability rules. Practice clear event setup first so later computations stay accurate and interpretable.",
  },
  Physics: {
    "Unit 1: Physics and Human Society":
      "Kehulum-aligned focus: connect physics to daily life, technology, and the wider scientific community through concrete Ethiopian examples. Build answers by stating the physical idea first, then linking it to human benefit or practical application.",
    "Unit 2: Vectors":
      "Kehulum-aligned focus: distinguish scalar and vector quantities clearly, then practice resolution and resultant methods with diagrams. Focus on direction conventions and component reasoning before calculation.",
    "Unit 3: Motion in One and Two Dimensions":
      "Kehulum-aligned focus: organize kinematics ideas around displacement, velocity, acceleration, and projectile reasoning. Practice moving between equations, graphs, and physical interpretation without mixing vector and scalar meanings.",
    "Unit 4: Dynamics":
      "Kehulum-aligned focus: connect Newton's laws to free-body diagrams, friction, circular effects, and real motion. Prioritize identifying forces correctly before selecting equations so your method is physically justified.",
    "Unit 5: Heat Conduction and Calorimetry":
      "Kehulum-aligned focus: study temperature, heat transfer, specific heat, and thermal balance with both concept and computation. Focus on energy flow direction, units, and why different materials respond differently to heating.",
    "Unit 6: Electrostatics and Electric Circuit":
      "Kehulum-aligned focus: link charge, field, potential difference, resistance, and current in both simple theory and circuits. Practice law selection, sign conventions, and circuit interpretation step by step.",
    "Unit 7: Nuclear Physics":
      "Kehulum-aligned focus: revise nucleus structure, radioactivity, decay processes, and uses of nuclear science in medicine and energy. Focus on correct terminology, equation balance, and safety-aware applications.",
  },
  Chemistry: {
    "Unit 1: Atomic Structure And Periodic Properties Of The Elements":
      "Kehulum-aligned focus: connect atomic models, electron arrangement, and periodic trends into one coherent explanation of element behavior. Practice explaining patterns instead of memorizing them as isolated facts.",
    "Unit 2: Chemical Bonding":
      "Kehulum-aligned focus: compare ionic, covalent, and related bonding ideas by linking electron behavior to substance properties. Focus on structure-property relationships so you can explain why materials behave the way they do.",
    "Unit 3: Physical State Of Matter":
      "Kehulum-aligned focus: study particle arrangement, intermolecular forces, changes of state, and gas-liquid-solid behavior with clear particle reasoning. Practice moving between microscopic explanation and observable property.",
    "Unit 4: Chemical Kinetics":
      "Kehulum-aligned focus: explain reaction rate through collisions, activation energy, catalysts, and changing conditions. Prioritize cause-effect reasoning so each factor is linked to particle behavior and rate change.",
    "Unit 5: Chemical Equilibrium":
      "Kehulum-aligned focus: connect reversible reactions, dynamic balance, and Le Chatelier reasoning in a structured way. Practice predicting shifts carefully and explaining them with concentration, pressure, or temperature changes.",
    "Unit 6: Some Important Oxygen-containing Organic Compounds":
      "Kehulum-aligned focus: classify major oxygen-containing compounds, their naming patterns, reactions, and practical uses. Focus on functional groups first, then use them to predict behavior and application.",
  },
  Biology: {
    "Unit 1: Biology and Technology":
      "Kehulum-aligned focus: connect biology to technology, health, agriculture, and environment using practical Ethiopian examples. Focus on how biological knowledge becomes useful solutions, not only definitions.",
    "Unit 2: Characteristics of animals":
      "Kehulum-aligned focus: compare major animal groups through structure, movement, feeding, reproduction, and adaptation. Practice classification using clear observable features and survival functions.",
    "Unit 3: Enzymes":
      "Kehulum-aligned focus: study enzymes as biological catalysts by linking structure, specificity, and factors affecting activity. Focus on why temperature, pH, and concentration change the speed of life processes.",
    "Unit 4: Genetics":
      "Kehulum-aligned focus: organize inheritance ideas around genes, chromosomes, variation, and simple genetic crosses. Practice tracking symbols carefully and explaining what each inheritance result means biologically.",
    "Unit 5: The human body systems":
      "Kehulum-aligned focus: revise how body systems work separately and together to maintain life. Focus on organ function, coordination, and health relevance so answers explain process instead of listing parts only.",
    "Unit 6: Population and natural resources":
      "Kehulum-aligned focus: connect population change, resource use, environmental pressure, and sustainability. Practice explaining how biological systems and human decisions interact over time.",
  },
  Agriculture: {
    "Chapter 1: Introduction to Crop Production":
      "Kehulum-aligned focus: build the foundations of crop production from land preparation to crop growth requirements and management decisions. Organize answers around sequence so each farming step supports the next one.",
    "Chapter 2: Field Crops Production and Management":
      "Kehulum-aligned focus: study cereals and other field crops through planting, spacing, nutrition, weed control, and harvesting. Focus on practical management choices that raise yield and reduce loss.",
    "Chapter 3: Industrial Crops Production and Management":
      "Kehulum-aligned focus: connect production practices for cash and industrial crops to processing and market value. Focus on both agronomic requirements and why quality management matters economically.",
    "Chapter 4: Introduction to Farm Animals":
      "Kehulum-aligned focus: revise the roles, types, and basic management needs of farm animals in Ethiopian agriculture. Build answers around usefulness, care, and production purpose.",
    "Chapter 5: Animal Feeds and Feeding Practices":
      "Kehulum-aligned focus: study feed sources, ration planning, nutrient roles, and feeding schedules for better animal performance. Focus on matching feed quality to growth, production, and health outcomes.",
    "Chapter 6: Animal Genetics and Breeding Practices":
      "Kehulum-aligned focus: explain inheritance, selection, and breeding methods used to improve livestock traits. Practice linking breeding decisions to productivity, adaptation, and disease resistance.",
    "Chapter 7: Farm Animals Housing":
      "Kehulum-aligned focus: connect housing design to hygiene, comfort, safety, and animal productivity. Focus on ventilation, spacing, sanitation, and local suitability when giving recommendations.",
    "Chapter 8: Basic Animal Health and Disease Control":
      "Kehulum-aligned focus: revise signs of disease, prevention, sanitation, vaccination, and treatment support in livestock systems. Organize answers from prevention first, then detection and response.",
    "Chapter 9: Dairy Cattle Production and Management":
      "Kehulum-aligned focus: study breed choice, feeding, housing, milking hygiene, and health management for milk production. Focus on the whole management system rather than isolated practices.",
    "Chapter 10: Introduction to Natural Resources":
      "Kehulum-aligned focus: define land, water, forest, and related resources as the base of agricultural production. Focus on why careful use and conservation matter for long-term productivity.",
    "Chapter 11: Management of Natural Resources":
      "Kehulum-aligned focus: connect conservation practices to soil fertility, water availability, and sustainable farming. Practice giving practical resource-management advice suited to local conditions.",
    "Chapter 12: Concepts of Biodiversity":
      "Kehulum-aligned focus: explain biodiversity at genetic, species, and ecosystem levels with agricultural relevance. Focus on why diversity supports resilience, food systems, and environmental balance.",
    "Chapter 13: Climate Change Adaptation and Mitigation":
      "Kehulum-aligned focus: study climate impacts on farming and the responses that reduce risk and build resilience. Focus on practical adaptation, mitigation, and local examples that farmers can use.",
    "Chapter 14: Mechanized Farming":
      "Kehulum-aligned focus: revise machines, tools, and energy use in modern agriculture with attention to efficiency and cost. Focus on when mechanization helps and what management is needed for safe effective use.",
    "Chapter 15: Introduction to Human Nutrition":
      "Kehulum-aligned focus: connect agriculture to balanced diet, nutrient groups, and health outcomes. Practice explaining how production choices influence household nutrition and community well-being.",
    "Chapter 16: Diversified Food Production and Consumption":
      "Kehulum-aligned focus: study diversified farming and food use as a way to improve nutrition, income, and resilience. Focus on integrating crops, animals, and local food choices into one sustainable system.",
  },
  "Civic Education": {
    "Unit 1: Building a Democratic System":
      "Kehulum-aligned focus: study democratic principles, institutions, participation, and accountability as parts of one civic system. Focus on explaining how democracy works in practice, not only as definitions.",
    "Unit 2: Democratic Rights of Citizens":
      "Kehulum-aligned focus: revise rights, freedoms, limits, and responsibilities in a democratic society. Practice linking each right to real civic situations in school, community, and national life.",
    "Unit 3: Nations, Nationalities and Peoples of Ethiopia":
      "Kehulum-aligned focus: connect diversity, identity, equality, and coexistence within the Ethiopian federal context. Focus on respectful explanation of unity, difference, and constitutional recognition.",
    "Unit 4: Constitutionalism and the Ethiopian Constitution":
      "Kehulum-aligned focus: explain why constitutions matter, how they limit power, and how the Ethiopian constitution structures public life. Focus on principles first, then institutional application.",
    "Unit 5: Ethics and Ethical Conduct":
      "Kehulum-aligned focus: study values, moral reasoning, and responsible behavior in personal and public life. Practice applying ethical principles to realistic situations instead of giving abstract statements only.",
    "Unit 6: Patriotism and National Identity":
      "Kehulum-aligned focus: connect love of country, shared responsibility, and inclusive national identity in a balanced way. Focus on actions and attitudes that strengthen public service and social cohesion.",
    "Unit 7: Gender Equality and Development":
      "Kehulum-aligned focus: revise equality, participation, opportunity, and the role of gender justice in development. Focus on practical barriers, benefits of inclusion, and examples from everyday life.",
    "Unit 8: Conflict Resolution and Peace Building":
      "Kehulum-aligned focus: study sources of conflict, peaceful methods of resolution, and the skills needed to build lasting peace. Practice distinguishing negotiation, mediation, compromise, and reconciliation clearly.",
    "Unit 9: Good Governance":
      "Kehulum-aligned focus: connect transparency, accountability, rule of law, participation, and service delivery in public institutions. Focus on how governance quality affects citizens directly.",
    "Unit 10: Economic Rights and Financial Literacy":
      "Kehulum-aligned focus: revise work, property, saving, budgeting, and responsible economic decision making as civic life skills. Focus on practical application rather than memorized terminology only.",
    "Unit 11: Environmental Ethics and Sustainable Development":
      "Kehulum-aligned focus: connect environmental responsibility to justice, development, and future generations. Practice explaining why ethical choices matter in resource use and sustainability planning.",
  },
  Economics: {
    "Unit 1: Theory Of Consumer Behavior And Demand":
      "Kehulum-aligned focus: build the logic of choice, utility, budget limits, and demand behavior step by step. Focus on how consumers decide under scarcity and how that appears in demand analysis.",
    "Unit 2: Market Structure And The Decision Of Firms":
      "Kehulum-aligned focus: compare market forms, firm goals, output decisions, and competition. Practice linking each structure to pricing behavior, profit, and consumer impact.",
    "Unit 3: National Income Accounting":
      "Kehulum-aligned focus: revise GDP, GNP, income flows, and the methods used to measure economic performance. Focus on what each measure shows and what it leaves out.",
    "Unit 4: Consumption, Saving And Investment":
      "Kehulum-aligned focus: connect household behavior, saving decisions, investment, and broader economic growth. Practice showing how one variable affects another in clear economic reasoning.",
    "Unit 5: Trade And Finance":
      "Kehulum-aligned focus: study international trade, exchange, finance, and supporting institutions with attention to Ethiopian context. Focus on benefits, risks, and policy relevance of trade relationships.",
    "Unit 6: Economic Development":
      "Kehulum-aligned focus: distinguish growth from development and study indicators, obstacles, and strategies for long-term improvement. Focus on why development is broader than output alone.",
    "Unit 7: Main Sectors, Sectorial Policies And Strategies Of Ethiopia":
      "Kehulum-aligned focus: connect agriculture, industry, services, and policy direction in the Ethiopian economy. Practice tying theory to local realities, reforms, and development priorities.",
  },
  English: {
    "Unit 1: Environmental Hazards":
      "Kehulum-aligned focus: strengthen reading and discussion around risks, causes, effects, and responses to environmental hazards. Focus on evidence-based explanation and accurate topic vocabulary.",
    "Unit 2: Civilization":
      "Kehulum-aligned focus: build comprehension and writing around human progress, culture, and social development. Practice identifying main idea, supporting detail, and comparison in historical or cultural texts.",
    "Unit 3: Causes of Road Traffic Accidents":
      "Kehulum-aligned focus: study cause-effect language, safety vocabulary, and persuasive recommendations related to road accidents. Focus on turning information into clear prevention-focused writing.",
    "Unit 4: People and Natural Resources":
      "Kehulum-aligned focus: connect human activity, resource use, and responsibility through reading and structured writing. Focus on balanced explanation with clear supporting reasons.",
    "Unit 5: Irrigation":
      "Kehulum-aligned focus: revise agriculture-related vocabulary and reading skills through the topic of irrigation and water management. Practice explaining process, benefit, and challenge in orderly sentences.",
    "Unit 6: Global Warming":
      "Kehulum-aligned focus: develop language for discussing climate causes, impacts, and responses with clarity and evidence. Focus on summaries, short arguments, and topic-specific vocabulary use.",
    "Unit 7: Patriotism":
      "Kehulum-aligned focus: strengthen expressive writing and discussion around loyalty, service, and national responsibility. Practice clear paragraph structure supported with concrete examples.",
    "Unit 8: Efficiency of Health Services":
      "Kehulum-aligned focus: improve comprehension of service, quality, and health-system topics through factual reading and organized response writing. Focus on evaluation language and practical recommendation.",
    "Unit 9: Indigenous Conflict Resolution":
      "Kehulum-aligned focus: study peaceful problem-solving language, cultural practices, and balanced explanation of traditional methods. Practice comparing approaches and explaining why they work.",
    "Unit 10: Artificial Intelligence":
      "Kehulum-aligned focus: build modern technology vocabulary and analytical reading around AI, automation, and society. Focus on expressing benefits, concerns, and evidence-based opinions clearly.",
  },
  "Information Technology": {
    "Unit 1: Information Systems and Its Applications":
      "Kehulum-aligned focus: study system components, data flow, and real applications in education, business, and public service. Focus on explaining how information becomes useful decisions or services.",
    "Unit 2: Emerging Technologies":
      "Kehulum-aligned focus: revise current digital technologies, their uses, and their social implications with practical examples. Focus on understanding purpose and impact, not just naming tools.",
    "Unit 3: Database Management":
      "Kehulum-aligned focus: connect tables, fields, relationships, storage, and retrieval in one structured view of data management. Practice explaining how well-organized data supports efficient information use.",
    "Unit 4: Web Development":
      "Kehulum-aligned focus: study the structure and process of building web pages and websites for users. Focus on layout, content organization, and the logic of creating usable digital experiences.",
    "Unit 5: Hardware Troubleshooting and Preventive Maintenance":
      "Kehulum-aligned focus: build a clear troubleshooting routine from problem identification to safe maintenance and prevention. Focus on stepwise reasoning and practical care habits for computer systems.",
    "Unit 6: Fundamentals of Programming":
      "Kehulum-aligned focus: strengthen algorithms, control flow, and problem decomposition before code complexity increases. Practice tracing simple logic carefully and explaining each step in plain language.",
  },
  History: {
    "Unit 1: History, Historiography, And Human Evolution":
      "Kehulum-aligned focus: study what history is, how historians work, and how human origins are understood through evidence. Focus on sources, interpretation, and the stages of early human development.",
    "Unit 2: Major Spots Of Ancient World Civilizations Up To C.500 A.D":
      "Kehulum-aligned focus: compare major ancient civilizations through location, political organization, economy, religion, and legacy. Focus on similarities, differences, and why these civilizations matter historically.",
    "Unit 3: Peoples, States, And Historical Processes In Ethiopia And The Horn To The End Of The 13th Century":
      "Kehulum-aligned focus: revise early peoples, state formation, trade, religion, and interaction in Ethiopia and the Horn. Build timeline-based answers that connect local change to regional processes.",
    "Unit 4: The Middle Ages And Early Modern World, C. 500 AD-1789":
      "Kehulum-aligned focus: study continuity and transformation in politics, religion, economy, and ideas across the medieval and early modern eras. Focus on major turning points and their wider consequences.",
    "Unit 5: Peoples And States Of Africa To 1500":
      "Kehulum-aligned focus: compare major African states and societies by geography, leadership, trade, culture, and historical influence. Focus on Africa as dynamic and connected, not isolated.",
    "Unit 6: Africa And The Outside World: 1500-1880":
      "Kehulum-aligned focus: connect trade, contact, slavery, and external influence to change within African societies. Practice explaining both interaction and unequal power in historical development.",
    "Unit 7: States, Principalities, Population Movements, And Interactions In Ethiopia":
      "Kehulum-aligned focus: revise political change, migration, regional interaction, and shifting power in Ethiopian history. Focus on how movement and contact reshape society and state structures.",
    "Unit 8: Political, Social, And Economic Processes In Ethiopia, Mid 16th To Mid-19th Century":
      "Kehulum-aligned focus: study internal transformation in Ethiopia through governance, economy, religion, and social life over time. Focus on organized cause-consequence explanation rather than isolated events.",
    "Unit 9: The Age Of Revolutions, 1789 To 1815":
      "Kehulum-aligned focus: connect major revolutions to ideas of rights, citizenship, nationalism, and political change. Focus on comparing causes, major events, and lasting effects across regions.",
  },
  Geography: {
    "Chapter 1: Formation of the Continents":
      "Kehulum-aligned focus: connect theories of continental formation, Earth history, and large-scale physical change in a clear process sequence. Focus on explaining how evidence supports each major idea.",
    "Chapter 2: Climate Classification and Climate Regions of Our World":
      "Kehulum-aligned focus: study climate controls, major world climate regions, and classification logic using maps and examples. Focus on why climates differ, not just where they are found.",
    "Chapter 3: Natural Resources and Conflicts Over Resources":
      "Kehulum-aligned focus: connect resource distribution, scarcity, competition, and conflict in a geographic framework. Focus on stakeholders, causes, and possible management responses.",
    "Chapter 4: Global Population Dynamics and Challenges":
      "Kehulum-aligned focus: revise growth, distribution, migration, and demographic pressure with clear cause-effect analysis. Focus on how population trends shape services, environment, and development.",
    "Chapter 5: Geography and Economic Development":
      "Kehulum-aligned focus: connect location, resources, infrastructure, and environment to economic opportunity and constraint. Focus on geographic explanation of why development differs from place to place.",
    "Chapter 6: Major Global Environmental Changes":
      "Kehulum-aligned focus: study environmental change such as warming, degradation, and ecosystem stress through process and impact. Focus on linking physical change to human consequences and responses.",
    "Chapter 7: Geographic Issues and Public Concerns":
      "Kehulum-aligned focus: examine current issues through place, scale, and public-interest perspectives. Practice explaining why some geographic problems become major social concerns.",
    "Chapter 8: Geo-spatial Information and Data Processing":
      "Kehulum-aligned focus: strengthen map reading, spatial data handling, and geographic enquiry skills. Focus on turning geographic information into accurate interpretation and communication.",
  },
  Amharic: {
    "ምዕራፍ አንድ: ቋንቋና ህብረተሰብ (Language and Society)":
      "Kehulum-aligned focus: connect language to identity, communication, and social life through careful reading and explanation. Focus on main message, key vocabulary, and organized Amharic expression.",
    "ምዕራፍ ሁለት: ቅርሶቻችን (Our Heritage)":
      "Kehulum-aligned focus: study heritage, culture, and continuity through reflective Amharic reading and writing. Focus on explaining why cultural inheritance matters in society.",
    "ምዕራፍ ሦስት: ወግ (Traditional Literature)":
      "Kehulum-aligned focus: revise traditional literature by focusing on message, style, oral expression, and cultural meaning. Practice interpreting the text rather than only retelling it.",
    "ምዕራፍ አራት: ልቦለድ (Novel)":
      "Kehulum-aligned focus: study novel structure through theme, character, events, and social meaning. Focus on writing short literary interpretations supported by the text.",
    "ምዕራፍ አምስት: የቋንቋ ስዛ (Linguistic Relevance)":
      "Kehulum-aligned focus: strengthen understanding of language use, meaning, and relevance in communication. Focus on accurate explanation, example use, and vocabulary development.",
    "ምዕራፍ ስድስት: ግጥም (Poetry)":
      "Kehulum-aligned focus: interpret poetry through imagery, sound, feeling, and message in clear Amharic. Focus on how poetic language creates meaning, not only on summary.",
    "ምዕራፍ ሰባት: አርበኝነት (Patriotism)":
      "Kehulum-aligned focus: build reflective writing around patriotism, service, and responsibility in society. Focus on clear reasoning and meaningful examples in Amharic expression.",
    "ምዕራፍ ስምንት: ትውፊት (Tradition and Lifestyle)":
      "Kehulum-aligned focus: connect tradition, lifestyle, and social values through reading, discussion, and concise writing. Focus on comparing old and current practices clearly.",
    "ምዕራፍ ዘጠኝ: ስኬት (Success)":
      "Kehulum-aligned focus: explore themes of effort, achievement, and personal growth with clear supporting examples. Focus on message, vocabulary, and organized short responses.",
    "ምዕራፍ አስር: ኪነጥበብ (Art)":
      "Kehulum-aligned focus: study artistic expression, meaning, and cultural value through Amharic reading and interpretation. Focus on explaining idea, feeling, and significance in a structured way.",
  },
};

const grade10SpecificChapterNotes: Record<string, Record<string, string>> = {
  Mathematics: {
    "Unit 1: Relations and Functions":
      "Kehulum-aligned focus: build a strong understanding of relations, functions, domain, range, and graph interpretation. Practice moving between verbal rules, symbolic form, tables, and graphs so each answer shows both meaning and method.",
    "Unit 2: Polynomial Functions":
      "Kehulum-aligned focus: revise polynomial operations, factorization, roots, and graph behavior in one connected way. Focus on how algebraic form helps you predict intercepts, turning behavior, and solution methods.",
    "Unit 3: Exponential and Logarithmic Functions":
      "Kehulum-aligned focus: connect exponent rules, logarithm laws, graph patterns, and real-life growth or decay models. Practice choosing the correct rule first, then solving carefully with justification.",
    "Unit 4: Trigonometric Functions":
      "Kehulum-aligned focus: study trig ratios, identities, graphs, and applications to angles and measurement. Focus on recognizing the correct relationship before substituting values or simplifying expressions.",
    "Unit 5: Circles":
      "Kehulum-aligned focus: connect circle theorems, chords, tangents, arcs, and angle properties in a diagram-based way. Practice labeling figures clearly so every theorem is used with the right condition.",
    "Unit 6: Solid Figures":
      "Kehulum-aligned focus: revise surface area, volume, and geometric reasoning for prisms, cylinders, cones, spheres, and related solids. Focus on choosing the right formula and interpreting units correctly.",
    "Unit 7: Coordinate Geometry":
      "Kehulum-aligned focus: strengthen distance, midpoint, slope, line equations, and coordinate proof ideas. Practice moving between diagram meaning and algebraic equations without losing geometric interpretation.",
  },
  Physics: {
    "Unit 1: Vector Quantities":
      "Kehulum-aligned focus: distinguish scalar and vector quantities clearly, then practice components, resultant, and direction in a stepwise way. Focus on diagrams, sign conventions, and physical meaning before calculation.",
    "Unit 2: Uniformly Accelerated Motion":
      "Kehulum-aligned focus: connect displacement, velocity, acceleration, and time through equations, graphs, and real motion examples. Practice identifying what is given and what is required before selecting formulas.",
    "Unit 3: Elasticity and Static Equilibrium of Rigid Body":
      "Kehulum-aligned focus: study deformation, restoring effects, turning effect, and balance of forces for rigid bodies. Focus on free-body reasoning and conditions for equilibrium so your method stays physically sound.",
    "Unit 4: Static and Current Electricity":
      "Kehulum-aligned focus: link charge, field, potential difference, resistance, and current in one coherent framework. Practice circuit reasoning carefully, especially units, direction, and law selection.",
    "Unit 5: Magnetism":
      "Kehulum-aligned focus: revise magnetic fields, poles, force effects, and practical applications in devices and materials. Focus on field pattern interpretation and how magnetism relates to current and motion.",
    "Unit 6: Electromagnetic Waves and Geometrical Optics":
      "Kehulum-aligned focus: connect wave behavior, the electromagnetic spectrum, reflection, refraction, and image formation. Practice using ray diagrams and wave properties to explain everyday optical phenomena.",
  },
  Chemistry: {
    "Unit 1: Chemical Reactions And Stoichiometry":
      "Kehulum-aligned focus: build confidence with balancing equations, mole relationships, and quantitative reaction reasoning. Focus on turning word information into chemical equations before calculation begins.",
    "Unit 2: Solutions":
      "Kehulum-aligned focus: revise concentration, solubility, dilution, and properties of solutions through both particle explanation and calculation. Practice interpreting what each concentration unit actually means.",
    "Unit 3: Important Inorganic Compounds":
      "Kehulum-aligned focus: study major inorganic compounds by preparation, properties, reactions, and uses in daily life or industry. Focus on connecting substance behavior to composition and bonding.",
    "Unit 4: Energy Changes And Electro-Chemistry":
      "Kehulum-aligned focus: connect enthalpy ideas, redox reactions, electrolysis, and simple electrochemical cells. Focus on electron transfer, sign meaning, and why chemical change is linked to energy.",
    "Unit 5: Metals And Non Metals":
      "Kehulum-aligned focus: compare physical and chemical behavior of metals and non-metals through structure, reactivity, and practical use. Practice relating periodic behavior to observed properties.",
    "Unit 6: Hydrocarbons And Their Natural Sources":
      "Kehulum-aligned focus: revise classification, naming, reactions, and sources of hydrocarbons with attention to everyday application. Focus on structure first, then use it to predict properties and reactions.",
  },
  Biology: {
    "Unit 1: Sub-fields of Biology":
      "Kehulum-aligned focus: organize biology into its major branches and connect each field to real-life applications in health, agriculture, and environment. Focus on what each branch studies and why it matters.",
    "Unit 2: Plants":
      "Kehulum-aligned focus: revise plant structure, transport, reproduction, and adaptation in a connected way. Practice linking each plant part to its function and survival role.",
    "Unit 3: Biochemical molecules":
      "Kehulum-aligned focus: study carbohydrates, lipids, proteins, nucleic acids, and water as the chemical basis of life. Focus on structure-function relationships rather than memorizing lists only.",
    "Unit 4: Cell reproduction":
      "Kehulum-aligned focus: connect the cell cycle, mitosis, meiosis, growth, and reproduction in one clear sequence. Practice distinguishing each process by purpose, stages, and outcome.",
    "Unit 5: Human Biology":
      "Kehulum-aligned focus: revise major human systems and how they coordinate to maintain life and health. Focus on process explanation, not just naming organs or parts.",
    "Unit 6: Ecological interaction":
      "Kehulum-aligned focus: study how organisms interact with one another and with their environment through food chains, cycles, and adaptation. Focus on balance, change, and human impact in ecosystems.",
  },
  English: {
    "Unit 1: Population Growth":
      "Kehulum-aligned focus: strengthen reading and writing around population trends, causes, effects, and responses. Focus on clear explanation using topic vocabulary and cause-effect connectors.",
    "Unit 2: Travel Behaviors":
      "Kehulum-aligned focus: build comprehension and expression around travel habits, responsibility, and social behavior. Practice using examples and comparison language in short responses.",
    "Unit 3: Punctuality":
      "Kehulum-aligned focus: develop vocabulary and organized writing around time, discipline, reliability, and personal responsibility. Focus on turning abstract values into practical examples.",
    "Unit 4: Tourist Attractions":
      "Kehulum-aligned focus: improve descriptive and informative writing around places, heritage, and tourism value. Focus on main idea, supporting detail, and attractive but clear language.",
    "Unit 5: Honey Processing":
      "Kehulum-aligned focus: connect process language, sequencing, and agriculture vocabulary through the topic of honey processing. Practice explaining each step in order with accurate transition words.",
    "Unit 6: Migration":
      "Kehulum-aligned focus: strengthen cause-effect reading and balanced writing on movement of people, opportunity, and challenge. Focus on presenting both reasons and consequences clearly.",
    "Unit 7: Branding Ethiopia and National Identity":
      "Kehulum-aligned focus: build persuasive and reflective language around image, identity, culture, and national pride. Focus on paragraph unity and evidence-based support for your viewpoint.",
    "Unit 8: The Healing Power of Plants":
      "Kehulum-aligned focus: improve comprehension of health and environment texts while practicing summary and explanation skills. Focus on topic vocabulary and clear short-answer writing.",
    "Unit 9: Multilingualism":
      "Kehulum-aligned focus: study language diversity, communication, and cultural identity through analytical reading and discussion. Focus on comparing benefits, challenges, and social value clearly.",
    "Unit 10: Digital Vs Satellite Television":
      "Kehulum-aligned focus: strengthen comparison writing and technology vocabulary through media topics. Focus on presenting similarities, differences, and practical implications in an organized way.",
  },
  Geography: {
    "Unit 1: Land-forms Of Africa":
      "Kehulum-aligned focus: connect major African landforms to tectonic, erosional, and depositional processes. Focus on explaining how process creates form, not just naming features.",
    "Unit 2: Climate Of Africa":
      "Kehulum-aligned focus: revise climate elements, controls, and regional patterns across Africa using maps and examples. Focus on why climates vary from place to place.",
    "Unit 3: Natural Resource Base Of Africa":
      "Kehulum-aligned focus: study distribution, importance, and management of Africa's natural resources in relation to development. Focus on both opportunity and sustainability challenge.",
    "Unit 4: Population of Africa":
      "Kehulum-aligned focus: connect population growth, distribution, migration, and demographic pressure across the continent. Focus on how population patterns affect services, jobs, and land use.",
    "Unit 5: Major Economic and Cultural Activities of Africa":
      "Kehulum-aligned focus: revise agriculture, trade, industry, tourism, and cultural activity as linked parts of African geography. Focus on regional differences and the role of environment.",
    "Unit 6: Human - Natural Environment Interactions":
      "Kehulum-aligned focus: study how people use, change, and depend on the natural environment in positive and negative ways. Focus on feedback between environment and human decision making.",
    "Unit 7: Geographic Issues And Public Concerns In Africa":
      "Kehulum-aligned focus: examine major public issues through place, scale, and impact across Africa. Focus on why geographic problems become social and political concerns.",
    "Unit 8: Geospatial Information And Data Processing":
      "Kehulum-aligned focus: strengthen map use, geographic data handling, and interpretation skills. Focus on how spatial information is collected, processed, and turned into conclusions.",
  },
  History: {
    "Unit 1: Development of Capitalism and Nationalism 1815-1914":
      "Kehulum-aligned focus: connect industrial expansion, liberal ideas, nationalism, and changing political order in the nineteenth century. Focus on causes, developments, and long-term impacts together.",
    "Unit 2: Africa & the Colonial Experience (1880s-1960s)":
      "Kehulum-aligned focus: study conquest, colonial rule, resistance, and decolonization across Africa in sequence. Focus on comparing experiences and explaining their lasting effects.",
    "Unit 3: Social, Economic & Political Developments in Ethiopia mid-19th C. to 1941":
      "Kehulum-aligned focus: revise modernization, state formation, external pressure, and resistance in Ethiopia up to 1941. Focus on timeline clarity and major turning points.",
    "Unit 4: Society and Politics in the Age of World Wars 1914-1945":
      "Kehulum-aligned focus: connect the world wars to ideology, diplomacy, economic crisis, and social change. Focus on comparing causes and consequences with clear chronology.",
    "Unit 5: Global and Regional Developments Since 1945":
      "Kehulum-aligned focus: study the post-war world through the Cold War, institutions, regional change, and global influence. Focus on how world events shaped different regions.",
    "Unit 6: Ethiopia: Internal Developments and External Influences from 1941 to 1991":
      "Kehulum-aligned focus: trace reform, protest, revolution, and regime change in Ethiopia after liberation. Focus on how internal and external pressures interacted over time.",
    "Unit 7: Africa Since 1960":
      "Kehulum-aligned focus: revise independence, nation-building, development, and conflict in post-colonial Africa. Focus on both shared continental patterns and country-level variation.",
    "Unit 8: Post-1991 Developments in Ethiopia":
      "Kehulum-aligned focus: study political restructuring, economic reform, and social change in contemporary Ethiopia. Focus on balanced explanation of achievements and ongoing challenges.",
    "Unit 9: Indigenous Knowledge and Heritages of Ethiopia":
      "Kehulum-aligned focus: connect local knowledge, heritage, identity, and preservation in Ethiopian historical experience. Focus on why these systems remain valuable today.",
  },
  "Civic Education": {
    "Unit 1: Democracy And Democratization":
      "Kehulum-aligned focus: build a clear understanding of democracy, democratic culture, and the process of democratization. Focus on how principles become institutions and citizen action.",
    "Unit 2: Citizens In The Digital Technology Age":
      "Kehulum-aligned focus: connect citizenship to digital rights, responsibilities, safety, and participation in online life. Focus on practical civic behavior in modern communication spaces.",
    "Unit 3: Understanding Good Governance":
      "Kehulum-aligned focus: revise accountability, transparency, participation, and rule of law as parts of good governance. Focus on how governance quality shapes daily public life.",
    "Unit 4: Peace And Indigenous Conflict Resolution Mechanisms":
      "Kehulum-aligned focus: study peaceful problem solving and the value of indigenous conflict-resolution practices. Focus on comparing methods and explaining why they support social harmony.",
    "Unit 5: Federalism In Ethiopia":
      "Kehulum-aligned focus: connect federal structure, division of power, diversity, and constitutional organization in Ethiopia. Focus on principle, purpose, and practical implications together.",
    "Unit 6: Human Rights":
      "Kehulum-aligned focus: revise basic rights, duties, protection, and respect for human dignity in civic life. Focus on applying rights concepts to real situations rather than reciting them only.",
    "Unit 7: Patriotism":
      "Kehulum-aligned focus: study patriotism as service, responsibility, and commitment to shared national life. Focus on inclusive national values and constructive civic action.",
    "Unit 8: Globalization And Global Issues":
      "Kehulum-aligned focus: connect globalization to economy, culture, technology, and global responsibility. Focus on balanced explanation of opportunities and challenges.",
  },
  Economics: {
    "Unit 1: Theory of Consumer Behaviour":
      "Kehulum-aligned focus: study choice, utility, scarcity, and how consumers make decisions under budget limits. Focus on the logic behind behavior, not just definitions.",
    "Unit 2: Theories of Demand and Supply":
      "Kehulum-aligned focus: connect market demand, supply, equilibrium, and change in one coherent framework. Focus on direction of change and why curves shift.",
    "Unit 3: Theories of Production and Cost":
      "Kehulum-aligned focus: revise inputs, output, productivity, and cost behavior in production decisions. Focus on how firms combine resources efficiently.",
    "Unit 4: Market Structure":
      "Kehulum-aligned focus: compare different market forms by competition, pricing, and barriers to entry. Focus on how structure changes firm behavior and consumer outcomes.",
    "Unit 5: Banking and Finance":
      "Kehulum-aligned focus: study money, banking roles, savings, credit, and financial institutions in economic life. Focus on how finance supports production and development.",
    "Unit 6: Economic Growth":
      "Kehulum-aligned focus: connect growth, development factors, and policy support for long-term improvement. Focus on what drives growth and what can slow it down.",
    "Unit 7: The Ethiopian Economy":
      "Kehulum-aligned focus: revise key sectors, resources, opportunities, and challenges of the Ethiopian economy. Focus on linking theory to local economic realities.",
    "Unit 8: Business Startups and Innovation":
      "Kehulum-aligned focus: study entrepreneurship, startup planning, creativity, and innovation in economic development. Focus on practical decision making and problem solving.",
  },
  Amharic: {
    "ምዕራፍ አንድ: ቋንቋና ማህበረሰብ":
      "Kehulum-aligned focus: connect language, society, and communication in clear written and spoken Amharic. Focus on the main idea, key vocabulary, and how language reflects everyday social life.",
    "ምዕራፍ ሁለት: ባህላዊ ጋብቻ":
      "Kehulum-aligned focus: study cultural identity, values, and social expression through focused Amharic reading and writing. Practice explaining cultural meaning with short, organized responses.",
    "ምዕራፍ ሶስት: ሴቶች እና እድገት":
      "Kehulum-aligned focus: build vocabulary and discussion around women, society, and development using clear supporting examples. Focus on message, interpretation, and thoughtful written expression.",
    "ምዕራፍ አራት: በልዩነት ውስጥ ያለ አንድነት":
      "Kehulum-aligned focus: explore unity, diversity, and social harmony through careful comprehension and reflective writing. Focus on expressing ideas clearly and connecting them to daily life.",
    "ምዕራፍ አምስት: የቋንቋ ለዛ":
      "Kehulum-aligned focus: revise language use, expression, and communication skills in structured Amharic. Focus on sentence meaning, vocabulary choice, and accurate explanation.",
    "ምዕራፍ ስድስት: የታላላቆች ሚና":
      "Kehulum-aligned focus: strengthen reading comprehension and interpretation by identifying message, evidence, and viewpoint in Amharic texts. Focus on short organized responses with precise wording.",
    "ምዕራፍ ሰባት: ረጅም ልቦለድ":
      "Kehulum-aligned focus: study extended literary reading with attention to theme, character, and central message. Focus on summarizing and interpreting literary meaning clearly.",
    "ምዕራፍ ስምንት: ማህበራዊ መገናኛ ብዙኀን":
      "Kehulum-aligned focus: connect media, communication, and society through topic vocabulary and analytical reading. Focus on comparing ideas and expressing them in accurate written Amharic.",
    "ምዕራፍ ዘጠኝ: ሥራ ፈጠራ":
      "Kehulum-aligned focus: build vocabulary and discussion around work, creativity, and contribution in society. Focus on presenting the main message with examples and organized expression.",
  },
};

const createGrade12StructuredNote = (subject: string, chapter: string, introOverride?: string) => {
  const title = cleanChapterTitle(chapter);
  const baseFocus = getFocusNote(subject, chapter);
  const normalizedSubject = subject.toLowerCase();
  const normalizedTitle = title.toLowerCase();

  const subjectDetail = (() => {
    if (normalizedSubject.includes("mathematics")) {
      return "Key ideas: definitions, theorems, and formula selection. Common mistakes: skipping units/conditions and algebra steps. Exam target: full method marks with clear intermediate steps.";
    }
    if (normalizedSubject.includes("biology")) {
      return "Key ideas: processes, structures, and biological cause-effect links. Common mistakes: mixing stages/terms and giving memorized statements without explanation. Exam target: accurate scientific vocabulary plus short applied examples.";
    }
    if (normalizedSubject.includes("chemistry")) {
      return "Key ideas: particles, reactions, and quantitative relationships. Common mistakes: balancing errors, unit conversion mistakes, and weak equation setup. Exam target: correct equations, calculations, and interpretation of reaction behavior.";
    }
    if (normalizedSubject.includes("physics")) {
      return "Key ideas: model assumptions, variable meaning, and law-based reasoning. Common mistakes: wrong formula choice and poor diagram/sign convention use. Exam target: derive, calculate, then explain physical meaning of the result.";
    }
    if (normalizedSubject.includes("english")) {
      return "Key ideas: theme, argument, and vocabulary in context. Common mistakes: listing points without coherence and weak evidence from the text. Exam target: concise paragraph structure (claim, support, conclusion) in reading and writing tasks.";
    }
    if (normalizedSubject.includes("history")) {
      return "Key ideas: chronology, causation, and consequence. Common mistakes: confusing timelines and giving unbalanced one-sided explanations. Exam target: compare events using clear dates, actors, causes, and outcomes.";
    }
    if (normalizedSubject.includes("geography")) {
      return "Key ideas: spatial pattern, process, and human-environment interaction. Common mistakes: describing maps without analysis and missing scale/location language. Exam target: use map/data evidence to explain regional differences and impacts.";
    }
    if (normalizedSubject.includes("economics")) {
      return "Key ideas: incentive, market behavior, and policy trade-offs. Common mistakes: diagram mislabeling and unclear direction of variable changes. Exam target: define concept, apply to scenario, and justify policy implications.";
    }
    if (normalizedSubject.includes("agriculture")) {
      return "Key ideas: production systems, management decisions, and sustainability. Common mistakes: missing sequence of farm operations and weak input-output linkage. Exam target: practical recommendations tied to local farming conditions.";
    }
    if (normalizedSubject.includes("amharic")) {
      return "Key ideas: theme, style, and language use in context. Common mistakes: surface-level summary without critique and weak textual support. Exam target: strong interpretation with organized written expression and accurate vocabulary.";
    }
    if (normalizedSubject.includes("information technology")) {
      return "Key ideas: system components, logic flow, and digital problem solving. Common mistakes: memorizing terms without application and skipping troubleshooting steps. Exam target: explain workflow clearly and justify technical choices.";
    }
    return "Key ideas: chapter concepts and applications. Common mistakes: unclear definitions and skipped reasoning. Exam target: accurate explanation plus context-based application.";
  })();

  const memorizeTargets = (() => {
    if (normalizedSubject.includes("mathematics")) return "Must memorize: core formulas, identities, and theorem conditions used in this chapter.";
    if (normalizedSubject.includes("chemistry")) return "Must memorize: reaction patterns, key definitions, symbols, and unit relationships.";
    if (normalizedSubject.includes("physics")) return "Must memorize: standard laws, variable symbols, and SI unit relations.";
    if (normalizedSubject.includes("biology")) return "Must memorize: process stages, biological terms, and labeled structures.";
    if (normalizedSubject.includes("history")) return "Must memorize: key dates, events, actors, and cause-consequence links.";
    if (normalizedSubject.includes("geography")) return "Must memorize: location terms, processes, and map/data vocabulary.";
    return "Must memorize: chapter keywords, definitions, and high-frequency exam facts.";
  })();

  const practiceTargets = (() => {
    if (normalizedTitle.includes("calculus")) return "Must practice: limit/derivative/integral exercises from direct routine to mixed application questions.";
    if (normalizedTitle.includes("statistics")) return "Must practice: data interpretation, measure selection, and stepwise calculations with justification.";
    if (normalizedTitle.includes("linear programming")) return "Must practice: translating words into inequalities, graphing feasible regions, and testing corner points.";
    if (normalizedTitle.includes("business")) return "Must practice: interest, break-even, annuity, and decision-comparison computations with interpretation.";
    if (normalizedTitle.includes("climate")) return "Must practice: cause-impact-response explanations using local and global examples.";
    if (normalizedTitle.includes("technology") || normalizedTitle.includes("digital")) return "Must practice: workflow explanations, short practical tasks, and troubleshooting logic.";
    return "Must practice: 3 easy, 3 medium, and 2 hard chapter questions with complete written solutions.";
  })();

  const pastExamStyle = (() => {
    if (normalizedSubject.includes("english") || normalizedSubject.includes("amharic")) {
      return "Past exam style: short reading response, one vocabulary-in-context item, and one organized paragraph answer.";
    }
    if (normalizedSubject.includes("history") || normalizedSubject.includes("geography") || normalizedSubject.includes("economics")) {
      return "Past exam style: one definition item, one comparison item, and one explain-with-reason item.";
    }
    return "Past exam style: one definition question, one worked problem, and one application/explanation question.";
  })();

  const conciseFocus = introOverride ?? `Focus: ${baseFocus}`;
  const conciseDeepening = `Key point: ${subjectDetail}`;
  const conciseMemorize = memorizeTargets.replace("Must memorize:", "Remember:");
  const concisePractice = practiceTargets.replace("Must practice:", "Practice:");
  const conciseExam = pastExamStyle.replace("Past exam style:", "Exam style:");

  return [
    conciseFocus,
    conciseDeepening,
    conciseMemorize,
    concisePractice,
    conciseExam,
  ].join(" ");
};

const createGrade11StructuredNote = (subject: string, chapter: string) => {
  const title = cleanChapterTitle(chapter);
  const baseFocus = getFocusNote(subject, chapter);
  const normalizedSubject = subject.toLowerCase();
  const normalizedTitle = title.toLowerCase();
  const hasKeyword = (keywords: string[]) =>
    keywords.some((keyword) => normalizedTitle.includes(keyword));

  const examAngle = (() => {
    if (normalizedSubject.includes("mathematics")) {
      return "Prioritize method marks: show each transformation, substitution, and final check.";
    }
    if (normalizedSubject.includes("physics")) {
      return "Start with known/unknown quantities, select the law, then justify units and direction.";
    }
    if (normalizedSubject.includes("chemistry")) {
      return "Balance equations first, track units carefully, and explain observations with particle ideas.";
    }
    if (normalizedSubject.includes("biology")) {
      return "Use precise scientific terms and explain process steps in correct order.";
    }
    if (normalizedSubject.includes("history")) {
      return "Organize answers by timeline, causes, key actors, and short consequence points.";
    }
    if (normalizedSubject.includes("geography")) {
      return "Link location/pattern to process and impact; use map or data clues in every explanation.";
    }
    if (normalizedSubject.includes("economics")) {
      return "Define the concept, apply it to a scenario, and conclude with policy or market implication.";
    }
    if (normalizedSubject.includes("civic")) {
      return "Connect principles (rights, duties, constitution) to practical school/community situations.";
    }
    if (normalizedSubject.includes("english") || normalizedSubject.includes("amharic")) {
      return "Focus on vocabulary in context, text evidence, and clear paragraph structure.";
    }
    if (normalizedSubject.includes("agriculture")) {
      return "Use step-by-step production logic and tie recommendations to local farming conditions.";
    }
    if (normalizedSubject.includes("information technology")) {
      return "Explain workflows clearly and justify tool/algorithm choices with practical examples.";
    }
    return "Use clear definitions, one worked example, and one real-life application per key idea.";
  })();

  const chapterTargets = (() => {
    if (hasKeyword(["function", "equation", "matrix", "vector", "statistics", "probability"])) {
      return "Chapter targets: master definitions, solve at least 6 mixed problems, and explain one solution line-by-line.";
    }
    if (hasKeyword(["motion", "force", "heat", "electric", "wave", "nuclear"])) {
      return "Chapter targets: derive key formulas, practice 4 numeric questions with unit checks, and draw one labeled concept diagram.";
    }
    if (hasKeyword(["atomic", "bond", "equilibrium", "kinetics", "organic"])) {
      return "Chapter targets: write and balance core reactions, summarize trend/pattern tables, and solve 4 short calculations.";
    }
    if (hasKeyword(["genetics", "enzyme", "population", "human body", "ecology"])) {
      return "Chapter targets: map each process in sequence, memorize technical vocabulary, and answer 3 explain-why questions.";
    }
    if (hasKeyword(["history", "civilization", "ethiopia", "africa", "revolution", "colonial"])) {
      return "Chapter targets: build a mini timeline, list causes vs consequences, and compare two events in 5-6 lines.";
    }
    if (hasKeyword(["climate", "resource", "population", "map", "geospatial"])) {
      return "Chapter targets: interpret one map/table, explain one pattern, and connect it to a local Ethiopian example.";
    }
    if (hasKeyword(["rights", "democracy", "constitution", "governance", "ethics"])) {
      return "Chapter targets: define key civic terms, apply one principle to a real scenario, and defend your reasoning.";
    }
    if (hasKeyword(["demand", "market", "income", "development", "trade", "finance"])) {
      return "Chapter targets: draw one simple economic model, explain variable changes, and conclude with policy impact.";
    }
    if (hasKeyword(["language", "reading", "writing", "poetry", "literature"])) {
      return "Chapter targets: collect 10 core terms, write one short paragraph response, and revise grammar in context.";
    }
    if (hasKeyword(["crop", "animal", "nutrition", "biodiversity", "farming"])) {
      return "Chapter targets: list production steps, identify common constraints, and propose one practical improvement.";
    }
    if (hasKeyword(["database", "web", "programming", "technology", "systems"])) {
      return "Chapter targets: explain the workflow, complete one small hands-on task, and document the output clearly.";
    }
    return "Chapter targets: define key terms, solve sample tasks, and summarize applications in your own words.";
  })();

  const likelyQuestions = (() => {
    if (normalizedSubject.includes("mathematics") || normalizedSubject.includes("physics") || normalizedSubject.includes("chemistry")) {
      return "Likely question types: direct concept checks, stepwise calculations, and application problems with interpretation.";
    }
    if (normalizedSubject.includes("history") || normalizedSubject.includes("civic") || normalizedSubject.includes("economics") || normalizedSubject.includes("geography")) {
      return "Likely question types: definition + explanation, cause-effect analysis, and short comparison/evaluation items.";
    }
    if (normalizedSubject.includes("english") || normalizedSubject.includes("amharic")) {
      return "Likely question types: vocabulary in context, reading comprehension, and short structured writing responses.";
    }
    return "Likely question types: concept checks, scenario-based reasoning, and short application responses.";
  })();

  return [
    `Chapter focus (${title}): ${baseFocus}`,
    `Grade 11 exam angle: ${examAngle}`,
    chapterTargets,
    likelyQuestions,
    "Revision checklist: (1) list 6-10 key terms and definitions, (2) practice 3 representative questions from easy to hard, (3) write a short recap in your own words, (4) self-test with one definition, one reasoning, and one application question.",
  ].join(" ");
};

const createGrade10StructuredNote = (subject: string, chapter: string) => {
  const title = cleanChapterTitle(chapter);
  const baseFocus = getFocusNote(subject, chapter);
  const normalizedSubject = subject.toLowerCase();
  const normalizedTitle = title.toLowerCase();
  const hasKeyword = (keywords: string[]) =>
    keywords.some((keyword) => normalizedTitle.includes(keyword));

  const keyPoint = (() => {
    if (normalizedSubject.includes("mathematics")) {
      return "Focus on formula choice, algebraic accuracy, and explaining what the graph or diagram means.";
    }
    if (normalizedSubject.includes("physics")) {
      return "Start with known and unknown quantities, then choose the correct physical law and unit.";
    }
    if (normalizedSubject.includes("chemistry")) {
      return "Track particles, symbols, equations, and quantities carefully so each explanation stays scientific.";
    }
    if (normalizedSubject.includes("biology")) {
      return "Link structure to function and explain each biological process in the correct order.";
    }
    if (normalizedSubject.includes("english") || normalizedSubject.includes("amharic")) {
      return "Build topic vocabulary first, then use it in clear, organized spoken and written responses.";
    }
    if (normalizedSubject.includes("geography")) {
      return "Explain every pattern through place, process, and impact rather than description alone.";
    }
    if (normalizedSubject.includes("history")) {
      return "Organize revision by timeline, causes, key actors, and consequences to avoid confusion.";
    }
    if (normalizedSubject.includes("civic")) {
      return "Connect principles and rights to real school, community, and national situations.";
    }
    if (normalizedSubject.includes("economics")) {
      return "Define each concept clearly, then connect it to a market or development example.";
    }
    return "Build the chapter from core concepts first, then connect them to examples and applications.";
  })();

  const remember = (() => {
    if (hasKeyword(["function", "polynomial", "logarithmic", "trigonometric", "circle", "coordinate"])) {
      return "Remember: formulas, graph features, notation rules, and the conditions under which each method works.";
    }
    if (hasKeyword(["motion", "equilibrium", "electricity", "magnetism", "waves", "optics"])) {
      return "Remember: variable meanings, SI units, and the physical meaning behind each equation.";
    }
    if (hasKeyword(["stoichiometry", "solutions", "inorganic", "electro", "metals", "hydrocarbons"])) {
      return "Remember: chemical symbols, balanced equations, definitions, and reaction-pattern vocabulary.";
    }
    if (hasKeyword(["plants", "cell", "human biology", "ecological", "biochemical"])) {
      return "Remember: important terms, process stages, and structure-function relationships.";
    }
    if (hasKeyword(["population", "climate", "resource", "geographic", "geospatial"])) {
      return "Remember: map terms, key patterns, and the links between cause, location, and impact.";
    }
    if (hasKeyword(["democracy", "rights", "federalism", "governance", "globalization"])) {
      return "Remember: key civic principles, rights and duties, and one practical example for each idea.";
    }
    if (hasKeyword(["demand", "supply", "production", "market", "finance", "economy"])) {
      return "Remember: core economic terms, diagram logic, and how variables affect one another.";
    }
    return "Remember: chapter vocabulary, definitions, and the most commonly tested ideas.";
  })();

  const practice = (() => {
    if (normalizedSubject.includes("mathematics") || normalizedSubject.includes("physics") || normalizedSubject.includes("chemistry")) {
      return "Practice: solve 2 easy, 2 medium, and 1 challenge problem with full steps and unit checks.";
    }
    if (normalizedSubject.includes("english") || normalizedSubject.includes("amharic")) {
      return "Practice: read one short passage, extract key terms, and write one focused paragraph response.";
    }
    if (normalizedSubject.includes("history") || normalizedSubject.includes("geography") || normalizedSubject.includes("economics") || normalizedSubject.includes("civic")) {
      return "Practice: answer one definition, one explain-why, and one comparison question in complete sentences.";
    }
    return "Practice: review examples, answer short concept questions, and explain one application in your own words.";
  })();

  const examStyle = (() => {
    if (normalizedSubject.includes("mathematics") || normalizedSubject.includes("physics") || normalizedSubject.includes("chemistry")) {
      return "Exam style: one concept check, one structured calculation, and one application/explanation item.";
    }
    if (normalizedSubject.includes("english") || normalizedSubject.includes("amharic")) {
      return "Exam style: vocabulary in context, reading comprehension, and short organized writing.";
    }
    if (normalizedSubject.includes("history") || normalizedSubject.includes("geography") || normalizedSubject.includes("economics") || normalizedSubject.includes("civic")) {
      return "Exam style: one definition item, one cause-effect explanation, and one short comparison response.";
    }
    return "Exam style: concept checks, short explanations, and one real-life application question.";
  })();

  return [
    `Chapter focus (${title}): ${baseFocus}`,
    `Key point: ${keyPoint}`,
    remember,
    practice,
    examStyle,
  ].join(" ");
};

const createGrade9StructuredNote = (subject: string, chapter: string) => {
  const title = cleanChapterTitle(chapter);
  const focus = getFocusNote(subject, chapter);
  const normalizedSubject = subject.toLowerCase();
  const normalizedTitle = title.toLowerCase();
  const hasKeyword = (keywords: string[]) =>
    keywords.some((keyword) => normalizedTitle.includes(keyword));

  if (normalizedSubject.includes("mathematics")) {
    const grade9MathShortNotes: Record<string, string> = {
      "Unit 1: Further on Sets":
        "Focus: • Understand set notation quickly. • Link symbols to Venn diagrams. Key point: • Read U, n, and complement symbols carefully. • Decide operation before calculating. Remember: • n(A U B) = n(A) + n(B) - n(A n B). • Keep universal set in mind. Practice: • Draw at least 3 Venn diagrams. • Solve one counting question from each. Example based: • If n(A)=12, n(B)=9, n(A n B)=4, then n(A U B)=17. • If U={1..10} and A={1,2,3}, then A'={4,5,6,7,8,9,10}. Exam style: • One symbol-meaning item. • One Venn counting problem.\n\nExamples:\n\nExample 1: Set Builder Notation\nProblem: Write the set of even numbers between 1 and 15 using set builder notation.\nGiven: We need even numbers greater than 1 and less than 15.\nSolution:\nStep 1: Identify the pattern - even numbers are divisible by 2\nStep 2: Write the condition - x is even AND 1 < x < 15\nStep 3: Express in set builder notation\nAnswer: {x | x is an even number, 1 < x < 15} = {2, 4, 6, 8, 10, 12, 14}\n\nExample 2: Union and Intersection\nProblem: Given A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7}, find A U B and A n B.\nGiven: A = {1, 2, 3, 4, 5}, B = {4, 5, 6, 7}\nSolution:\nStep 1: A U B = all elements in A OR B (no duplicates)\nStep 2: A U B = {1, 2, 3, 4, 5, 6, 7}\nStep 3: A n B = elements in both A AND B\nStep 4: A n B = {4, 5}\nAnswer: A U B = {1, 2, 3, 4, 5, 6, 7}, A n B = {4, 5}\n\nExample 3: Complement of a Set\nProblem: If U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and A = {2, 4, 6, 8, 10}, find A'.\nGiven: Universal set U and set A\nSolution:\nStep 1: A' means complement of A (elements in U but NOT in A)\nStep 2: List all elements in U: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}\nStep 3: Remove elements that are in A: {2, 4, 6, 8, 10}\nStep 4: Remaining elements form the complement\nAnswer: A' = {1, 3, 5, 7, 9}\n\nExample 4: Counting with Formula\nProblem: If n(A) = 15, n(B) = 12, and n(A n B) = 7, find n(A U B).\nGiven: n(A) = 15, n(B) = 12, n(A n B) = 7\nSolution:\nStep 1: Use the formula: n(A U B) = n(A) + n(B) - n(A n B)\nStep 2: Substitute the given values\nStep 3: n(A U B) = 15 + 12 - 7\nStep 4: n(A U B) = 27 - 7 = 20\nAnswer: n(A U B) = 20\n\nExample 5: Venn Diagram Problem\nProblem: In a class of 30 students, 18 study mathematics, 15 study physics, and 8 study both subjects. How many study neither subject?\nGiven: Total students = 30, n(Math) = 18, n(Physics) = 15, n(both) = 8\nSolution:\nStep 1: Let M = students studying mathematics, P = students studying physics\nStep 2: n(M U P) = n(M) + n(P) - n(M n P)\nStep 3: n(M U P) = 18 + 15 - 8 = 25\nStep 4: Students studying at least one subject = 25\nStep 5: Students studying neither = Total - n(M U P)\nStep 6: Neither = 30 - 25 = 5\nAnswer: 5 students study neither subject\n\nExample 6: Three Set Problem\nProblem: In a survey of 100 people, 65 like coffee, 45 like tea, and 30 like both. How many like only coffee?\nGiven: Total = 100, n(Coffee) = 65, n(Tea) = 45, n(both) = 30\nSolution:\nStep 1: Only coffee = n(Coffee) - n(both)\nStep 2: Only coffee = 65 - 30 = 35\nStep 3: Verification: Only tea = 45 - 30 = 15\nStep 4: Total accounted for = 35 + 15 + 30 = 80\nStep 5: People who like neither = 100 - 80 = 20\nAnswer: 35 people like only coffee",
      "Unit 2: The Number System":
        "Focus: • Classify real number types correctly. • Apply operation rules with confidence. Key point: • Distinguish integers, rationals, and irrationals. • Use signs correctly in mixed expressions. Remember: • Follow operation order strictly. • Check negatives before final answer. Practice: • Simplify 5 mixed expressions. • Recheck each using inverse operation. Example based: • -3 is integer and rational. • sqrt(2) is irrational. • 6 - 2x3 = 0 (not 12) by order of operations. Exam style: • One classification question. • One simplification question.",
      "Unit 3: Solving Equations":
        "Focus: • Solve linear equations step by step. • Avoid skipping algebra moves. Key point: • Keep both sides balanced at every step. • Combine like terms first when needed. Remember: • Substitute to verify the solution. • No verification means possible error. Practice: • Solve at least 5 equations. • Write the check line for each. Example based: • 2x+5=17 => 2x=12 => x=6. • Check: 2(6)+5=17 (correct). Exam style: • Solve one equation fully. • Show final substitution check.",
      "Unit 4: Solving Inequalities":
        "Focus: • Solve inequalities accurately. • Represent solutions clearly. Key point: • Reverse sign when multiplying/dividing by negative. • Keep inequality sign direction consistent. Remember: • Show solution on number line. • Use correct interval direction. Practice: • Solve 4 inequalities. • Graph each on a number line. Example based: • -2x > 8 => x < -4 (sign reverses). • x+3 <= 10 => x <= 7. Exam style: • Solve one inequality. • Convert to interval/graph form.",
      "Unit 5: Introduction to Trigonometry":
        "Focus: • Use trig ratios in right triangles. • Choose the correct ratio from diagram. Key point: • sin = opp/hyp, cos = adj/hyp, tan = opp/adj. • Mark sides relative to given angle. Remember: • Identify opposite/adjacent first. • Then select ratio and solve. Practice: • Solve 4 right-triangle items. • Find one missing side and one angle. Example based: • If opposite=3 and hypotenuse=5, then sin(theta)=3/5. • If tan(theta)=4/3, then opposite:adjacent=4:3. Exam style: • Diagram-based ratio question. • Short application problem.",
      "Unit 6: Regular Polygons":
        "Focus: • Apply interior/exterior angle rules. • Solve polygon angle problems quickly. Key point: • Use regular polygon angle formulas correctly. • Relate number of sides to angle size. Remember: • Exterior angle sum = 360 degrees. • Check if shape is regular first. Practice: • Solve 5 unknown-angle questions. • Include at least one reverse problem (find n). Example based: • Regular hexagon exterior angle = 360/6 = 60 degrees. • Interior angle = 180-60 = 120 degrees. Exam style: • Formula substitution item. • Angle reasoning item.",
      "Unit 7: Congruency and Similarity":
        "Focus: • Tell congruent vs similar figures clearly. • Use triangle criteria correctly. Key point: • Congruent: same shape and size. • Similar: same shape, proportional sides. Remember: • SSS/SAS/ASA support congruency claims. • Match corresponding sides in order. Practice: • Test 4 triangle pairs. • Write one short proof-style reason. Example based: • Sides 3,4,5 and 6,8,10 are similar (ratio 1:2). • Sides 5,6,7 and 5,6,7 are congruent (SSS). Exam style: • Criteria identification question. • Short explanation/proof question.",
      "Unit 8: Vectors in Two Dimensions":
        "Focus: • Represent vectors on the coordinate plane. • Perform basic vector operations. Key point: • A vector has magnitude and direction. • Use components for clean calculations. Remember: • Add/subtract component-wise. • Keep direction signs consistent. Practice: • Draw 3 vector diagrams. • Compute one resultant vector each. Example based: • (2,3)+(1,-4)=(3,-1). • Magnitude of (3,4)=5. Exam style: • Component operation item. • Simple displacement application.",
      "Unit 9: Statistics and Probability":
        "Focus: • Summarize data correctly. • Solve basic probability questions. Key point: • Mean/median/mode describe central tendency. • Probability value is between 0 and 1. Remember: • P(E) = favorable/total outcomes. • Check denominator matches sample space. Practice: • Solve 3 data-table questions. • Solve 3 simple probability questions. Example based: • Data 2,3,3,5 => mean=3.25, median=3, mode=3. • Fair die: P(even)=3/6=1/2. Exam style: • Data interpretation item. • Basic probability calculation item.",
    };

    return (
      grade9MathShortNotes[chapter] ??
      "Focus: Build core Grade 9 math concepts with short daily practice. Key point: Use the right formula and show steps. Remember: Keep units and signs correct. Practice: 2 easy + 2 medium + 1 challenge. Exam style: Concept + worked problem."
    );
  }

  const keyPoint = (() => {
    if (normalizedSubject.includes("physics")) {
      return "Start each problem with known/unknown quantities, then select the correct law and unit.";
    }
    if (normalizedSubject.includes("chemistry")) {
      return "Focus on particles, symbols, and simple reaction logic so calculations and explanations stay accurate.";
    }
    if (normalizedSubject.includes("biology")) {
      return "Learn key structures and processes in sequence, then explain them using precise scientific vocabulary.";
    }
    if (normalizedSubject.includes("english") || normalizedSubject.includes("amharic")) {
      return "Track core vocabulary and message, then practice clear short responses in speaking and writing.";
    }
    if (normalizedSubject.includes("geography")) {
      return "Connect place, process, and impact using map terms and Ethiopian examples whenever possible.";
    }
    if (normalizedSubject.includes("history")) {
      return "Organize revision by timeline, major actors, causes, and consequences to avoid confusion.";
    }
    if (normalizedSubject.includes("citizenship") || normalizedSubject.includes("civic")) {
      return "Link values and rights to everyday school/community situations and explain your reasoning clearly.";
    }
    if (normalizedSubject.includes("economics")) {
      return "Master basic terms first, then practice using simple market and decision-making examples.";
    }
    if (normalizedSubject.includes("information technology")) {
      return "Focus on practical workflows and safe digital habits, not just memorized definitions.";
    }
    if (normalizedSubject.includes("health and physical education")) {
      return "Balance theory and practice: understand concepts, then perform drills with correct technique and safety.";
    }
    return "Build fundamentals first, then practice applications with short explanations in your own words.";
  })();

  const remember = (() => {
    if (hasKeyword(["equation", "inequalit", "trigon", "vector", "statistics", "probability"])) {
      return "Remember: key formulas, notation rules, and units before solving mixed questions.";
    }
    if (hasKeyword(["motion", "force", "energy", "temperature", "wave", "sound", "machine"])) {
      return "Remember: variable meanings, SI units, and the physical meaning of each formula.";
    }
    if (hasKeyword(["atom", "periodic", "bond", "measurement", "scientific methods"])) {
      return "Remember: symbols, particle charges, periodic trends, and core lab measurement ideas.";
    }
    if (hasKeyword(["cells", "reproduction", "health", "nutrition", "ecology", "organisms"])) {
      return "Remember: process stages, important terms, and structure-function relationships.";
    }
    if (hasKeyword(["history", "civilizations", "ethiopia", "africa", "revolutions"])) {
      return "Remember: key dates, places, people, and cause-consequence links.";
    }
    if (hasKeyword(["constitution", "ethical", "unity", "foreign relations", "problem-solving"])) {
      return "Remember: major civic principles, rights/duties, and practical examples.";
    }
    if (hasKeyword(["network", "security", "programming", "files", "software", "multimedia"])) {
      return "Remember: core terms, system parts, and safe-use rules.";
    }
    return "Remember: chapter vocabulary, definitions, and the most tested concepts.";
  })();

  const practice = (() => {
    if (normalizedSubject.includes("mathematics") || normalizedSubject.includes("physics") || normalizedSubject.includes("chemistry")) {
      return "Practice: solve 2 easy + 2 medium + 1 challenge question and show full steps.";
    }
    if (normalizedSubject.includes("english") || normalizedSubject.includes("amharic")) {
      return "Practice: read one short text, extract key terms, and write one concise paragraph response.";
    }
    if (normalizedSubject.includes("history") || normalizedSubject.includes("geography") || normalizedSubject.includes("economics") || normalizedSubject.includes("citizenship")) {
      return "Practice: answer one definition, one explain-why, and one compare question in complete sentences.";
    }
    if (normalizedSubject.includes("information technology")) {
      return "Practice: complete one mini hands-on task and explain the workflow step-by-step.";
    }
    if (normalizedSubject.includes("health and physical education")) {
      return "Practice: combine one theory recap with one supervised skill drill and self-evaluation.";
    }
    return "Practice: review examples, solve short tasks, and self-check using one concept and one application question.";
  })();

  const examStyle = (() => {
    if (normalizedSubject.includes("mathematics") || normalizedSubject.includes("physics") || normalizedSubject.includes("chemistry")) {
      return "Exam style: define the concept, solve one structured problem, and justify your final answer.";
    }
    if (normalizedSubject.includes("english") || normalizedSubject.includes("amharic")) {
      return "Exam style: vocabulary-in-context, reading comprehension, and short organized writing tasks.";
    }
    if (normalizedSubject.includes("history") || normalizedSubject.includes("geography") || normalizedSubject.includes("economics") || normalizedSubject.includes("citizenship")) {
      return "Exam style: one definition item, one cause-effect explanation, and one short comparison item.";
    }
    if (normalizedSubject.includes("information technology")) {
      return "Exam style: concept check plus a practical workflow or troubleshooting scenario.";
    }
    if (normalizedSubject.includes("health and physical education")) {
      return "Exam style: basic theory questions plus correct demonstration or analysis of technique and safety.";
    }
    return "Exam style: concept checks, short explanation items, and one practical application question.";
  })();

  const exampleBased = (() => {
    if (normalizedSubject.includes("physics")) {
      return "Example based: • If distance=20 m and time=4 s, speed=5 m/s. • If force=10 N on 2 kg, acceleration=5 m/s^2.";
    }
    if (normalizedSubject.includes("chemistry")) {
      return "Example based: • Proton has +1 charge, electron has -1 charge. • Na loses one electron while Cl gains one electron in ionic bonding.";
    }
    if (normalizedSubject.includes("biology")) {
      return "Example based: • Mitosis supports growth by producing identical cells. • Balanced diet plus hygiene reduces many common diseases.";
    }
    if (normalizedSubject.includes("english")) {
      return "Example based: • Topic sentence: 'Road safety is a shared responsibility.' • Supporting detail: 'Using seat belts reduces severe injury risk.'";
    }
    if (normalizedSubject.includes("amharic")) {
      return "Example based: • ትክክለኛ ቃላት በአውድ ውስጥ ተጠቀም። • አጭር አንቀጽ በመነሻ-ዋና ሐሳብ-መደምደሚያ አቀራረብ ጻፍ።";
    }
    if (normalizedSubject.includes("geography")) {
      return "Example based: • Highland areas are generally cooler than lowlands. • Population tends to cluster where water, roads, and jobs are available.";
    }
    if (normalizedSubject.includes("history")) {
      return "Example based: • A timeline separates event order from event impact. • One event can have both immediate and long-term consequences.";
    }
    if (normalizedSubject.includes("citizenship") || normalizedSubject.includes("civic")) {
      return "Example based: • Reporting cyberbullying is a digital civic responsibility. • Respecting diversity strengthens national unity.";
    }
    if (normalizedSubject.includes("economics")) {
      return "Example based: • When price rises, demand usually falls. • Saving part of weekly income supports future investment.";
    }
    if (normalizedSubject.includes("information technology")) {
      return "Example based: • Strong password + 2FA improves account security. • A simple algorithm can be tested with sample inputs before coding.";
    }
    if (normalizedSubject.includes("health and physical education")) {
      return "Example based: • Warm-up before sprinting reduces injury risk. • Team communication improves passing accuracy in football.";
    }
    return "Example based: • Connect each concept to one real-life case. • Explain one solved example in your own words.";
  })();

  return [
    `Focus: • ${focus}`,
    `Key point: • ${keyPoint}`,
    remember.replace(/^Remember:\s*/i, "Remember: • "),
    practice.replace(/^Practice:\s*/i, "Practice: • "),
    exampleBased,
    examStyle.replace(/^Exam style:\s*/i, "Exam style: • "),
  ].join(" ");
};

export const getChapterNote = (grade: number, subject: string, chapter: string) => {
  if (grade === 12) {
    const specific = grade12SpecificChapterNotes[subject]?.[chapter];
    if (specific) return createGrade12StructuredNote(subject, chapter, specific);
    return createGrade12StructuredNote(subject, chapter);
  }

  if (grade === 11) {
    const specific = grade11SpecificChapterNotes[subject]?.[chapter];
    if (subject.toLowerCase() === "mathematics") {
      if (specific) return createGrade12StructuredNote(subject, chapter, specific);
      return createGrade12StructuredNote(subject, chapter);
    }
    if (specific) return createGrade11StructuredNote(subject, chapter).replace(
      `Chapter focus (${cleanChapterTitle(chapter)}): ${getFocusNote(subject, chapter)}`,
      `Chapter focus (${cleanChapterTitle(chapter)}): ${specific}`
    );
    return createGrade11StructuredNote(subject, chapter);
  }

  if (grade === 10) {
    const specific = grade10SpecificChapterNotes[subject]?.[chapter];
    if (specific) {
      return createGrade10StructuredNote(subject, chapter).replace(
        `Chapter focus (${cleanChapterTitle(chapter)}): ${getFocusNote(subject, chapter)}`,
        `Chapter focus (${cleanChapterTitle(chapter)}): ${specific}`
      );
    }
    return createGrade10StructuredNote(subject, chapter);
  }

  if (grade === 9) {
    return createGrade9StructuredNote(subject, chapter);
  }

  return getFocusNote(subject, chapter);
};
