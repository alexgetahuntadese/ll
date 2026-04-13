import { grade9Subjects } from "./grade9Subjects";
import { grade9EnglishQuestions } from "./grade9EnglishQuestions";

export interface Grade9Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  example: string;
  difficulty: "Easy" | "Medium" | "Hard";
  chapter: string;
  subject: string;
  points?: number;
  timeLimit?: number;
  hints?: string[];
  badges?: string[];
  questionType?: "multiple-choice" | "true-false" | "fill-blank" | "matching" | "word-puzzle" | "drag-drop";
  streakBonus?: number;
}

type CuratedGrade9QuestionBank = Record<string, Record<string, Grade9Question[]>>;

const curatedGrade9QuestionBanks: CuratedGrade9QuestionBank = {
  English: Object.fromEntries(
    Object.entries(grade9EnglishQuestions).map(([chapter, questions]) => [
      chapter,
      questions.map((question) => ({
        ...question,
        example: "",
        chapter,
        subject: "English",
      })),
    ]),
  ),
};

type Descriptor = {
  concept: string;
  skill: string;
  application: string;
  evidence: string;
  misconception: string;
  tool: string;
};

const cleanTitle = (chapter: string) =>
  chapter
    .replace(/^Unit\s+\d+:\s*/i, "")
    .replace(/^Chapter\s+\d+:\s*/i, "")
    .replace(/^ምዕራፍ\s*[^:]+:\s*/i, "")
    .trim();

const slugify = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const rotate = (items: string[], seed: number) => {
  if (!items.length) return [];
  const shift = seed % items.length;
  return [...items.slice(shift), ...items.slice(0, shift)];
};

const makeOptions = (correct: string, distractors: string[], seed: number) =>
  rotate([correct, ...distractors.filter((item) => item !== correct)].slice(0, 4), seed);

