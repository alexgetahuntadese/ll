export interface QuickQuestion {
  stem: string;
  options: string[];
  correctIndex: number;
}

export interface Grade11MathNote {
  id: string;
  chapter: string;
  subject: "Mathematics";
  topic: string;
  keyIdea: string;
  points: string[];
  formula?: string;
  examTrap: string;
  quickQuestion: QuickQuestion;
}

export const grade11MathematicsNotes: Grade11MathNote[] = [
  {
    id: "g11m-u1-function-domain-range",
    chapter: "Unit 1: Relations and Functions",
    subject: "Mathematics",
    topic: "Domain and Range Basics",
    keyIdea: "A function maps each input to exactly one output.",
    points: ["Domain = allowed inputs", "Range = produced outputs", "Use restrictions from denominator/root"],
    formula: "f: A -> B, each x in A has one f(x)",
    examTrap: "Do not confuse codomain with range.",
    quickQuestion: { stem: "For f(x)=1/(x-2), excluded input is?", options: ["0", "1", "2", "-2"], correctIndex: 2 },
  },
  {
    id: "g11m-u1-inverse-check",
    chapter: "Unit 1: Relations and Functions",
    subject: "Mathematics",
    topic: "Inverse Function Check",
    keyIdea: "Inverse exists when function is one-to-one on the domain.",
    points: ["Swap x and y then solve for y", "Verify with composition", "Restrict domain when needed"],
    formula: "f^-1 exists if f(a)=f(b) implies a=b",
    examTrap: "Many functions need domain restriction before inversion.",
    quickQuestion: { stem: "Which function is one-to-one on all real numbers?", options: ["x^2", "|x|", "x^3", "x^2+1"], correctIndex: 2 },
  },
  {
    id: "g11m-u2-domain-rational",
    chapter: "Unit 2: Rational Expressions and Rational Functions",
    subject: "Mathematics",
    topic: "Domain of Rational Functions",
    keyIdea: "Any denominator value equal to zero is excluded from domain.",
    points: ["Factor denominator first", "List all excluded roots", "State domain clearly"],
    formula: "For f(x)=P(x)/Q(x), Q(x) != 0",
    examTrap: "Cancelling factors does not restore removed values.",
    quickQuestion: { stem: "Domain of (x+1)/(x^2-9)?", options: ["x != 0", "x != 3 only", "x != +-3", "All real x"], correctIndex: 2 },
  },
  {
    id: "g11m-u2-asymptotes",
    chapter: "Unit 2: Rational Expressions and Rational Functions",
    subject: "Mathematics",
    topic: "Asymptotes",
    keyIdea: "Vertical asymptotes come from non-cancelled denominator zeros.",
    points: ["Vertical from denominator roots", "Horizontal from degree comparison", "Equal degree -> leading coefficient ratio"],
    examTrap: "A removable hole is not a vertical asymptote.",
    quickQuestion: { stem: "Horizontal asymptote of (3x+1)/(x-5) is", options: ["y=0", "y=3", "x=5", "none"], correctIndex: 1 },
  },
  {
    id: "g11m-u3-matrix-multiplication",
    chapter: "Unit 3: Matrices",
    subject: "Mathematics",
    topic: "Matrix Operations",
    keyIdea: "Matrix multiplication depends on matching inner dimensions.",
    points: ["A(mxn)B(nxp) is defined", "Result order is mxp", "AB != BA in general"],
    examTrap: "AB may exist while BA does not exist.",
    quickQuestion: { stem: "If A is 2x3 and B is 3x2, AB is", options: ["2x2", "3x3", "2x3", "not defined"], correctIndex: 0 },
  },
  {
    id: "g11m-u3-inverse-2x2",
    chapter: "Unit 3: Matrices",
    subject: "Mathematics",
    topic: "Inverse of 2x2 Matrix",
    keyIdea: "A 2x2 matrix has inverse only if determinant is non-zero.",
    points: ["det = ad-bc", "Swap a and d; negate b and c", "Multiply by 1/det"],
    formula: "A^-1=(1/(ad-bc))[[d,-b],[-c,a]]",
    examTrap: "If det=0, inverse method is invalid.",
    quickQuestion: { stem: "det([[2,1],[4,2]]) equals", options: ["0", "2", "4", "-2"], correctIndex: 0 },
  },
  {
    id: "g11m-u4-det-properties",
    chapter: "Unit 4: Determinants and their Properties",
    subject: "Mathematics",
    topic: "Determinant Row Properties",
    keyIdea: "Row operations affect determinant in predictable rules.",
    points: ["Swap rows -> sign flips", "Scale one row by k -> det scales by k", "Equal/proportional rows -> det 0"],
    examTrap: "Adding multiple of a row to another row keeps determinant unchanged.",
    quickQuestion: { stem: "If two rows are equal, determinant is", options: ["1", "-1", "0", "unknown"], correctIndex: 2 },
  },
  {
    id: "g11m-u4-cramers",
    chapter: "Unit 4: Determinants and their Properties",
    subject: "Mathematics",
    topic: "Cramer's Rule",
    keyIdea: "Solve systems via determinants when main determinant is non-zero.",
    points: ["Delta != 0 required", "x=Delta_x/Delta", "y=Delta_y/Delta"],
    formula: "x=Delta_x/Delta, y=Delta_y/Delta",
    examTrap: "Do not apply Cramer's rule when Delta=0.",
    quickQuestion: { stem: "Cramer's rule works when", options: ["Delta=0", "Delta!=0", "a=0", "b=0"], correctIndex: 1 },
  },
  {
    id: "g11m-u5-vector-magnitude",
    chapter: "Unit 5: Vectors",
    subject: "Mathematics",
    topic: "Magnitude and Unit Vector",
    keyIdea: "Magnitude gives size; unit vector gives direction.",
    points: ["|a|=sqrt(x^2+y^2)", "a_hat=a/|a|", "Unit vector length is 1"],
    formula: "a_hat=a/|a|",
    examTrap: "Unit vector is undefined for zero vector.",
    quickQuestion: { stem: "If a=(6,8), |a|=", options: ["10", "14", "12", "8"], correctIndex: 0 },
  },
  {
    id: "g11m-u5-dot-product",
    chapter: "Unit 5: Vectors",
    subject: "Mathematics",
    topic: "Dot Product",
    keyIdea: "Dot product connects algebra with angle geometry.",
    points: ["a.b=|a||b|cos(theta)", "Perpendicular => dot product 0", "Useful for angle and projection"],
    formula: "cos(theta)=(a.b)/(|a||b|)",
    examTrap: "Zero dot product means perpendicular only for non-zero vectors.",
    quickQuestion: { stem: "If a.b=0 and a,b non-zero then vectors are", options: ["parallel", "equal", "perpendicular", "opposite"], correctIndex: 2 },
  },
  {
    id: "g11m-u6-translation",
    chapter: "Unit 6: Transformations of the Plane",
    subject: "Mathematics",
    topic: "Translation Rule",
    keyIdea: "Translation shifts points by fixed vector.",
    points: ["(x,y)->(x+a,y+b)", "Shape and size unchanged", "Orientation unchanged"],
    formula: "T_(a,b):(x,y)->(x+a,y+b)",
    examTrap: "Sign errors are common for left/down movements.",
    quickQuestion: { stem: "Translate (1,-2) by (4,3)", options: ["(5,1)", "(3,1)", "(5,-5)", "(-3,1)"], correctIndex: 0 },
  },
  {
    id: "g11m-u6-reflection",
    chapter: "Unit 6: Transformations of the Plane",
    subject: "Mathematics",
    topic: "Reflection Rules",
    keyIdea: "Reflection flips coordinates across axis/line.",
    points: ["x-axis: (x,y)->(x,-y)", "y-axis: (x,y)->(-x,y)", "line y=x: (x,y)->(y,x)"],
    examTrap: "Reflection changes orientation unlike translation.",
    quickQuestion: { stem: "Reflect (4,-3) across x-axis", options: ["(4,3)", "(-4,-3)", "(-4,3)", "(3,4)"], correctIndex: 0 },
  },
  {
    id: "g11m-u7-central-measures",
    chapter: "Unit 7: Statistics",
    subject: "Mathematics",
    topic: "Mean, Median, Mode",
    keyIdea: "Choose measure of center based on data behavior.",
    points: ["Mean uses all values", "Median resists outliers", "Mode is most frequent"],
    examTrap: "For skewed data, median may be more reliable than mean.",
    quickQuestion: { stem: "Data 2,4,4,10 has mode", options: ["2", "4", "5", "10"], correctIndex: 1 },
  },
  {
    id: "g11m-u7-variance-sd",
    chapter: "Unit 7: Statistics",
    subject: "Mathematics",
    topic: "Variance and Standard Deviation",
    keyIdea: "Spread shows how far data sits from mean.",
    points: ["Variance = average squared distance", "SD = sqrt(variance)", "Higher SD means more spread"],
    examTrap: "If asked SD, do not leave answer as variance.",
    quickQuestion: { stem: "Variance=16, SD=?", options: ["2", "4", "8", "16"], correctIndex: 1 },
  },
  {
    id: "g11m-u8-basic-probability",
    chapter: "Unit 8: Probability",
    subject: "Mathematics",
    topic: "Basic Probability Rules",
    keyIdea: "Probability is favorable outcomes over sample space.",
    points: ["0 <= P(E) <= 1", "P(E')=1-P(E)", "Use equally likely outcomes carefully"],
    formula: "P(E)=n(E)/n(S)",
    examTrap: "Wrong sample space causes all follow-up errors.",
    quickQuestion: { stem: "Fair die, P(odd)=", options: ["1/6", "1/3", "1/2", "2/3"], correctIndex: 2 },
  },
  {
    id: "g11m-u8-conditional",
    chapter: "Unit 8: Probability",
    subject: "Mathematics",
    topic: "Conditional Probability",
    keyIdea: "Conditioning changes the sample space.",
    points: ["P(A|B)=P(A∩B)/P(B)", "Need P(B)>0", "Tree diagrams help sequential events"],
    formula: "P(A|B)=P(A∩B)/P(B)",
    examTrap: "Do not swap P(A|B) with P(B|A).",
    quickQuestion: { stem: "If P(A∩B)=0.12 and P(B)=0.3 then P(A|B)=", options: ["0.04", "0.12", "0.4", "2.5"], correctIndex: 2 },
  },
];

export const getGrade11MathNotesByChapter = (chapter: string) =>
  grade11MathematicsNotes.filter((note) => note.chapter === chapter);

