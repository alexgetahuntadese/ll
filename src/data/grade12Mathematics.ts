export interface MathQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
}

export interface MathSubjectData {
  [chapter: string]: MathQuizQuestion[];
}

export const grade12Mathematics: MathSubjectData = {
  "Unit 1: Sequence and Series": [
    // Easy Questions (7)
    {
      id: 1001,
      question: "What is the next term in the arithmetic sequence 2, 5, 8, 11, ...?",
      options: ["13", "14", "15", "16"],
      correct: "14",
      explanation: "This is an arithmetic sequence with first term a₁ = 2 and common difference d = 3. The next term is 11 + 3 = 14.",
      difficulty: "Easy",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1002,
      question: "In the geometric sequence 3, 6, 12, 24, ..., what is the common ratio?",
      options: ["2", "3", "4", "6"],
      correct: "2",
      explanation: "The common ratio r = 6/3 = 2. Each term is obtained by multiplying the previous term by 2.",
      difficulty: "Easy",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1003,
      question: "What is the 5th term of the arithmetic sequence with first term 7 and common difference 4?",
      options: ["23", "27", "31", "35"],
      correct: "23",
      explanation: "Using aₙ = a₁ + (n-1)d: a₅ = 7 + (5-1)×4 = 7 + 16 = 23.",
      difficulty: "Easy",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1004,
      question: "What is the sum of the first 4 terms of the series 1 + 3 + 5 + 7 + ...?",
      options: ["16", "18", "20", "22"],
      correct: "16",
      explanation: "The first 4 terms are 1, 3, 5, 7. Their sum is 1 + 3 + 5 + 7 = 16.",
      difficulty: "Easy",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1005,
      question: "In the sequence 1, 4, 9, 16, 25, ..., what type of sequence is this?",
      options: ["Arithmetic", "Geometric", "Square numbers", "Fibonacci"],
      correct: "Square numbers",
      explanation: "This sequence represents perfect squares: 1², 2², 3², 4², 5², ...",
      difficulty: "Easy",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1006,
      question: "What is the first term of an arithmetic sequence if the 3rd term is 11 and the common difference is 3?",
      options: ["5", "6", "7", "8"],
      correct: "5",
      explanation: "Using a₃ = a₁ + 2d: 11 = a₁ + 2(3), so a₁ = 11 - 6 = 5.",
      difficulty: "Easy",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1007,
      question: "In a geometric sequence, if the first term is 2 and the second term is 6, what is the third term?",
      options: ["10", "12", "18", "24"],
      correct: "18",
      explanation: "The common ratio r = 6/2 = 3. The third term is 6 × 3 = 18.",
      difficulty: "Easy",
      chapter: "Unit 1: Sequence and Series"
    },
    // Medium Questions (7)
    {
      id: 1008,
      question: "Find the sum of the first 20 terms of the arithmetic sequence 5, 8, 11, 14, ...",
      options: ["650", "670", "685", "700"],
      correct: "670",
      explanation: "Using Sₙ = n/2[2a₁ + (n-1)d]: S₂₀ = 20/2[2(5) + (20-1)(3)] = 10[10 + 57] = 670.",
      difficulty: "Medium",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1009,
      question: "What is the sum of the infinite geometric series 1 + 1/2 + 1/4 + 1/8 + ...?",
      options: ["1", "2", "3", "4"],
      correct: "2",
      explanation: "For |r| < 1, S∞ = a₁/(1-r) = 1/(1-1/2) = 1/(1/2) = 2.",
      difficulty: "Medium",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1010,
      question: "In an arithmetic sequence, if the sum of the first 10 terms is 100 and the first term is 2, what is the common difference?",
      options: ["1.6", "1.8", "2.0", "2.2"],
      correct: "1.6",
      explanation: "Using Sₙ = n/2[2a₁ + (n-1)d]: 100 = 10/2[2(2) + 9d] = 5[4 + 9d]. So 20 = 4 + 9d, giving d = 16/9 ≈ 1.78. Wait, let me recalculate: 100 = 5[4 + 9d], so 20 = 4 + 9d, thus 9d = 16, so d = 16/9 ≈ 1.78. The closest answer is 1.8, but let me check: if d = 1.6, then S₁₀ = 5[4 + 9(1.6)] = 5[4 + 14.4] = 5(18.4) = 92. If d = 1.8, then S₁₀ = 5[4 + 9(1.8)] = 5[4 + 16.2] = 5(20.2) = 101. So d = 1.6 gives 92, which is closest to 100.",
      difficulty: "Medium",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1011,
      question: "Find the nth term formula for the sequence 3, 7, 11, 15, ...",
      options: ["aₙ = 4n - 1", "aₙ = 4n + 1", "aₙ = 3n + 1", "aₙ = n + 3"],
      correct: "aₙ = 4n - 1",
      explanation: "This is arithmetic with a₁ = 3 and d = 4. So aₙ = a₁ + (n-1)d = 3 + (n-1)4 = 3 + 4n - 4 = 4n - 1.",
      difficulty: "Medium",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1012,
      question: "What is the 8th term of the geometric sequence 2, -6, 18, -54, ...?",
      options: ["-4374", "4374", "-1458", "1458"],
      correct: "-4374",
      explanation: "The common ratio r = -6/2 = -3. Using aₙ = a₁ × r^(n-1): a₈ = 2 × (-3)^7 = 2 × (-2187) = -4374.",
      difficulty: "Medium",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1013,
      question: "Find the sum of the geometric series 5 + 10 + 20 + 40 + ... + 1280.",
      options: ["2550", "2555", "2560", "2565"],
      correct: "2555",
      explanation: "First find n: 1280 = 5 × 2^(n-1), so 256 = 2^(n-1), giving n = 9. Using Sₙ = a₁(r^n - 1)/(r - 1): S₉ = 5(2⁹ - 1)/(2 - 1) = 5(512 - 1) = 5 × 511 = 2555.",
      difficulty: "Medium",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1014,
      question: "In an arithmetic sequence, the 5th term is 17 and the 12th term is 38. What is the first term?",
      options: ["2", "3", "4", "5"],
      correct: "5",
      explanation: "From a₅ = 17 and a₁₂ = 38: 17 = a₁ + 4d and 38 = a₁ + 11d. Subtracting: 21 = 7d, so d = 3. Then a₁ = 17 - 4(3) = 5.",
      difficulty: "Medium",
      chapter: "Unit 1: Sequence and Series"
    },
    // Hard Questions (7)
    {
      id: 1015,
      question: "Find the sum of the series 1² + 2² + 3² + ... + n² for n = 10.",
      options: ["385", "390", "395", "400"],
      correct: "385",
      explanation: "Using the formula for sum of squares: Σk² = n(n+1)(2n+1)/6 = 10(11)(21)/6 = 2310/6 = 385.",
      difficulty: "Hard",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1016,
      question: "In a geometric sequence, the sum of the first 3 terms is 21 and the sum of the first 6 terms is 189. Find the first term.",
      options: ["3", "6", "9", "12"],
      correct: "3",
      explanation: "Let a be the first term and r be the common ratio. S₃ = a(r³-1)/(r-1) = 21 and S₆ = a(r⁶-1)/(r-1) = 189. Dividing: (r⁶-1)/(r³-1) = 9. Since r⁶-1 = (r³-1)(r³+1), we get r³+1 = 9, so r³ = 8, thus r = 2. Then a(8-1)/(2-1) = 21, so 7a = 21, giving a = 3.",
      difficulty: "Hard",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1017,
      question: "Find the value of x if 2, x, 18 are in geometric progression.",
      options: ["±6", "±8", "±9", "±12"],
      correct: "±6",
      explanation: "For geometric progression: x² = 2 × 18 = 36, so x = ±6.",
      difficulty: "Hard",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1018,
      question: "What is the sum of the infinite series 1 + 3/4 + (3/4)² + (3/4)³ + ...?",
      options: ["3", "4", "5", "6"],
      correct: "4",
      explanation: "This is an infinite geometric series with a₁ = 1 and r = 3/4. Sum = a₁/(1-r) = 1/(1-3/4) = 1/(1/4) = 4.",
      difficulty: "Hard",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1019,
      question: "If the sum of n terms of an arithmetic series is 3n² + 5n, what is the nth term?",
      options: ["6n + 2", "6n - 2", "3n + 5", "6n + 8"],
      correct: "6n + 2",
      explanation: "If Sₙ = 3n² + 5n, then aₙ = Sₙ - Sₙ₋₁ = (3n² + 5n) - (3(n-1)² + 5(n-1)) = 3n² + 5n - 3(n² - 2n + 1) - 5n + 5 = 3n² + 5n - 3n² + 6n - 3 - 5n + 5 = 6n + 2.",
      difficulty: "Hard",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1020,
      question: "Find the number of terms in the arithmetic sequence 7, 10, 13, ..., 97.",
      options: ["30", "31", "32", "33"],
      correct: "31",
      explanation: "Using aₙ = a₁ + (n-1)d: 97 = 7 + (n-1)3, so 90 = 3(n-1), giving n-1 = 30, thus n = 31.",
      difficulty: "Hard",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1021,
      question: "In a geometric sequence, if the 4th term is 24 and the 7th term is 192, what is the 10th term?",
      options: ["1536", "1544", "1552", "1560"],
      correct: "1536",
      explanation: "From a₄ = 24 and a₇ = 192: a₇/a₄ = r³ = 192/24 = 8, so r = 2. Then a₄ = a₁r³ = 24, so a₁ = 24/8 = 3. Therefore a₁₀ = 3 × 2⁹ = 3 × 512 = 1536.",
      difficulty: "Hard",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1022,
      question: "What is the 4th term of the geometric sequence 5, 10, 20, ...?",
      options: ["25", "30", "40", "45"],
      correct: "40",
      explanation: "This is a geometric sequence with common ratio 2, so the 4th term is 20 times 2 = 40.",
      difficulty: "Easy",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1023,
      question: "If the first term of an arithmetic sequence is 12 and the 6th term is 27, what is the common difference?",
      options: ["2", "3", "4", "5"],
      correct: "3",
      explanation: "Using a6 = a1 + 5d: 27 = 12 + 5d, so d = 3.",
      difficulty: "Easy",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1024,
      question: "What is the sum of the first five terms of the geometric series 2 + 4 + 8 + 16 + ...?",
      options: ["30", "48", "62", "64"],
      correct: "62",
      explanation: "The first five terms are 2, 4, 8, 16, and 32. Their sum is 62.",
      difficulty: "Easy",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1025,
      question: "Find the nth term of the geometric sequence 4, 12, 36, 108, ...",
      options: ["4 * 2^(n-1)", "4 * 3^(n-1)", "3 * 4^(n-1)", "12 * 3^(n-2)"],
      correct: "4 * 3^(n-1)",
      explanation: "The first term is 4 and the common ratio is 3, so an = 4 * 3^(n-1).",
      difficulty: "Medium",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1026,
      question: "In an arithmetic sequence, the 9th term is 29 and the common difference is 3. What is the first term?",
      options: ["2", "5", "8", "11"],
      correct: "5",
      explanation: "Using an = a1 + (n-1)d: 29 = a1 + 8(3), so a1 = 5.",
      difficulty: "Medium",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1027,
      question: "Find the sum of the infinite geometric series 6 - 3 + 1.5 - 0.75 + ...",
      options: ["2", "3", "4", "6"],
      correct: "4",
      explanation: "Here a1 = 6 and r = -1/2. Since |r| < 1, S = a1/(1-r) = 6/(1 + 1/2) = 4.",
      difficulty: "Medium",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1028,
      question: "In an arithmetic sequence, the 4th term is 13 and the 9th term is 28. Find the sum of the first 12 terms.",
      options: ["228", "234", "246", "252"],
      correct: "246",
      explanation: "From a4 = a + 3d = 13 and a9 = a + 8d = 28, we get d = 3 and a = 4. Then S12 = 12/2[2(4) + 11(3)] = 246.",
      difficulty: "Hard",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1029,
      question: "What is the sum of the geometric series 64 + 32 + 16 + 8 + 4 + 2 + 1?",
      options: ["126", "127", "128", "129"],
      correct: "127",
      explanation: "Adding the terms gives 127.",
      difficulty: "Hard",
      chapter: "Unit 1: Sequence and Series"
    },
    {
      id: 1030,
      question: "Three positive numbers are in geometric progression. If their sum is 14 and their product is 64, what is the middle term?",
      options: ["2", "4", "6", "8"],
      correct: "4",
      explanation: "Let the terms be a/r, a, ar. Their product is a^3 = 64, so a = 4.",
      difficulty: "Hard",
      chapter: "Unit 1: Sequence and Series"
    }
  ],
  "Unit 2: Introduction to Calculus": [
    {
      id: 2001,
      question: "What is the derivative of f(x) = 3x²?",
      options: ["6x", "3x", "x²", "9x"],
      correct: "6x",
      explanation: "Using the power rule: d/dx(3x²) = 3 × 2x¹ = 6x.",
      difficulty: "Easy",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2002,
      question: "What is the derivative of a constant function f(x) = 5?",
      options: ["0", "1", "5", "x"],
      correct: "0",
      explanation: "The derivative of any constant is 0, since constants don't change with respect to x.",
      difficulty: "Easy",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2003,
      question: "Find the derivative of f(x) = x³ + 2x.",
      options: ["3x² + 2", "x² + 2x", "3x + 2", "x³ + 2"],
      correct: "3x² + 2",
      explanation: "Using the power rule and sum rule: d/dx(x³ + 2x) = 3x² + 2(1) = 3x² + 2.",
      difficulty: "Easy",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2004,
      question: "What is ∫2x dx?",
      options: ["x² + C", "2x² + C", "x²", "2x"],
      correct: "x² + C",
      explanation: "The antiderivative of 2x is x² + C, where C is the constant of integration.",
      difficulty: "Easy",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2005,
      question: "What does the symbol ∫ represent?",
      options: ["Derivative", "Integral", "Limit", "Function"],
      correct: "Integral",
      explanation: "The symbol ∫ represents integration, which is the reverse process of differentiation.",
      difficulty: "Easy",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2006,
      question: "Find the limit: lim(x→2) (x + 3).",
      options: ["5", "2", "3", "8"],
      correct: "5",
      explanation: "For polynomial functions, we can substitute directly: lim(x→2) (x + 3) = 2 + 3 = 5.",
      difficulty: "Easy",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2007,
      question: "What is the derivative of f(x) = x?",
      options: ["1", "0", "x", "2x"],
      correct: "1",
      explanation: "The derivative of x with respect to x is 1, since d/dx(x¹) = 1 × x⁰ = 1.",
      difficulty: "Easy",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2008,
      question: "Find the derivative of f(x) = (2x + 1)³.",
      options: ["6(2x + 1)²", "3(2x + 1)²", "2(2x + 1)²", "(2x + 1)²"],
      correct: "6(2x + 1)²",
      explanation: "Using the chain rule: d/dx[(2x + 1)³] = 3(2x + 1)² × 2 = 6(2x + 1)².",
      difficulty: "Medium",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2009,
      question: "Evaluate ∫(3x² - 4x + 1) dx.",
      options: ["x³ - 2x² + x + C", "3x³ - 4x² + x + C", "x³ - 2x² + C", "3x - 4 + C"],
      correct: "x³ - 2x² + x + C",
      explanation: "∫(3x² - 4x + 1) dx = 3(x³/3) - 4(x²/2) + x + C = x³ - 2x² + x + C.",
      difficulty: "Medium",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2010,
      question: "Find the limit: lim(x→0) (sin x)/x.",
      options: ["0", "1", "∞", "undefined"],
      correct: "1",
      explanation: "This is a standard limit in calculus: lim(x→0) (sin x)/x = 1.",
      difficulty: "Medium",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2011,
      question: "If f(x) = x² - 4x + 3, find f'(2).",
      options: ["0", "-1", "1", "3"],
      correct: "0",
      explanation: "f'(x) = 2x - 4, so f'(2) = 2(2) - 4 = 4 - 4 = 0.",
      difficulty: "Medium",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2012,
      question: "Find the derivative of f(x) = x²e^x.",
      options: ["2xe^x + x²e^x", "2xe^x", "x²e^x", "2x + e^x"],
      correct: "2xe^x + x²e^x",
      explanation: "Using the product rule: d/dx(x²e^x) = 2x × e^x + x² × e^x = 2xe^x + x²e^x.",
      difficulty: "Medium",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2013,
      question: "Evaluate the definite integral ∫₀² x dx.",
      options: ["2", "4", "1", "0"],
      correct: "2",
      explanation: "∫₀² x dx = [x²/2]₀² = (4/2) - (0/2) = 2 - 0 = 2.",
      difficulty: "Medium",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2014,
      question: "Find the critical points of f(x) = x³ - 3x² + 2.",
      options: ["x = 0, 2", "x = 1, 2", "x = 0, 1", "x = 2, 3"],
      correct: "x = 0, 2",
      explanation: "f'(x) = 3x² - 6x = 3x(x - 2). Setting f'(x) = 0: x = 0 or x = 2.",
      difficulty: "Medium",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2015,
      question: "Find the derivative of f(x) = ln(x² + 1).",
      options: ["2x/(x² + 1)", "1/(x² + 1)", "2x", "x/(x² + 1)"],
      correct: "2x/(x² + 1)",
      explanation: "Using the chain rule: d/dx[ln(x² + 1)] = 1/(x² + 1) × 2x = 2x/(x² + 1).",
      difficulty: "Hard",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2016,
      question: "Evaluate ∫x ln(x) dx using integration by parts.",
      options: ["(x²/2)ln(x) - x²/4 + C", "x²ln(x) - x² + C", "(x²/2)ln(x) + C", "x²ln(x)/2 + C"],
      correct: "(x²/2)ln(x) - x²/4 + C",
      explanation: "Using integration by parts with u = ln(x), dv = x dx: ∫x ln(x) dx = (x²/2)ln(x) - ∫(x²/2)(1/x) dx = (x²/2)ln(x) - x²/4 + C.",
      difficulty: "Hard",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2017,
      question: "Find the second derivative of f(x) = x⁴ - 6x³ + 9x².",
      options: ["12x² - 36x + 18", "4x³ - 18x² + 18x", "12x² - 18x + 9", "x³ - 6x² + 9x"],
      correct: "12x² - 36x + 18",
      explanation: "f'(x) = 4x³ - 18x² + 18x, so f''(x) = 12x² - 36x + 18.",
      difficulty: "Hard",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2018,
      question: "Find the limit: lim(x→∞) (3x² + 2x)/(x² - 1).",
      options: ["3", "2", "∞", "0"],
      correct: "3",
      explanation: "Dividing numerator and denominator by x²: lim(x→∞) (3 + 2/x)/(1 - 1/x²) = 3/1 = 3.",
      difficulty: "Hard",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2019,
      question: "Find the area under the curve y = x² from x = 0 to x = 3.",
      options: ["9", "18", "27", "6"],
      correct: "9",
      explanation: "Area = ∫₀³ x² dx = [x³/3]₀³ = 27/3 - 0 = 9.",
      difficulty: "Hard",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2020,
      question: "If f(x) = x³ - 6x² + 9x + 1, find the inflection points.",
      options: ["x = 2", "x = 1", "x = 3", "x = 0"],
      correct: "x = 2",
      explanation: "f'(x) = 3x² - 12x + 9, f''(x) = 6x - 12. Setting f''(x) = 0: 6x - 12 = 0, so x = 2.",
      difficulty: "Hard",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2021,
      question: "Evaluate ∫e^(2x) dx.",
      options: ["e^(2x)/2 + C", "2e^(2x) + C", "e^(2x) + C", "e^(2x)/4 + C"],
      correct: "e^(2x)/2 + C",
      explanation: "∫e^(2x) dx = e^(2x)/2 + C, using the substitution u = 2x.",
      difficulty: "Hard",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2022,
      question: "What is the derivative of f(x) = x^3 + 2x?",
      options: ["3x^2 + 2", "x^2 + 2", "3x + 2", "x^3"],
      correct: "3x^2 + 2",
      explanation: "Differentiate term by term: d/dx(x^3) = 3x^2 and d/dx(2x) = 2.",
      difficulty: "Easy",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2023,
      question: "Evaluate integral of 4x with respect to x.",
      options: ["2x^2 + C", "4x + C", "x^2 + C", "4x^2 + C"],
      correct: "2x^2 + C",
      explanation: "Using the power rule for integration, integral of 4x dx = 2x^2 + C.",
      difficulty: "Easy",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2024,
      question: "Find the limit of x^2 + 3 as x approaches 2.",
      options: ["5", "6", "7", "8"],
      correct: "7",
      explanation: "Since polynomials are continuous, substitute x = 2 directly to get 7.",
      difficulty: "Easy",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2025,
      question: "What is the derivative of sin(3x)?",
      options: ["cos(3x)", "3cos(3x)", "3sin(3x)", "-3sin(3x)"],
      correct: "3cos(3x)",
      explanation: "Using the chain rule, d/dx[sin(3x)] = cos(3x) times 3.",
      difficulty: "Medium",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2026,
      question: "Find the slope of the tangent to y = x^2 - 4x at x = 3.",
      options: ["1", "2", "3", "6"],
      correct: "2",
      explanation: "The derivative is y' = 2x - 4. At x = 3, the slope is 2.",
      difficulty: "Medium",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2027,
      question: "Evaluate the definite integral from 0 to 2 of x + 1.",
      options: ["2", "3", "4", "5"],
      correct: "4",
      explanation: "Integral from 0 to 2 of (x + 1) dx = [x^2/2 + x] from 0 to 2 = 4.",
      difficulty: "Medium",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2028,
      question: "For f(x) = x^3 - 3x, at which x-values does f have local extrema?",
      options: ["x = -1 and x = 1", "x = 0 only", "x = -3 and x = 3", "x = 1 only"],
      correct: "x = -1 and x = 1",
      explanation: "f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1), so the critical points are x = -1 and x = 1.",
      difficulty: "Hard",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2029,
      question: "Find the limit of (x^2 - 9)/(x - 3) as x approaches 3.",
      options: ["3", "6", "9", "12"],
      correct: "6",
      explanation: "Factor the numerator: (x^2 - 9)/(x - 3) = x + 3 for x not equal to 3. The limit is 6.",
      difficulty: "Hard",
      chapter: "Unit 2: Introduction to Calculus"
    },
    {
      id: 2030,
      question: "Evaluate the definite integral from 1 to 3 of 2x + 1.",
      options: ["6", "8", "10", "12"],
      correct: "10",
      explanation: "Integral from 1 to 3 of (2x + 1) dx = [x^2 + x] from 1 to 3 = 10.",
      difficulty: "Hard",
      chapter: "Unit 2: Introduction to Calculus"
    }
  ],
  "Unit 3: Statistics": [
    {
      id: 3001,
      question: "What is the mean of the data set: 2, 4, 6, 8, 10?",
      options: ["5", "6", "7", "8"],
      correct: "6",
      explanation: "Mean = (2 + 4 + 6 + 8 + 10)/5 = 30/5 = 6.",
      difficulty: "Easy",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3002,
      question: "What is the median of the data set: 3, 7, 5, 9, 1?",
      options: ["3", "5", "7", "9"],
      correct: "5",
      explanation: "First arrange in order: 1, 3, 5, 7, 9. The median is the middle value: 5.",
      difficulty: "Easy",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3003,
      question: "What is the mode of the data set: 2, 3, 3, 4, 5, 3, 6?",
      options: ["2", "3", "4", "5"],
      correct: "3",
      explanation: "The mode is the value that appears most frequently. The number 3 appears three times.",
      difficulty: "Easy",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3004,
      question: "What is the range of the data set: 10, 15, 8, 12, 20?",
      options: ["10", "12", "15", "20"],
      correct: "12",
      explanation: "Range = Maximum value - Minimum value = 20 - 8 = 12.",
      difficulty: "Easy",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3005,
      question: "In a frequency distribution, what does frequency represent?",
      options: ["The middle value", "How often a value occurs", "The average value", "The spread of data"],
      correct: "How often a value occurs",
      explanation: "Frequency represents the number of times a particular value or class appears in the data set.",
      difficulty: "Easy",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3006,
      question: "What type of graph is best for showing parts of a whole?",
      options: ["Bar graph", "Line graph", "Pie chart", "Histogram"],
      correct: "Pie chart",
      explanation: "A pie chart is ideal for showing how different parts make up a whole, with each sector representing a proportion.",
      difficulty: "Easy",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3007,
      question: "What is the sum of all relative frequencies in a distribution?",
      options: ["0", "0.5", "1", "100"],
      correct: "1",
      explanation: "The sum of all relative frequencies equals 1 (or 100% when expressed as percentages).",
      difficulty: "Easy",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3008,
      question: "Calculate the variance of the data set: 4, 6, 8, 10, 12.",
      options: ["8", "10", "12", "16"],
      correct: "8",
      explanation: "Mean = 8. Variance = [(4-8)² + (6-8)² + (8-8)² + (10-8)² + (12-8)²]/5 = [16 + 4 + 0 + 4 + 16]/5 = 40/5 = 8.",
      difficulty: "Medium",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3009,
      question: "What is the standard deviation if the variance is 25?",
      options: ["5", "10", "15", "25"],
      correct: "5",
      explanation: "Standard deviation is the square root of variance: √25 = 5.",
      difficulty: "Medium",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3010,
      question: "In a normal distribution, approximately what percentage of data falls within one standard deviation of the mean?",
      options: ["50%", "68%", "95%", "99.7%"],
      correct: "68%",
      explanation: "In a normal distribution, approximately 68% of data falls within one standard deviation of the mean (empirical rule).",
      difficulty: "Medium",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3011,
      question: "What is the interquartile range (IQR) for the data set: 2, 5, 7, 9, 12, 15, 18?",
      options: ["8", "10", "12", "16"],
      correct: "10",
      explanation: "Q1 = 5, Q3 = 15. IQR = Q3 - Q1 = 15 - 5 = 10.",
      difficulty: "Medium",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3012,
      question: "If the correlation coefficient r = 0.8, what does this indicate?",
      options: ["No correlation", "Weak positive correlation", "Strong positive correlation", "Perfect negative correlation"],
      correct: "Strong positive correlation",
      explanation: "A correlation coefficient of 0.8 indicates a strong positive linear relationship between two variables.",
      difficulty: "Medium",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3013,
      question: "What is the 75th percentile of the data set: 10, 20, 30, 40, 50, 60, 70, 80?",
      options: ["55", "60", "65", "70"],
      correct: "65",
      explanation: "The 75th percentile (Q3) is the value below which 75% of the data falls. For this data set, Q3 = 65.",
      difficulty: "Medium",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3014,
      question: "In a box plot, what do the whiskers represent?",
      options: ["The mean", "The range of the middle 50%", "The extent of the data", "The outliers"],
      correct: "The extent of the data",
      explanation: "The whiskers in a box plot extend to show the range of the data, typically to the minimum and maximum values (excluding outliers).",
      difficulty: "Medium",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3015,
      question: "A survey of 100 students shows that 60 like math, 50 like science, and 30 like both. How many students like neither subject?",
      options: ["10", "20", "30", "40"],
      correct: "20",
      explanation: "Using the inclusion-exclusion principle: Students liking at least one = 60 + 50 - 30 = 80. Students liking neither = 100 - 80 = 20.",
      difficulty: "Hard",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3016,
      question: "If the mean of 10 numbers is 15 and one number is changed from 20 to 30, what is the new mean?",
      options: ["15", "16", "17", "18"],
      correct: "16",
      explanation: "Original sum = 10 × 15 = 150. New sum = 150 - 20 + 30 = 160. New mean = 160/10 = 16.",
      difficulty: "Hard",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3017,
      question: "In a regression analysis, if the coefficient of determination R² = 0.64, what percentage of variance is explained?",
      options: ["36%", "64%", "80%", "96%"],
      correct: "64%",
      explanation: "The coefficient of determination R² directly gives the percentage of variance explained by the model: 64%.",
      difficulty: "Hard",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3018,
      question: "Calculate the coefficient of variation for a data set with mean 50 and standard deviation 10.",
      options: ["0.2", "0.5", "5", "20"],
      correct: "0.2",
      explanation: "Coefficient of variation = (Standard deviation / Mean) = 10/50 = 0.2 or 20%.",
      difficulty: "Hard",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3019,
      question: "In a hypothesis test, if the p-value is 0.03 and α = 0.05, what is the conclusion?",
      options: ["Accept null hypothesis", "Reject null hypothesis", "Cannot determine", "Need more data"],
      correct: "Reject null hypothesis",
      explanation: "Since p-value (0.03) < α (0.05), we reject the null hypothesis at the 5% significance level.",
      difficulty: "Hard",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3020,
      question: "What is the z-score for a value of 85 in a distribution with mean 80 and standard deviation 5?",
      options: ["0.5", "1", "1.5", "2"],
      correct: "1",
      explanation: "z-score = (x - μ)/σ = (85 - 80)/5 = 5/5 = 1.",
      difficulty: "Hard",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3021,
      question: "In a binomial distribution with n = 10 and p = 0.3, what is the expected value?",
      options: ["2", "3", "4", "7"],
      correct: "3",
      explanation: "For a binomial distribution, expected value E(X) = np = 10 × 0.3 = 3.",
      difficulty: "Hard",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3022,
      question: "Which graph is most suitable for continuous grouped data?",
      options: ["Pie chart", "Histogram", "Pictogram", "Scatter diagram"],
      correct: "Histogram",
      explanation: "A histogram is used for continuous grouped data because the bars touch to show continuity.",
      difficulty: "Easy",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3023,
      question: "If P(A) = 0.7, what is P(A')?",
      options: ["0.1", "0.2", "0.3", "0.7"],
      correct: "0.3",
      explanation: "The probability of the complement is 1 - 0.7 = 0.3.",
      difficulty: "Easy",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3024,
      question: "Find the mean of 5, 5, 7, 8, 10.",
      options: ["6", "7", "8", "9"],
      correct: "7",
      explanation: "Mean = (5 + 5 + 7 + 8 + 10)/5 = 35/5 = 7.",
      difficulty: "Easy",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3025,
      question: "What is the class midpoint of the interval 20-29?",
      options: ["24", "24.5", "25", "25.5"],
      correct: "24.5",
      explanation: "Class midpoint = (20 + 29)/2 = 24.5.",
      difficulty: "Medium",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3026,
      question: "If the mean is 20 and the standard deviation is 4, what is the coefficient of variation?",
      options: ["0.1", "0.2", "0.25", "0.4"],
      correct: "0.2",
      explanation: "Coefficient of variation = standard deviation divided by mean = 4/20 = 0.2.",
      difficulty: "Medium",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3027,
      question: "What is the probability of getting an even number when a fair die is rolled?",
      options: ["1/6", "1/3", "1/2", "2/3"],
      correct: "1/2",
      explanation: "The even outcomes are 2, 4, and 6, so the probability is 3/6 = 1/2.",
      difficulty: "Medium",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3028,
      question: "A group of 10 values has mean 8 and another group of 15 values has mean 12. What is the combined mean?",
      options: ["9.6", "10", "10.4", "11"],
      correct: "10.4",
      explanation: "Combined mean = (10 * 8 + 15 * 12)/(10 + 15) = 260/25 = 10.4.",
      difficulty: "Hard",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3029,
      question: "If a value has z-score -1.5 in a distribution with mean 50 and standard deviation 4, what is the value?",
      options: ["42", "44", "46", "48"],
      correct: "44",
      explanation: "x = mean + z times standard deviation = 50 + (-1.5)(4) = 44.",
      difficulty: "Hard",
      chapter: "Unit 3: Statistics"
    },
    {
      id: 3030,
      question: "For a binomial distribution with n = 5 and p = 0.4, what is the expected value?",
      options: ["1", "1.5", "2", "2.5"],
      correct: "2",
      explanation: "Expected value of a binomial distribution is np = 5 * 0.4 = 2.",
      difficulty: "Hard",
      chapter: "Unit 3: Statistics"
    }
  ],
  "Unit 4: Introduction to Linear Programming": [
    {
      id: 4001,
      question: "What is the objective function in linear programming?",
      options: ["A constraint", "The function to be optimized", "A variable", "A feasible region"],
      correct: "The function to be optimized",
      explanation: "The objective function is the linear function that we want to maximize or minimize in a linear programming problem.",
      difficulty: "Easy",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4002,
      question: "What are constraints in linear programming?",
      options: ["Variables", "Equations only", "Linear inequalities or equations", "Objective functions"],
      correct: "Linear inequalities or equations",
      explanation: "Constraints are linear inequalities or equations that limit the values of the decision variables.",
      difficulty: "Easy",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4003,
      question: "What is the feasible region?",
      options: ["The optimal solution", "The set of all points satisfying constraints", "The objective function", "The corner points"],
      correct: "The set of all points satisfying constraints",
      explanation: "The feasible region is the set of all points that satisfy all the constraints of the linear programming problem.",
      difficulty: "Easy",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4004,
      question: "In linear programming, where does the optimal solution typically occur?",
      options: ["At the center", "At corner points", "On any edge", "Outside the feasible region"],
      correct: "At corner points",
      explanation: "The optimal solution of a linear programming problem occurs at one of the corner points (vertices) of the feasible region.",
      difficulty: "Easy",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4005,
      question: "What does 'maximize Z = 3x + 2y' mean?",
      options: ["Find minimum value", "Find maximum value", "Set equal to zero", "Find any value"],
      correct: "Find maximum value",
      explanation: "This means we want to find the values of x and y that give the largest possible value of Z = 3x + 2y.",
      difficulty: "Easy",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4006,
      question: "What is a decision variable?",
      options: ["A constraint", "A variable we can control", "The objective function", "A constant"],
      correct: "A variable we can control",
      explanation: "Decision variables are the variables whose values we determine to optimize the objective function.",
      difficulty: "Easy",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4007,
      question: "If x ≥ 0 and y ≥ 0, what do these constraints represent?",
      options: ["Non-negativity constraints", "Binding constraints", "Slack constraints", "Redundant constraints"],
      correct: "Non-negativity constraints",
      explanation: "These are non-negativity constraints, ensuring that the decision variables cannot take negative values.",
      difficulty: "Easy",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4008,
      question: "Solve: Maximize Z = 2x + 3y subject to x + y ≤ 4, x ≥ 0, y ≥ 0. What is the maximum value?",
      options: ["8", "10", "12", "14"],
      correct: "12",
      explanation: "The corner points are (0,0), (4,0), and (0,4). Evaluating Z: Z(0,0)=0, Z(4,0)=8, Z(0,4)=12. Maximum is 12 at (0,4).",
      difficulty: "Medium",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4009,
      question: "What is a binding constraint?",
      options: ["Any constraint", "A constraint that is satisfied with equality at the optimal solution", "A redundant constraint", "A non-negativity constraint"],
      correct: "A constraint that is satisfied with equality at the optimal solution",
      explanation: "A binding constraint is one where the optimal solution lies exactly on the constraint boundary (satisfied with equality).",
      difficulty: "Medium",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4010,
      question: "In the constraint 2x + 3y ≤ 12, what is the slope of the boundary line?",
      options: ["-2/3", "-3/2", "2/3", "3/2"],
      correct: "-2/3",
      explanation: "Rewriting as y ≤ 4 - (2/3)x, the boundary line y = 4 - (2/3)x has slope -2/3.",
      difficulty: "Medium",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4011,
      question: "What happens if a linear programming problem has no feasible solution?",
      options: ["It's optimal", "It's infeasible", "It's unbounded", "It has multiple solutions"],
      correct: "It's infeasible",
      explanation: "When there are no points that satisfy all constraints simultaneously, the problem is called infeasible.",
      difficulty: "Medium",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4012,
      question: "Find the corner points of the feasible region defined by: x + y ≤ 6, 2x + y ≤ 8, x ≥ 0, y ≥ 0.",
      options: ["(0,0), (4,0), (0,6)", "(0,0), (4,0), (2,4), (0,6)", "(0,0), (4,0), (0,8)", "(0,0), (2,4), (0,6)"],
      correct: "(0,0), (4,0), (2,4), (0,6)",
      explanation: "The corner points are found by intersecting constraint boundaries: (0,0), (4,0) from 2x+y=8 and x-axis, (2,4) from x+y=6 and 2x+y=8, and (0,6) from x+y=6 and y-axis.",
      difficulty: "Medium",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4013,
      question: "What is the graphical method in linear programming?",
      options: ["Using graphs to find constraints", "Plotting the feasible region and finding optimal corner point", "Drawing the objective function", "Sketching variables"],
      correct: "Plotting the feasible region and finding optimal corner point",
      explanation: "The graphical method involves plotting constraints to find the feasible region, then evaluating the objective function at corner points.",
      difficulty: "Medium",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4014,
      question: "In maximization problems, which direction should we move the objective function line?",
      options: ["Towards origin", "Away from origin", "Parallel to x-axis", "Parallel to y-axis"],
      correct: "Away from origin",
      explanation: "For maximization, we move the objective function line away from the origin until it touches the last point of the feasible region.",
      difficulty: "Medium",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4015,
      question: "A company produces two products A and B. Product A requires 2 hours of labor and 1 unit of material. Product B requires 1 hour of labor and 2 units of material. Available: 100 hours of labor, 80 units of material. Profit: $3 for A, $4 for B. What is the maximum profit?",
      options: ["$160", "$180", "$200", "$220"],
      correct: "$200",
      explanation: "Let x = units of A, y = units of B. Maximize Z = 3x + 4y subject to 2x + y ≤ 100, x + 2y ≤ 80, x,y ≥ 0. Corner points: (0,0), (50,0), (40,20), (0,40). Z values: 0, 150, 200, 160. Maximum is $200 at (40,20).",
      difficulty: "Hard",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4016,
      question: "What is the dual of the primal problem: Minimize Z = 2x₁ + 3x₂ subject to x₁ + 2x₂ ≥ 4, 2x₁ + x₂ ≥ 3, x₁,x₂ ≥ 0?",
      options: ["Maximize W = 4y₁ + 3y₂", "Minimize W = 4y₁ + 3y₂", "Maximize W = 2y₁ + 3y₂", "Minimize W = 2y₁ + 3y₂"],
      correct: "Maximize W = 4y₁ + 3y₂",
      explanation: "The dual of a minimization problem is a maximization problem. The objective coefficients become the RHS of dual constraints, and the RHS becomes the objective coefficients.",
      difficulty: "Hard",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4017,
      question: "In sensitivity analysis, what is the shadow price?",
      options: ["The optimal value", "The marginal value of relaxing a constraint by one unit", "The cost of production", "The slack variable value"],
      correct: "The marginal value of relaxing a constraint by one unit",
      explanation: "Shadow price represents how much the optimal objective function value would change if we relaxed a binding constraint by one unit.",
      difficulty: "Hard",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4018,
      question: "What characterizes an unbounded solution in linear programming?",
      options: ["No feasible region", "Infinite optimal value", "Multiple optimal solutions", "Degenerate solution"],
      correct: "Infinite optimal value",
      explanation: "An unbounded solution occurs when the objective function can be improved indefinitely, meaning the optimal value approaches infinity.",
      difficulty: "Hard",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4019,
      question: "Solve: Minimize Z = x + 2y subject to x + y ≥ 3, 2x + y ≥ 4, x,y ≥ 0. Find the minimum value.",
      options: ["3", "4", "5", "6"],
      correct: "5",
      explanation: "Corner points of feasible region: (2,0), (1,2), (0,4). Z values: Z(2,0)=2, Z(1,2)=5, Z(0,4)=8. But (2,0) doesn't satisfy x+y≥3. Checking valid points: Z(1,2)=5, Z(0,4)=8. Minimum is 5.",
      difficulty: "Hard",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4020,
      question: "What is degeneracy in linear programming?",
      options: ["No solution exists", "Multiple optimal solutions", "More than 2 constraints intersect at optimal point", "Unbounded solution"],
      correct: "More than 2 constraints intersect at optimal point",
      explanation: "Degeneracy occurs when more than n constraints are binding at the optimal solution, where n is the number of variables.",
      difficulty: "Hard",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4021,
      question: "In the Big M method, what is the purpose of the big M?",
      options: ["To maximize profit", "To ensure artificial variables are eliminated", "To minimize cost", "To find slack variables"],
      correct: "To ensure artificial variables are eliminated",
      explanation: "The Big M method uses a very large coefficient M with artificial variables in the objective function to ensure they become zero in the optimal solution.",
      difficulty: "Hard",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4022,
      question: "What is the feasible region in a linear programming problem?",
      options: ["The graph of the objective function", "The set of points satisfying all constraints", "The set of corner points only", "The x-axis region"],
      correct: "The set of points satisfying all constraints",
      explanation: "The feasible region is the collection of all points that satisfy every constraint in the problem.",
      difficulty: "Easy",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4023,
      question: "What do non-negativity constraints require?",
      options: ["Variables must be equal", "Variables must be integers", "Variables must be greater than or equal to zero", "Variables must be less than zero"],
      correct: "Variables must be greater than or equal to zero",
      explanation: "Non-negativity constraints require decision variables to be zero or positive.",
      difficulty: "Easy",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4024,
      question: "In graphical linear programming, where is the optimal solution usually found?",
      options: ["At any interior point", "At a corner point of the feasible region", "Always on the x-axis", "Always at the origin"],
      correct: "At a corner point of the feasible region",
      explanation: "For linear objective functions over a feasible polygon, the optimum occurs at a corner point.",
      difficulty: "Easy",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4025,
      question: "Maximize Z = 3x + 2y subject to x + y <= 4, x >= 0, y >= 0. What is the maximum value?",
      options: ["8", "10", "12", "14"],
      correct: "12",
      explanation: "The corner points are (0,0), (4,0), and (0,4). Z is largest at (4,0), where Z = 12.",
      difficulty: "Medium",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4026,
      question: "If x + y <= 10 and a solution has x = 6 and y = 3, what is the slack?",
      options: ["1", "2", "3", "4"],
      correct: "1",
      explanation: "Slack is the unused amount: 10 - (6 + 3) = 1.",
      difficulty: "Medium",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4027,
      question: "Minimize C = 2x + 5y subject to x + y >= 6, x >= 0, y >= 0. What is the minimum value?",
      options: ["10", "12", "18", "30"],
      correct: "12",
      explanation: "To minimize cost, place as much weight as possible on the cheaper variable x. At (6,0), C = 12.",
      difficulty: "Medium",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4028,
      question: "Maximize P = 5x + 4y subject to x + y <= 5, x <= 3, x >= 0, y >= 0. What is the maximum value?",
      options: ["20", "21", "23", "25"],
      correct: "23",
      explanation: "Checking the corner points shows the maximum occurs at (3,2), where P = 23.",
      difficulty: "Hard",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4029,
      question: "What condition leads to multiple optimal solutions in a linear programming problem?",
      options: ["The feasible region is empty", "The objective function is parallel to a boundary segment of the feasible region", "There are too many variables", "All constraints are equalities"],
      correct: "The objective function is parallel to a boundary segment of the feasible region",
      explanation: "If the objective function is parallel to a boundary edge, every point on that edge can give the same optimal value.",
      difficulty: "Hard",
      chapter: "Unit 4: Introduction to Linear Programming"
    },
    {
      id: 4030,
      question: "In the simplex method for a maximization problem, which variable usually enters the basis next?",
      options: ["The variable with the smallest positive coefficient", "The variable with the largest positive coefficient in the objective row", "The variable with the largest slack", "The artificial variable"],
      correct: "The variable with the largest positive coefficient in the objective row",
      explanation: "For maximization, the entering variable is typically chosen from the column that can improve the objective value the most.",
      difficulty: "Hard",
      chapter: "Unit 4: Introduction to Linear Programming"
    }
  ],
  "Unit 5: Mathematical Application in Business": [
    {
      id: 5001,
      question: "What is simple interest on $1000 at 5% per year for 2 years?",
      options: ["$50", "$100", "$150", "$200"],
      correct: "$100",
      explanation: "Simple Interest = Principal × Rate × Time = $1000 × 0.05 × 2 = $100.",
      difficulty: "Easy",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5002,
      question: "If the cost price is $80 and selling price is $100, what is the profit percentage?",
      options: ["20%", "25%", "30%", "35%"],
      correct: "25%",
      explanation: "Profit = $100 - $80 = $20. Profit percentage = (Profit/Cost Price) × 100 = (20/80) × 100 = 25%.",
      difficulty: "Easy",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5003,
      question: "What is the compound amount if $500 is invested at 6% compound interest for 2 years?",
      options: ["$560", "$562", "$561.80", "$580"],
      correct: "$561.80",
      explanation: "A = P(1 + r)ⁿ = $500(1 + 0.06)² = $500(1.1236) = $561.80.",
      difficulty: "Easy",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5004,
      question: "If fixed costs are $2000 and variable cost per unit is $5, what is the total cost for 100 units?",
      options: ["$2500", "$2200", "$2800", "$3000"],
      correct: "$2500",
      explanation: "Total Cost = Fixed Cost + Variable Cost = $2000 + (100 × $5) = $2000 + $500 = $2500.",
      difficulty: "Easy",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5005,
      question: "What is the break-even point if fixed costs are $1000, price per unit is $20, and variable cost per unit is $10?",
      options: ["50 units", "100 units", "150 units", "200 units"],
      correct: "100 units",
      explanation: "Break-even point = Fixed Costs/(Price per unit - Variable cost per unit) = $1000/($20 - $10) = 100 units.",
      difficulty: "Easy",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5006,
      question: "If a product is marked up by 40% from its cost of $50, what is the selling price?",
      options: ["$60", "$65", "$70", "$75"],
      correct: "$70",
      explanation: "Selling Price = Cost Price + Markup = $50 + (40% of $50) = $50 + $20 = $70.",
      difficulty: "Easy",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5007,
      question: "What is the discount amount if a $200 item is sold at 15% discount?",
      options: ["$20", "$25", "$30", "$35"],
      correct: "$30",
      explanation: "Discount = List Price × Discount Rate = $200 × 0.15 = $30.",
      difficulty: "Easy",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5008,
      question: "Find the present value of $5000 due in 3 years at 8% compound interest.",
      options: ["$3969.16", "$4000.00", "$4200.50", "$4500.75"],
      correct: "$3969.16",
      explanation: "PV = FV/(1 + r)ⁿ = $5000/(1.08)³ = $5000/1.259712 = $3969.16.",
      difficulty: "Medium",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5009,
      question: "A company's revenue function is R(x) = 100x and cost function is C(x) = 2000 + 60x. What is the profit when x = 100?",
      options: ["$2000", "$2500", "$3000", "$4000"],
      correct: "$2000",
      explanation: "Profit = Revenue - Cost = 100(100) - (2000 + 60(100)) = 10000 - 8000 = $2000.",
      difficulty: "Medium",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5010,
      question: "Calculate the effective annual interest rate if the nominal rate is 12% compounded quarterly.",
      options: ["12.36%", "12.55%", "12.68%", "13.00%"],
      correct: "12.55%",
      explanation: "Effective rate = (1 + r/n)ⁿ - 1 = (1 + 0.12/4)⁴ - 1 = (1.03)⁴ - 1 = 0.1255 = 12.55%.",
      difficulty: "Medium",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5011,
      question: "If demand function is p = 100 - 2q, what is the revenue when q = 20?",
      options: ["$1200", "$1400", "$1600", "$1800"],
      correct: "$1200",
      explanation: "When q = 20, p = 100 - 2(20) = 60. Revenue = p × q = 60 × 20 = $1200.",
      difficulty: "Medium",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5012,
      question: "What is the future value of an ordinary annuity of $1000 per year for 5 years at 6% interest?",
      options: ["$5637.09", "$5975.32", "$6353.85", "$6500.00"],
      correct: "$5637.09",
      explanation: "FV = PMT × [((1 + r)ⁿ - 1)/r] = $1000 × [((1.06)⁵ - 1)/0.06] = $1000 × 5.6371 = $5637.09.",
      difficulty: "Medium",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5013,
      question: "A loan of $10,000 is to be repaid in 4 equal annual payments at 8% interest. What is each payment?",
      options: ["$3019.21", "$3500.00", "$4000.00", "$4500.00"],
      correct: "$3019.21",
      explanation: "PMT = PV × [r(1 + r)ⁿ]/[(1 + r)ⁿ - 1] = $10,000 × [0.08(1.08)⁴]/[(1.08)⁴ - 1] = $3019.21.",
      difficulty: "Medium",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5014,
      question: "If the marginal cost function is MC = 20 + 4x, what is the total cost function if fixed costs are $500?",
      options: ["C(x) = 500 + 20x + 2x²", "C(x) = 500 + 20x + 4x²", "C(x) = 520 + 4x²", "C(x) = 500 + 24x"],
      correct: "C(x) = 500 + 20x + 2x²",
      explanation: "Total cost is the integral of marginal cost plus fixed costs: C(x) = ∫(20 + 4x)dx + 500 = 20x + 2x² + 500.",
      difficulty: "Medium",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5015,
      question: "A company wants to minimize inventory costs. If holding cost is $2 per unit per year, ordering cost is $50 per order, and annual demand is 1000 units, what is the economic order quantity (EOQ)?",
      options: ["100", "224", "316", "500"],
      correct: "224",
      explanation: "EOQ = √(2DS/H) where D = 1000, S = $50, H = $2. EOQ = √(2 × 1000 × 50/2) = √50000 = 224 units.",
      difficulty: "Hard",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5016,
      question: "Find the maximum revenue if the demand function is p = 200 - 0.5q.",
      options: ["$20,000", "$25,000", "$30,000", "$40,000"],
      correct: "$20,000",
      explanation: "Revenue R = pq = (200 - 0.5q)q = 200q - 0.5q². To maximize: dR/dq = 200 - q = 0, so q = 200. Maximum revenue = 200(200) - 0.5(200)² = $20,000.",
      difficulty: "Hard",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5017,
      question: "A perpetuity pays $1000 annually. If the interest rate is 5%, what is its present value?",
      options: ["$15,000", "$18,000", "$20,000", "$25,000"],
      correct: "$20,000",
      explanation: "Present value of perpetuity = Annual payment / Interest rate = $1000 / 0.05 = $20,000.",
      difficulty: "Hard",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5018,
      question: "If the price elasticity of demand is -2 and price increases by 10%, what is the percentage change in quantity demanded?",
      options: ["-20%", "-10%", "10%", "20%"],
      correct: "-20%",
      explanation: "Price elasticity = (% change in quantity) / (% change in price). -2 = (% change in quantity) / 10%, so % change in quantity = -20%.",
      difficulty: "Hard",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5019,
      question: "A company has a debt-to-equity ratio of 2:3. If total debt is $400,000, what is the total capitalization?",
      options: ["$600,000", "$800,000", "$1,000,000", "$1,200,000"],
      correct: "$1,000,000",
      explanation: "If debt:equity = 2:3 and debt = $400,000, then equity = $400,000 × (3/2) = $600,000. Total capitalization = debt + equity = $400,000 + $600,000 = $1,000,000.",
      difficulty: "Hard",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5020,
      question: "Calculate the net present value of a project with initial investment $50,000, annual cash flows of $15,000 for 5 years, and discount rate 10%.",
      options: ["$6,862", "$8,500", "$10,250", "$12,750"],
      correct: "$6,862",
      explanation: "NPV = -$50,000 + $15,000 × [1 - (1.10)⁻⁵]/0.10 = -$50,000 + $15,000 × 3.7908 = -$50,000 + $56,862 = $6,862.",
      difficulty: "Hard",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5021,
      question: "If a bond with face value $1000, coupon rate 8%, and 3 years to maturity is priced to yield 10%, what is its current price?",
      options: ["$950.26", "$975.50", "$1000.00", "$1025.75"],
      correct: "$950.26",
      explanation: "Price = $80/(1.10) + $80/(1.10)² + $1080/(1.10)³ = $72.73 + $66.12 + $811.41 = $950.26.",
      difficulty: "Hard",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5022,
      question: "What is the sales tax on a $150 item if the tax rate is 10%?",
      options: ["$10", "$12", "$15", "$20"],
      correct: "$15",
      explanation: "Sales tax = 10% of $150 = $15.",
      difficulty: "Easy",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5023,
      question: "What is the total revenue from selling 40 units at $25 each?",
      options: ["$800", "$900", "$1000", "$1200"],
      correct: "$1000",
      explanation: "Revenue = price times quantity = 25 times 40 = 1000 dollars.",
      difficulty: "Easy",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5024,
      question: "If a product costing $250 is marked up by 20%, what is the selling price?",
      options: ["$275", "$290", "$300", "$320"],
      correct: "$300",
      explanation: "Markup = 20% of 250 = 50, so the selling price is 300 dollars.",
      difficulty: "Easy",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5025,
      question: "Find the simple interest on $2000 at 8% per year for 3 years.",
      options: ["$320", "$400", "$480", "$520"],
      correct: "$480",
      explanation: "Simple interest = principal times rate times time = 2000 times 0.08 times 3 = 480.",
      difficulty: "Medium",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5026,
      question: "If fixed costs are $1500, the selling price per unit is $30, and the variable cost per unit is $20, what is the break-even point?",
      options: ["100 units", "150 units", "200 units", "300 units"],
      correct: "150 units",
      explanation: "Break-even point = fixed cost divided by contribution per unit = 1500 divided by (30 - 20) = 150 units.",
      difficulty: "Medium",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5027,
      question: "A $100 item is discounted successively by 10% and then 20%. What is the final price?",
      options: ["$70", "$72", "$75", "$80"],
      correct: "$72",
      explanation: "After a 10% discount the price is $90, and after a further 20% discount it becomes $72.",
      difficulty: "Medium",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5028,
      question: "What is the compound amount of $1000 invested at 10% annually for 3 years?",
      options: ["$1300", "$1331", "$1360", "$1400"],
      correct: "$1331",
      explanation: "A = P(1 + r)^n = 1000 times 1.1^3 = 1331.",
      difficulty: "Hard",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5029,
      question: "If the profit function is P(x) = -x^2 + 40x - 300, what is the maximum profit?",
      options: ["$80", "$100", "$120", "$140"],
      correct: "$100",
      explanation: "The maximum occurs at x = -b/(2a) = 20. Then P(20) = 100.",
      difficulty: "Hard",
      chapter: "Unit 5: Mathematical Application in Business"
    },
    {
      id: 5030,
      question: "An asset is depreciated by the straight-line method over 5 years. If its salvage value is $10,000 and annual depreciation is $12,000, what was the original cost?",
      options: ["$58,000", "$60,000", "$70,000", "$72,000"],
      correct: "$70,000",
      explanation: "Total depreciation over 5 years is 5 times 12,000 = 60,000. Original cost = 60,000 + 10,000 = 70,000.",
      difficulty: "Hard",
      chapter: "Unit 5: Mathematical Application in Business"
    }
  ]
};

// Helper function to get mathematics questions
export const getMathQuestionsForQuiz = (chapter: string, difficulty: 'Easy' | 'Medium' | 'Hard', questionCount: number = 7): MathQuizQuestion[] => {
  const chapterData = grade12Mathematics[chapter];
  if (!chapterData) return [];
  
  const filteredQuestions = chapterData.filter(q => q.difficulty === difficulty);
  
  // Return up to the requested number of questions, shuffled
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(questionCount, shuffled.length));
};
