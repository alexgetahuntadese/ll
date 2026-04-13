
export interface StudentProfile {
  student_id: string;
  student_name: string;
  created_at: string;
}

export interface QuizAttempt {
  attempt_id: string;
  student_id: string;
  grade: string;
  subject: string;
  chapter: string;
  difficulty: string;
  score: number;
  correct_answers: number;
  total_questions: number;
  time_spent: string;
  attempted_at: string;
}

export interface SkillAnalysis {
  subject_scores: { [subject: string]: number };
  difficulty_performance: {
    easy: number;
    medium: number;
    hard: number;
  };
  improvement_trend: number;
  strengths: string[];
  weaknesses: string[];
}

export interface PerformanceData {
  profile: StudentProfile;
  attempts: QuizAttempt[];
  analysis: SkillAnalysis;
}

const STORAGE_KEY = 'ethioquiz_performance';

const resolveStorageKey = (userId?: string | null): string => {
  const normalizedUserId = userId?.trim();
  return normalizedUserId ? `${STORAGE_KEY}:${normalizedUserId}` : STORAGE_KEY;
};

// Generate a simple unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Get or create student profile
export const getOrCreateProfile = (studentName?: string, userId?: string | null): StudentProfile => {
  const data = getPerformanceData(userId);
  if (data.profile.student_id) {
    if (studentName && studentName !== data.profile.student_name) {
      data.profile.student_name = studentName;
      savePerformanceData(data, userId);
    }
    return data.profile;
  }
  
  const profile: StudentProfile = {
    student_id: generateId(),
    student_name: studentName || 'Student',
    created_at: new Date().toISOString(),
  };
  
  data.profile = profile;
  savePerformanceData(data, userId);
  return profile;
};

// Get all performance data
export const getPerformanceData = (userId?: string | null): PerformanceData => {
  const storageKey = resolveStorageKey(userId);

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      return JSON.parse(stored);
    }

    if (userId) {
      const legacyStored = localStorage.getItem(STORAGE_KEY);
      if (legacyStored) {
        const parsedLegacyData = JSON.parse(legacyStored) as PerformanceData;
        localStorage.setItem(storageKey, JSON.stringify(parsedLegacyData));
        return parsedLegacyData;
      }
    }
  } catch (error) {
    console.error('Error reading performance data:', error);
  }
  
  return {
    profile: {
      student_id: '',
      student_name: '',
      created_at: '',
    },
    attempts: [],
    analysis: {
      subject_scores: {},
      difficulty_performance: { easy: 0, medium: 0, hard: 0 },
      improvement_trend: 0,
      strengths: [],
      weaknesses: [],
    },
  };
};

// Save performance data
export const savePerformanceData = (data: PerformanceData, userId?: string | null): void => {
  try {
    localStorage.setItem(resolveStorageKey(userId), JSON.stringify(data));
  } catch (error) {
    console.error('Error saving performance data:', error);
  }
};

// Save a quiz attempt
export const saveQuizAttempt = (
  attempt: Omit<QuizAttempt, 'attempt_id' | 'student_id' | 'attempted_at'>,
  userId?: string | null
): void => {
  const data = getPerformanceData(userId);
  const profile = getOrCreateProfile(undefined, userId);
  
  const newAttempt: QuizAttempt = {
    ...attempt,
    attempt_id: generateId(),
    student_id: profile.student_id,
    attempted_at: new Date().toISOString(),
  };
  
  data.attempts.push(newAttempt);
  data.analysis = calculateSkillAnalysis(data.attempts);
  savePerformanceData(data, userId);
};

// Calculate weighted average score for a subject (recent attempts weighted higher)
const calculateWeightedSubjectScore = (attempts: QuizAttempt[], subject: string): number => {
  const subjectAttempts = attempts
    .filter(a => a.subject.toLowerCase() === subject.toLowerCase())
    .sort((a, b) => new Date(b.attempted_at).getTime() - new Date(a.attempted_at).getTime());
  
  if (subjectAttempts.length === 0) return 0;
  
  let weightedSum = 0;
  let totalWeight = 0;
  
  subjectAttempts.forEach((attempt, index) => {
    const weight = Math.pow(0.8, index); // Recent attempts have higher weight
    weightedSum += attempt.score * weight;
    totalWeight += weight;
  });
  
  return Math.round(weightedSum / totalWeight);
};

