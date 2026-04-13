export interface Grade12QuickNote {
  id: string;
  subject: "Biology" | "Physics" | "Chemistry" | "Mathematics";
  topic: string;
  keyIdea: string;
  keyPoints: string[];
  examTrap: string;
  quickQuestion: string;
}

export const grade12QuickNotes: Grade12QuickNote[] = [
  { id: "bio1", subject: "Biology", topic: "Photosynthesis", keyIdea: "Plants make food using sunlight.", keyPoints: ["Uses CO2 and H2O", "Needs chlorophyll", "Produces glucose + O2"], examTrap: "Occurs in chloroplast", quickQuestion: "Gas released? -> Oxygen" },
  { id: "bio2", subject: "Biology", topic: "Respiration", keyIdea: "Cells release energy from glucose.", keyPoints: ["Uses oxygen", "Produces ATP", "Releases CO2"], examTrap: "Occurs in mitochondria", quickQuestion: "Main energy molecule? -> ATP" },
  { id: "bio3", subject: "Biology", topic: "Mitosis", keyIdea: "Cell division for growth.", keyPoints: ["Produces 2 identical cells", "Same chromosome number"], examTrap: "No genetic variation", quickQuestion: "Number of cells formed? -> 2" },
  { id: "bio4", subject: "Biology", topic: "Meiosis", keyIdea: "Cell division for reproduction.", keyPoints: ["Produces 4 cells", "Half chromosome number"], examTrap: "Causes variation", quickQuestion: "Cells formed? -> 4" },
  { id: "bio5", subject: "Biology", topic: "DNA", keyIdea: "Carries genetic information.", keyPoints: ["Double helix", "Made of nucleotides"], examTrap: "Located in nucleus", quickQuestion: "Shape of DNA? -> Double helix" },
  { id: "bio6", subject: "Biology", topic: "Enzymes", keyIdea: "Speed up reactions.", keyPoints: ["Protein nature", "Specific to substrate"], examTrap: "Affected by temperature and pH", quickQuestion: "Function? -> Catalyst" },
  { id: "bio7", subject: "Biology", topic: "Ecosystem", keyIdea: "Interaction of living and non-living.", keyPoints: ["Biotic + abiotic", "Energy flow"], examTrap: "Sun is main energy source", quickQuestion: "Energy source? -> Sun" },
  { id: "bio8", subject: "Biology", topic: "Food Chain", keyIdea: "Transfer of energy.", keyPoints: ["Producer -> consumer", "Ends with decomposer"], examTrap: "Energy decreases upward", quickQuestion: "First level? -> Producer" },
  { id: "bio9", subject: "Biology", topic: "Homeostasis", keyIdea: "Maintaining stable condition.", keyPoints: ["Temperature control", "Water balance"], examTrap: "Negative feedback system", quickQuestion: "Purpose? -> Stability" },
  { id: "bio10", subject: "Biology", topic: "Evolution", keyIdea: "Change over time.", keyPoints: ["Natural selection", "Adaptation"], examTrap: "Not sudden change", quickQuestion: "Key mechanism? -> Natural selection" },

  { id: "phy1", subject: "Physics", topic: "Ohm's Law", keyIdea: "Voltage is proportional to current.", keyPoints: ["V = IR", "R = resistance"], examTrap: "Not for non-ohmic devices", quickQuestion: "Unit of resistance? -> Ohm" },
  { id: "phy2", subject: "Physics", topic: "Velocity", keyIdea: "Speed with direction.", keyPoints: ["Vector quantity", "m/s"], examTrap: "Different from speed", quickQuestion: "Type? -> Vector" },
  { id: "phy3", subject: "Physics", topic: "Acceleration", keyIdea: "Rate of velocity change.", keyPoints: ["m/s^2", "Can be negative"], examTrap: "Deceleration = negative acceleration", quickQuestion: "Unit? -> m/s^2" },
  { id: "phy4", subject: "Physics", topic: "Force", keyIdea: "Push or pull.", keyPoints: ["F = ma", "Newton unit"], examTrap: "Mass is not weight", quickQuestion: "Unit? -> Newton" },
  { id: "phy5", subject: "Physics", topic: "Work", keyIdea: "Force x distance.", keyPoints: ["W = Fd", "Joule unit"], examTrap: "No movement = no work", quickQuestion: "Unit? -> Joule" },
  { id: "phy6", subject: "Physics", topic: "Power", keyIdea: "Rate of work.", keyPoints: ["P = W/t", "Watt unit"], examTrap: "Time matters", quickQuestion: "Unit? -> Watt" },
  { id: "phy7", subject: "Physics", topic: "Energy", keyIdea: "Ability to do work.", keyPoints: ["Kinetic + potential"], examTrap: "Conserved", quickQuestion: "Law? -> Conservation" },
  { id: "phy8", subject: "Physics", topic: "Pressure", keyIdea: "Force per area.", keyPoints: ["P = F/A"], examTrap: "Small area -> high pressure", quickQuestion: "Unit? -> Pascal" },
  { id: "phy9", subject: "Physics", topic: "Waves", keyIdea: "Transfer energy.", keyPoints: ["No matter transfer", "Types: transverse, longitudinal"], examTrap: "Sound = longitudinal", quickQuestion: "Sound type? -> Longitudinal" },
  { id: "phy10", subject: "Physics", topic: "Electricity", keyIdea: "Flow of charge.", keyPoints: ["Current = charge/time"], examTrap: "Electron flows opposite current", quickQuestion: "Unit of current? -> Ampere" },

  { id: "chem1", subject: "Chemistry", topic: "Atom", keyIdea: "Smallest unit of matter.", keyPoints: ["Proton, neutron, electron"], examTrap: "Electron is negative", quickQuestion: "Charge of proton? -> Positive" },
  { id: "chem2", subject: "Chemistry", topic: "Periodic Table", keyIdea: "Arrangement of elements.", keyPoints: ["Groups and periods"], examTrap: "Same group -> similar properties", quickQuestion: "Vertical columns? -> Groups" },
  { id: "chem3", subject: "Chemistry", topic: "Chemical Bond", keyIdea: "Attraction between atoms.", keyPoints: ["Ionic, covalent"], examTrap: "Ionic = electron transfer", quickQuestion: "Covalent? -> Sharing" },
  { id: "chem4", subject: "Chemistry", topic: "Acid", keyIdea: "Releases H+ ions.", keyPoints: ["pH < 7"], examTrap: "Strong is not concentrated", quickQuestion: "pH of acid? -> <7" },
  { id: "chem5", subject: "Chemistry", topic: "Base", keyIdea: "Releases OH- ions.", keyPoints: ["pH > 7"], examTrap: "Neutral = pH 7", quickQuestion: "OH- indicates? -> Base" },

  { id: "math1", subject: "Mathematics", topic: "Unit 1: Sequence and Series", keyIdea: "Find term patterns and calculate finite/infinite sums.", keyPoints: ["Arithmetic uses common difference d", "Geometric uses common ratio r", "Use nth-term and S_n formulas"], examTrap: "Do not apply geometric formulas to arithmetic sequences.", quickQuestion: "In 2, 5, 8, 11... common difference? -> 3" },
  { id: "math2", subject: "Mathematics", topic: "Unit 2: Introduction to Calculus", keyIdea: "Calculus studies change (derivative) and accumulation (integral).", keyPoints: ["Derivative gives slope/rate of change", "Integral gives area/accumulated quantity", "Limits connect both ideas"], examTrap: "Derivative at a point is not the same as average rate on an interval.", quickQuestion: "Slope of tangent is found by? -> Derivative" },
  { id: "math3", subject: "Mathematics", topic: "Unit 3: Statistics", keyIdea: "Summarize data and interpret variation correctly.", keyPoints: ["Central tendency: mean, median, mode", "Spread: variance and standard deviation", "Choose suitable chart/table"], examTrap: "Mean can mislead when extreme outliers exist.", quickQuestion: "Most frequent value is called? -> Mode" },
  { id: "math4", subject: "Mathematics", topic: "Unit 4: Introduction to Linear Programming", keyIdea: "Optimize an objective under linear constraints.", keyPoints: ["Model constraints as inequalities", "Graph feasible region", "Test corner points for optimum"], examTrap: "Best value occurs at feasible corner points, not arbitrary interior points.", quickQuestion: "Region satisfying all constraints is? -> Feasible region" },
  { id: "math5", subject: "Mathematics", topic: "Unit 5: Mathematical Application in Business", keyIdea: "Apply math to profit, cost, interest, and decision-making.", keyPoints: ["Use formulas for simple/compound interest", "Analyze break-even and profit/loss", "Interpret numerical results in context"], examTrap: "Always check time units and rate units before calculating.", quickQuestion: "When total revenue = total cost, this is? -> Break-even point" }
];

export const getGrade12QuickNotesBySubject = (subject: string) =>
  grade12QuickNotes.filter((note) => note.subject === subject);