const inferDescriptor = (subject: string, chapter: string): Descriptor => {
  const title = cleanTitle(chapter).toLowerCase();

  const pick = (
    concept: string,
    skill: string,
    application: string,
    evidence: string,
    misconception: string,
    tool: string,
  ): Descriptor => ({ concept, skill, application, evidence, misconception, tool });

  if (subject === "Mathematics") {
    if (title.includes("set")) return pick("set notation and operations", "classify and compare grouped items", "organizing information with Venn diagrams", "symbols, sets, and worked examples", "confusing union with intersection", "Venn diagrams");
    if (title.includes("number")) return pick("number systems and numerical relationships", "compare and operate on numbers accurately", "estimating and reasoning with quantities", "number lines and examples", "treating all number types as identical", "number lines");
    if (title.includes("equation")) return pick("solving equations with inverse operations", "find unknown values step by step", "working out missing quantities", "balanced algebraic steps", "changing one side without balancing the other", "worked solutions");
    if (title.includes("inequalit")) return pick("solving and interpreting inequalities", "reason about solution sets", "describing limits and allowed values", "sign rules and number-line models", "forgetting to reverse the sign after multiplying by a negative", "number lines");
    if (title.includes("trigon")) return pick("trigonometric ratios in right triangles", "relate sides to angles", "measuring heights and distances", "triangle diagrams and ratio work", "mixing up opposite and adjacent sides", "triangle diagrams");
    if (title.includes("polygon")) return pick("regular polygon properties", "analyze angles and symmetry", "recognizing shape patterns in designs", "geometric diagrams and formulas", "assuming all polygons are regular", "shape diagrams");
    if (title.includes("similarity") || title.includes("congru")) return pick("congruence and similarity", "compare shapes by size and angle relationships", "scaling and matching shapes", "labeled figures and proportions", "treating similar shapes as congruent", "diagram markings");
    if (title.includes("vector")) return pick("vectors as magnitude and direction", "represent directed quantities clearly", "describing displacement and force", "vector arrows and examples", "ignoring direction", "vector sketches");
    return pick("statistics and probability", "interpret data and chance", "reading graphs and predicting outcomes", "tables, graphs, and simple events", "treating probability as certainty", "graphs");
  }

  if (subject === "Physics") {
    if (title.includes("society")) return pick("physics in daily life and society", "connect science to technology", "explaining how physics helps people", "local technology examples", "thinking physics is only theory", "case studies");
    if (title.includes("quantit")) return pick("measurement and physical quantities", "use correct units and instruments", "recording observations accurately", "SI units and measurements", "mixing units", "measuring instruments");
    if (title.includes("motion")) return pick("straight-line motion", "relate distance, speed, and time", "analyzing journeys and movement", "graphs and motion formulas", "confusing speed with acceleration", "motion graphs");
    if (title.includes("force") || title.includes("energy")) return pick("force, work, and energy", "connect force to movement", "explaining lifting, pushing, and motion", "force diagrams and examples", "thinking work happens whenever force exists", "force diagrams");
    if (title.includes("machine")) return pick("simple machines and mechanical advantage", "explain how machines reduce effort", "using levers and pulleys", "machine diagrams and examples", "thinking machines remove all work", "machine models");
    if (title.includes("sound") || title.includes("oscillation")) return pick("sound and oscillation", "describe vibration and wave behavior", "explaining music and communication", "wave examples and diagrams", "confusing loudness with pitch", "wave diagrams");
    return pick("temperature and thermometry", "measure and compare thermal states", "reading thermometers and explaining heat effects", "temperature scales and readings", "treating heat and temperature as the same", "thermometers");
  }

  if (subject === "Chemistry") {
    if (title.includes("importance")) return pick("chemistry in everyday life", "identify chemical change around us", "linking chemistry to materials and health", "daily-life chemical examples", "thinking chemistry only belongs in labs", "material samples");
    if (title.includes("measurement") || title.includes("scientific")) return pick("measurement and scientific method", "plan accurate chemical investigations", "taking careful observations in experiments", "units, apparatus, and procedure steps", "ignoring accuracy", "lab procedures");
    if (title.includes("atom")) return pick("atomic structure", "describe particles inside atoms", "explaining why substances differ", "particle models and diagrams", "treating atoms as solid unchanging balls", "particle diagrams");
    if (title.includes("periodic")) return pick("periodic classification", "group elements by similar properties", "using the periodic table to predict behavior", "groups, periods, and examples", "assuming nearby elements are identical", "periodic table");
    return pick("chemical bonding", "explain why atoms join", "connecting bond type to material properties", "electron arrangements and compounds", "thinking atoms bond randomly", "electron-dot models");
  }

  if (subject === "Biology") {
    if (title.includes("classification") || title.includes("organisms")) return pick("classification of living organisms", "group organisms by their features", "identifying living things in the environment", "traits, examples, and tables", "grouping only by appearance", "classification charts");
    if (title.includes("cell")) return pick("cells as the basic unit of life", "link structure to function", "explaining growth and repair", "cell diagrams and organelles", "thinking all cells are identical", "cell diagrams");
    if (title.includes("reproduction")) return pick("reproduction and continuity of life", "explain how organisms produce offspring", "understanding life cycles and heredity", "reproductive processes and examples", "confusing reproduction with growth", "life-cycle charts");
    if (title.includes("health") || title.includes("nutrition") || title.includes("disease")) return pick("human health, nutrition, and disease prevention", "connect body needs to healthy living", "making informed health choices", "food groups and prevention examples", "thinking medicine alone creates health", "health charts");
    if (title.includes("ecology")) return pick("ecology and environmental relationships", "explain how organisms interact with surroundings", "understanding ecosystems and conservation", "food chains and habitat examples", "seeing organisms as isolated", "ecosystem diagrams");
    return pick("biology as the study of life", "describe what biology explains", "connecting life science to health and environment", "examples from living organisms", "thinking biology is only about animals", "observation tasks");
  }

  if (subject === "English") {
    if (title.includes("study")) return pick("study skills in English", "use reading and note-taking strategies", "improving school learning habits", "notes, summaries, and text analysis", "thinking studying means rereading only", "study plans");
    if (title.includes("traffic")) return pick("traffic accidents and safety language", "discuss causes and prevention clearly", "sharing road-safety ideas", "cause-effect language and examples", "describing accidents without discussing prevention", "discussion prompts");
    if (title.includes("park")) return pick("national parks and conservation themes", "describe nature and protected areas", "talking about wildlife and tourism", "descriptive vocabulary and passages", "treating parks only as recreation spaces", "reading passages");
    if (title.includes("horticulture")) return pick("horticulture and plant-based livelihoods", "read and write about production and farming", "describing crops and gardens", "topic vocabulary and informational texts", "treating horticulture as decoration only", "topic vocabulary");
    if (title.includes("poverty")) return pick("poverty and social issues", "express causes, effects, and solutions", "writing about development challenges", "opinion writing and examples", "listing problems without analysis", "paragraph outlines");
    if (title.includes("community")) return pick("community service and responsibility", "describe support and cooperation", "talking about service projects", "dialogues and reports", "seeing service as unimportant", "report writing");
    if (title.includes("disease")) return pick("communicable diseases and prevention messages", "use health vocabulary in context", "sharing advice about public health", "health texts and warnings", "treating prevention as optional", "awareness posters");
    if (title.includes("equity")) return pick("fairness and equity", "express balanced opinions on justice", "discussing equal treatment in society", "discussion prompts and persuasive language", "confusing fairness with identical treatment", "debate notes");
    if (title.includes("internet")) return pick("the internet and digital communication", "analyze benefits and risks of online life", "talking about technology in society", "technology texts and vocabulary", "seeing the internet as only entertainment", "ICT vocabulary");
    return pick("urban life and city experiences", "read and discuss community life clearly", "describing services and opportunities in towns", "theme vocabulary and reading passages", "memorizing vocabulary without using it", "reading passages");
  }

  if (subject === "Amharic") {
    if (title.includes("ቋንቋ")) return pick("የአማርኛ ቋንቋ አወቃቀርና አጠቃቀም", "ሀሳብ በቋንቋ እንዴት እንደሚገለጽ በአውድ መተንተን", "ቃላትንና ዓረፍተ ነገሮችን በትክክል በንግግርና በጽሑፍ መጠቀም", "ጽሑፎች፣ ሰዋሰው እና አውዳዊ ምሳሌዎች", "የቋንቋ ትምህርትን የተነጠሉ ቃላት ማስታወስ ብቻ መሆኑን መመልከት", "ንባብና ጽሑፍ ልምምድ");
    if (title.includes("ሥራ")) return pick("በሥራ እና በትጋት ዙሪያ የሚያተኩር ቋንቋ", "ጽሑፎች ሥራን፣ ኃላፊነትንና አስተዋጽኦን እንዴት እንደሚያቀርቡ መተንተን", "በአማርኛ የሥራ ባህልና ማህበራዊ ኃላፊነትን መግለጽ", "አጫጭር ጽሑፎች፣ ቃላት እና ተግባራዊ ጽሑፍ", "ምዕራፉን የሥራ ስሞች ዝርዝር ብቻ መመልከት", "መመሪያ ያለው ድርሰት");
    if (title.includes("ማዕድን")) return pick("ስለ ማዕድንና የተፈጥሮ ሀብት የሚናገሩ የአማርኛ ጽሑፎች", "ቋንቋ ሀብትን፣ ማውጣትንና ማህበራዊ ተፅእኖን እንዴት እንደሚያብራራ መተንተን", "ልማትንና የሀብት አጠቃቀምን በግልጽ አማርኛ መወያየት", "መረጃ ሰጪ ጽሑፎችና ርእሰ ጉዳይ ቃላት", "ጉዳዩን ሳይረዱ በቃላት ላይ ብቻ ማተኮር", "የርእስ ጉዳይ ንባብ");
    if (title.includes("ልቦለድ")) return pick("የልቦለድ ጥናት", "ገጸ ባህሪ፣ ጭብጥና ተረት አቀራረብን መተንተን", "ሥነ ጽሑፋዊ ጽሑፎችን መተርጎም", "የተረት አወቃቀርና ምሳሌዎች", "ትርጓሜ ሳይሰጥ ተረቱን ብቻ መድገም", "ሥነ ጽሑፍ ትንተና");
    if (title.includes("ቃላዊ")) return pick("የቃላዊ ሥነ ጽሑፍ ጥናት", "ምሳሌዎችን፣ ተረቶችንና የአፍ ሥነ ጽሑፍ አቀራረብን በአውድ መተንተን", "የቃል ሥነ ጽሑፍን ከባህልና ከዕለት ተዕለት ሕይወት ጋር ማገናኘት", "ምሳሌዎች፣ ተረቶችና የአቀራረብ ምሳሌዎች", "የቃላዊ ሥነ ጽሑፍን ትርጉም የሌለው መዝናኛ ብቻ ማየት", "የአፍ ጽሑፍ ትንተና");
    if (title.includes("ግጥም")) return pick("የግጥም ጥናት", "ምስልና ጭብጥን መተርጎም", "ለግጥሞች በአስተዋይነት ምላሽ መስጠት", "ዘይቤያዊ አገላለጽና የስንኝ ትንተና", "ግጥምን ቀጥተኛ ትርጉም ብቻ በመስጠት መንበብ", "የግጥም ትንተና");
    if (title.includes("ድራማ")) return pick("የድራማ እና የትዕይንት ጥናት", "ውይይትና ግጭትን መተንተን", "የመድረክ እንቅስቃሴንና ሚናን መረዳት", "ትዕይንት ምሳሌዎችና ስክሪፕቶች", "ድራማን እንደ ተራ ትረካ ማንበብ", "የስክሪፕት ጥናት");
    if (title.includes("ማህበራዊ ሚዲያ") || title.includes("ተግባቦት")) return pick("ማህበራዊ ሚዲያና ተግባቦት", "ቋንቋን በዲጂታል አውድ በኃላፊነት መጠቀም", "በመስመር ላይ መድረኮች ላይ ሥነ ምግባራዊ መልዕክት መላክ", "የመልዕክት ምሳሌዎችና የተቀባይ ግንዛቤ", "የመስመር ላይ ቋንቋ አጠቃቀም ተፅእኖ የለውም ብሎ መመልከት", "ዲጂታል ጽሑፎች");
    if (title.includes("ኮቪድ") || title.includes("ኮሮና")) return pick("የጤና መረጃ አቀራረብ በአማርኛ", "ግልጽ የህዝብ ግንዛቤ መልዕክቶችን ማቅረብ", "መከላከልንና እንክብካቤን መግለጽ", "የጤና ማስጠንቀቂያዎችና ምሳሌዎች", "የህዝብ ግንዛቤ መልዕክትን ከቋንቋ ትምህርት ውጭ መቆጠር", "መረጃ ሰጪ ጽሑፎች");
    return pick(`${cleanTitle(chapter)} በአማርኛ`, "ቋንቋንና አገላለጽን በአውድ መተርጎም", "የቋንቋ ትምህርትን ከማህበራዊ ሕይወት ጋር ማገናኘት", "ጽሑፎች፣ ቃላትና ምሳሌዎች", "የቋንቋ ትምህርትን ማስታወስ ብቻ እንደሆነ መመልከት", "ንባብና ጽሑፍ ልምምድ");
  }

  if (subject === "Geography") {
    if (title.includes("topography") || title.includes("geological")) return pick("Ethiopia's landforms and geological history", "describe major physical features", "explaining mountains, valleys, and rift systems", "maps and landform examples", "treating topography as unchanging", "relief maps");
    if (title.includes("climate")) return pick("the climate of Ethiopia", "explain climatic patterns and controls", "relating altitude to weather differences", "climate graphs and regional examples", "confusing weather with climate", "climate maps");
    if (title.includes("resource")) return pick("Ethiopia's natural resources", "identify major resources and their uses", "linking resources to development", "resource examples and maps", "seeing resources only as materials to extract", "resource maps");
    if (title.includes("population")) return pick("population and demographic patterns", "interpret distribution and change", "understanding migration and settlement", "population maps and data", "assuming people are evenly distributed", "population data");
    if (title.includes("economic") || title.includes("cultural")) return pick("economic and cultural activities", "connect place to livelihood", "explaining farming, trade, and culture", "regional examples and case studies", "separating culture completely from geography", "regional case studies");
    if (title.includes("interaction")) return pick("human-natural environment interaction", "explain how people use and change environments", "analyzing land use and adaptation", "environmental examples and maps", "seeing humans and environment as unrelated", "local examples");
    if (title.includes("issues") || title.includes("concerns")) return pick("contemporary geographic issues", "analyze current environmental and spatial challenges", "discussing drought, erosion, or urban growth", "issue-based examples and maps", "thinking geographic issues are only physical", "issue case studies");
    return pick("geographic inquiry skills", "collect and interpret geographic information", "using maps and data accurately", "symbols, scale, and observations", "ignoring map scale and symbols", "map work");
  }

  if (subject === "History") {
    if (title.includes("discipline") || title.includes("evolution")) return pick("history as evidence-based study and human evolution", "use sources to understand the past", "building timelines from evidence", "historical sources and milestones", "thinking history is only memorizing dates", "source analysis");
    if (title.includes("ancient")) return pick("ancient world civilizations", "compare early civilizations and contributions", "explaining writing, trade, and state formation", "timelines and civilization examples", "treating all civilizations as identical", "comparative tables");
    if (title.includes("ethiopia") || title.includes("horn")) return pick("peoples and states in Ethiopia and the Horn", "trace political and social development", "connecting local history to regional change", "maps, kingdoms, and timelines", "isolating Ethiopian history from the region", "regional timelines");
    if (title.includes("middle ages") || title.includes("early modern")) return pick("the middle ages and early modern world", "identify major global transformations", "explaining religion, trade, and power shifts", "timelines and key events", "seeing the period as static", "timelines");
    if (title.includes("africa")) return pick("African peoples, states, and outside relations", "analyze African historical development", "discussing trade, contact, and power", "African case studies and maps", "studying Africa only through outside influence", "regional case studies");
    return pick("the age of revolutions", "explain causes and impacts of revolutionary change", "connecting ideas, power, and social transformation", "cause-effect charts and timelines", "reducing revolutions to single events", "cause-effect charts");
  }

  if (subject === "Citizenship Education") {
    if (title.includes("ethical")) return pick("ethical values and responsible behavior", "judge actions using civic values", "making responsible choices in school and society", "case studies and examples", "treating ethics as opinion only", "reflection tasks");
    if (title.includes("digital")) return pick("digital citizenship and responsible technology use", "apply citizenship values online", "using media safely and respectfully", "digital scenarios and examples", "thinking online actions have no civic impact", "digital scenarios");
    if (title.includes("constitution")) return pick("constitution and constitutionalism", "explain how constitutions guide society", "connecting rights to institutions", "rights-and-duties examples", "thinking a constitution matters only to leaders", "rights charts");
    if (title.includes("indigenous")) return pick("indigenous knowledge in civic life", "recognize local knowledge as valuable", "respecting traditional practices and solutions", "community examples", "treating indigenous knowledge as outdated", "community case studies");
    if (title.includes("multicultural")) return pick("multiculturalism in Ethiopia", "respect diversity while supporting inclusion", "living peacefully in diverse communities", "dialogue examples and case studies", "thinking diversity weakens unity automatically", "dialogue tasks");
    if (title.includes("unity")) return pick("national unity through diversity", "balance common identity with difference", "building cooperation across communities", "shared-value examples", "confusing unity with uniformity", "discussion tasks");
    if (title.includes("problem-solving")) return pick("problem-solving in civic life", "analyze issues and choose solutions", "handling school and community conflicts", "decision steps and examples", "reacting without analysis", "decision frameworks");
    return pick("foreign relations in East Africa", "explain cooperation among neighboring states", "understanding diplomacy and regional peace", "regional examples and maps", "thinking foreign relations never affect ordinary people", "regional case studies");
  }

  if (subject === "Economics") {
    if (title.includes("introducing")) return pick("basic economic ideas and choice", "use economic terms correctly", "thinking about needs, wants, and scarcity", "daily-life decision examples", "thinking economics is only money", "decision charts");
    if (title.includes("system")) return pick("basic economic problems and systems", "compare how societies organize production", "explaining what, how, and for whom to produce", "system comparisons and examples", "assuming all economies work the same way", "comparison charts");
    if (title.includes("resource") || title.includes("market")) return pick("economic resources and markets", "identify factors of production", "linking land, labor, capital, and enterprise to output", "market examples and roles", "thinking markets are only physical places", "market examples");
    if (title.includes("demand") || title.includes("supply")) return pick("demand and supply", "explain how prices and quantities change", "interpreting buyer and seller behavior", "graphs and market examples", "thinking demand and supply move for the same reason", "graphs");
    if (title.includes("cost") || title.includes("production")) return pick("production and cost", "relate inputs, output, and expense", "understanding business choices", "cost examples and production cases", "assuming more production always means more profit", "cost tables");
    if (title.includes("money")) return pick("money and its functions", "explain why money is useful", "comparing barter and exchange", "functions of money and transactions", "thinking money is only paper and coins", "exchange examples");
    if (title.includes("macro")) return pick("basic macroeconomics", "describe economy-wide performance", "discussing growth, inflation, and employment", "national indicators and examples", "confusing personal finance with macroeconomics", "indicator charts");
    return pick("entrepreneurship and innovation", "identify opportunity and planning", "starting small businesses and solving problems", "business ideas and examples", "thinking entrepreneurship is only for the wealthy", "business planning");
  }

  if (subject === "Health and Physical Education") {
    if (title.includes("society")) return pick("sport and society", "connect physical activity to social values", "understanding teamwork and discipline", "examples from school and community sport", "seeing sport as entertainment only", "case studies");
    if (title.includes("fitness")) return pick("health and physical fitness", "explain components of fitness", "planning exercise and wellness habits", "fitness routines and health examples", "equating fitness only with body size", "fitness routines");
    if (title.includes("athletics")) return pick("athletics skills and events", "understand running, jumping, and throwing", "improving performance through technique", "event rules and drills", "thinking speed alone is enough", "skill drills");
    if (title.includes("football")) return pick("football skills and teamwork", "apply game rules and techniques", "passing and moving in team play", "match situations and drills", "treating football as individual play only", "match scenarios");
    if (title.includes("volleyball")) return pick("volleyball skills and rotation", "explain serving, passing, and teamwork", "working together in a court game", "court positions and examples", "watching the ball without understanding rotation", "court diagrams");
    if (title.includes("basketball")) return pick("basketball fundamentals", "understand dribbling, passing, and shooting", "making quick decisions in play", "court movement and drills", "thinking scoring is the only goal", "game scenarios");
    if (title.includes("handball")) return pick("handball techniques and coordination", "apply passing and shooting ideas", "moving effectively in a fast team game", "team-play examples", "confusing handball with unrelated games", "basic drills");
    return pick("self-defense and sport ethics", "connect safety, discipline, and fair play", "using physical skill responsibly", "ethical scenarios and safety rules", "thinking self-defense encourages aggression", "scenario analysis");
  }

  if (subject === "Information Technology") {
    if (title.includes("file")) return pick("file and folder organization", "store and retrieve files efficiently", "managing school documents properly", "folder structures and naming examples", "saving files without organization", "folder systems");
    if (title.includes("network")) return pick("computer networks", "explain how devices connect and share data", "understanding local networks and the internet", "network diagrams and components", "thinking all networks are the same", "network diagrams");
    if (title.includes("software")) return pick("application software", "choose software for specific tasks", "using digital tools for school work", "software categories and examples", "confusing application software with the operating system", "task matching");
    if (title.includes("image") || title.includes("multimedia")) return pick("image processing and multimedia", "create and interpret digital media", "combining text, sound, and visuals", "media examples and editing tasks", "thinking multimedia is only entertainment", "editing tasks");
    if (title.includes("security")) return pick("information and computer security", "identify threats and safe practices", "protecting passwords, devices, and data", "security scenarios and examples", "thinking security is only for experts", "security checklists");
    return pick("programming fundamentals", "break problems into clear instructions", "using logic to solve simple tasks", "algorithms, flowcharts, and examples", "thinking programming is only memorizing code", "flowcharts");
  }

  return pick(`${cleanTitle(chapter).toLowerCase()} in Grade 9 ${subject.toLowerCase()}`, `explain the key ideas in ${cleanTitle(chapter).toLowerCase()}`, `connecting ${cleanTitle(chapter).toLowerCase()} to everyday learning`, "clear examples and guided practice", `memorizing ${cleanTitle(chapter).toLowerCase()} without understanding it`, "notes and examples");
};

