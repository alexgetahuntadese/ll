
export interface CareerTrack {
  id: string;
  name: string;
  description: string;
  icon: string;
  requiredSubjects: string[];
  skills: string[];
  careers: string[];
  color: string;
}

export const careerTracks: CareerTrack[] = [
  {
    id: 'stem',
    name: 'STEM & Engineering',
    description: 'Design, build, and innovate in science and technology fields. Engineers and scientists solve complex problems and create solutions that improve lives.',
    icon: '🔬',
    requiredSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    skills: ['Analytical Thinking', 'Problem Solving', 'Mathematical Reasoning', 'Scientific Method'],
    careers: ['Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer', 'Research Scientist', 'Architect', 'Biomedical Engineer'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'technology',
    name: 'Technology & IT',
    description: 'Build the digital future through software development, data science, and information technology. Create apps, analyze data, and secure digital systems.',
    icon: '💻',
    requiredSubjects: ['Mathematics', 'IT', 'Physics'],
    skills: ['Logical Thinking', 'Programming', 'Data Analysis', 'Technical Problem Solving'],
    careers: ['Software Developer', 'Data Scientist', 'Cybersecurity Analyst', 'IT Manager', 'AI Engineer', 'Web Developer'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medicine',
    description: 'Care for people and save lives in the medical field. From doctors to pharmacists, healthcare professionals make a direct impact on human health.',
    icon: '⚕️',
    requiredSubjects: ['Biology', 'Chemistry', 'English'],
    skills: ['Attention to Detail', 'Empathy', 'Scientific Knowledge', 'Communication'],
    careers: ['Doctor', 'Nurse', 'Pharmacist', 'Medical Researcher', 'Dentist', 'Physical Therapist'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'agriculture',
    name: 'Agricultural Sciences',
    description: 'Feed the world and protect our environment. Agricultural scientists and professionals work to improve food production and sustainability.',
    icon: '🌾',
    requiredSubjects: ['Agriculture', 'Biology', 'Chemistry'],
    skills: ['Environmental Awareness', 'Scientific Research', 'Resource Management', 'Innovation'],
    careers: ['Agronomist', 'Food Scientist', 'Veterinarian', 'Environmental Scientist', 'Agricultural Engineer', 'Farm Manager'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'social',
    name: 'Social Sciences & Humanities',
    description: 'Understand society, advocate for justice, and educate future generations. These fields focus on human behavior, history, and social systems.',
    icon: '📚',
    requiredSubjects: ['History', 'Civics', 'English', 'Geography'],
    skills: ['Critical Thinking', 'Research', 'Communication', 'Cultural Awareness'],
    careers: ['Lawyer', 'Teacher', 'Journalist', 'Diplomat', 'Social Worker', 'Historian'],
    color: 'from-rose-500 to-red-500',
  },
  {
    id: 'business',
    name: 'Business & Economics',
    description: 'Drive economic growth and lead organizations. Business professionals manage resources, make strategic decisions, and create value.',
    icon: '📊',
    requiredSubjects: ['Mathematics', 'English', 'Civics'],
    skills: ['Strategic Thinking', 'Leadership', 'Financial Literacy', 'Communication'],
    careers: ['Economist', 'Business Analyst', 'Entrepreneur', 'Marketing Manager', 'Accountant', 'Financial Advisor'],
    color: 'from-indigo-500 to-violet-500',
  },
];

export interface CareerMatch {
  track: CareerTrack;
  matchScore: number;
  matchedSubjects: string[];
  missingSubjects: string[];
}

// Calculate career matches based on subject scores
export const calculateCareerMatches = (
  subjectScores: { [subject: string]: number }
): CareerMatch[] => {
  const matches: CareerMatch[] = careerTracks.map(track => {
    const matchedSubjects: string[] = [];
    const missingSubjects: string[] = [];
    let totalScore = 0;
    let matchCount = 0;
    
    track.requiredSubjects.forEach(subject => {
      // Normalize subject name for comparison
      const normalizedSubject = subject.toLowerCase();
      const scoreEntry = Object.entries(subjectScores).find(
        ([key]) => key.toLowerCase().includes(normalizedSubject) || 
                   normalizedSubject.includes(key.toLowerCase())
      );
      
      if (scoreEntry) {
        matchedSubjects.push(subject);
        totalScore += scoreEntry[1];
        matchCount++;
      } else {
        missingSubjects.push(subject);
      }
    });
    
    // Calculate match score
    let matchScore = 0;
    if (matchCount > 0) {
      const avgScore = totalScore / matchCount;
      const coverageBonus = (matchCount / track.requiredSubjects.length) * 30;
      matchScore = Math.min(100, Math.round(avgScore * 0.7 + coverageBonus));
    }
    
    return {
      track,
      matchScore,
      matchedSubjects,
      missingSubjects,
    };
  });
  
  // Sort by match score descending
  return matches.sort((a, b) => b.matchScore - a.matchScore);
};

// Get top career recommendations
export const getTopCareerRecommendations = (
  subjectScores: { [subject: string]: number },
  limit: number = 5
): CareerMatch[] => {
  const matches = calculateCareerMatches(subjectScores);
  return matches.slice(0, limit);
};

// Get skill level based on score
export const getSkillLevel = (score: number): { level: string; color: string } => {
  if (score >= 90) return { level: 'Expert', color: 'text-green-500' };
  if (score >= 75) return { level: 'Advanced', color: 'text-blue-500' };
  if (score >= 60) return { level: 'Intermediate', color: 'text-yellow-500' };
  if (score >= 40) return { level: 'Developing', color: 'text-orange-500' };
  return { level: 'Beginner', color: 'text-red-500' };
};
