// Gamification System for Grade 9 English Questions

export interface GameProgress {
  totalPoints: number;
  currentLevel: number;
  badges: string[];
  streak: number;
  completedQuestions: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  points: number;
  unlocked: boolean;
  icon: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
}

export interface Level {
  level: number;
  name: string;
  minPoints: number;
  maxPoints: number;
  rewards: string[];
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first_correct",
    name: "First Steps",
    description: "Answer your first question correctly",
    points: 10,
    unlocked: false,
    icon: "🌟"
  },
  {
    id: "streak_5",
    name: "On Fire",
    description: "Get 5 correct answers in a row",
    points: 50,
    unlocked: false,
    icon: "🔥"
  },
  {
    id: "streak_10",
    name: "Unstoppable",
    description: "Get 10 correct answers in a row",
    points: 100,
    unlocked: false,
    icon: "⚡"
  },
  {
    id: "perfect_unit",
    name: "Perfect Unit",
    description: "Complete all questions in a unit without mistakes",
    points: 200,
    unlocked: false,
    icon: "💯"
  },
  {
    id: "speed_demon",
    name: "Speed Demon",
    description: "Answer 10 questions correctly in under 5 minutes",
    points: 150,
    unlocked: false,
    icon: "⚡"
  },
  {
    id: "explorer",
    name: "Explorer",
    description: "Try all different question types",
    points: 75,
    unlocked: false,
    icon: "🔍"
  },
  {
    id: "vocabulary_master",
    name: "Vocabulary Master",
    description: "Answer 20 vocabulary questions correctly",
    points: 120,
    unlocked: false,
    icon: "📚"
  },
  {
    id: "grammar_guru",
    name: "Grammar Guru",
    description: "Answer 15 grammar questions correctly",
    points: 100,
    unlocked: false,
    icon: "📝"
  }
];

export const BADGES: Badge[] = [
  {
    id: "quick_thinker",
    name: "Quick Thinker",
    description: "Answer a question within 10 seconds",
    icon: "⚡",
    points: 15
  },
  {
    id: "vocabulary_master",
    name: "Vocabulary Master",
    description: "Complete 5 vocabulary questions",
    icon: "📚",
    points: 25
  },
  {
    id: "fact_checker",
    name: "Fact Checker",
    description: "Answer 3 true/false questions correctly",
    icon: "✅",
    points: 20
  },
  {
    id: "word_wizard",
    name: "Word Wizard",
    description: "Solve 3 word puzzles",
    icon: "🧙",
    points: 30
  },
  {
    id: "puzzle_solver",
    name: "Puzzle Solver",
    description: "Complete 2 fill-in-the-blank questions",
    icon: "🧩",
    points: 25
  },
  {
    id: "communication_expert",
    name: "Communication Expert",
    description: "Master communication skills questions",
    icon: "💬",
    points: 40
  },
  {
    id: "safety_advocate",
    name: "Safety Advocate",
    description: "Complete all traffic safety questions",
    icon: "🚦",
    points: 35
  },
  {
    id: "organized_learner",
    name: "Organized Learner",
    description: "Complete all study skills questions",
    icon: "📋",
    points: 30
  },
  {
    id: "writing_pro",
    name: "Writing Pro",
    description: "Complete all writing-related questions",
    icon: "✍️",
    points: 45
  }
];

export const LEVELS: Level[] = [
  {
    level: 1,
    name: "Beginner",
    minPoints: 0,
    maxPoints: 99,
    rewards: ["Quick Thinker Badge", "Fact Checker Badge"]
  },
  {
    level: 2,
    name: "Novice",
    minPoints: 100,
    maxPoints: 249,
    rewards: ["Vocabulary Master Badge", "Puzzle Solver Badge"]
  },
  {
    level: 3,
    name: "Intermediate",
    minPoints: 250,
    maxPoints: 499,
    rewards: ["Word Wizard Badge", "Safety Advocate Badge"]
  },
  {
    level: 4,
    name: "Advanced",
    minPoints: 500,
    maxPoints: 999,
    rewards: ["Communication Expert Badge", "Writing Pro Badge"]
  },
  {
    level: 5,
    name: "Expert",
    minPoints: 1000,
    maxPoints: Infinity,
    rewards: ["Master Learner Certificate", "Premium Content Access"]
  }
];

