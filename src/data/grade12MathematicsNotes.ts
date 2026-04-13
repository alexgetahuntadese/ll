export interface QuickQuestion {
  stem: string;
  options: string[];
  correctIndex: number;
}

export interface Grade12MathNote {
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

export const grade12MathematicsNotes: Grade12MathNote[] = [
  {
    id: "g12m-u1-arithmetic-nth",
    chapter: "Unit 1: Sequence and Series",
    subject: "Mathematics",
    topic: "Arithmetic Sequence nth Term",
    keyIdea: "Each term changes by a constant difference d.",
    points: ["a_n = a_1 + (n-1)d", "Find d from consecutive terms", "Check n starts at 1"],
    formula: "a_n = a_1 + (n-1)d",
    examTrap: "Using n instead of (n-1) gives a shifted answer.",
    quickQuestion: { stem: "If a_1=3 and d=4, what is a_6?", options: ["19", "23", "27", "31"], correctIndex: 1 }
  },
  {
    id: "g12m-u1-arithmetic-sum",
    chapter: "Unit 1: Sequence and Series",
    subject: "Mathematics",
    topic: "Sum of Arithmetic Series",
    keyIdea: "Use first term, last term, and number of terms carefully.",
    points: ["S_n = n/2(a_1 + a_n)", "or S_n = n/2[2a_1 + (n-1)d]", "Both formulas are equivalent"],
    formula: "S_n = n/2[2a_1 + (n-1)d]",
    examTrap: "Do not mix a_n and d values from different questions.",
    quickQuestion: { stem: "Find S_5 for 2,5,8,11,14.", options: ["35", "40", "45", "50"], correctIndex: 1 }
  },
  {
    id: "g12m-u1-geometric-nth",
    chapter: "Unit 1: Sequence and Series",
    subject: "Mathematics",
    topic: "Geometric Sequence nth Term",
    keyIdea: "Each term is multiplied by a constant ratio r.",
    points: ["a_n = a_1 r^(n-1)", "Find r by dividing terms", "Sign of r matters"],
    formula: "a_n = a_1 r^(n-1)",
    examTrap: "Negative r causes alternating signs.",
    quickQuestion: { stem: "If a_1=2 and r=-3, what is a_4?", options: ["54", "-54", "18", "-18"], correctIndex: 1 }
  },
  {
    id: "g12m-u1-geometric-sum",
    chapter: "Unit 1: Sequence and Series",
    subject: "Mathematics",
    topic: "Sum of Geometric Series",
    keyIdea: "Finite and infinite sums use different formulas.",
    points: ["S_n = a_1(r^n-1)/(r-1), r!=1", "S_inf = a_1/(1-r), |r|<1", "Always check convergence first"],
    formula: "S_inf = a_1/(1-r), |r|<1",
    examTrap: "Infinite sum is invalid if |r|>=1.",
    quickQuestion: { stem: "Find 1 + 1/2 + 1/4 + ...", options: ["1", "2", "3", "Does not converge"], correctIndex: 1 }
  },
  {
    id: "g12m-u2-domain-rational",
    chapter: "Unit 2: Rational Expressions and Rational Functions",
    subject: "Mathematics",
    topic: "Domain of Rational Functions",
    keyIdea: "Denominator cannot be zero.",
    points: ["Factor denominator first", "Exclude all roots", "State domain in set form"],
    formula: "For f(x)=P(x)/Q(x), Q(x)!=0",
    examTrap: "Cancelling factors does not restore excluded values.",
    quickQuestion: { stem: "Domain of 1/(x-3)?", options: ["x!=0", "x>3", "x!=3", "All real x"], correctIndex: 2 }
  },
  {
    id: "g12m-u2-asymptotes",
    chapter: "Unit 2: Rational Expressions and Rational Functions",
    subject: "Mathematics",
    topic: "Vertical and Horizontal Asymptotes",
    keyIdea: "Asymptotes describe end and near-zero-denominator behavior.",
    points: ["Vertical: denominator zero (after simplification)", "Horizontal: compare degrees", "Equal degree -> ratio of leading coefficients"],
    examTrap: "A hole is not a vertical asymptote.",
    quickQuestion: { stem: "For (2x+1)/(x-4), horizontal asymptote is", options: ["y=0", "y=2", "x=4", "No asymptote"], correctIndex: 1 }
  },
  {
    id: "g12m-u3-matrix-add-mul",
    chapter: "Unit 3: Matrices",
    subject: "Mathematics",
    topic: "Matrix Addition and Multiplication",
    keyIdea: "Addition needs same order; multiplication needs inner dimensions match.",
    points: ["A(mxn)+B(mxn) valid", "A(mxn)B(nxp) -> C(mxp)", "Matrix multiplication is not commutative"],
    examTrap: "AB may exist while BA may not.",
    quickQuestion: { stem: "If A is 2x3 and B is 3x4, order of AB is", options: ["2x4", "3x3", "4x2", "Not defined"], correctIndex: 0 }
  },
  {
    id: "g12m-u3-inverse-2x2",
    chapter: "Unit 3: Matrices",
    subject: "Mathematics",
    topic: "Inverse of a 2x2 Matrix",
    keyIdea: "Inverse exists only when determinant is non-zero.",
    points: ["For [[a,b],[c,d]] det = ad-bc", "A^-1 = (1/det)[[d,-b],[-c,a]]", "Check by A*A^-1 = I"],
    formula: "A^-1 = (1/(ad-bc))[[d,-b],[-c,a]]",
    examTrap: "If ad-bc=0, inverse does not exist.",
    quickQuestion: { stem: "det([[1,2],[3,4]]) =", options: ["-2", "2", "10", "-10"], correctIndex: 0 }
  },
  {
    id: "g12m-u4-determinant-properties",
    chapter: "Unit 4: Determinants and their Properties",
    subject: "Mathematics",
    topic: "Determinant Properties",
    keyIdea: "Row/column operations change determinant in predictable ways.",
    points: ["Swap two rows -> sign changes", "Multiply a row by k -> determinant multiplied by k", "Equal/proportional rows -> determinant 0"],
    examTrap: "Adding a multiple of one row to another does not change determinant.",
    quickQuestion: { stem: "If two rows are equal, determinant is", options: ["1", "-1", "0", "Cannot tell"], correctIndex: 2 }
  },
  {
    id: "g12m-u4-cramers-rule",
    chapter: "Unit 4: Determinants and their Properties",
    subject: "Mathematics",
    topic: "Cramer's Rule (2 Variables)",
    keyIdea: "Use determinants to solve linear systems when main determinant is non-zero.",
    points: ["System: ax+by=e, cx+dy=f", "Delta = ad-bc", "x=Delta_x/Delta, y=Delta_y/Delta"],
    examTrap: "Cramer's rule fails when Delta=0.",
    quickQuestion: { stem: "Cramer's rule applies when", options: ["Delta=0", "Delta!=0", "a=0", "b=0"], correctIndex: 1 }
  },
  {
    id: "g12m-u5-vector-magnitude",
    chapter: "Unit 5: Vectors",
    subject: "Mathematics",
    topic: "Vector Magnitude and Unit Vector",
    keyIdea: "Magnitude gives length; unit vector gives direction only.",
    points: ["|a| = sqrt(x^2+y^2+z^2)", "a_hat = a/|a|", "Unit vector has magnitude 1"],
    formula: "a_hat = a/|a|",
    examTrap: "Do not divide by zero when vector is zero vector.",
    quickQuestion: { stem: "If a=(3,4), |a|=", options: ["5", "7", "12", "1"], correctIndex: 0 }
  },
  {
    id: "g12m-u5-dot-product",
    chapter: "Unit 5: Vectors",
    subject: "Mathematics",
    topic: "Dot Product and Angle",
    keyIdea: "Dot product links algebraic form and geometric angle.",
    points: ["a.b = |a||b|cos(theta)", "Perpendicular vectors -> dot product 0", "Use for projection and angle finding"],
    formula: "cos(theta) = (a.b)/(|a||b|)",
    examTrap: "A zero dot product means perpendicular (if both non-zero).",
    quickQuestion: { stem: "If a.b=0 and both non-zero, vectors are", options: ["Parallel", "Perpendicular", "Equal", "Opposite"], correctIndex: 1 }
  },
  {
    id: "g12m-u6-translation",
    chapter: "Unit 6: Transformations of the Plane",
    subject: "Mathematics",
    topic: "Translation in Coordinate Plane",
    keyIdea: "Translation shifts every point by the same vector.",
    points: ["(x,y)->(x+a,y+b)", "Shape and size unchanged", "Orientation unchanged"],
    formula: "T_(a,b):(x,y)->(x+a,y+b)",
    examTrap: "Sign mistakes: left/down use negative values.",
    quickQuestion: { stem: "Translate (2,-1) by (3,4).", options: ["(5,3)", "(1,3)", "(5,-5)", "(-1,3)"], correctIndex: 0 }
  },
  {
    id: "g12m-u6-reflection",
    chapter: "Unit 6: Transformations of the Plane",
    subject: "Mathematics",
    topic: "Reflection Rules",
    keyIdea: "Reflection flips points across an axis or line.",
    points: ["Across x-axis: (x,y)->(x,-y)", "Across y-axis: (x,y)->(-x,y)", "Across y=x: (x,y)->(y,x)"],
    examTrap: "Reflection is not a rotation; orientation reverses.",
    quickQuestion: { stem: "Reflect (3,-2) across y-axis.", options: ["(3,2)", "(-3,-2)", "(-3,2)", "(2,3)"], correctIndex: 1 }
  },
  {
    id: "g12m-u6-rotation-90",
    chapter: "Unit 6: Transformations of the Plane",
    subject: "Mathematics",
    topic: "Rotation About Origin (90 and 180 Degrees)",
    keyIdea: "Standard rotation rules avoid drawing errors.",
    points: ["90 deg CCW: (x,y)->(-y,x)", "180 deg: (x,y)->(-x,-y)", "90 deg CW: (x,y)->(y,-x)"],
    examTrap: "Specify direction (clockwise vs counterclockwise).",
    quickQuestion: { stem: "Rotate (1,4) by 90 deg CCW.", options: ["(4,-1)", "(-4,1)", "(-1,-4)", "(1,-4)"], correctIndex: 1 }
  },
  {
    id: "g12m-u7-mean-median-mode",
    chapter: "Unit 7: Statistics",
    subject: "Mathematics",
    topic: "Mean, Median, and Mode",
    keyIdea: "Choose the best center measure for the data type.",
    points: ["Mean uses all values", "Median is robust to outliers", "Mode is most frequent value"],
    examTrap: "For skewed data, median is often better than mean.",
    quickQuestion: { stem: "Data: 2,3,3,7. Mode is", options: ["2", "3", "3.75", "7"], correctIndex: 1 }
  },
  {
    id: "g12m-u7-variance-sd",
    chapter: "Unit 7: Statistics",
    subject: "Mathematics",
    topic: "Variance and Standard Deviation",
    keyIdea: "Spread measures how far values are from the mean.",
    points: ["Variance is average squared deviation", "Standard deviation is sqrt(variance)", "Larger SD means more spread"],
    examTrap: "Do not forget square root when asked for standard deviation.",
    quickQuestion: { stem: "If variance = 9, standard deviation =", options: ["3", "6", "81", "4.5"], correctIndex: 0 }
  },
  {
    id: "g12m-u7-histogram",
    chapter: "Unit 7: Statistics",
    subject: "Mathematics",
    topic: "Histogram and Frequency Density",
    keyIdea: "For unequal class widths, use frequency density.",
    points: ["Density = frequency/class width", "Bar area represents frequency", "Compare heights only when widths equal"],
    examTrap: "Using raw frequency as height is wrong for unequal classes.",
    quickQuestion: { stem: "If class width=5 and frequency=20, density=", options: ["4", "5", "15", "25"], correctIndex: 0 }
  },
  {
    id: "g12m-u8-probability-basic",
    chapter: "Unit 8: Probability",
    subject: "Mathematics",
    topic: "Basic Probability",
    keyIdea: "Probability is favorable outcomes over total outcomes.",
    points: ["0 <= P(E) <= 1", "P(E)=n(E)/n(S) for equally likely outcomes", "Complement: P(not E)=1-P(E)"],
    formula: "P(E') = 1 - P(E)",
    examTrap: "Do not include impossible outcomes in sample space.",
    quickQuestion: { stem: "A fair die: P(odd) =", options: ["1/6", "1/3", "1/2", "2/3"], correctIndex: 2 }
  },
  {
    id: "g12m-u8-addition-rule",
    chapter: "Unit 8: Probability",
    subject: "Mathematics",
    topic: "Addition Rule",
    keyIdea: "For overlapping events, subtract intersection once.",
    points: ["P(A or B)=P(A)+P(B)-P(A and B)", "Mutually exclusive -> intersection 0", "Venn diagram helps"],
    formula: "P(AUB)=P(A)+P(B)-P(A∩B)",
    examTrap: "Adding P(A)+P(B) directly can double-count overlap.",
    quickQuestion: { stem: "If P(A)=0.4, P(B)=0.5, P(A∩B)=0.2, P(AUB)=", options: ["0.7", "0.9", "0.3", "1.1"], correctIndex: 0 }
  },
  {
    id: "g12m-u8-independence",
    chapter: "Unit 8: Probability",
    subject: "Mathematics",
    topic: "Independent Events",
    keyIdea: "Independence means one event does not change the other.",
    points: ["P(A and B)=P(A)P(B)", "Check by comparing with observed intersection", "Different from mutually exclusive"],
    formula: "Independent if P(A∩B)=P(A)P(B)",
    examTrap: "Mutually exclusive non-zero events are not independent.",
    quickQuestion: { stem: "If P(A)=0.5 and P(B)=0.2 independent, P(A∩B)=", options: ["0.1", "0.3", "0.7", "0.25"], correctIndex: 0 }
  },
  {
    id: "g12m-u8-conditional",
    chapter: "Unit 8: Probability",
    subject: "Mathematics",
    topic: "Conditional Probability",
    keyIdea: "Conditioning reduces sample space.",
    points: ["P(A|B)=P(A∩B)/P(B)", "Require P(B)>0", "Useful in tree diagrams"],
    formula: "P(A|B)=P(A∩B)/P(B)",
    examTrap: "Do not confuse P(A|B) with P(B|A).",
    quickQuestion: { stem: "If P(A∩B)=0.15 and P(B)=0.3, P(A|B)=", options: ["0.05", "0.15", "0.5", "2"], correctIndex: 2 }
  },
  {
    id: "g12m-u8-binomial",
    chapter: "Unit 8: Probability",
    subject: "Mathematics",
    topic: "Binomial Probability",
    keyIdea: "Use when trials are fixed, independent, and two-outcome.",
    points: ["X~Bin(n,p)", "P(X=k)=nCk p^k (1-p)^(n-k)", "Mean=np, variance=np(1-p)"],
    formula: "P(X=k)=nCk p^k (1-p)^(n-k)",
    examTrap: "Do not use binomial if probability changes between trials.",
    quickQuestion: { stem: "For n=4, p=0.5, P(X=2)=", options: ["1/4", "3/8", "1/2", "5/8"], correctIndex: 1 }
  },
  {
    id: "g12m-u2-partial-fractions",
    chapter: "Unit 2: Rational Expressions and Rational Functions",
    subject: "Mathematics",
    topic: "Partial Fraction Decomposition",
    keyIdea: "Break rational expressions into simpler fractions for solving/integration.",
    points: ["Factor denominator completely", "Set unknown constants", "Equate coefficients or substitute smart values"],
    examTrap: "Improper fraction must be divided first before decomposition.",
    quickQuestion: { stem: "1/(x^2-1) decomposes into", options: ["1/(x-1)+1/(x+1)", "1/2(x-1)-1/2(x+1)", "1/2(x-1)+1/2(x+1)", "x/(x^2-1)"], correctIndex: 1 }
  },
  {
    id: "g12m-u3-linear-system-matrix",
    chapter: "Unit 3: Matrices",
    subject: "Mathematics",
    topic: "Solving Linear Systems with Matrices",
    keyIdea: "Represent system as AX=B and solve using A^-1 when possible.",
    points: ["Write coefficient matrix carefully", "Check det(A)!=0 before inverse method", "Compute X=A^-1B"],
    examTrap: "Wrong variable order gives wrong coefficient matrix.",
    quickQuestion: { stem: "For AX=B, if det(A)=0 then inverse method is", options: ["Always valid", "Not valid", "Valid only for 2x2", "Same as Cramer's always"], correctIndex: 1 }
  },
  {
    id: "g12m-u4-cofactor-expansion",
    chapter: "Unit 4: Determinants and their Properties",
    subject: "Mathematics",
    topic: "Cofactor Expansion (3x3)",
    keyIdea: "Expand along row/column with most zeros to reduce work.",
    points: ["Minor M_ij removes row i and column j", "Cofactor C_ij=(-1)^(i+j)M_ij", "det(A)=sum(a_ij C_ij) along chosen line"],
    examTrap: "Sign pattern alternates; missing sign is common.",
    quickQuestion: { stem: "Cofactor sign at position (1,2) is", options: ["+", "-", "0", "depends on matrix"], correctIndex: 1 }
  },
  {
    id: "g12m-u5-vector-addition",
    chapter: "Unit 5: Vectors",
    subject: "Mathematics",
    topic: "Vector Addition and Scalar Multiplication",
    keyIdea: "Add vectors component-wise and scale each component.",
    points: ["(a,b,c)+(d,e,f)=(a+d,b+e,c+f)", "k(a,b,c)=(ka,kb,kc)", "Use for displacement/resultant problems"],
    examTrap: "Do not add magnitudes unless vectors are collinear.",
    quickQuestion: { stem: "If u=(1,2) and v=(3,-1), u+v=", options: ["(4,1)", "(2,3)", "(3,1)", "(4,-3)"], correctIndex: 0 }
  },
  {
    id: "g12m-u6-dilation",
    chapter: "Unit 6: Transformations of the Plane",
    subject: "Mathematics",
    topic: "Dilation (Enlargement/Reduction)",
    keyIdea: "Dilation scales distance from center by factor k.",
    points: ["From origin: (x,y)->(kx,ky)", "k>1 enlarge, 0<k<1 reduce", "Angles preserved, lengths scaled"],
    examTrap: "Negative k also flips direction through the center.",
    quickQuestion: { stem: "Dilation by k=2 from origin maps (2,-3) to", options: ["(4,-6)", "(1,-1.5)", "(-4,6)", "(2,-6)"], correctIndex: 0 }
  },
  {
    id: "g12m-u7-boxplot-iqr",
    chapter: "Unit 7: Statistics",
    subject: "Mathematics",
    topic: "Quartiles, IQR, and Boxplot",
    keyIdea: "IQR measures spread of middle 50% of data.",
    points: ["IQR = Q3 - Q1", "Outlier fences: Q1-1.5IQR and Q3+1.5IQR", "Boxplot highlights skew and outliers quickly"],
    examTrap: "Median is Q2, not average of Q1 and Q3.",
    quickQuestion: { stem: "If Q1=12 and Q3=20, IQR=", options: ["8", "16", "32", "10"], correctIndex: 0 }
  }
];

export const getGrade12MathNotesByChapter = (chapter: string) =>
  grade12MathematicsNotes.filter((note) => note.chapter === chapter);