// Calculate skill analysis from attempts
export const calculateSkillAnalysis = (attempts: QuizAttempt[]): SkillAnalysis => {
  if (attempts.length === 0) {
    return {
      subject_scores: {},
      difficulty_performance: { easy: 0, medium: 0, hard: 0 },
      improvement_trend: 0,
      strengths: [],
      weaknesses: [],
    };
  }
  
  // Calculate subject scores
  const subjects = [...new Set(attempts.map(a => a.subject))];
  const subject_scores: { [subject: string]: number } = {};
  
  subjects.forEach(subject => {
    subject_scores[subject] = calculateWeightedSubjectScore(attempts, subject);
  });
  
  // Calculate difficulty performance
  const difficultyGroups = {
    easy: attempts.filter(a => a.difficulty.toLowerCase() === 'easy'),
    medium: attempts.filter(a => a.difficulty.toLowerCase() === 'medium'),
    hard: attempts.filter(a => a.difficulty.toLowerCase() === 'hard'),
  };
  
  const difficulty_performance = {
    easy: difficultyGroups.easy.length > 0 
      ? Math.round(difficultyGroups.easy.reduce((sum, a) => sum + a.score, 0) / difficultyGroups.easy.length)
      : 0,
    medium: difficultyGroups.medium.length > 0
      ? Math.round(difficultyGroups.medium.reduce((sum, a) => sum + a.score, 0) / difficultyGroups.medium.length)
      : 0,
    hard: difficultyGroups.hard.length > 0
      ? Math.round(difficultyGroups.hard.reduce((sum, a) => sum + a.score, 0) / difficultyGroups.hard.length)
      : 0,
  };
  
  // Calculate improvement trend
  const sortedAttempts = [...attempts].sort(
    (a, b) => new Date(a.attempted_at).getTime() - new Date(b.attempted_at).getTime()
  );
  
  let improvement_trend = 0;
  if (sortedAttempts.length >= 5) {
    const last5 = sortedAttempts.slice(-5);
    const prev5 = sortedAttempts.slice(-10, -5);
    
    if (prev5.length > 0) {
      const last5Avg = last5.reduce((sum, a) => sum + a.score, 0) / last5.length;
      const prev5Avg = prev5.reduce((sum, a) => sum + a.score, 0) / prev5.length;
      improvement_trend = Math.round(last5Avg - prev5Avg);
    }
  }
  
  // Determine strengths and weaknesses
  const subjectEntries = Object.entries(subject_scores).sort((a, b) => b[1] - a[1]);
  const strengths = subjectEntries.filter(([_, score]) => score >= 70).map(([subject]) => subject);
  const weaknesses = subjectEntries.filter(([_, score]) => score < 50).map(([subject]) => subject);
  
  return {
    subject_scores,
    difficulty_performance,
    improvement_trend,
    strengths,
    weaknesses,
  };
};

// Get total quiz count
export const getTotalQuizCount = (userId?: string | null): number => {
  const data = getPerformanceData(userId);
  return data.attempts.length;
};

// Get overall average score
export const getOverallAverageScore = (userId?: string | null): number => {
  const data = getPerformanceData(userId);
  if (data.attempts.length === 0) return 0;
  
  const totalScore = data.attempts.reduce((sum, a) => sum + a.score, 0);
  return Math.round(totalScore / data.attempts.length);
};

// Get recent attempts
export const getRecentAttempts = (limit: number = 10, userId?: string | null): QuizAttempt[] => {
  const data = getPerformanceData(userId);
  return [...data.attempts]
    .sort((a, b) => new Date(b.attempted_at).getTime() - new Date(a.attempted_at).getTime())
    .slice(0, limit);
};

// Update student name
export const updateStudentName = (name: string, userId?: string | null): void => {
  const data = getPerformanceData(userId);
  if (!data.profile.student_id) {
    getOrCreateProfile(name, userId);
  } else {
    data.profile.student_name = name;
    savePerformanceData(data, userId);
  }
};

// Clear all performance data
export const clearPerformanceData = (userId?: string | null): void => {
  localStorage.removeItem(resolveStorageKey(userId));
};