export const calculateLevel = (points: number): Level => {
  return LEVELS.find(level => points >= level.minPoints && points <= level.maxPoints) || LEVELS[0];
};

export const calculateStreakBonus = (streak: number): number => {
  if (streak >= 10) return 50;
  if (streak >= 7) return 30;
  if (streak >= 5) return 20;
  if (streak >= 3) return 10;
  return 0;
};

export const getQuestionMultiplier = (questionType: string, timeTaken: number, timeLimit: number): number => {
  let multiplier = 1;
  
  // Speed bonus
  if (timeTaken <= timeLimit * 0.5) multiplier += 0.5;
  else if (timeTaken <= timeLimit * 0.75) multiplier += 0.25;
  
  // Question type difficulty
  if (questionType === "word-puzzle") multiplier += 0.3;
  if (questionType === "drag-drop") multiplier += 0.4;
  if (questionType === "matching") multiplier += 0.2;
  
  return multiplier;
};

export const updateProgress = (
  currentProgress: GameProgress,
  questionId: string,
  isCorrect: boolean,
  timeTaken: number,
  questionType: string,
  points: number
): GameProgress => {
  const newProgress = { ...currentProgress };
  
  // Update points
  const multiplier = getQuestionMultiplier(questionType, timeTaken, 60); // Default 60s time limit
  const earnedPoints = isCorrect ? Math.floor(points * multiplier) : 0;
  newProgress.totalPoints += earnedPoints;
  
  // Update streak
  if (isCorrect) {
    newProgress.streak += 1;
  } else {
    newProgress.streak = 0;
  }
  
  // Add to completed questions
  if (!newProgress.completedQuestions.includes(questionId)) {
    newProgress.completedQuestions.push(questionId);
  }
  
  // Check for new achievements
  const newAchievements = ACHIEVEMENTS.filter(achievement => {
    if (newProgress.achievements.some(a => a.id === achievement.id)) return false;
    
    let unlocked = false;
    
    switch (achievement.id) {
      case "first_correct":
        unlocked = newProgress.completedQuestions.length >= 1;
        break;
      case "streak_5":
        unlocked = newProgress.streak >= 5;
        break;
      case "streak_10":
        unlocked = newProgress.streak >= 10;
        break;
      case "perfect_unit":
        // This would need to be checked at unit level
        break;
      case "speed_demon":
        unlocked = isCorrect && timeTaken < 300; // 5 minutes
        break;
      case "explorer":
        const types = new Set(newProgress.completedQuestions.map(id => 
          id.includes("true-false") ? "true-false" :
          id.includes("fill-blank") ? "fill-blank" :
          id.includes("word-puzzle") ? "word-puzzle" :
          id.includes("matching") ? "matching" :
          id.includes("drag-drop") ? "drag-drop" : "multiple-choice"
        ));
        unlocked = types.size >= 5;
        break;
    }
    
    if (unlocked) {
      newProgress.achievements.push({ ...achievement, unlocked: true });
      newProgress.totalPoints += achievement.points;
    }
    
    return unlocked;
  });
  
  // Update level
  newProgress.currentLevel = calculateLevel(newProgress.totalPoints).level;
  
  return newProgress;
};

export const getLeaderboardRank = (points: number, allScores: number[]): number => {
  const sortedScores = [...allScores].sort((a, b) => b - a);
  return sortedScores.indexOf(points) + 1;
};

export const getRandomEncouragement = (streak: number): string => {
  const encouragements = [
    "Great job! Keep it going!",
    "You're on fire! 🔥",
    "Amazing work!",
    "Keep up the excellent work!",
    "You're crushing it!",
    "Incredible focus!",
    "Master level performance!"
  ];
  
  if (streak >= 10) return "Unstoppable! You're a legend! 🏆";
  if (streak >= 7) return "On a roll! Don't stop now! ⚡";
  if (streak >= 5) return "Hot streak! You're amazing! 🔥";
  
  return encouragements[Math.floor(Math.random() * encouragements.length)];
};