const peersFor = (subjectName: string, chapter: string) => {
  const subject = grade9Subjects.find((item) => item.name === subjectName);
  return (subject?.chapters || [])
    .filter((item) => item !== chapter)
    .map((item) => ({ chapter: item, title: cleanTitle(item), descriptor: inferDescriptor(subjectName, item) }));
};

const otherSubjectsFor = (subjectName: string) =>
  grade9Subjects.filter((item) => item.name !== subjectName).map((item) => item.name);

const buildChapterQuestions = (subject: string, chapter: string): Grade9Question[] => {
  const title = cleanTitle(chapter);
  const descriptor = inferDescriptor(subject, chapter);
  const peers = peersFor(subject, chapter);
  const fallbackPeer = { chapter, title, descriptor };
  const peer = (index: number) => (peers.length ? peers[index % peers.length] : fallbackPeer);
  const others = otherSubjectsFor(subject);

  const make = (
    difficulty: "Easy" | "Medium" | "Hard",
    num: number,
    question: string,
    correct: string,
    distractors: string[],
    explanation: string,
    example: string,
    questionType: "multiple-choice" | "true-false" | "fill-blank" | "matching" | "word-puzzle" | "drag-drop" | "" = "multiple-choice",
    points?: number,
    timeLimit?: number,
    hints?: string[],
    badges?: string[],
    streakBonus?: number,
  ): Grade9Question => ({
    id: `${slugify(subject)}-${slugify(chapter)}-${difficulty.toLowerCase()}-${num}`,
    question,
    options: makeOptions(correct, distractors, num),
    correct,
    explanation,
    example,
    difficulty,
    chapter,
    subject,
    points: points || (difficulty === "Easy" ? 10 : difficulty === "Medium" ? 20 : 30),
    timeLimit: timeLimit || (difficulty === "Easy" ? 30 : difficulty === "Medium" ? 45 : 60),
    hints: hints || [],
    badges: badges || [],
    questionType: questionType || "multiple-choice",
    streakBonus: streakBonus || 0,
  });

  if (subject === "Amharic") {
    return [
      make("Easy", 1, `"${title}" የሚገኘው በየትኛው የ9ኛ ክፍል ትምህርት ነው?`, subject, others, `"${title}" በ9ኛ ክፍል አማርኛ ትምህርት ውስጥ ይገኛል።`, ""),
      make("Easy", 2, `"${title}" ዋና ትኩረቱ ምንድን ነው?`, descriptor.concept, peers.map((item) => item.descriptor.concept), `ይህ ምዕራፍ በዋናነት ${descriptor.concept} ላይ ያተኩራል።`, ""),
      make("Easy", 3, `"${title}" ጋር በትክክል የሚስማማው የመማር ግብ የቱ ነው?`, descriptor.skill, peers.map((item) => item.descriptor.skill), `ተማሪዎች በዚህ ምዕራፍ ${descriptor.skill} እንዲችሉ ይማራሉ።`, ""),
      make("Easy", 4, `"${title}" ጋር በተግባር በጣም የሚገናኘው ሁኔታ የቱ ነው?`, descriptor.application, peers.map((item) => item.descriptor.application), `ይህ ምዕራፍ በተግባር ${descriptor.application} ጋር ይዛመዳል።`, ""),
      make("Easy", 5, `"${title}" ለመከለስ በጣም የሚረዳው መሣሪያ የቱ ነው?`, descriptor.tool, peers.map((item) => item.descriptor.tool), `${descriptor.tool} ይህን ምዕራፍ ለመከለስ ጥሩ መነሻ ነው።`, ""),
      make("Easy", 6, `"${title}" በአጭሩ በጣም የሚገልጸው ዓረፍተ ነገር የቱ ነው?`, `${descriptor.concept} እንዲገባ ያግዛል።`, peers.slice(0, 3).map((item) => `${item.descriptor.concept} እንዲገባ ያግዛል።`), `ይህ ምዕራፉን በትክክል የሚገልጽ መልስ ነው።`, ""),
      make("Easy", 7, `"${title}" በደንብ የተማረ ተማሪ ምን ማድረግ መቻል አለበት?`, descriptor.skill, peers.map((item) => item.descriptor.skill), `ይህ ምዕራፍ ተማሪዎችን ${descriptor.skill} እንዲችሉ ያዘጋጃል።`, ""),
      make("Easy", 8, `"${title}" ውስጥ በብዛት የሚታየው የማስረጃ አይነት የቱ ነው?`, descriptor.evidence, peers.map((item) => item.descriptor.evidence), `${descriptor.evidence} የምዕራፉን ግንዛቤ ይደግፋል።`, ""),
      make("Easy", 9, `${peer(0).descriptor.concept} ላይ የበለጠ የሚያተኩረው ከአንድ ትምህርት ውስጥ የትኛው ሌላ ምዕራፍ ነው?`, peer(0).title, [peer(1).title, peer(2).title, title], `"${peer(0).title}" ለዚያ ትኩረት የበለጠ ይስማማል።`, ""),
      make("Easy", 10, `"${title}" ላይ የሚከሰት የተለመደ ስህተት የቱ ነው?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `ይህ ስህተት ከምዕራፉ ዋና ሐሳብ ጋር ይጋጫል።`, ""),

      make("Medium", 1, `አንድ ተማሪ ${descriptor.application} ማድረግ ይፈልጋል። መጀመሪያ የትኛውን ምዕራፍ ሊከልስ ይገባል?`, title, [peer(0).title, peer(1).title, peer(2).title], `"${title}" በቀጥታ ${descriptor.concept} ላይ ስለሚያተኩር ተገቢ ነው።`, ""),
      make("Medium", 2, `"${title}" ጋር በተሻለ ሁኔታ የሚስማማው የክለሳ እቅድ የቱ ነው?`, `${descriptor.evidence} በመማር ${descriptor.skill} መለማመድ`, peers.map((item) => `${item.descriptor.evidence} በመማር ${item.descriptor.skill} መለማመድ`), `ይህ እቅድ እውቀትንና ተግባርን አንድ ላይ ያዋህዳል።`, ""),
      make("Medium", 3, `ትክክለኛው ንጽጽር የቱ ነው?`, `"${title}" በ${descriptor.concept} ላይ ያተኩራል፣ "${peer(0).title}" ደግሞ በ${peer(0).descriptor.concept} ላይ ያተኩራል።`, [`"${title}" እና "${peer(0).title}" ሙሉ በሙሉ አንድ ናቸው።`, `"${title}" የ${subject} አይደለም።`, `"${peer(0).title}" ከ${subject} ጋር ግንኙነት የለውም።`], `ሁለቱም ተያያዥ ቢሆኑም ትኩረታቸው አይመሳሰልም።`, ""),
      make("Medium", 4, `"${title}" ውስጥ ከፍ ያለ ውጤት የሚያስመጣ መልስ የቱ ይሆናል?`, `${descriptor.evidence} በመጠቀም ${descriptor.skill} የሚያሳይ መልስ`, peers.map((item) => `${item.descriptor.evidence} በመጠቀም ${item.descriptor.skill} የሚያሳይ መልስ`), `ጠንካራ መልሶች ከምዕራፉ ትኩረት ጋር የሚስማማ ማስረጃ ይጠቀማሉ።`, ""),
      make("Medium", 5, `አንድ ተማሪ "${title}" ን ቢያስታውስም በተግባር ማዋል ካልቻለ የጎደለው ምንድን ነው?`, "ተግባራዊ ግንዛቤና ምክንያታዊ አስተሳሰብ", ["ተጨማሪ መቅዳት", "የምዕራፉ ርዕስ ብቻ", "ተጨማሪ ገጾች"], `ይህ ምዕራፍ ማስታወስ ብቻ ሳይሆን መረዳትና መተግበር ይጠይቃል።`, ""),
      make("Medium", 6, `ከትምህርት ቤት ሥራዎች ውስጥ ከ"${title}" ጋር በተሻለ ሁኔታ የሚስማማው የቱ ነው?`, `${descriptor.tool} በመጠቀም ${descriptor.skill} የሚያሳይ ሥራ`, peers.map((item) => `${item.descriptor.tool} በመጠቀም ${item.descriptor.skill} የሚያሳይ ሥራ`), `ተገቢ የክፍል ሥራ የምዕራፉን ዘዴና ውጤት አንድ ላይ ያዛል።`, ""),
      make("Medium", 7, `"${title}" ዓላማውን በተሻለ ሁኔታ የሚገልጸው የቱ ነው?`, `${descriptor.concept} በ${descriptor.evidence} በመጠቀም እንዲጠቀሙ ያግዛል።`, peers.map((item) => `${item.descriptor.concept} በ${item.descriptor.evidence} በመጠቀም እንዲጠቀሙ ያግዛል።`), `ይህ አላማንና ዘዴን አንድ ላይ ያሳያል።`, ""),
      make("Medium", 8, `ከ"${title}" ጋር የተያያዘ ያልተረዳ አስተሳሰብን የሚያሳይ የቱ ነው?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `ይህ ስህተት በምዕራፉ ውስጥ ደካማ መልስ ያስከትላል።`, ""),
      make("Medium", 9, `"${title}" ጋር በቀጥታ የሚዛመደው ውጤት የቱ ነው?`, `ተማሪዎች ${descriptor.skill} በተግባራዊ ሁኔታ ሊያሳዩ ይችላሉ።`, peers.map((item) => `ተማሪዎች ${item.descriptor.skill} በተግባራዊ ሁኔታ ሊያሳዩ ይችላሉ።`), `ዋናው ውጤት እውቀትን በተግባር ማሳየት ነው።`, ""),
      make("Medium", 10, `"${title}" ውስጥ በብዛት ሊቀርብ የሚችል ጥያቄ የቱ ነው?`, `${descriptor.concept} በ${descriptor.application} እንዴት እንጠቀማለን?`, peers.map((item) => `${item.descriptor.concept} በ${item.descriptor.application} እንዴት እንጠቀማለን?`), `ይህ ጥያቄ ከምዕራፉ ዋና ሐሳብ ጋር በቀጥታ ይዛመዳል።`, ""),

      make("Hard", 1, `አንድ ተማሪ "${title}" ማለት እውነታዎችን ማስታወስ ብቻ ነው ይላል። ከሚከተሉት ውስጥ በጣም ጠንካራው ምላሽ የቱ ነው?`, `አይደለም። ${descriptor.skill} ማድረግን እና ሀሳቦችን ከ${descriptor.application} ጋር ማገናኘትንም ይጠይቃል።`, [`አዎ። ማስታወስ ብቻ በቂ ነው።`, `አዎ። "${title}" ተግባራዊ ዋጋ የለውም።`, `አይደለም። ምዕራፉን መተው ይሻላል።`], `ጥሩ ውጤት ለማምጣት መረዳትና ተግባራዊ አጠቃቀም አስፈላጊ ናቸው።`, ""),
      make("Hard", 2, `"${title}" ጥልቅ ግንዛቤ እንዳለ ለመለካት በጣም የሚመጥነው የፈተና አይነት የቱ ነው?`, `${descriptor.evidence} በመጠቀም ${descriptor.skill} እንደሚችሉ እንዲያሳዩ መጠየቅ`, peers.map((item) => `${item.descriptor.evidence} በመጠቀም ${item.descriptor.skill} እንደሚችሉ እንዲያሳዩ መጠየቅ`), `ይህ ስራ ማስታወስ ብቻ ሳይሆን እውነተኛ ግንዛቤን ይመለከታል።`, ""),
      make("Hard", 3, `"${title}" ዓላማውን በማጠቃለል በጣም የሚገልጸው የቱ ነው?`, `ተማሪዎች ከትርጉም መግለጫ ወደ ${descriptor.concept} በተግባር መጠቀም ሊሸጋገሩ አለባቸው።`, peers.map((item) => `ተማሪዎች ከትርጉም መግለጫ ወደ ${item.descriptor.concept} በተግባር መጠቀም ሊሸጋገሩ አለባቸው።`), `ይህ ምዕራፉ የሚፈልገውን ከእውቀት ወደ ተግባር ሽግግር ይገልጻል።`, ""),
      make("Hard", 4, `"${title}" ላይ የተመሠረተ መልስን በጣም የሚያዳክም የምክንያት ስህተት የቱ ነው?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `ይህ ስህተት የምዕራፉን ትክክለኛ ግንዛቤ በቀጥታ ያበላሻል።`, ""),
      make("Hard", 5, `"${title}" ን ከተማሪዎች ዕለታዊ ሕይወት ጋር ለማገናኘት በጣም የሚመጥነው የፕሮጀክት አይነት የቱ ነው?`, `ተማሪዎች ${descriptor.skill} በ${descriptor.application} እንዲያሳዩ የሚያግዙ የአካባቢ ምሳሌዎችን መጠቀም`, peers.map((item) => `ተማሪዎች ${item.descriptor.skill} በ${item.descriptor.application} እንዲያሳዩ የሚያግዙ የአካባቢ ምሳሌዎችን መጠቀም`), `ጠንካራ ፕሮጀክት ምዕራፉን ተግባራዊና የአካባቢ ልምድ ጋር ያገናኛል።`, ""),
      make("Hard", 6, `ለምን "${descriptor.tool}" ከበደንብ መቅዳት ይልቅ ለ"${title}" የበለጠ ይጠቅማል?`, `ምክንያቱም ይህ ምዕራፍ ተማሪዎች ${descriptor.skill} እንዲያደርጉ ይፈልጋል፣ ማስታወስ ብቻን አይደለም።`, [`ምክንያቱም መቅዳት ሁልጊዜ ግንዛቤን ያረጋግጣል።`, `ምክንያቱም መሣሪያዎች በ9ኛ ክፍል አያስፈልጉም።`, `ምክንያቱም "${title}" የምክንያት ጥያቄዎች የሉትም።`], `ይህ ምዕራፍ ንቁ አጠቃቀምን ይፈልጋል እንጂ ተራ መቅዳትን አይደለም።`, ""),
      make("Hard", 7, `በጣም ትክክለኛው ንጽጽር የቱ ነው?`, `"${title}" በ${descriptor.concept} ላይ ያተኩራል፣ "${peer(1).title}" ደግሞ በ${peer(1).descriptor.concept} ላይ ያተኩራል።`, [`"${title}" እና "${peer(1).title}" ሁልጊዜ አንድ አይነት መልስ ይፈልጋሉ።`, `"${peer(1).title}" የ${subject} አይደለም።`, `"${title}" ግልጽ ትኩረት የለውም።`], `ጠንካራ ተማሪዎች ተያያዥ ምዕራፎችን በትክክል ይለያያሉ።`, ""),
      make("Hard", 8, `"${title}" ላይ ያለ ያልተረዳ አስተሳሰብን ለማጋለጥ በጣም የሚረዳው የመምህር ጥያቄ የቱ ነው?`, `${descriptor.concept} ከ${peer(2).descriptor.concept} እንዴት ይለያል?`, [`የምዕራፉን ርዕስ በደንብ ጻፍ።`, `የገጹን ቁጥር ብቻ ተናገር።`, `የትምህርቱን ስም ብቻ ጥራ።`], `የንጽጽር ጥያቄዎች ተማሪው የሀሳቦችን ወሰን በትክክል እንደተረዳ ያሳያሉ።`, ""),
      make("Hard", 9, `"${title}" በ9ኛ ክፍል ሥርዓተ ትምህርት ውስጥ መኖሩ ለምን አስፈላጊ ነው?`, `ተማሪዎች ${descriptor.skill} እንዲችሉ እና ትምህርታቸውን ከክፍል ውጭ እንዲጠቀሙበት ያግዛል።`, [`የምዕራፎችን ብዛት ለመጨመር ብቻ ነው።`, `ለፈተና ብቻ ነው የሚጠቅመው።`, `ጥልቅ ግንዛቤ ሳይሰጥ ቃላትን ብቻ ያክላል።`], `ዋናው ጥቅም ተላላፊ የሆነ ግንዛቤን ማበረታታት ነው።`, ""),
      make("Hard", 10, `"${title}" የሚያቀርበውን ችግኝ በተሻለ ሁኔታ የሚመልሰው መልስ የቱ ነው?`, `${descriptor.evidence} እና ${descriptor.tool} በመጠቀም ተማሪዎች ${descriptor.skill} እንደሚችሉ ማሳየት`, peers.map((item) => `${item.descriptor.evidence} እና ${item.descriptor.tool} በመጠቀም ተማሪዎች ${item.descriptor.skill} እንደሚችሉ ማሳየት`), `ይህ መልስ ዘዴን፣ ማስረጃን እና ውጤትን አንድ ላይ ያቀርባል።`, ""),
    ];
  }

  if (subject === "Mathematics" && title.includes("Further on Sets")) {
    return [
      make("Easy", 1, `Which Grade 9 subject includes the chapter "${title}"?`, subject, others, `"${title}" is part of Grade 9 ${subject}.`, "Example: Set theory is fundamental in Mathematics curriculum."),
      make("Easy", 2, `What is the main focus of "${title}"?`, descriptor.concept, peers.map((item) => item.descriptor.concept), `This chapter mainly teaches ${descriptor.concept}.`, "Example: Learning to use set notation symbols like ∈, ⊂, ∪, ∩"),
      make("Easy", 3, `Which learning goal best matches "${title}"?`, descriptor.skill, peers.map((item) => item.descriptor.skill), `Students study this chapter to ${descriptor.skill}.`, "Example: Students should be able to classify numbers as elements or subsets of sets"),
      make("Easy", 4, `Which real-life context best connects with "${title}"?`, descriptor.application, peers.map((item) => item.descriptor.application), `The chapter connects best with ${descriptor.application}.`, "Example: Using Venn diagrams to organize survey data about student preferences"),
      make("Easy", 5, `Which resource is most useful when revising "${title}"?`, descriptor.tool, peers.map((item) => item.descriptor.tool), `${descriptor.tool} is a strong starting point for this chapter.`, "Example: Drawing Venn diagrams to visualize set relationships"),
      make("Easy", 6, `Which statement best summarizes "${title}"?`, `It develops understanding of ${descriptor.concept}.`, peers.slice(0, 3).map((item) => `It develops understanding of ${item.descriptor.concept}.`), `That option best captures the chapter theme.`, "Example: The chapter builds foundation for abstract mathematical thinking"),
      make("Easy", 7, `A student who studies "${title}" well should be able to:`, descriptor.skill, peers.map((item) => item.descriptor.skill), `The chapter is designed to help learners ${descriptor.skill}.`, "Example: Create Venn diagrams showing relationships between different number sets"),
      make("Easy", 8, `Which kind of evidence appears most often in "${title}"?`, descriptor.evidence, peers.map((item) => item.descriptor.evidence), `${descriptor.evidence} supports understanding in this chapter.`, "Example: Worked problems showing step-by-step set operations"),
      make("Easy", 9, `Which chapter from the same subject focuses more on ${peer(0).descriptor.concept}?`, peer(0).title, [peer(1).title, peer(2).title, title], `"${peer(0).title}" is the better match for that focus.`, "Example: Number systems chapter builds on set concepts from this chapter"),
      make("Easy", 10, `What is a common mistake in "${title}"?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `That misconception directly conflicts with the chapter's main ideas.`, "Example: Students often confuse union (∪) with intersection (∩) operations"),

      make("Medium", 1, `A learner wants to ${descriptor.application}. Which chapter should they revise first?`, title, [peer(0).title, peer(1).title, peer(2).title], `"${title}" is the best chapter because it focuses on ${descriptor.concept}.`, "Example: To organize data into categories, start with set theory basics"),
      make("Medium", 2, `Which revision plan best fits "${title}"?`, `Study ${descriptor.evidence} and practice how to ${descriptor.skill}.`, peers.map((item) => `Study ${item.descriptor.evidence} and practice how to ${item.descriptor.skill}.`), `This plan combines knowledge and application.`, "Example: Review set notation rules, then practice drawing Venn diagrams"),
      make("Medium", 3, `Which comparison is correct?`, `"${title}" focuses on ${descriptor.concept}, while "${peer(0).title}" focuses on ${peer(0).descriptor.concept}.`, [`"${title}" and "${peer(0).title}" focus on exactly the same idea.`, `"${title}" is not part of ${subject}.`, `"${peer(0).title}" is unrelated to ${subject}.`], `The two chapters are related but not identical.`, "Example: Sets deal with grouping, while equations deal with solving unknowns"),
      make("Medium", 4, `Which answer would most likely score well in "${title}"?`, `An answer that uses ${descriptor.evidence} to ${descriptor.skill}.`, peers.map((item) => `An answer that uses ${item.descriptor.evidence} to ${item.descriptor.skill}.`), `Strong answers use the right evidence for the chapter focus.`, "Example: Using proper set notation and Venn diagrams in solutions"),
      make("Medium", 5, `If a student memorizes "${title}" but cannot apply it, what is missing?`, "Application and reasoning", ["Only more copying", "Only a longer title", "Only more page numbers"], `The chapter expects understanding in use, not memorization alone.`, "Example: Student knows symbols but can't solve real set problems"),
      make("Medium", 6, `Which school task best fits "${title}"?`, `A task that helps students ${descriptor.skill} using ${descriptor.tool}.`, peers.map((item) => `A task that helps students ${item.descriptor.skill} using ${item.descriptor.tool}.`), `The best tasks match both the chapter method and outcome.`, "Example: Survey class on hobbies and create Venn diagram of results"),
      make("Medium", 7, `Which statement best explains the purpose of "${title}"?`, `It helps students use ${descriptor.concept} through ${descriptor.evidence}.`, peers.map((item) => `It helps students use ${item.descriptor.concept} through ${item.descriptor.evidence}.`), `That statement captures the purpose and method together.`, "Example: Teaching logical thinking through set operations"),
      make("Medium", 8, `Which mistake shows misunderstanding of "${title}"?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `That mistake would lead to weak answers in this chapter.`, "Example: Writing A ∪ B when A ∩ B is required"),
      make("Medium", 9, `Which outcome belongs most directly to "${title}"?`, `Learners can ${descriptor.skill} in realistic situations.`, peers.map((item) => `Learners can ${item.descriptor.skill} in realistic situations.`), `The strongest outcome is applied understanding.`, "Example: Students can organize real data using set theory"),
      make("Medium", 10, `Which chapter question is most likely in "${title}"?`, `How can we use ${descriptor.concept} in ${descriptor.application}?`, peers.map((item) => `How can we use ${item.descriptor.concept} in ${item.descriptor.application}?`), `That question stays closest to the chapter's core idea.`, "Example: How can set theory help organize survey data?"),

      make("Hard", 1, `A student says "${title}" is only about memorizing facts. Which reply is strongest?`, `No. It also requires students to ${descriptor.skill} and connect ideas to ${descriptor.application}.`, [`Yes. Memorization alone is enough for this chapter.`, `Yes. "${title}" has no practical value.`, `No. The chapter should be skipped entirely.`], `Good performance requires understanding and application together.`, "Example: Set theory is used in computer science, statistics, and logic"),
      make("Hard", 2, `Which assessment would measure deep understanding of "${title}"?`, `Ask students to use ${descriptor.evidence} to show how they can ${descriptor.skill}.`, peers.map((item) => `Ask students to use ${item.descriptor.evidence} to show how they can ${item.descriptor.skill}.`), `That task checks real understanding rather than recall alone.`, "Example: Given a real-world problem, design a set-based solution"),
      make("Hard", 3, `Which conclusion best synthesizes the purpose of "${title}"?`, `Students should move from definitions to using ${descriptor.concept} in order to ${descriptor.application}.`, peers.map((item) => `Students should move from definitions to using ${item.descriptor.concept} in order to ${item.descriptor.application}.`), `This is the strongest synthesis of the chapter's goal.`, "Example: Progress from learning symbols to applying set logic"),
      make("Hard", 4, `Which reasoning error would weaken an answer from "${title}" most?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `That error directly blocks accurate reasoning in the chapter.`, "Example: Assuming all set operations are commutative without verification"),
      make("Hard", 5, `Which project best connects "${title}" to student life?`, `Use local examples that help learners ${descriptor.skill} through ${descriptor.application}.`, peers.map((item) => `Use local examples that help learners ${item.descriptor.skill} through ${item.descriptor.application}.`), `The strongest project makes the chapter practical and local.`, "Example: Analyze school club memberships using set theory"),
      make("Hard", 6, `Why is "${descriptor.tool}" better than rote copying for "${title}"?`, `Because the chapter expects students to ${descriptor.skill}, not only repeat notes.`, [`Because copying always proves understanding.`, `Because tools never matter in Grade 9.`, `Because "${title}" has no reasoning tasks.`], `This chapter needs active use of ideas, not passive repetition.`, "Example: Drawing Venn diagrams builds visual and logical thinking"),
      make("Hard", 7, `Which contrast is most accurate?`, `"${title}" builds ${descriptor.concept}, while "${peer(1).title}" develops ${peer(1).descriptor.concept}.`, [`"${title}" and "${peer(1).title}" always require identical answers.`, `"${peer(1).title}" is not part of ${subject}.`, `"${title}" has no clear focus.`], `Strong learners distinguish neighboring chapters by exact focus.`, "Example: Sets group objects, while equations find unknown values"),
      make("Hard", 8, `Which teacher prompt would best reveal misunderstanding in "${title}"?`, `Explain how ${descriptor.concept} differs from ${peer(2).descriptor.concept}.`, [`Copy the chapter title neatly.`, `State the page number only.`, `Name the subject without explanation.`], `Comparison questions expose whether learners really understand boundaries between ideas.`, "Example: How do set operations differ from arithmetic operations?"),
      make("Hard", 9, `What is the strongest reason to keep "${title}" in the Grade 9 curriculum?`, `It helps students ${descriptor.skill} and apply learning beyond the classroom.`, [`It only increases the number of units.`, `It matters only for exams.`, `It adds vocabulary without deeper understanding.`], `The chapter matters because it develops transferable understanding.`, "Example: Set theory foundation helps in computer programming and data analysis"),
      make("Hard", 10, `Which answer best responds to the challenge of "${title}"?`, `Use ${descriptor.evidence} and ${descriptor.tool} to show how learners can ${descriptor.skill}.`, peers.map((item) => `Use ${item.descriptor.evidence} and ${item.descriptor.tool} to show how learners can ${item.descriptor.skill}.`), `That answer combines method, evidence, and outcome.`, "Example: Combine Venn diagrams with set notation to solve classification problems"),
    ];
  }

  if (subject === "Mathematics") {
    return [
      make("Easy", 1, `Which Grade 9 subject includes "${title}"?`, subject, others, `"${title}" is part of Grade 9 ${subject}.`, "Example: Mathematics builds logical and quantitative thinking."),
      make("Easy", 2, `What is the main focus of "${title}"?`, descriptor.concept, peers.map((item) => item.descriptor.concept), `This chapter mainly teaches ${descriptor.concept}.`, "Example: Understand rules first, then apply them."),
      make("Easy", 3, `Which learning goal best matches "${title}"?`, descriptor.skill, peers.map((item) => item.descriptor.skill), `Students study this chapter to ${descriptor.skill}.`, "Example: Solve accurately and explain each step."),
      make("Easy", 4, `Which real-life context best connects with "${title}"?`, descriptor.application, peers.map((item) => item.descriptor.application), `The chapter connects best with ${descriptor.application}.`, "Example: Making decisions using quantities and comparisons."),
      make("Easy", 5, `Which study tool is most helpful for "${title}"?`, descriptor.tool, peers.map((item) => item.descriptor.tool), `${descriptor.tool} is useful for mastering this chapter.`, "Example: Diagrams and worked examples."),
      make("Easy", 6, `Which statement best summarizes "${title}"?`, `It builds understanding of ${descriptor.concept}.`, peers.slice(0, 3).map((item) => `It builds understanding of ${item.descriptor.concept}.`), `That statement best captures this chapter.`, "Example: From concept to practice."),
      make("Easy", 7, `A student who learned "${title}" well should be able to:`, descriptor.skill, peers.map((item) => item.descriptor.skill), `The chapter helps students ${descriptor.skill}.`, "Example: Apply math ideas to class and real life."),
      make("Easy", 8, `Which type of evidence appears most often in "${title}"?`, descriptor.evidence, peers.map((item) => item.descriptor.evidence), `${descriptor.evidence} is central in this chapter.`, "Example: Step-by-step solutions."),
      make("Easy", 9, `Which chapter from the same subject focuses more on ${peer(0).descriptor.concept}?`, peer(0).title, [peer(1).title, peer(2).title, title], `"${peer(0).title}" is the best match for that focus.`, "Example: Related topic with different emphasis."),
      make("Easy", 10, `What is a common mistake in "${title}"?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `That misconception can lead to incorrect answers.`, "Example: Using the wrong rule at the wrong step."),

      make("Medium", 1, `A learner wants to ${descriptor.application}. Which chapter should they revise first?`, title, [peer(0).title, peer(1).title, peer(2).title], `"${title}" should be revised first because it targets ${descriptor.concept}.\n\nStep-by-step explanation:\nStep 1: Identify the specific skill needed - ${descriptor.skill}\nStep 2: Match the skill to the chapter concept - ${descriptor.concept}\nStep 3: Verify the application area - ${descriptor.application}\nStep 4: Confirm "${title}" directly addresses this combination\nStep 5: Check that other chapters focus on different concepts\nTherefore, "${title}" is the correct choice for this specific learning goal.`, "Example: Start with the method you actually need."),
      make("Medium", 2, `Which revision plan best fits "${title}"?`, `Practice ${descriptor.evidence} and explain how to ${descriptor.skill}.`, peers.map((item) => `Practice ${item.descriptor.evidence} and explain how to ${item.descriptor.skill}.`), `Strong revision combines method and explanation.\n\nStep-by-step explanation:\nStep 1: Identify the key evidence type - ${descriptor.evidence}\nStep 2: Connect evidence to the main skill - ${descriptor.skill}\nStep 3: Plan practice sessions with both elements\nStep 4: Include explanation writing in each practice\nStep 5: Review both accuracy and clarity of explanations\nThis approach ensures deep understanding, not just mechanical practice.`, "Example: Solve and justify each step."),
      make("Medium", 3, `Which comparison is correct?`, `"${title}" focuses on ${descriptor.concept}, while "${peer(0).title}" focuses on ${peer(0).descriptor.concept}.`, [`"${title}" and "${peer(0).title}" are exactly the same.`, `"${title}" is not part of ${subject}.`, `"${peer(0).title}" is unrelated to ${subject}.`], `These chapters are related but not identical.`, "Example: Similar area, different goal."),
      make("Medium", 4, `Which answer would likely score highest in "${title}"?`, `An answer using ${descriptor.evidence} to demonstrate ${descriptor.skill}.`, peers.map((item) => `An answer using ${item.descriptor.evidence} to demonstrate ${item.descriptor.skill}.`), `High-scoring answers show process and correctness.\n\nStep-by-step explanation:\nStep 1: Identify what makes answers high-scoring - both correct and well-explained\nStep 2: Analyze the role of evidence - ${descriptor.evidence} shows the method\nStep 3: Connect evidence to skill demonstration - ${descriptor.skill} proves understanding\nStep 4: Consider why correctness alone is insufficient - doesn't show reasoning\nStep 5: Evaluate the proposed answer - combines evidence and skill\nStep 6: Conclusion - this answer demonstrates both process and result\nTherefore, answers using evidence to demonstrate skill achieve the highest scores.`, "Example: Correct method with clear reasoning."),
      make("Medium", 5, `If a student memorizes "${title}" but cannot apply it, what is missing?`, "Application and reasoning", ["Only more copying", "Only more page numbers", "Only a longer summary"], `Mathematics needs transfer of knowledge, not recall only.`, "Example: Knowing formulas but choosing the wrong one."),
      make("Medium", 6, `How does "${title}" support problem-solving in other topics?`, `It strengthens ${descriptor.skill} through ${descriptor.concept}.`, peers.map((item) => `It strengthens ${item.descriptor.skill} through ${item.descriptor.concept}.`), `This chapter builds transferable habits of thinking.`, "Example: Better reasoning across algebra and geometry."),
      make("Medium", 7, `Which classroom task best fits "${title}"?`, `A task that uses ${descriptor.tool} to apply ${descriptor.concept}.`, peers.map((item) => `A task that uses ${item.descriptor.tool} to apply ${item.descriptor.concept}.`), `Good tasks align tools, concepts, and outcomes.`, "Example: Real-world context with mathematical model."),
      make("Medium", 8, `Which error most clearly shows misunderstanding of "${title}"?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `That error conflicts with the chapter's core method.`, "Example: Incorrect operation order."),
      make("Medium", 9, `How can "${title}" help in everyday decisions?`, `By using ${descriptor.concept} for ${descriptor.application}.`, peers.map((item) => `By using ${item.descriptor.concept} for ${item.descriptor.application}.`), `This chapter connects math to practical choices.`, "Example: Comparing options using clear reasoning."),
      make("Medium", 10, `Which question is most likely from "${title}"?`, `How can we apply ${descriptor.concept} to ${descriptor.application}?`, peers.map((item) => `How can we apply ${item.descriptor.concept} to ${item.descriptor.application}?`), `That question directly reflects the chapter objective.`, "Example: Solve a context-based task using the chapter method."),

      make("Hard", 1, `A student says "${title}" is just memorization. Which response is strongest?`, `It also requires students to ${descriptor.skill} and justify each step.`, [`Memorization alone is enough.`, `"${title}" has no practical value.`, `The chapter can be skipped.`], `Mathematical understanding is shown through application and explanation.\n\nStep-by-step explanation:\nStep 1: Analyze the claim - "${title}" is just memorization\nStep 2: Identify what memorization includes - recalling facts, formulas, procedures\nStep 3: Identify what mathematical understanding requires - ${descriptor.skill}\nStep 4: Consider the role of justification - explaining reasoning and steps\nStep 5: Evaluate the evidence - ${descriptor.evidence} shows process, not just results\nStep 6: Connect to application - ${descriptor.application} needs transfer of knowledge\nStep 7: Conclusion - True understanding combines knowledge, skill, and explanation\nTherefore, the strongest response emphasizes both application and justification.`, "Example: Correct answer plus valid reasoning."),
      make("Hard", 2, `Which assessment best measures deep understanding of "${title}"?`, `A task requiring ${descriptor.evidence} and application of ${descriptor.skill}.`, peers.map((item) => `A task requiring ${item.descriptor.evidence} and application of ${item.descriptor.skill}.`), `This checks reasoning quality, not recall.\n\nStep-by-step explanation:\nStep 1: Define deep understanding - ability to apply, analyze, and explain\nStep 2: Identify evidence of understanding - ${descriptor.evidence}\nStep 3: Connect evidence to skill application - ${descriptor.skill}\nStep 4: Analyze why recall is insufficient - doesn't show transfer or reasoning\nStep 5: Consider assessment design - must combine process and outcome\nStep 6: Evaluate the proposed task - requires both evidence and application\nStep 7: Conclusion - this task best reveals true understanding\nTherefore, an assessment combining evidence and skill application most effectively measures deep understanding.`, "Example: Multi-step question with explanation."),
      make("Hard", 3, `Which conclusion best synthesizes the purpose of "${title}"?`, `Students should use ${descriptor.concept} to solve and explain ${descriptor.application} problems.`, peers.map((item) => `Students should use ${item.descriptor.concept} to solve and explain ${item.descriptor.application} problems.`), `This combines concept, method, and outcome.`, "Example: From rule knowledge to real problem solving."),
      make("Hard", 4, `Which reasoning error would weaken an answer from "${title}" most?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `That error breaks the logic required in this chapter.`, "Example: Applying a rule without checking conditions."),
      make("Hard", 5, `Which project best links "${title}" to student life?`, `A project using ${descriptor.concept} to improve ${descriptor.application}.`, peers.map((item) => `A project using ${item.descriptor.concept} to improve ${item.descriptor.application}.`), `The strongest project shows clear real-world transfer.`, "Example: Analyze school data to support decisions."),
      make("Hard", 6, `Why is "${descriptor.tool}" better than copying notes for "${title}"?`, `Because it helps learners ${descriptor.skill} through active reasoning.`, [`Because copying always proves understanding.`, `Because tools do not matter in mathematics.`, `Because "${title}" has no reasoning tasks.`], `Active use of the right tool improves understanding.`, "Example: Visual reasoning before formal steps."),
      make("Hard", 7, `Which contrast is most accurate?`, `"${title}" develops ${descriptor.concept}, while "${peer(1).title}" develops ${peer(1).descriptor.concept}.`, [`Both chapters always require identical answers.`, `"${peer(1).title}" is not in ${subject}.`, `"${title}" has no clear focus.`], `Strong learners distinguish nearby concepts precisely.`, "Example: Different methods for different chapter goals."),
      make("Hard", 8, `Which teacher prompt best reveals misunderstanding in "${title}"?`, `Explain how ${descriptor.concept} differs from ${peer(2).descriptor.concept}.`, [`Copy the chapter title only.`, `Write the page number only.`, `Name the subject without explanation.`], `Comparison prompts reveal concept boundaries clearly.`, "Example: Explain why one method fits and another does not."),
      make("Hard", 9, `What is the strongest reason to keep "${title}" in Grade 9?`, `It helps students ${descriptor.skill} and apply mathematics beyond exams.`, [`It only increases chapter count.`, `It matters only for tests.`, `It adds vocabulary without understanding.`], `The chapter builds transferable reasoning for future study.`, "Example: Better analytical thinking across subjects."),
      make("Hard", 10, `Which answer best responds to challenges in "${title}"?`, `Use ${descriptor.evidence} and ${descriptor.tool} to demonstrate ${descriptor.skill}.`, peers.map((item) => `Use ${item.descriptor.evidence} and ${item.descriptor.tool} to demonstrate ${item.descriptor.skill}.`), `This combines method, evidence, and outcome effectively.`, "Example: Show process clearly and justify the result."),
    ];
  }

  if (subject === "Biology") {
    return [
      make("Easy", 1, `Which Grade 9 subject includes "${title}"?`, subject, others, `"${title}" is part of Grade 9 ${subject}.`, "Example: Biology explores living systems.", ""),
      make("Easy", 2, `What is the main focus of "${title}"?`, descriptor.concept, peers.map((item) => item.descriptor.concept), `This chapter mainly teaches ${descriptor.concept}.`, "Example: Understanding cell structure and function.", ""),
      make("Easy", 3, `Which learning goal best matches "${title}"?`, descriptor.skill, peers.map((item) => item.descriptor.skill), `Students study this chapter to ${descriptor.skill}.`, "Example: Students should be able to identify organisms.", ""),
      make("Easy", 4, `Which real-life application best connects with "${title}"?`, descriptor.application, peers.map((item) => item.descriptor.application), `The chapter connects best with ${descriptor.application}.`, "Example: Understanding health and disease.", ""),
      make("Easy", 5, `Which tool is most useful when studying "${title}"?`, descriptor.tool, peers.map((item) => item.descriptor.tool), `${descriptor.tool} is essential for this chapter.`, "Example: Using microscopes effectively.", ""),
      make("Easy", 6, `Which statement best summarizes "${title}"?`, `It develops understanding of ${descriptor.concept}.`, peers.slice(0, 3).map((item) => `It develops understanding of ${item.descriptor.concept}.`), `That option best captures the chapter theme.`, "Example: The chapter builds a foundation for life sciences.", ""),
      make("Easy", 7, `A student who studies "${title}" well should be able to:`, descriptor.skill, peers.map((item) => item.descriptor.skill), `The chapter helps learners ${descriptor.skill}.`, "Example: Classify organisms into kingdoms.", ""),
      make("Easy", 8, `Which type of evidence appears most often in "${title}"?`, descriptor.evidence, peers.map((item) => item.descriptor.evidence), `${descriptor.evidence} supports understanding in this chapter.`, "Example: Experimental data and observations.", ""),
      make("Easy", 9, `Which chapter from the same subject focuses more on ${peer(0).descriptor.concept}?`, peer(0).title, [peer(1).title, peer(2).title, title], `"${peer(0).title}" focuses more on ${peer(0).descriptor.concept}.`, "Example: Cell chapter builds on organism concepts.", ""),
      make("Easy", 10, `What is a common misconception in "${title}"?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `That misconception can hinder understanding.`, "Example: Thinking all bacteria are harmful.", ""),

      make("Medium", 1, `How does "${title}" relate to agriculture?`, `It explains biological principles in ${descriptor.application}.`, peers.map((item) => `It explains biological principles in ${item.descriptor.application}.`), `Biology underlies agricultural practices.`, "Example: Crop genetics applications.", ""),
      make("Medium", 2, `What are the ethical considerations in "${title}" research?`, `Consider animal welfare and environmental impact.`, peers.map((item) => `Consider animal welfare and environmental impact.`), `Biological research involves ethics.`, "Example: Animal testing guidelines.", ""),
      make("Medium", 3, `How does "${title}" connect to medicine?`, `It provides a foundation for understanding ${descriptor.application}.`, peers.map((item) => `It provides a foundation for understanding ${item.descriptor.application}.`), `Biology is fundamental to medicine.`, "Example: Disease mechanism understanding.", ""),
      make("Medium", 4, `What careers use knowledge from "${title}"?`, descriptor.application, peers.map((item) => item.descriptor.application), `${descriptor.application} careers require this knowledge.`, "Example: Medicine and environmental science.", ""),
      make("Medium", 5, `How can "${title}" knowledge improve daily life?`, descriptor.application, peers.map((item) => item.descriptor.application), `Apply biology to ${descriptor.application}.`, "Example: Better health choices through biology.", ""),
      make("Medium", 6, `What role does technology play in "${title}"?`, `Modern ${descriptor.tool} enhance biological research.`, peers.map((item) => `Modern ${item.descriptor.tool} enhance biological research.`), `Technology advances biological understanding.`, "Example: DNA sequencing technology.", ""),
      make("Medium", 7, `How does "${title}" explain biodiversity?`, `It describes ${descriptor.concept} in ecosystems.`, peers.map((item) => `It describes ${item.descriptor.concept} in ecosystems.`), `Biology explains life's diversity.`, "Example: Species classification systems.", ""),
      make("Medium", 8, `What are the conservation applications of "${title}"?`, descriptor.application, peers.map((item) => item.descriptor.application), `Apply biological principles to ${descriptor.application}.`, "Example: Wildlife protection strategies.", ""),
      make("Medium", 9, `How does "${title}" connect to environmental science?`, `It studies interactions in ${descriptor.application}.`, peers.map((item) => `It studies interactions in ${item.descriptor.application}.`), `Biology and environment are interconnected.`, "Example: Ecosystem dynamics studies.", ""),
      make("Medium", 10, `What mathematical skills are needed for "${title}"?`, `Analyze ${descriptor.evidence} using statistics.`, peers.map((item) => `Analyze ${item.descriptor.evidence} using statistics.`), `Biology involves quantitative analysis.`, "Example: Population growth calculations.", ""),

      make("Hard", 1, `Design a research project investigating ${descriptor.concept} in ${descriptor.application}.`, `Use experimental methods and ${descriptor.tool}.`, peers.map((item) => `Use experimental methods and ${item.descriptor.tool}.`), `Biological research requires careful design.`, "Example: Long-term ecosystem study.", ""),
      make("Hard", 2, `Analyze the impact of human activities on ${descriptor.concept}.`, `Consider habitat destruction and pollution.`, peers.map((item) => `Consider habitat destruction and pollution.`), `Human activities affect biological systems.`, "Example: Deforestation effects.", ""),
      make("Hard", 3, `Evaluate the effectiveness of ${descriptor.application} strategies.`, `Assess conservation outcomes and biodiversity.`, peers.map((item) => `Assess conservation outcomes and biodiversity.`), `Conservation effectiveness requires evaluation.`, "Example: Protected area success rates.", ""),
      make("Hard", 4, `How might climate change affect "${title}"?`, `Changing climate impacts ${descriptor.concept}.`, peers.map((item) => `Changing climate impacts ${item.descriptor.concept}.`), `Climate change affects all biological systems.`, "Example: Species range shifts.", ""),
      make("Hard", 5, `What are the genetic engineering implications in "${title}"?`, `${descriptor.concept} manipulation raises ethical questions.`, peers.map((item) => `${item.descriptor.concept} manipulation raises ethical questions.`), `Genetic engineering has complex implications.`, "Example: GMO crop development.", ""),
      make("Hard", 6, `How does "${title}" contribute to public health?`, `It informs ${descriptor.application} strategies.`, peers.map((item) => `It informs ${item.descriptor.application} strategies.`), `Biology is crucial for public health.`, "Example: Disease prevention programs.", ""),
      make("Hard", 7, `What are the evolutionary aspects of "${title}"?`, `${descriptor.concept} evolves through natural selection.`, peers.map((item) => `${item.descriptor.concept} evolves through natural selection.`), `Evolution explains biological diversity.`, "Example: Antibiotic resistance development.", ""),
      make("Hard", 8, `How can "${title}" principles be applied to biotechnology?`, `Apply ${descriptor.concept} in ${descriptor.application}.`, peers.map((item) => `Apply ${item.descriptor.concept} in ${item.descriptor.application}.`), `Biotechnology uses biological principles.`, "Example: Genetic engineering applications.", ""),
      make("Hard", 9, `Evaluate the sustainability of ${descriptor.application} practices.`, `Assess environmental impact and resource use.`, peers.map((item) => `Assess environmental impact and resource use.`), `Sustainable practices balance ecology and economy.`, "Example: Sustainable farming methods.", ""),
      make("Hard", 10, `Propose a solution to a biological problem using "${title}" knowledge.`, `Apply biological principles to solve ${descriptor.application}.`, peers.map((item) => `Apply biological principles to solve ${item.descriptor.application}.`), `Biological knowledge solves real problems.`, "Example: Habitat restoration project.", ""),
    ];
  }

  if (subject === "English") {
    return [
      // Gamified Multiple Choice Questions
      make("Easy", 1, `Which Grade 9 subject includes "${title}"?`, subject, others, `"${title}" is part of Grade 9 ${subject}.`, "Example: This unit helps develop communication skills."),
      make("Easy", 2, `What is the main focus of "${title}"?`, descriptor.concept, peers.map((item) => item.descriptor.concept), `This chapter mainly teaches ${descriptor.concept}.`, "Example: Learning vocabulary and reading comprehension."),
      
      // True/False Questions
      make("Easy", 3, `True or False: "${title}" focuses only on grammar rules.`, "False", ["True", "It depends", "Sometimes"], `False. "${title}" covers multiple language skills including reading, writing, and communication.`, "Example: Units include various language activities.", "true-false"),
      make("Easy", 4, `True or False: Study skills are only important for exams.`, "False", ["True", "Maybe", "It depends"], `False. Study skills help in all areas of learning and life.`, "Example: Good study habits improve overall learning.", "true-false"),
      
      // Fill in the Blank Questions
      make("Medium", 5, `In "${title}", students learn to organize their _____ effectively for better learning outcomes.`, "time", ["books", "desk", "pens"], `Time management is a key study skill covered in this unit.`, "Example: Creating study schedules and prioritizing tasks.", "fill-blank"),
      make("Medium", 6, `Traffic accidents can be reduced through better _____ and following safety rules.`, "education", ["speed", "luck", "weather"], `Education about traffic safety helps prevent accidents.`, "Example: Learning about road signs and safe crossing.", "fill-blank"),
      
      // Word Puzzle Questions
      make("Medium", 7, `Unscramble the letters to form a vocabulary word from "${title}": N-A-T-I-O-N-A-L-P-A-R-K`, "NATIONAL PARK", ["PARK NATIONAL", "NATIONAL PAR", "PARKATIONAL"], `National parks are protected areas for wildlife and nature.`, "Example: Simien Mountains National Park in Ethiopia.", "word-puzzle", 25, 45, ["Look for common compound words related to nature conservation."], ["Word Wizard"], 15),
      make("Medium", 8, `Rearrange to form a study method: Y-T-U-D-S-S-T-Y`, "STUDY", ["STUDYT", "DYSSTUY", "TUDYSYS"], `Study is the systematic approach to learning and revision.`, "Example: Regular study improves retention.", "word-puzzle", 25, 40, ["Think about what you do to prepare for tests."], ["Puzzle Solver"], 15),
      
      // Matching Questions
      make("Hard", 9, `Match the communication skills with their descriptions:`, "See explanation", ["Option A", "Option B", "Option C"], `A. Active listening - Paying full attention to speaker\nB. Clear speaking - Expressing ideas distinctly\nC. Reading comprehension - Understanding written text\nCorrect matching: A-Active listening, B-Clear speaking, C-Reading comprehension`, "Example: These skills are essential for effective communication.", "matching", 30, 60, ["Consider what each skill involves in communication."], ["Communication Expert"], 20),
      make("Hard", 10, `Match the causes with their effects in traffic safety:`, "See explanation", ["Option A", "Option B", "Option C"], `A. Speeding - Reduced reaction time\nB. Drunk driving - Impaired judgment\nC. Using phones - Distracted attention\nCorrect matching shows understanding of traffic dangers.`, "Example: Understanding cause-effect relationships saves lives.", "matching", 30, 70, ["Think about how each action affects driving ability."], ["Safety Analyst"], 20),
      
      // Interactive Drag & Drop Style Questions
      make("Hard", 11, `Arrange these study steps in the correct order for "${title}": [Preview notes, Review main ideas, Practice exercises, Test yourself]`, "Preview notes → Review main ideas → Practice exercises → Test yourself", ["Test yourself → Practice exercises → Review main ideas → Preview notes", "Practice exercises → Test yourself → Preview notes → Review main ideas", "Review main ideas → Preview notes → Practice exercises → Test yourself"], `This sequence follows effective study methodology from preparation to evaluation.`, "Example: Systematic approach improves learning efficiency.", "drag-drop", 35, 50, ["Think about the logical flow of learning."], ["Organized Learner"], 25),
      make("Hard", 12, `Organize these essay writing steps: [Research, Outline, Write introduction, Develop body paragraphs, Write conclusion, Edit]`, "Research → Outline → Write introduction → Develop body paragraphs → Write conclusion → Edit", ["Write introduction → Research → Outline → Develop body paragraphs → Write conclusion → Edit", "Research → Write introduction → Outline → Develop body paragraphs → Write conclusion → Edit", "Outline → Research → Write introduction → Develop body paragraphs → Write conclusion → Edit"], `This follows the standard academic writing process.`, "Example: Proper structure ensures coherent essays.", "drag-drop", 35, 55, ["Consider the logical progression of writing."], ["Writing Pro"], 25),
    ];
  }

  return [
    make("Easy", 1, `Which Grade 9 subject includes "${title}"?`, subject, others, `"${title}" is part of Grade 9 ${subject}.`, "Example: This chapter belongs to the selected subject."),
    make("Easy", 2, `What is the main concept in "${title}"?`, descriptor.concept, peers.map((item) => item.descriptor.concept), `This chapter mainly focuses on ${descriptor.concept}.`, "Example: Identifying the key idea of the unit."),
    make("Easy", 3, `Which skill is developed most in "${title}"?`, descriptor.skill, peers.map((item) => item.descriptor.skill), `The chapter is designed to help learners ${descriptor.skill}.`, "Example: Applying chapter methods correctly."),
    make("Easy", 4, `Which real-life use best matches "${title}"?`, descriptor.application, peers.map((item) => item.descriptor.application), `The best connection is ${descriptor.application}.`, "Example: Linking class work to everyday situations."),
    make("Easy", 5, `Which learning tool best supports "${title}"?`, descriptor.tool, peers.map((item) => item.descriptor.tool), `${descriptor.tool} is commonly used in this chapter.`, "Example: Using the right representation to solve problems."),
    make("Easy", 6, `Which statement best summarizes "${title}"?`, `It strengthens understanding of ${descriptor.concept}.`, peers.slice(0, 3).map((item) => `It strengthens understanding of ${item.descriptor.concept}.`), `This summary matches the chapter focus.`, "Example: Core understanding first, then application."),
    make("Easy", 7, `A student who learns "${title}" well should be able to:`, descriptor.skill, peers.map((item) => item.descriptor.skill), `That outcome reflects the chapter objective.`, "Example: Demonstrating the expected skill in class tasks."),
    make("Easy", 8, `Which type of evidence appears most in "${title}"?`, descriptor.evidence, peers.map((item) => item.descriptor.evidence), `${descriptor.evidence} is central in this chapter.`, "Example: Working through examples and structured evidence."),
    make("Easy", 9, `Which chapter from the same subject emphasizes ${peer(0).descriptor.concept} more?`, peer(0).title, [peer(1).title, peer(2).title, title], `"${peer(0).title}" places stronger focus on that concept.`, "Example: Compare chapter themes before choosing."),
    make("Easy", 10, `What is a common misconception in "${title}"?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `That misconception can lead to weak understanding.`, "Example: Mixing similar ideas without checking definitions."),

    make("Medium", 1, `How does "${title}" support practical decision-making?`, `It applies ${descriptor.concept} to ${descriptor.application}.`, peers.map((item) => `It applies ${item.descriptor.concept} to ${item.descriptor.application}.`), `This chapter connects theory to practical use.`, "Example: Using chapter ideas in everyday contexts."),
    make("Medium", 2, `Which revision strategy best fits "${title}"?`, `Use ${descriptor.evidence} and practice to ${descriptor.skill}.`, peers.map((item) => `Use ${item.descriptor.evidence} and practice to ${item.descriptor.skill}.`), `Good revision combines concept and application.`, "Example: Review then solve guided tasks."),
    make("Medium", 3, `Which comparison is most accurate?`, `"${title}" focuses on ${descriptor.concept}, while "${peer(0).title}" focuses on ${peer(0).descriptor.concept}.`, [`"${title}" and "${peer(0).title}" are exactly the same.`, `"${title}" is not in ${subject}.`, `"${peer(0).title}" has no clear concept.`], `The strongest answer distinguishes chapter focus clearly.`, "Example: Similar subject, different concept emphasis."),
    make("Medium", 4, `What type of answer is most likely to score high in "${title}"?`, `An answer that uses ${descriptor.evidence} to show ${descriptor.skill}.`, peers.map((item) => `An answer that uses ${item.descriptor.evidence} to show ${item.descriptor.skill}.`), `High-scoring answers align with the chapter method.`, "Example: Explain process, not final result only."),
    make("Medium", 5, `If a learner memorizes "${title}" but cannot apply it, what is missing?`, "Application and reasoning", ["Only more copying", "Only a longer summary", "Only page references"], `This chapter requires understanding in action.`, "Example: Knowing terms but failing in tasks."),
    make("Medium", 6, `Which class task best aligns with "${title}"?`, `A task that uses ${descriptor.tool} to practice ${descriptor.skill}.`, peers.map((item) => `A task that uses ${item.descriptor.tool} to practice ${item.descriptor.skill}.`), `Best-fit tasks match both process and outcome.`, "Example: Guided activity followed by explanation."),
    make("Medium", 7, `Which objective best describes "${title}"?`, `Build ${descriptor.concept} and use it in ${descriptor.application}.`, peers.map((item) => `Build ${item.descriptor.concept} and use it in ${item.descriptor.application}.`), `This links chapter theory and real application.`, "Example: Understand, then transfer to context."),
    make("Medium", 8, `Which error most weakens performance in "${title}"?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `That error conflicts with the chapter's core approach.`, "Example: Using the wrong rule for the right-looking problem."),
    make("Medium", 9, `How can "${title}" improve daily life?`, `By applying ${descriptor.concept} through ${descriptor.application}.`, peers.map((item) => `By applying ${item.descriptor.concept} through ${item.descriptor.application}.`), `The chapter matters beyond exams.`, "Example: Better decisions through structured thinking."),
    make("Medium", 10, `Which question is most likely from "${title}"?`, `How can ${descriptor.concept} be used in ${descriptor.application}?`, peers.map((item) => `How can ${item.descriptor.concept} be used in ${item.descriptor.application}?`), `That question reflects chapter intent directly.`, "Example: Context-based application question."),

    make("Hard", 1, `A student says "${title}" is only memory work. Which response is strongest?`, `It also requires learners to ${descriptor.skill} and justify their reasoning.`, [`Memorization is fully enough.`, `"${title}" has no practical value.`, `The chapter can be skipped.`], `Deep understanding includes explanation and application.`, "Example: Reasoned answers score better than recall alone."),
    make("Hard", 2, `Which assessment best checks deep understanding of "${title}"?`, `A task combining ${descriptor.evidence} with ${descriptor.skill}.`, peers.map((item) => `A task combining ${item.descriptor.evidence} with ${item.descriptor.skill}.`), `This measures understanding quality, not recall only.`, "Example: Multi-step question with justification."),
    make("Hard", 3, `Which conclusion best synthesizes the purpose of "${title}"?`, `Learners should apply ${descriptor.concept} to solve ${descriptor.application} tasks clearly.`, peers.map((item) => `Learners should apply ${item.descriptor.concept} to solve ${item.descriptor.application} tasks clearly.`), `This combines concept, process, and output.`, "Example: From chapter ideas to real solutions."),
    make("Hard", 4, `Which reasoning mistake damages answers in "${title}" most?`, descriptor.misconception, peers.map((item) => item.descriptor.misconception), `That mistake breaks the chapter's method and logic.`, "Example: Choosing a procedure that does not fit the context."),
    make("Hard", 5, `Which project best connects "${title}" with student life?`, `A project applying ${descriptor.concept} to improve ${descriptor.application}.`, peers.map((item) => `A project applying ${item.descriptor.concept} to improve ${item.descriptor.application}.`), `Strong projects show transferable understanding.`, "Example: Use chapter concepts to solve a school/community issue."),
    make("Hard", 6, `Why is "${descriptor.tool}" better than rote copying for "${title}"?`, `It helps learners actively ${descriptor.skill}.`, [`Copying always proves understanding.`, `Tools are never important in this subject.`, `"${title}" has no reasoning tasks.`], `Learning tools support active understanding and transfer.`, "Example: Structured evidence supports accurate reasoning."),
    make("Hard", 7, `Which contrast is most accurate?`, `"${title}" builds ${descriptor.concept}, while "${peer(1).title}" builds ${peer(1).descriptor.concept}.`, [`Both chapters always require identical responses.`, `"${peer(1).title}" is not in ${subject}.`, `"${title}" has no clear focus.`], `Strong answers distinguish nearby concepts correctly.`, "Example: Correct chapter chosen for the right concept."),
    make("Hard", 8, `Which prompt best reveals misunderstanding in "${title}"?`, `Explain how ${descriptor.concept} differs from ${peer(2).descriptor.concept}.`, [`Copy the chapter title only.`, `Write only the page number.`, `Name the subject without explanation.`], `Comparison prompts reveal concept boundaries clearly.`, "Example: Explain why one approach fits and another does not."),
    make("Hard", 9, `What is the strongest reason to keep "${title}" in Grade 9?`, `It helps learners ${descriptor.skill} and apply knowledge beyond exams.`, [`It only increases chapter count.`, `It matters only for tests.`, `It adds vocabulary without understanding.`], `The chapter builds transferable competence for future study.`, "Example: Better analysis and problem-solving across subjects."),
    make("Hard", 10, `Which response best addresses challenges in "${title}"?`, `Use ${descriptor.evidence} and ${descriptor.tool} to show ${descriptor.skill}.`, peers.map((item) => `Use ${item.descriptor.evidence} and ${item.descriptor.tool} to show ${item.descriptor.skill}.`), `This combines method, evidence, and clear outcome.`, "Example: Show process clearly and justify conclusions."),
  ];
};

export const bank: Record<string, Record<string, Grade9Question[]>> = {};

grade9Subjects.forEach((subject) => {
  bank[subject.name] = {};
  subject.chapters.forEach((chapter) => {
    bank[subject.name][chapter] =
      curatedGrade9QuestionBanks[subject.name]?.[chapter] ||
      buildChapterQuestions(subject.name, chapter);
  });
});

export const getGrade9ChapterQuestionCounts = (subjectName: string, chapter: string) => {
  const questions = bank[subjectName]?.[chapter] || [];
  return {
    easy: questions.filter((q) => q.difficulty === "Easy").length,
    medium: questions.filter((q) => q.difficulty === "Medium").length,
    hard: questions.filter((q) => q.difficulty === "Hard").length,
  };
};

export const getGrade9Questions = (
  subjectName: string,
  chapter: string,
  difficulty: "easy" | "medium" | "hard",
  count = 10,
) => {
  const map = { easy: "Easy", medium: "Medium", hard: "Hard" } as const;
  return (bank[subjectName]?.[chapter] || []).filter((q) => q.difficulty === map[difficulty]).slice(0, count);
};
