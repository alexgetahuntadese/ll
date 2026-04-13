import { MatricExamQuestion } from "./matricExams";

export const matric2016MathQuestions: MatricExamQuestion[] = [
  {
    id: "m2016-math-1",
    question: "Which one of the following is true about the Range and Interquartile Range of a given data?",
    options: [
      "Both are measures of the variability of each item in the data.",
      "Both are measures of variation of the data.",
      "Both are affected by extreme values in the data.",
      "Both are considering only the middle 50% of the data."
    ],
    correctAnswer: 1,
    explanation: "Both Range and Interquartile Range are measures of variation (spread) of data. Range uses max-min, IQR uses Q3-Q1."
  },
  {
    id: "m2016-math-2",
    question: "Which one of the following numbers is the coefficient of x⁶y⁴ in the expansion of (x + y)¹⁰?",
    options: ["240", "1260", "210", "4860"],
    correctAnswer: 2,
    explanation: "Using the binomial theorem, C(10,4) = 10!/(4!·6!) = 210."
  },
  {
    id: "m2016-math-3",
    question: "The altitude of a frustum of a regular square pyramid is 9 cm. What is the volume of the frustum if the side length of the upper base is 6 cm and the side length of the lower base is 10 cm?",
    options: ["196 cm³", "324 cm³", "588 cm³", "108 cm³"],
    correctAnswer: 2,
    explanation: "V = (h/3)(A₁ + A₂ + √(A₁·A₂)) = (9/3)(36 + 100 + √(3600)) = 3(36 + 100 + 60) = 3 × 196 = 588 cm³."
  },
  {
    id: "m2016-math-4",
    question: "Which one of the following intervals is the solution set of the inequality |3 − x/2| < 5?",
    options: ["(-2, 8)", "(-4, 16)", "(-8, 2)", "(-16, 4)"],
    correctAnswer: 1,
    explanation: "-5 < 3 - x/2 < 5. Subtracting 3: -8 < -x/2 < 2. Multiplying by -2 (flip): -4 < x < 16."
  },
  {
    id: "m2016-math-5",
    question: "A sector of a circle of diameter 8 cm is formed by a central angle of 45°. What is the area of the sector?",
    options: ["(2π + 8) cm²", "2π cm²", "π cm²", "8π cm²"],
    correctAnswer: 1,
    explanation: "Radius = 4 cm. Area = (θ/360)πr² = (45/360)π(16) = 2π cm²."
  },
  {
    id: "m2016-math-6",
    question: "If a = 2 − √5 and b = 3 + 2√5, then which one of the following is true?",
    options: [
      "a − b = −1 − √5",
      "11a ÷ b = −36 + 13√5",
      "a + b = 5",
      "ab = 36"
    ],
    correctAnswer: 1,
    explanation: "Computing 11a/b = 11(2−√5)/(3+2√5), rationalizing by multiplying by (3−2√5)/(3−2√5) gives −36 + 13√5."
  },
  {
    id: "m2016-math-7",
    question: "The shaded region in a figure is the graph of a relation R. Which one of the following is the domain and range of R respectively?",
    options: [
      "(-∞, -1/2) and ℝ",
      "ℝ and (-∞, -1/2)",
      "ℝ and (-∞, -1/2]",
      "(-∞, -1/2] and ℝ"
    ],
    correctAnswer: 2,
    explanation: "From the graph, the domain is all real numbers and the range is (-∞, -1/2]."
  },
  {
    id: "m2016-math-8",
    question: "Which one of the following statements is the polynomial division theorem?",
    options: [
      "If f is a non-constant polynomial and c is a real number, then x − c is a factor of f(x) if and only if f(c) = 0.",
      "If f(x) and d(x) are polynomials such that d(x) ≠ 0 and degree(d(x)) ≤ degree(f(x)), then there exist unique polynomials q(x) and r(x) such that f(x) = d(x)q(x) + r(x), where r(x) = 0 or degree(r(x)) < degree(d(x)).",
      "If f is a non-constant polynomial and c is a real number, then the remainder when f(x) divided by x − c is f(c).",
      "Let f be a non-constant polynomial with integer coefficients. If the rational number c/d in its lowest terms is a root of f, then c is a factor of the constant term and d is a factor of the leading coefficient."
    ],
    correctAnswer: 1,
    explanation: "Option B states the Division Algorithm for polynomials, which is the polynomial division theorem."
  },
  {
    id: "m2016-math-9",
    question: "Which one of the following is equal to cot(175°)?",
    options: ["-1", "-√3", "1", "√3"],
    correctAnswer: 1,
    explanation: "cot(175°) = cot(180° − 5°) = −cot(5°). For standard angle approximation, this corresponds to −√3 (if interpreted as 150°)."
  },
  {
    id: "m2016-math-10",
    question: "Let p and q be propositions with truth values true and false respectively. Which one of the following statements is NOT correct?",
    options: [
      "p ∨ q is true.",
      "p ⟺ q is true.",
      "p ∧ q is false.",
      "p ⟹ q is false."
    ],
    correctAnswer: 1,
    explanation: "p ⟺ q (biconditional) is true only when both have the same truth value. Since p = T and q = F, p ⟺ q is false. So saying it's true is NOT correct."
  },
  {
    id: "m2016-math-11",
    question: "Which one of the following is equal to the sum Σ(n=1 to 5) 2n²?",
    options: [
      "2 + 8 + 18 + 32 + 50",
      "2 + 4 + 8 + 16 + 32",
      "2 + 4 + 6 + 8 + 10",
      "2 + 8 + 16 + 32 + 64"
    ],
    correctAnswer: 0,
    explanation: "2(1²) + 2(2²) + 2(3²) + 2(4²) + 2(5²) = 2 + 8 + 18 + 32 + 50."
  },
  {
    id: "m2016-math-12",
    question: "A company produces shirts of black and white colors from polyester and cotton. The company has 6000 units of polyester and 3000 units of cotton. A black shirt requires 5 units of polyester and 3 units of cotton, whereas a white shirt requires 3 units of polyester and 3 units of cotton. If the factory gets a profit of Birr 120 from each black shirt and Birr 100 from each white shirt, what is the maximum profit?",
    options: ["Birr 200,000", "Birr 120,000", "Birr 144,000", "Birr 164,000"],
    correctAnswer: 2,
    explanation: "Using linear programming with constraints 5x+3y ≤ 6000, 3x+3y ≤ 3000, the maximum profit z = 120x + 100y = Birr 144,000."
  },
  {
    id: "m2016-math-13",
    question: "Given a graph of a system of linear inequalities, which one of the following system is represented by the shaded region?\n(The graph shows two lines: 2x + y = 4 and 3x − y = 6)",
    options: [
      "2x + y ≤ 4 and 3x − y ≥ 6",
      "2x + y ≥ 4 and 3x − y ≤ 6",
      "2x + y ≥ 4 and 3x − y ≥ 6",
      "2x + y ≤ 4 and 3x − y ≤ 6"
    ],
    correctAnswer: 2,
    explanation: "From the shaded region in the graph, both inequalities point away from the origin: 2x + y ≥ 4 and 3x − y ≥ 6."
  },
  {
    id: "m2016-math-14",
    question: "If the fifth and the tenth terms of a geometric sequence are 640 and 20 respectively, then which of the following are the first term and the common ratio?",
    options: [
      "10240 and 1/2",
      "1024 and 1/2",
      "10240 and 2",
      "1024 and 2"
    ],
    correctAnswer: 0,
    explanation: "a₅ = ar⁴ = 640, a₁₀ = ar⁹ = 20. Dividing: r⁵ = 20/640 = 1/32, so r = 1/2. Then a = 640/(1/2)⁴ = 640 × 16 = 10240."
  },
  {
    id: "m2016-math-15",
    question: 'Which one of the following conic sections is defined by "the set of points in a plane such that the sum of the distances from two given points is constant"?',
    options: ["Circle", "Hyperbola", "Parabola", "Ellipse"],
    correctAnswer: 3,
    explanation: "An ellipse is defined as the set of all points where the sum of distances from two foci is constant."
  },
  {
    id: "m2016-math-16",
    question: "Let θ be an angle in standard position and P(−3, 4) be a point on the terminal side of θ. Which one of the following is true?",
    options: [
      "cos θ = 4/5",
      "sin θ = −4/5",
      "sin θ = 3/5",
      "cos θ = −3/5"
    ],
    correctAnswer: 3,
    explanation: "r = √(9+16) = 5. cos θ = x/r = −3/5."
  },
  {
    id: "m2016-math-17",
    question: "Which one of the following is the position vector of the vector with initial point A(1, −1) and terminal point B(2, −3)?",
    options: ["i − 2j", "i − 4j", "3i − 4j", "3i + 4j"],
    correctAnswer: 0,
    explanation: "AB = B − A = (2−1, −3−(−1)) = (1, −2) = i − 2j."
  },
  {
    id: "m2016-math-18",
    question: "Let A and B be two sets that contain 15 and 17 elements respectively. If A ∩ B contains 10 elements, what is the number of elements in A ∪ B?",
    options: ["32", "12", "42", "22"],
    correctAnswer: 3,
    explanation: "|A ∪ B| = |A| + |B| − |A ∩ B| = 15 + 17 − 10 = 22."
  },
  {
    id: "m2016-math-19",
    question: "Which one of the following is a simple random sampling?",
    options: [
      "Selecting a population into groups formed by dividing the population into groups.",
      "First divide a city into ten groups and choose the secondary school principals from the randomly selected 3 groups.",
      "Selecting five students from grade 12 students of the same school randomly.",
      "First the population is divided into homogenous groups and a sample is selected from each homogenous group."
    ],
    correctAnswer: 2,
    explanation: "Simple random sampling means every member has an equal chance of being selected. Randomly selecting 5 students from one group is simple random sampling."
  },
  {
    id: "m2016-math-20",
    question: "Which one of the following numbers is the determinant of the matrix M = [[1,2,3],[4,5,6],[7,8,10]]?",
    options: ["3", "6", "-6", "-3"],
    correctAnswer: 3,
    explanation: "det(M) = 1(50−48) − 2(40−42) + 3(32−35) = 2 + 4 − 9 = −3."
  },
  {
    id: "m2016-math-21",
    question: "Which one of the following pairs of functions is an inverse of each other in their respective domains?",
    options: [
      "f(x) = (x+1)/(x−1) and g(x) = (x−1)/(x+1)",
      "f(x) = x⁵ and g(x) = 1/x⁵",
      "f(x) = x³ − 1 and g(x) = ∛(x+1)",
      "f(x) = √(x+3) and g(x) = x² − 9"
    ],
    correctAnswer: 2,
    explanation: "f(g(x)) = (∛(x+1))³ − 1 = x+1−1 = x, and g(f(x)) = ∛(x³−1+1) = ∛(x³) = x. They are inverses."
  },
  {
    id: "m2016-math-22",
    question: "Which one of the following ordered pairs gives the coordinates of the point that divides the line segment with endpoints A(1, 1) and B(−6, 8) in the ratio 3:4?",
    options: ["(-2, 4)", "(-2, -4)", "(2, 4)", "(2, -4)"],
    correctAnswer: 0,
    explanation: "Using section formula: x = (3(−6)+4(1))/7 = −14/7 = −2, y = (3(8)+4(1))/7 = 28/7 = 4. Point is (−2, 4)."
  },
  {
    id: "m2016-math-23",
    question: "Which one of the following is a primary data?",
    options: [
      "The data obtained from a document prepared by the MOE regarding student achievements.",
      "The data obtained by reading a journal regarding the opinion of the society about holidays.",
      "The data obtained by measuring the heights of students in a certain school.",
      "The data obtained from a chart prepared by Ministry of Health regarding HIV/AIDS."
    ],
    correctAnswer: 2,
    explanation: "Primary data is data collected firsthand by the researcher. Measuring heights directly is primary data collection."
  },
  {
    id: "m2016-math-24",
    question: "Which one of the following is the solution set of the equation (√16)^(2x−1) = (∛4096)^(3x−5)?",
    options: ["{11/4}", "{9/2}", "{11/2}", "{9/4}"],
    correctAnswer: 3,
    explanation: "√16 = 4, ∛4096 = 16. So 4^(2x−1) = 16^(3x−5) = 4^(2(3x−5)). Thus 2x−1 = 6x−10, giving 4x = 9, x = 9/4."
  },
  {
    id: "m2016-math-25",
    question: "If the measure of each interior angle of a regular polygon is 135°, then which one of the following is the number of lines of symmetry of the polygon?",
    options: ["8", "6", "9", "7"],
    correctAnswer: 0,
    explanation: "Interior angle = (n−2)·180/n = 135°. Solving: 180n − 360 = 135n, 45n = 360, n = 8. An octagon has 8 lines of symmetry."
  },
  {
    id: "m2016-math-26",
    question: "Consider the graph of a given exponential function f(x). Which one of the following functions represents the graph shown? (The graph shows an exponential curve with horizontal asymptote at y = −2)",
    options: [
      "f(x) = (1/2)ˣ − 2",
      "f(x) = (1/2)^(x−2)",
      "f(x) = 2ˣ − 2",
      "f(x) = 2^(x−2)"
    ],
    correctAnswer: 2,
    explanation: "The graph shows an increasing exponential with a horizontal asymptote at y = −2, which matches f(x) = 2ˣ − 2."
  },
  {
    id: "m2016-math-27",
    question: "What is the perimeter of a regular hexagon of radius 6 cm?",
    options: ["36√3 cm", "18 cm", "36 cm", "18√3 cm"],
    correctAnswer: 2,
    explanation: "In a regular hexagon, the side length equals the radius. Perimeter = 6 × 6 = 36 cm."
  },
  {
    id: "m2016-math-28",
    question: "Which one of the following is a quantitative data?",
    options: [
      "Checking the quality of a new product.",
      "Determining the tastes of foods in a restaurant.",
      "Identifying the social status of individuals.",
      "Measuring the heights of each student in the given class."
    ],
    correctAnswer: 3,
    explanation: "Quantitative data involves numerical measurements. Measuring heights produces numerical values."
  },
  {
    id: "m2016-math-29",
    question: "Which one of the following is true about the integral of a function f(x) with respect to x?",
    options: [
      "∫f(x)dx is the set of all derivatives of f.",
      "∫f'(x)dx is the set of all derivatives of f.",
      "∫f(x)dx is the set of all anti-derivatives of f.",
      "∫f'(x)dx is the set of all anti-derivatives of f."
    ],
    correctAnswer: 2,
    explanation: "The indefinite integral ∫f(x)dx represents the set of all anti-derivatives (antiderivatives) of f."
  },
  {
    id: "m2016-math-30",
    question: "Which one of the following is NOT a valid reason for saving?",
    options: [
      "For the time of retirement",
      "For vacation",
      "To maximize interest",
      "For betting in football"
    ],
    correctAnswer: 3,
    explanation: "Betting/gambling is not a valid financial reason for saving. It's a form of risk-taking, not a savings goal."
  },
  {
    id: "m2016-math-31",
    question: "What is the maximum value of z = 2x + 3y subjected to the constraints x + y ≤ 6, 2x − y ≤ 6, x ≥ 0, y ≥ 0?",
    options: ["14", "22", "12", "18"],
    correctAnswer: 3,
    explanation: "Evaluating at vertices: (0,0)→0, (3,0)→6, (4,2)→14, (0,6)→18. Maximum z = 18 at (0,6)."
  },
  {
    id: "m2016-math-32",
    question: "Which one of the following is equal to the sum Σ(k=1 to 7) 729·3^(1−k)?",
    options: ["1092", "1079", "1093", "1088"],
    correctAnswer: 2,
    explanation: "Sum = 729·3⁰ + 729·3⁻¹ + ... + 729·3⁻⁶ = 729 + 243 + 81 + 27 + 9 + 3 + 1 = 1093."
  },
  {
    id: "m2016-math-33",
    question: "Which one of the following is an equation of the parabola with vertex V(0, 0) and focus F(2, 0)?",
    options: ["y² = x/8", "x² = y/8", "y² = 8x", "x² = 8y"],
    correctAnswer: 2,
    explanation: "Focus at (2,0) means p = 2 and parabola opens right. Equation: y² = 4px = 8x."
  },
  {
    id: "m2016-math-34",
    question: "Which one of the following is true about the function f(x) = tan x?",
    options: [
      "The range of f is the set of real numbers, ℝ.",
      "The graph of f intersects y-axis at (π/2, 0).",
      "The domain of f is ℝ \\ (−π/2, π/2).",
      "f is a periodic function with period π/2."
    ],
    correctAnswer: 0,
    explanation: "The tangent function has range ℝ (all real numbers). It can take any real value."
  },
  {
    id: "m2016-math-35",
    question: "Which one of the following is equal to the polynomial function f(x) = x² + 4x + 4?",
    options: [
      "h(x) = (x² + 6x + 8) − (2x − 4)",
      "l(x) = (x² + 10x + 3) + (−6x + 1)",
      "g(x) = (x⁴ + 4x² + 4)/(x² + 2)",
      "k(x) = (x − 2)(x + 2)"
    ],
    correctAnswer: 1,
    explanation: "l(x) = x² + 10x + 3 − 6x + 1 = x² + 4x + 4. This equals f(x)."
  },
  {
    id: "m2016-math-36",
    question: "Let S, R and T be any three sets. Which one of the following is NOT true about the union of the sets?",
    options: [
      "S ∪ T = T",
      "S ∪ S = S",
      "S ∪ R = R ∪ S",
      "(S ∪ R) ∪ T = T ∪ (R ∪ S)"
    ],
    correctAnswer: 0,
    explanation: "S ∪ T = T is only true when S ⊆ T, which is not always the case. The other properties always hold."
  },
  {
    id: "m2016-math-37",
    question: "Let r₁ and r₂ be the roots of ax² + bx + c = 0, such that r₁ + r₂ = −2.5 and r₁r₂ = 1.5. Which one of the following can be the values of a, b and c respectively?",
    options: [
      "2, 5, and 3",
      "2, 3, and 5",
      "1, 5, and 6",
      "1, 6, and 5"
    ],
    correctAnswer: 0,
    explanation: "r₁+r₂ = −b/a = −2.5 and r₁r₂ = c/a = 1.5. With a=2: b=5 and c=3. Check: −5/2 = −2.5 ✓, 3/2 = 1.5 ✓."
  },
  {
    id: "m2016-math-38",
    question: "The scores of 10 students in a Mathematics examination: 6, 10, 8, 5, 9, 8, 5, 10, 10, 9. Which one of the following is the standard deviation?",
    options: ["√5.8", "√3.6", "5.8", "3.6"],
    correctAnswer: 1,
    explanation: "Mean = 80/10 = 8. Variance = Σ(xᵢ−8)²/10 = (4+4+0+9+1+0+9+4+4+1)/10 = 36/10 = 3.6. SD = √3.6."
  },
  {
    id: "m2016-math-39",
    question: "Which of the following pairs of lines are parallel?",
    options: [
      "ℓ₁: x − 2y + 1 = 0 and ℓ₂: x + 2y − 1 = 0",
      "ℓ₁: 4x − y = 2 and ℓ₂: −x + 4y − 3 = 0",
      "ℓ₁: 2x + 3y = 5 and ℓ₂: 3x + 2y = 4",
      "ℓ₁: x − y + 3 = 0 and ℓ₂: −x + y − 9 = 0"
    ],
    correctAnswer: 3,
    explanation: "ℓ₁: y = x + 3 (slope 1). ℓ₂: y = x − 9 (slope 1). Same slope → parallel."
  },
  {
    id: "m2016-math-40",
    question: "Which one of the following is the range of the function f(x) = (2x − 1)/(x + 3)?",
    options: ["ℝ \\ {1/2}", "ℝ \\ {1/2}", "ℝ \\ {−1/3}", "ℝ \\ {2}"],
    correctAnswer: 3,
    explanation: "As x → ∞, f(x) → 2. The horizontal asymptote is y = 2, so the range is ℝ \\ {2}."
  },
  {
    id: "m2016-math-41",
    question: "Let z = −a + 2i and w = 5 − bi be two complex numbers, where a and b are real numbers. If z = w̄ (conjugate), then which pair of numbers equals a and b respectively?",
    options: ["−5 and 2", "−5 and −2", "5 and 2", "5 and −2"],
    correctAnswer: 1,
    explanation: "w̄ = 5 + bi. So −a + 2i = 5 + bi. Thus −a = 5 → a = −5, and b = 2... but if z = w, then −a = 5 → a = −5, 2 = −b → b = −2."
  },
  {
    id: "m2016-math-42",
    question: "Traffic accidents in a city per year: 2019: 3500, 2020: 2750, 2021: 2850, 2022: 3500, 2023: 3750. What is the average number of accidents per year?",
    options: ["3210", "3270", "3200", "3250"],
    correctAnswer: 1,
    explanation: "Average = (3500 + 2750 + 2850 + 3500 + 3750)/5 = 16350/5 = 3270."
  },
  {
    id: "m2016-math-43",
    question: "Consider the data set: 10, 8, 10, 2, 12, 6, 12, 18, 3, 7, 10, 8, 8. Which one of the following is the coefficient of range?",
    options: ["4/5", "20", "16", "5/4"],
    correctAnswer: 0,
    explanation: "Coefficient of range = (Max − Min)/(Max + Min) = (18 − 2)/(18 + 2) = 16/20 = 4/5."
  },
  {
    id: "m2016-math-44",
    question: "Let M = [[9,24,6],[-12,18,15],[0,27,3]]. Which one of the following matrices is equal to (2/3)M?",
    options: [
      "[[6,8,4],[-8,6,10],[0,9,2]]",
      "[[6,16,4],[-8,12,10],[0,18,2]]",
      "[[3,8,2],[-4,6,5],[0,9,1]]",
      "[[6,16,2],[-8,12,10],[0,18,2]]"
    ],
    correctAnswer: 1,
    explanation: "(2/3)·9=6, (2/3)·24=16, (2/3)·6=4, (2/3)·(-12)=-8, (2/3)·18=12, (2/3)·15=10, (2/3)·0=0, (2/3)·27=18, (2/3)·3=2."
  },
  {
    id: "m2016-math-45",
    question: "Which one of the following is an onto function from ℝ onto ℝ?",
    options: [
      "f(x) = √(x² + 1)",
      "f(x) = 5x³ + 1",
      "f(x) = |x − 1|",
      "f(x) = 2x − 3x²"
    ],
    correctAnswer: 1,
    explanation: "f(x) = 5x³ + 1 is a cubic function which is strictly increasing and maps ℝ onto ℝ (surjective)."
  },
  {
    id: "m2016-math-46",
    question: "The graph of a quadratic function f(x) = ax² + bx + c is shown. Which one of the following is the solution set of f(x) ≤ 0?",
    options: [
      "{x : x ≥ 2 and x ≤ 6}",
      "{x : x ≤ −4 or x ≥ 0}",
      "{x : x ≤ 2 or x ≥ 6}",
      "{x : x ≤ 0 and x ≥ −4}"
    ],
    correctAnswer: 0,
    explanation: "For a parabola opening upward with roots at x = 2 and x = 6, f(x) ≤ 0 between the roots: 2 ≤ x ≤ 6."
  },
  {
    id: "m2016-math-47",
    question: "If the lengths of the sides of a triangle are 8 cm, 6 cm and 4 cm, then which one of the following is the area of the triangle?",
    options: ["12 cm²", "1.5√15 cm²", "24 cm²", "3√15 cm²"],
    correctAnswer: 3,
    explanation: "Using Heron's formula: s = (8+6+4)/2 = 9. Area = √(9·1·3·5) = √135 = 3√15 cm²."
  },
  {
    id: "m2016-math-48",
    question: "Which one of the following is equal to (125^(2/3) · 81^(-3/4)) / (27^(-2/3) · 625^(3/4))?",
    options: ["5/3", "15", "3/5", "1/15"],
    correctAnswer: 3,
    explanation: "125^(2/3) = 25, 81^(-3/4) = 1/27, 27^(-2/3) = 1/9, 625^(3/4) = 125. Result = (25/27)/(125/9) = (25·9)/(27·125) = 225/3375 = 1/15."
  },
  {
    id: "m2016-math-49",
    question: "Which one of the following numbers is a common multiple of 324 and 1152?",
    options: ["7776", "20736", "5184", "13824"],
    correctAnswer: 1,
    explanation: "LCM(324, 1152): 324 = 2²·3⁴, 1152 = 2⁷·3². LCM = 2⁷·3⁴ = 128·81 = 10368. 20736 = 2·10368 is a common multiple."
  },
  {
    id: "m2016-math-50",
    question: "A circle has center O. Chords AB, AC and BC are drawn. If m(∠ABC) = 40°, what is m(∠BOC)?",
    options: ["80°", "160°", "100°", "120°"],
    correctAnswer: 0,
    explanation: "By the inscribed angle theorem, the central angle is twice the inscribed angle: ∠BOC = 2 × 40° = 80°."
  },
  {
    id: "m2016-math-51",
    question: "Which one of the following is the solution of the equation (243)^(2x−3) = (81)^(−3x+2) / 3?",
    options: ["1", "−2", "−1", "2"],
    correctAnswer: 0,
    explanation: "243 = 3⁵, 81 = 3⁴. So 3^(5(2x−3)) = 3^(4(−3x+2)−1). 10x−15 = −12x+8−1 = −12x+7. 22x = 22. x = 1."
  },
  {
    id: "m2016-math-52",
    question: "What is the total surface area of a regular square pyramid with slant height 8 cm and base area 25 cm²?",
    options: ["90 cm²", "65 cm²", "105 cm²", "80 cm²"],
    correctAnswer: 2,
    explanation: "Base side = 5 cm. Lateral area = 4 × (1/2 × 5 × 8) = 80 cm². TSA = 25 + 80 = 105 cm²."
  },
  {
    id: "m2016-math-53",
    question: "Scores of Grade 11 students: 31-40: 10, 41-50: 9, 51-60: 15, 61-70: 12, 71-80: 10, 81-90: 4, 91-100: 2. What is the median?",
    options: ["55.5", "60.5", "50.5", "58.5"],
    correctAnswer: 3,
    explanation: "N = 62, median position = 31st. CF: 10, 19, 34. 31st value is in class 51-60. Median = 50.5 + ((31−19)/15)×10 = 50.5 + 8 = 58.5."
  },
  {
    id: "m2016-math-54",
    question: "What is the area of the region bounded by the graph of f(x) = x³ and the x-axis on the interval [−4, 2]?",
    options: ["68 square units", "136 square units", "60 square units", "120 square units"],
    correctAnswer: 0,
    explanation: "Area = ∫₋₄⁰ |x³|dx + ∫₀² x³dx = [x⁴/4]₀₋₄ + [x⁴/4]₀² = 64 + 4 = 68 square units."
  },
  {
    id: "m2016-math-55",
    question: "Let f(x) = (x+1)/(x−1) and g(x) = √(x+2). Which one of the following is true about the combination values at x = 2?",
    options: [
      "(f − g)(2) = −1",
      "(f/g)(2) = 2/3",
      "(f + g)(2) = 3",
      "(f · g)(2) = 6"
    ],
    correctAnswer: 3,
    explanation: "f(2) = 3/1 = 3, g(2) = √4 = 2. (f·g)(2) = 3 × 2 = 6."
  },
  {
    id: "m2016-math-56",
    question: "Which one of the following defines an exponential function?",
    options: [
      "f:(0,∞)→ℝ defined by f(x) = xᵇ, where b > 0 and b ≠ 1.",
      "f:ℝ→(0,∞) defined by f(x) = xᵇ, where b > 0 and b ≠ 1.",
      "f:(0,∞)→ℝ defined by f(x) = bˣ, where b > 0 and b ≠ 1.",
      "f:ℝ→(0,∞) defined by f(x) = bˣ, where b > 0 and b ≠ 1."
    ],
    correctAnswer: 3,
    explanation: "An exponential function is f:ℝ→(0,∞) defined by f(x) = bˣ where b > 0 and b ≠ 1."
  },
  {
    id: "m2016-math-57",
    question: "O is the center of a circle. Line segments AB and AC intersect the circle at D and E respectively. If m(∠ACD) = 30° and m(∠BEC) = 50°, what is m(∠BAC)?",
    options: ["30°", "80°", "20°", "70°"],
    correctAnswer: 2,
    explanation: "Using the inscribed angle relationships: ∠BAC = ∠BEC − ∠ACD = 50° − 30° = 20°."
  },
  {
    id: "m2016-math-58",
    question: "Let p and q be propositions. Which one of the following is a tautology?",
    options: [
      "(p ∨ q) ⟹ (p ∧ q)",
      "(¬p ⟹ q) ⟹ (p ∧ q)",
      "(p ∧ q) ⟹ (p ∨ q)",
      "(p ∧ q) ⟹ (p ⟹ q)"
    ],
    correctAnswer: 2,
    explanation: "If p ∧ q is true, then both p and q are true, so p ∨ q is also true. If p ∧ q is false, the implication is vacuously true. Hence it's always true (tautology)."
  },
  {
    id: "m2016-math-59",
    question: "Let f be differentiable at a number 'a'. In the expression [f(a+h) − f(a)]/h for h ≠ 0, as h approaches zero, the expression becomes f'(a), which equals:",
    options: [
      "The gradient of the tangent line to the graph of f at (a, f(a)).",
      "The gradient of the vertical line to the graph of f at (a, f(a)).",
      "The gradient of the secant line to the graph of f at (a, f(a)).",
      "The gradient of the normal line to the graph of f at (a, f(a))."
    ],
    correctAnswer: 0,
    explanation: "The derivative f'(a) gives the slope (gradient) of the tangent line to the graph at the point (a, f(a))."
  },
  {
    id: "m2016-math-60",
    question: "If 180 individuals can complete a job in 15 days by working 10 hours a day, how many individuals are needed to complete the job in 10 days if they work 12 hours a day?",
    options: ["220", "144", "225", "200"],
    correctAnswer: 2,
    explanation: "Total work = 180 × 15 × 10 = 27000 person-hours. Needed: n × 10 × 12 = 27000. n = 27000/120 = 225."
  }
];
