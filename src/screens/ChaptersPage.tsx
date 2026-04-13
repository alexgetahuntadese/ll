import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Play, CheckCircle, Clock, BookOpen, Target, Sparkles, GraduationCap, Lock, CreditCard } from 'lucide-react';
import TopBar from "@/components/TopBar";
import StarField from '@/components/StarField';
import { useAuth } from "@/hooks/useAuth";
import { grade12Mathematics } from '@/data/grade12Mathematics';
import { grade12BiologyQuestions } from '@/data/grade12BiologyQuestions';
import { grade12ChemistryQuestions } from '@/data/grade12ChemistryQuestions';
import { grade12PhysicsQuestions } from '@/data/grade12PhysicsQuestions';
import { grade12EnglishQuestions } from '@/data/grade12EnglishQuestions';
import { grade12AgricultureQuestions } from '@/data/grade12AgricultureQuestions';
import { grade12EconomicsQuestions } from '@/data/grade12EconomicsQuestions';
import { grade12AmharicQuestions } from '@/data/grade12AmharicQuestions';
import { grade12CivicsQuestions } from '@/data/grade12CivicsQuestions';
import { grade12GeographyQuestions, getGrade12GeographyDisplayTitle } from '@/data/grade12GeographyQuestions';
import { grade12HistoryQuestions } from '@/data/grade12HistoryQuestions';
import { grade12ITQuestions } from '@/data/grade12ITQuestions';
import { grade11Biology } from '@/data/grade11Biology';
import { grade11AgricultureQuestions } from '@/data/grade11AgricultureQuestions';
import { grade11MathematicsQuestions } from '@/data/grade11MathematicsQuestions';
import { grade11Chemistry } from '@/data/grade11Chemistry';
import { grade11EconomicsQuestions } from '@/data/grade11EconomicsQuestions';
import { grade11EnglishQuestions } from '@/data/grade11EnglishQuestions';
import { grade11GeographyQuestions } from '@/data/grade11GeographyQuestions';
import { grade11HistoryQuestions } from '@/data/grade11HistoryQuestions';
import { grade11AmharicQuestions } from '@/data/grade11AmharicQuestions';
import { grade11CivicsQuestions } from '@/data/grade11CivicsQuestions';
import { grade11Physics } from '@/data/grade11Physics';
import { grade11Subjects } from '@/data/grade11Subjects';
import { grade9Subjects } from '@/data/grade9Subjects';
import { getGrade9ChapterQuestionCounts } from '@/data/grade9Questions';
import { grade10Subjects } from '@/data/grade10Subjects';
import { grade10Biology } from '@/data/grade10BiologyQuestions';
import { grade10MathematicsQuestions } from '@/data/grade10MathematicsQuestions';
import { grade10PhysicsQuestions } from '@/data/grade10PhysicsQuestions';
import { grade10ChemistryQuestions } from '@/data/grade10ChemistryQuestions';
import { grade10EnglishQuestions } from '@/data/grade10EnglishQuestions';
import { grade10CivicsQuestions } from '@/data/grade10CivicsQuestions';
import { grade10GeographyQuestions } from '@/data/grade10GeographyQuestions';
import { grade10EconomicsQuestions } from '@/data/grade10EconomicsQuestions';
import { grade10HistoryQuestions } from '@/data/grade10HistoryQuestions';
import { grade10AmharicQuestions } from '@/data/grade10AmharicQuestions';
import { isFreeChapter } from '@/lib/paymentAccess';

const ChaptersPage = () => {
  const navigate = useNavigate();
  const { hasPremiumAccess: premiumAccess } = useAuth();
  const { grade, subject } = useParams();
  const decodedSubject = decodeURIComponent(subject || '');
  const isUnavailableGrade12QuizSubject =
    grade === '12' &&
    false;

  // Get chapters based on subject and grade
  const getChaptersForSubject = () => {
    // Handle Grade 11 Biology
    if (decodedSubject === 'Biology' && grade === '11') {
      return Object.keys(grade11Biology).map((chapterName, index) => {
        const questions = grade11Biology[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getGrade11BiologyChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    // Handle Grade 11 Agriculture
    if (decodedSubject === 'Agriculture' && grade === '11') {
      return Object.keys(grade11AgricultureQuestions).map((chapterName, index) => {
        const questions = grade11AgricultureQuestions[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getGrade11AgricultureChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    // Handle Grade 11 Mathematics
    if (decodedSubject === 'Mathematics' && grade === '11') {
      return Object.keys(grade11MathematicsQuestions).map((chapterName, index) => {
        const questions = grade11MathematicsQuestions[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getGrade11MathChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    // Handle Grade 11 Chemistry
    if (decodedSubject === 'Chemistry' && grade === '11') {
      return Object.keys(grade11Chemistry).map((chapterName, index) => {
        const questions = grade11Chemistry[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getGrade11ChemistryChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    // Handle Grade 11 Economics
    if (decodedSubject === 'Economics' && grade === '11') {
      return Object.keys(grade11EconomicsQuestions).map((chapterName, index) => {
        const questions = grade11EconomicsQuestions[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getGrade11EconomicsChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    // Handle Grade 11 English
    if (decodedSubject === 'English' && grade === '11') {
      return Object.keys(grade11EnglishQuestions).map((chapterName, index) => {
        const questions = grade11EnglishQuestions[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getGrade11EnglishChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'Mathematics' && grade === '12') {
      return Object.keys(grade12Mathematics).map((chapterName, index) => {
        const questions = grade12Mathematics[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    if (decodedSubject === 'Biology' && grade === '12') {
      return Object.keys(grade12BiologyQuestions).map((chapterName, index) => {
        const questions = grade12BiologyQuestions[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getBiologyChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    if (decodedSubject === 'Chemistry' && grade === '12') {
      return Object.keys(grade12ChemistryQuestions).map((unitName, index) => {
        const unitData = grade12ChemistryQuestions[unitName];
        const easyQuestions = unitData.easy.length;
        const mediumQuestions = unitData.medium.length;
        const hardQuestions = unitData.hard.length;
        const totalQuestions = easyQuestions + mediumQuestions + hardQuestions;
        
        return {
          id: index + 1,
          title: unitName,
          description: getChemistryUnitDescription(unitName),
          duration: getDurationEstimate(totalQuestions),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: totalQuestions,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    if (decodedSubject === 'Physics' && grade === '12') {
      return Object.keys(grade12PhysicsQuestions).map((unitName, index) => {
        const questions = grade12PhysicsQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getPhysicsUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    if (decodedSubject === 'English' && grade === '12') {
      return Object.keys(grade12EnglishQuestions).map((unitName, index) => {
        const questions = grade12EnglishQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getEnglishUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'Agriculture' && grade === '12') {
      return Object.keys(grade12AgricultureQuestions).map((unitName, index) => {
        const questions = grade12AgricultureQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;

        return {
          id: index + 1,
          title: unitName,
          description: getAgricultureUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }
    
    // Handle Grade 11 History
    if (decodedSubject === 'History' && grade === '11') {
      return Object.keys(grade11HistoryQuestions).map((chapterName, index) => {
        const questions = grade11HistoryQuestions[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getGrade11HistoryChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    // Handle Grade 11 Amharic
    if (decodedSubject === 'Amharic' && grade === '11') {
      return Object.keys(grade11AmharicQuestions).map((chapterName, index) => {
        const questions = grade11AmharicQuestions[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        return {
          id: index + 1,
          title: chapterName,
          description: `Grade 11 Amharic - ${chapterName}`,
          duration: '30 min',
          difficulty: 'Medium' as const,
          progress: 0,
          isCompleted: false,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    // Handle Grade 11 Civics
    if ((decodedSubject === 'Civics' || decodedSubject === 'Civic Education') && grade === '11') {
      return Object.keys(grade11CivicsQuestions).map((chapterName, index) => {
        const questions = grade11CivicsQuestions[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        return {
          id: index + 1,
          title: chapterName,
          description: `Grade 11 Civics - ${chapterName}`,
          duration: '30 min',
          difficulty: 'Medium' as const,
          progress: 0,
          isCompleted: false,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    // Handle Grade 11 Physics
    if (decodedSubject === 'Physics' && grade === '11') {
      return Object.keys(grade11Physics).map((chapterName, index) => {
        const questions = grade11Physics[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getGrade11PhysicsChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    // Handle Grade 11 Geography
    if (decodedSubject === 'Geography' && grade === '11') {
      return Object.keys(grade11GeographyQuestions).map((chapterName, index) => {
        const questions = grade11GeographyQuestions[chapterName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: chapterName,
          description: getGrade11GeographyChapterDescription(chapterName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'Geography' && grade === '12') {
      return Object.keys(grade12GeographyQuestions).map((unitName, index) => {
        const questions = grade12GeographyQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: getGrade12GeographyDisplayTitle(unitName),
          description: getGeographyUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'History' && grade === '12') {
      return Object.keys(grade12HistoryQuestions).map((unitName, index) => {
        const questions = grade12HistoryQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getHistoryUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'Economics' && grade === '12') {
      return Object.keys(grade12EconomicsQuestions).map((unitName, index) => {
        const questions = grade12EconomicsQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;

        return {
          id: index + 1,
          title: unitName,
          description: getEconomicsUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'Amharic' && grade === '12') {
      return Object.keys(grade12AmharicQuestions).map((unitName, index) => {
        const questions = grade12AmharicQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;

        return {
          id: index + 1,
          title: unitName,
          description: getAmharicUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if ((decodedSubject === 'Civic Education' || decodedSubject === 'Civics') && grade === '12') {
      return Object.keys(grade12CivicsQuestions).map((unitName, index) => {
        const questions = grade12CivicsQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;

        return {
          id: index + 1,
          title: unitName,
          description: getCivicsUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (decodedSubject === 'Information Technology' && grade === '12') {
      return Object.keys(grade12ITQuestions).map((unitName, index) => {
        const questions = grade12ITQuestions[unitName];
        const easyQuestions = questions.filter(q => q.difficulty === 'Easy').length;
        const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').length;
        const hardQuestions = questions.filter(q => q.difficulty === 'Hard').length;
        
        return {
          id: index + 1,
          title: unitName,
          description: getITUnitDescription(unitName),
          duration: getDurationEstimate(questions.length),
          difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
          progress: Math.floor(Math.random() * 101),
          isCompleted: Math.random() > 0.7,
          questionsCount: questions.length,
          difficultyBreakdown: {
            easy: easyQuestions,
            medium: mediumQuestions,
            hard: hardQuestions
          }
        };
      });
    }

    if (grade === '11') {
      const subjectData = grade11Subjects.find((s) => s.name === decodedSubject);
      if (subjectData) {
        return subjectData.chapters.map((chapter, index) => ({
          id: index + 1,
          title: chapter,
          description: `Grade 11 ${decodedSubject} - ${chapter}`,
          duration: '20 min',
          difficulty: 'Medium' as const,
          progress: 0,
          isCompleted: false,
          questionsCount: 0,
          difficultyBreakdown: { easy: 0, medium: 0, hard: 0 }
        }));
      }
    }
    
    // Handle Grade 10 subjects with question data
    if (grade === '10') {
      // Map subject names to their question data
      const grade10QuestionSets: Record<string, Record<string, any[]>> = {
        'Biology': grade10Biology,
        'Mathematics': grade10MathematicsQuestions,
        'Physics': grade10PhysicsQuestions,
        'Chemistry': grade10ChemistryQuestions,
        'English': grade10EnglishQuestions,
        'Civic Education': grade10CivicsQuestions,
        'Geography': grade10GeographyQuestions,
        'Economics': grade10EconomicsQuestions,
        'History': grade10HistoryQuestions,
        'Amharic': grade10AmharicQuestions,
      };

      const questionData = grade10QuestionSets[decodedSubject];
      if (questionData) {
        return Object.keys(questionData).map((chapterName, index) => {
          const questions = questionData[chapterName];
          const easyQuestions = questions.filter((q: any) => q.difficulty?.toLowerCase() === 'easy').length;
          const mediumQuestions = questions.filter((q: any) => q.difficulty?.toLowerCase() === 'medium').length;
          const hardQuestions = questions.filter((q: any) => q.difficulty?.toLowerCase() === 'hard').length;
          return {
            id: index + 1,
            title: chapterName,
            description: `Grade 10 ${decodedSubject} - ${chapterName}`,
            duration: getDurationEstimate(questions.length),
            difficulty: getDominantDifficulty(easyQuestions, mediumQuestions, hardQuestions),
            progress: 0,
            isCompleted: false,
            questionsCount: questions.length,
            difficultyBreakdown: { easy: easyQuestions, medium: mediumQuestions, hard: hardQuestions }
          };
        });
      }

      // Fallback for Grade 10 subjects without question data
      const subjectData = grade10Subjects.find(s => s.name === decodedSubject);
      if (subjectData) {
        return subjectData.chapters.map((chapter, index) => ({
          id: index + 1,
          title: chapter,
          description: `Grade 10 ${decodedSubject} - ${chapter}`,
          duration: '20 min',
          difficulty: 'Medium' as const,
          progress: 0,
          isCompleted: false,
          questionsCount: 0,
          difficultyBreakdown: { easy: 0, medium: 0, hard: 0 }
        }));
      }
    }

    // Handle Grade 9 subjects
    if (grade === '9') {
      const subjectData = grade9Subjects.find(s => s.name === decodedSubject);
      if (subjectData) {
        return subjectData.chapters.map((chapter, index) => ({
          ...(() => {
            const counts = getGrade9ChapterQuestionCounts(decodedSubject, chapter);
            const total = counts.easy + counts.medium + counts.hard;
            return {
              questionsCount: total,
              difficultyBreakdown: counts,
            };
          })(),
          id: index + 1,
          title: chapter,
          description: decodedSubject === 'Amharic'
            ? `የ9ኛ ክፍል አማርኛ - ${chapter}`
            : `Grade 9 ${decodedSubject} - ${chapter}`,
          duration: '20 min',
          difficulty: 'Medium' as const,
          progress: 0,
          isCompleted: false,
        }));
      }
    }

    // Fallback: return empty for subjects without question data yet
    return [];
  };

  const getGrade11BiologyChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Biology and Technology": "Explore the practical applications of biological principles in technology, biotechnology, and modern medicine",
      "Unit 2: Characteristics of animals": "Study animal classification, body systems, adaptation, and evolutionary relationships in the animal kingdom",
      "Unit 3: Enzymes": "Learn about enzyme structure, function, factors affecting enzyme activity, and their role in biological processes",
      "Unit 4: Genetics": "Understand inheritance patterns, DNA structure, genetic variation, and the principles of heredity",
      "Unit 5: The human body systems": "Examine the structure and function of major organ systems including circulatory, respiratory, and nervous systems",
      "Unit 6: Population and natural resources": "Investigate population dynamics, environmental factors, and sustainable resource management"
    };
    return descriptions[chapterName] || "Comprehensive study of biological concepts and life processes";
  };

  const getGrade11ChemistryChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Atomic Structure And Periodic Properties Of The Elements": "Study atomic models, electron configuration, quantum numbers, and periodic trends",
      "Unit 2: Chemical Bonding": "Explore ionic, covalent, and metallic bonds, Lewis structures, and molecular geometry",
      "Unit 3: Physical State Of Matter": "Understand gases, liquids, solids, phase changes, and the kinetic molecular theory",
      "Unit 4: Chemical Kinetics": "Learn about reaction rates, rate laws, factors affecting rates, and reaction mechanisms",
      "Unit 5: Chemical Equilibrium": "Study reversible reactions, equilibrium constants, Le Chatelier's principle, and applications",
      "Unit 6: Some Important Oxygen-containing Organic Compounds": "Explore alcohols, aldehydes, ketones, carboxylic acids, and esters"
    };
    return descriptions[chapterName] || "Comprehensive study of chemistry concepts";
  };

  const getGrade11EconomicsChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Theory Of Consumer Behavior And Demand": "Study utility theory, demand analysis, elasticity, indifference curves, and consumer equilibrium",
      "Unit 2: Market Structure And The Decision Of Firms": "Explore perfect competition, monopoly, oligopoly, monopolistic competition, and firm decision-making",
      "Unit 3: National Income Accounting": "Learn GDP measurement, income approaches, and macroeconomic aggregates",
      "Unit 4: Consumption, Saving And Investment": "Understand consumption functions, saving behavior, investment determinants, and the multiplier effect",
      "Unit 5: Trade And Finance": "Study international trade theories, balance of payments, exchange rates, and trade policies",
      "Unit 6: Economic Development": "Explore development theories, poverty, inequality, and strategies for economic growth",
      "Unit 7: Main Sectors, Sectorial Policies And Strategies Of Ethiopia": "Examine Ethiopia's economic sectors, development plans, and policy strategies"
    };
    return descriptions[chapterName] || "Comprehensive study of economic concepts and principles";
  };

  const getGrade11HistoryChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: History, Historiography, And Human Evolution": "Introduction to historical study, historiography methods, prehistory, and human evolution",
      "Unit 2: Major Spots Of Ancient World Civilizations Up To C.500 A.D": "Rise of ancient civilizations in Africa, Asia, Europe, and the spread of Christianity",
      "Unit 3: Peoples, States, And Historical Processes In Ethiopia And The Horn To The End Of The 13th Century": "Aksumite Kingdom, Sultanate of Shewa, Zagwe Dynasty, and Horn of Africa history",
      "Unit 4: The Middle Ages And Early Modern World, C. 500 AD-1789": "Feudalism, capitalism, Renaissance, Reformation, Enlightenment, and global exploration",
      "Unit 5: Peoples And States Of Africa To 1500": "Ancient and medieval African states, spread of Islam, and inter-regional exchanges",
      "Unit 6: Africa And The Outside World: 1500-1880": "Slave trade, legitimate trade, European exploration, and missionary activities in Africa",
      "Unit 7: States, Principalities, Population Movements, And Interactions In Ethiopia": "Christian Highland Kingdom, Islamic expansion, and population movements in Ethiopia",
      "Unit 8: Political, Social, And Economic Processes In Ethiopia, Mid 16th To Mid-19th Century": "Zemene Mesafint, Gondarine period, land tenure, and socio-economic structures",
      "Unit 9: The Age Of Revolutions, 1789 To 1815": "Industrial Revolution, American independence, French Revolution, and the rise of Napoleon"
    };
    return descriptions[chapterName] || "Comprehensive study of historical events and processes";
  };

  const getGrade11MathChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Relations and Functions": "Study ordered pairs, domain, range, composition, and inverse of functions",
      "Unit 2: Rational Expressions and Rational Functions": "Simplify rational expressions, find asymptotes, and solve rational equations",
      "Unit 3: Matrices": "Learn matrix operations, multiplication, transpose, and inverse matrices",
      "Unit 4: Determinants and their Properties": "Calculate determinants, explore properties, and apply Cramer's rule",
      "Unit 5: Vectors": "Work with vector operations, dot products, projections, and applications",
      "Unit 6: Transformations of the Plane": "Study translations, reflections, rotations, dilations, and their matrices",
      "Unit 7: Statistics": "Analyze data using measures of central tendency, variance, and standard deviation",
      "Unit 8: Probability": "Calculate probabilities, apply addition and multiplication rules, and Bayes' theorem"
    };
    return descriptions[chapterName] || "Comprehensive study of mathematical concepts";
  };

  const getGrade11AgricultureChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Chapter 1: Introduction to Crop Production": "Learn the fundamentals of crop production, types of crops, and basic agricultural practices",
      "Chapter 2: Field Crops Production and Management": "Study field crop cultivation, management practices, and harvest techniques",
      "Chapter 3: Industrial Crops Production and Management": "Explore industrial crops like cotton and sugarcane, their production and processing",
      "Chapter 4: Introduction to Farm Animals": "Understand farm animal types, their products, and basic animal husbandry",
      "Chapter 5: Animal Feeds and Feeding Practices": "Learn about animal nutrition, feed types, and proper feeding management",
      "Chapter 6: Animal Genetics and Breeding Practices": "Study genetic principles in animal breeding and improvement strategies",
      "Chapter 7: Farm Animals Housing": "Explore housing design, construction, and management for different farm animals",
      "Chapter 8: Basic Animal Health and Disease Control": "Learn about common animal diseases, prevention, and treatment methods",
      "Chapter 9: Dairy Cattle Production and Management": "Study dairy farming practices, milk production, and herd management",
      "Chapter 10: Introduction to Natural Resources": "Understand types of natural resources and their importance in agriculture",
      "Chapter 11: Management of Natural Resources": "Learn sustainable management practices for soil, water, and forest resources",
      "Chapter 12: Concepts of Biodiversity": "Explore biodiversity, its importance, and conservation strategies",
      "Chapter 13: Climate Change Adaptation and Mitigation": "Study climate change impacts on agriculture and adaptation strategies",
      "Chapter 14: Mechanized Farming": "Learn about farm machinery, mechanization benefits, and modern farming technology",
      "Chapter 15: Introduction to Human Nutrition": "Understand nutritional requirements, food groups, and balanced diets",
      "Chapter 16: Diversified Food Production and Consumption": "Explore food diversification, processing, and sustainable consumption"
    };
    return descriptions[chapterName] || "Comprehensive study of agricultural concepts and practices";
  };

  const getGrade11GeographyChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Chapter 1: Formation of the Continents": "Study the formation of Earth and continents through Big Bang theory, continental drift, geological timescale, and supercontinents like Pangaea",
      "Chapter 2: Climate Classification and Climate Regions of Our World": "Examine Köppen's climate classification, major world climatic regions, and Ethiopia's indigenous climate classification system",
      "Chapter 3: Natural Resources and Conflicts Over Resources": "Discuss land resource management, resource depletion, transboundary rivers, and conflicts over natural resources",
      "Chapter 4: Global Population Dynamics and Challenges": "Analyze world population growth, factors for accelerated growth, international migrations, and population policies",
      "Chapter 5: Geography and Economic Development": "Examine effects of geographic location on development, climate extremes and poverty, landlocked countries, and intraregional trade in Africa",
      "Chapter 6: Major Global Environmental Changes": "Address persistent environmental problems, poverty-environment nexus, and environmental degradation and sustainable development",
      "Chapter 7: Geographic Issues and Public Concerns": "Cover population concerns, land degradation, desertification, drought, famine, deforestation, and the worldwide digital divide",
      "Chapter 8: Geo-spatial Information and Data Processing": "Explore topographic map relief features, Geographic Information Systems (GIS), and ArcMap software basics"
    };
    return descriptions[chapterName] || "Comprehensive study of geographical concepts";
  };

  const getGrade11PhysicsChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Physics and Human Society": "Introduce physics as a human activity, its role in society, scientific inquiry, and physics-related careers",
      "Unit 2: Vectors": "Build vector concepts, representation, components, and graphical and algebraic operations in two dimensions",
      "Unit 3: Motion in One and Two Dimensions": "Study kinematics, graphs of motion, vertical motion, projectile motion, and circular motion",
      "Unit 4: Dynamics": "Focus on forces, Newton's laws, friction, work, energy, impulse, momentum, and conservation ideas",
      "Unit 5: Heat Conduction and Calorimetry": "Learn heat transfer, thermal properties of matter, calorimetry, and practical thermal applications",
      "Unit 6: Electrostatics and Electric Circuit": "Study charge, electric field, potential difference, current, resistance, capacitors, and basic circuits",
      "Unit 7: Nuclear Physics": "Explore atomic nuclei, radioactivity, nuclear reactions, energy release, uses, and safety considerations"
    };
    return descriptions[chapterName] || "Comprehensive study of Grade 11 Physics concepts and applications";
  };

  const getGrade11EnglishChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Environmental Hazards": "Explore environmental threats, their causes, effects, and how to communicate about ecological challenges",
      "Unit 2: Civilization": "Study the development of human civilizations, cultural heritage, and historical analysis through language",
      "Unit 3: Causes of Road Traffic Accidents": "Examine road safety issues, analyze causes of accidents, and develop persuasive writing skills",
      "Unit 4: People and Natural Resources": "Investigate the relationship between human activities and natural resources through reading and writing",
      "Unit 5: Irrigation": "Learn about irrigation systems, agricultural water management, and technical writing skills",
      "Unit 6: Global Warming": "Analyze climate change causes and effects while developing argumentative and analytical writing",
      "Unit 7: Patriotism": "Explore concepts of national identity, civic responsibility, and persuasive rhetoric",
      "Unit 8: Efficiency of Health Services": "Examine healthcare systems, service delivery, and develop report writing and analytical skills",
      "Unit 9: Indigenous Conflict Resolution": "Study traditional conflict resolution methods, mediation, and academic discourse skills",
      "Unit 10: Artificial Intelligence": "Explore AI concepts, ethical implications, and develop critical thinking and essay writing skills"
    };
    return descriptions[chapterName] || "Comprehensive study of English language skills and communication";
  };

  const getChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Sequence and Series": "Learn arithmetic and geometric sequences, series, and their applications in problem solving",
      "Unit 2: Introduction to Calculus": "Explore limits, derivatives, and basic integration concepts",
      "Unit 3: Statistics": "Master statistical measures, data analysis, and probability distributions",
      "Unit 4: Probability": "Understand probability theory, events, and statistical inference",
      "Unit 5: Mathematical Application in Business": "Apply mathematical concepts to business problems and financial calculations"
    };
    return descriptions[chapterName] || "Comprehensive study of mathematical concepts and problem-solving techniques";
  };

  const getBiologyChapterDescription = (chapterName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Application of Biology": "Explore the practical applications of biological principles in medicine, agriculture, and biotechnology",
      "Unit 2: Microorganisms": "Study bacteria, viruses, fungi, and their roles in ecosystems and human health",
      "Unit 3: Energy transformation": "Understand cellular respiration, photosynthesis, and energy flow in biological systems",
      "Unit 4: Evolution": "Learn about natural selection, genetic variation, and the mechanisms of evolutionary change",
      "Unit 5: Human Body System": "Examine the structure and function of major organ systems in the human body",
      "Unit 6: Climate Change": "Investigate the biological impacts of climate change on ecosystems and biodiversity"
    };
    return descriptions[chapterName] || "Comprehensive study of biological concepts and life processes";
  };

  const getChemistryUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: ACID-BASE EQUILIBRIUM": "Master pH calculations, buffer systems, and acid-base titrations for chemical analysis",
      "Unit 2: ELECTROCHEMISTRY": "Explore galvanic cells, electrolysis, and electrochemical processes in industry",
      "Unit 3: INDUSTRIAL CHEMISTRY": "Study large-scale chemical processes including Haber process and Contact process",
      "Unit 4: POLYMERS": "Learn about polymer synthesis, properties, and applications in modern materials",
      "Unit 5: INTRODUCTION TO ENVIRONMENTAL CHEMISTRY": "Investigate chemical pollutants, water treatment, and environmental protection"
    };
    return descriptions[unitName] || "Comprehensive study of chemical principles and their real-world applications";
  };

  const getPhysicsUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Application of physics in other fields": "Explore how physics principles are applied in medicine, agriculture, and technology",
      "Unit 2: Two-dimensional motion": "Master projectile motion, circular motion, and vector analysis in two dimensions",
      "Unit 3: Fluid Mechanics": "Study pressure, buoyancy, Bernoulli's principle, and fluid dynamics",
      "Unit 4: Electromagnetism": "Learn electric and magnetic fields, electromagnetic induction, and Maxwell's equations",
      "Unit 5: Basics of electronics": "Understand semiconductors, diodes, transistors, and digital electronics fundamentals"
    };
    return descriptions[unitName] || "Comprehensive study of physics principles and their practical applications";
  };

  const getEnglishUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Sustainable Development": "Explore sustainable development concepts, environmental protection, and global challenges",
      "Unit 2: Time Management": "Master effective time management strategies, productivity techniques, and goal setting",
      "Unit 3: Evidence on Traffic Accident": "Analyze traffic safety data, accident reports, and evidence-based solutions",
      "Unit 4: Natural Resource Management": "Study conservation strategies, resource sustainability, and environmental stewardship",
      "Unit 5: Mechanized Agriculture": "Learn about modern farming techniques, agricultural technology, and food security",
      "Unit 6: Green Economies": "Understand sustainable economic models, environmental economics, and green innovations",
      "Unit 7: National Pride": "Explore cultural identity, patriotism, heritage preservation, and national values",
      "Unit 8: Telemedicine": "Discover digital healthcare, medical technology, and remote patient care systems",
      "Unit 9: Conflict Management": "Develop conflict resolution skills, peace-building strategies, and negotiation techniques",
      "Unit 10: Robotics": "Investigate robotics technology, automation, artificial intelligence, and future innovations"
    };
    return descriptions[unitName] || "Comprehensive study of English language and communication skills";
  };

  const getAgricultureUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Vegetable Crops Production and Management": "Focus on vegetable crop establishment, field practices, and quality-oriented production management",
      "Unit 2: Fruit Crops Production and Management": "Study orchard planning, fruit crop care, and management decisions that affect quality and yield",
      "Unit 3: Root and Tuber Crops Production and Management": "Learn propagation, field management, and the food-security value of root and tuber crops",
      "Unit 4: Coffee, Tea and Spices Production and Management": "Explore the management of high-value perennial crops and their market-oriented production systems",
      "Unit 5: Introduction to Plant Biotechnology": "Understand how biotechnology supports propagation, crop improvement, and agricultural innovation",
      "Unit 6: Beef Cattle Production and Management": "Study breed choice, feeding, housing, and herd-health practices for beef systems",
      "Unit 7: Sheep and Goat Production and Management": "Learn practical small-ruminant management for productivity, resilience, and health",
      "Unit 8: Camel Production and Management": "Examine camel production in dryland systems and their role in pastoral livelihoods",
      "Unit 9: Poultry Production and Management": "Focus on brooding, feeding, disease prevention, and enterprise management in poultry systems",
      "Unit 10: Fishery Production and Management": "Study aquaculture and fishery management as tools for nutrition and income generation",
      "Unit 11: Beekeeping": "Explore hive management, colony care, pollination benefits, and honey production",
      "Unit 12: Nursery and Plantation Technology": "Learn how to raise healthy seedlings and establish productive plantations",
      "Unit 13: Basics of Agro-Forestry Systems and Practices": "Connect tree-based systems with conservation, resilience, and diversified farm output",
      "Unit 14: Soil and Water Conservation": "Focus on protecting land resources through erosion control and water-management practices",
      "Unit 15: Gender and Human Nutrition": "Link agricultural work with gender roles, nutrition awareness, and household well-being",
      "Unit 16: Safe Food Production and Postharvest Handling": "Study how handling, storage, and food-safety practices reduce loss and protect quality",
      "Unit 17: Application of Information and Communication Technologies (ICT) in Agriculture": "Understand how digital tools improve planning, extension, market access, and farm decisions"
    };
    return descriptions[unitName] || "Comprehensive study of agricultural principles and sustainable farming practices";
  };

  const getGeographyUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Major Geological Processes Associated with Plate Tectonics": "Study plate tectonics, earthquakes, volcanoes, and geological processes shaping Earth's surface",
      "Unit 2: Climate Change": "Explore global climate change, greenhouse effect, impacts, and adaptation strategies",
      "Unit 3: Population Policies Programs and the Environment": "Examine population dynamics, demographic policies, and their environmental implications",
      "Unit 4: Solutions to Environmental and Sustainability Problems": "Learn about renewable energy, conservation, sustainable development, and green technologies",
      "Unit 5: Challenges of Economic Development": "Investigate economic development challenges, poverty, inequality, and environmental trade-offs",
      "Unit 6: Solutions to Environmental and Sustainability Problems Solutions": "Focus on conservation strategies, environmental monitoring, and practical sustainability responses",
      "Unit 7: Contemporary Global Geographic Issues and Public Concerns": "Analyze globalization, urbanization, food security, and contemporary geographic challenges",
      "Unit 8: Geographical Enquiry and Map Making": "Master GIS, remote sensing, cartography, and geographic research methods"
    };
    return descriptions[unitName] || "Comprehensive study of geographic principles and contemporary issues";
  };

  const getHistoryUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Development of Capitalism and Nationalism from 1815 to 1914": "Explore the rise of capitalism, nationalism, and industrial society in 19th century Europe",
      "Unit 2: Africa and the Colonial Experience (1880s – 1960s)": "Study European colonization of Africa, resistance movements, and the path to independence",
      "Unit 3: Social, Economic, and Political Developments in Ethiopia, Mid, 19th C. to 1941": "Examine Ethiopian modernization, the Battle of Adwa, and resistance to colonialism",
      "Unit 4: Society and Politics in the Age of World Wars, 1914 - 1945": "Analyze the causes, conduct, and consequences of the two World Wars",
      "Unit 5: Global and Regional Developments Since 1945": "Investigate Cold War dynamics, decolonization, and post-war global transformations",
      "Unit 6: Ethiopia: Internal Developments and External Influences from 1941 to 1991": "Study Ethiopia under Haile Selassie and the Derg, including revolution and socialist transformation",
      "Unit 7: Africa since the 1960s": "Examine post-independence challenges, development efforts, and contemporary African politics",
      "Unit 8: Post-1991 Developments in Ethiopia": "Analyze Ethiopia's federal experiment, economic growth, and political transformation since 1991",
      "Unit 9: Indigenous Knowledge Systems and Heritages of Ethiopia": "Explore Ethiopian traditional knowledge, cultural heritage, and indigenous practices"
    };
    return descriptions[unitName] || "Comprehensive study of historical developments and their contemporary significance";
  };

  const getEconomicsUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: The Fundamental Concepts Of Macroeconomics": "Build the macroeconomic language needed to discuss growth, output, inflation, and employment",
      "Unit 2: Aggregate Demand And Aggregate Supply Analysis": "Study economy-wide equilibrium by tracking how aggregate demand and supply interact",
      "Unit 3: Market Failure And Consumer Protection": "Examine inefficient markets, consumer welfare, and the case for public regulation",
      "Unit 4: Macroeconomic Policy Instruments": "Compare fiscal and monetary tools used to stabilize and guide the economy",
      "Unit 5: Tax Theory And Practice": "Understand taxation as a source of revenue, equity, incentives, and development finance",
      "Unit 6: Poverty And Inequality": "Focus on how deprivation and inequality are measured, explained, and addressed through policy",
      "Unit 7: Macroeconomic Reforms In Ethiopia": "Connect economic theory to Ethiopia through reform, liberalization, and structural change",
      "Unit 8: Economy, Environment And Climate Change": "Link economic growth to environmental limits, climate risk, and sustainable development"
    };
    return descriptions[unitName] || "Comprehensive study of economics principles and macroeconomic policy.";
  };

  const getAmharicUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Chapter 1: Language and Society": "Explore how language functions in identity, culture, and community life",
      "Chapter 2: Origin and Development of Amharic": "Study the historical growth of Amharic and the processes of language change",
      "Chapter 3: Criticism": "Practice reasoned evaluation of texts, arguments, and style using evidence",
      "Chapter 4: Literature": "Interpret literary genres, themes, and artistic expression in Amharic texts",
      "Chapter 5: Humanity": "Use language study to reflect on values, dignity, empathy, and social responsibility",
      "Chapter 6: Research Writing": "Build formal writing skills through structure, evidence, and organized presentation of ideas",
      "Chapter 7: Poetry": "Focus on imagery, rhythm, figurative language, and deeper interpretation of poems",
      "Chapter 8: Reaching a Decision": "Strengthen judgment, persuasion, and clear communication when defending decisions",
      "Chapter 9: Society and Health": "Discuss health issues clearly by connecting social awareness with effective communication"
    };
    return descriptions[unitName] || "Comprehensive study of advanced Amharic language and literature.";
  };

  const getCivicsUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Building a Democratic System": "Explore democracy fundamentals, authority vs power, constitutional rights, and Ethiopian foreign relations",
      "Unit 2: Rule of Law": "Study constitutional supremacy, conflict management, anti-corruption measures, and good governance principles",
      "Unit 3: Equality": "Examine struggles against oppression, affirmative action policies, and unity in diversity concepts",
      "Unit 4: Justice": "Analyze equity principles, judicial systems, crime prevention, and taxation fairness",
      "Unit 5: Patriotism": "Learn qualities of patriots, Ethiopian historical heritage, and global citizenship responsibilities", 
      "Unit 6: Responsibility": "Understand personal and social duties, HIV/AIDS awareness, and international cooperation",
      "Unit 7: Industriousness": "Study work ethics, labor perspectives, and productivity in global contexts",
      "Unit 8: Self-Reliance": "Develop independence skills, moral decision-making, and personal autonomy",
      "Unit 9: Saving": "Master economic principles, saving methods, and money and capital management",
      "Unit 10: Active Community Participation": "Engage in civic activities, leadership development, and community involvement",
      "Unit 11: The Pursuit of Wisdom": "Cultivate knowledge, reading habits, and information literacy skills"
    };
    return descriptions[unitName] || "Comprehensive study of civic and ethical education principles";
  };

  const getITUnitDescription = (unitName: string) => {
    const descriptions: { [key: string]: string } = {
      "Unit 1: Information Systems and Their Applications": "Explore E-learning, E-government, E-banking, E-libraries, E-commerce, and system analysis methodologies",
      "Unit 2: Emerging Technologies": "Study cloud computing, big data analytics, AI fundamentals, digital identity, and ethical implications of technology",
      "Unit 3: Database Management System": "Master data modeling, relational databases, SQL programming, and database design principles",
      "Unit 4: Web Authoring": "Learn HTML/CSS coding, website planning, design principles, and web accessibility standards",
      "Unit 5: Maintenance and Troubleshooting": "Understand hardware/software diagnostics, system maintenance, and preventive care strategies",
      "Unit 6: Fundamentals of Programming": "Develop programming logic, pseudocode writing, flowchart design, and basic syntax skills"
    };
    return descriptions[unitName] || "Comprehensive study of information technology concepts and practical applications";
  };

  const getDurationEstimate = (questionCount: number) => {
    const hours = Math.ceil(questionCount / 8); // Roughly 8 questions per hour
    return `${hours}-${hours + 1} hours`;
  };

  const getDominantDifficulty = (easy: number, medium: number, hard: number) => {
    if (hard >= easy && hard >= medium) return 'Advanced';
    if (medium >= easy) return 'Intermediate';
    return 'Beginner';
  };

  const chapters = getChaptersForSubject();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Advanced': return 'bg-red-500 text-white';
      case 'Intermediate': return 'bg-yellow-500 text-black';
      case 'Beginner': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-500';
    if (progress >= 60) return 'text-yellow-500';
    if (progress >= 40) return 'text-orange-500';
    return 'text-red-500';
  };

  const handleStartQuiz = (chapterId: number, chapterTitle: string, difficulty: 'Easy' | 'Medium' | 'Hard') => {
    const chapterSlug = encodeURIComponent(chapterTitle);
    const difficultySlug = encodeURIComponent(difficulty);
    navigate(`/grade/${grade}/subject/${encodeURIComponent(decodedSubject)}/chapter/${chapterSlug}/difficulty/${difficultySlug}/quiz`);
  };

  const overallProgress = chapters.length
    ? Math.round(chapters.reduce((acc, chapter) => acc + chapter.progress, 0) / chapters.length)
    : 0;

  return (
    <div className="app-shell pt-14 px-4 pb-4 md:p-8 md:pt-14">
      <StarField starCount={40} shootingCount={4} />
      <TopBar />

      <div className="max-w-6xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="mb-8 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
          onClick={() => navigate(`/grade/${grade}/subjects`)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Subjects
        </Button>

        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <div className="app-kicker mb-6">
            <GraduationCap className="h-4 w-4" />
            Grade {grade} • {decodedSubject}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {decodedSubject} Chapters
          </h1>
          <p className="mb-8 max-w-md mx-auto text-lg text-white/78">
            {isUnavailableGrade12QuizSubject
              ? 'This Grade 12 subject currently has notes, but not a full quiz bank.'
              : 'Choose a chapter to start your quiz'}
          </p>

          {!isUnavailableGrade12QuizSubject && chapters.length > 0 && (
            <div className="app-glass max-w-sm mx-auto rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white/85">Overall Progress</span>
                <span className={`font-bold text-sm ${getProgressColor(overallProgress)}`}>
                  {overallProgress}%
                </span>
              </div>
              <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-700"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {isUnavailableGrade12QuizSubject && (
          <div className="app-glass max-w-2xl mx-auto rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Quiz Bank Not Ready Yet</h2>
            <p className="mb-6 text-white/78">
              Grade 12 {decodedSubject} is available in the notes flow, but its quiz chapters are still being rebuilt to match the current curriculum.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white"
                onClick={() => navigate(`/notes/${grade}/${encodeURIComponent(decodedSubject)}`)}
              >
                Open Notes
              </Button>
              <Button
                variant="outline"
                className="border-white/[0.08] text-white hover:bg-white/10"
                onClick={() => navigate(`/grade/${grade}/subjects`)}
              >
                Back to Quiz Subjects
              </Button>
            </div>
          </div>
        )}

        {!isUnavailableGrade12QuizSubject && chapters.length === 0 && (
          <div className="app-glass max-w-2xl mx-auto rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">No Quiz Chapters Found</h2>
            <p className="mb-6 text-white/78">
              This quiz subject does not have chapter data available yet.
            </p>
            <Button
              variant="outline"
              className="border-white/[0.08] text-white hover:bg-white/10"
              onClick={() => navigate(`/grade/${grade}/subjects`)}
            >
              Back to Quiz Subjects
            </Button>
          </div>
        )}

        {!isUnavailableGrade12QuizSubject && chapters.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            (() => {
              const locked = !premiumAccess && !isFreeChapter(index);

              return (
            <div
              key={chapter.id}
              className="group relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + 0.06 * index}s`, animationFillMode: 'forwards' }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500" />

              <div className="app-glass relative h-full rounded-2xl p-6 transition-all duration-500 group-hover:bg-white/[0.12] group-hover:border-white/[0.22] flex flex-col">
                <Sparkles className="absolute top-4 right-4 h-4 w-4 text-white/10 group-hover:text-white/30 transition-colors duration-500" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white text-sm font-bold shadow-lg">
                    {chapter.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white leading-tight">{chapter.title}</h3>
                  </div>
                  {locked && (
                    <Badge variant="outline" className="border-amber-300/40 bg-amber-500/15 text-amber-100">
                      <Lock className="mr-1 h-3 w-3" />
                      Locked
                    </Badge>
                  )}
                  {chapter.isCompleted && (
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  )}
                </div>

                <Badge className={`${getDifficultyColor(chapter.difficulty)} text-xs w-fit mb-3`}>
                  {chapter.difficulty}
                </Badge>

                <p className="mb-4 flex-1 text-sm text-white/75">{chapter.description}</p>

                {/* Stats */}
                <div className="mb-4 flex items-center gap-4 text-xs text-white/70">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{chapter.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Target className="h-3.5 w-3.5" />
                    <span>{chapter.questionsCount} questions</span>
                  </div>
                </div>

                {/* Difficulty Breakdown */}
                <div className="mb-4 rounded-xl border border-white/[0.12] bg-white/[0.08] p-3">
                  <h4 className="mb-2 text-xs font-medium text-white/80">Questions by Difficulty</h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold">{chapter.difficultyBreakdown.easy}</div>
                      <div className="text-white/65">Easy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-amber-400 font-bold">{chapter.difficultyBreakdown.medium}</div>
                      <div className="text-white/65">Medium</div>
                    </div>
                    <div className="text-center">
                      <div className="text-rose-400 font-bold">{chapter.difficultyBreakdown.hard}</div>
                      <div className="text-white/65">Hard</div>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                {chapter.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-white/70">Progress</span>
                      <span className={`font-medium ${getProgressColor(chapter.progress)}`}>
                        {chapter.progress}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                        style={{ width: `${chapter.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Difficulty Buttons */}
                <div>
                  <h4 className="mb-2 text-xs font-medium text-white/80">Choose Difficulty</h4>
                  {locked && (
                    <div className="mb-3 rounded-xl border border-white/12 bg-white/8 p-3 text-xs text-white/75">
                      This chapter is locked. Please complete payment to access it.
                    </div>
                  )}
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      size="sm"
                      className="bg-emerald-600/80 hover:bg-emerald-500 text-white text-xs border-0"
                      onClick={() => handleStartQuiz(chapter.id, chapter.title, 'Easy')}
                      disabled={locked || chapter.difficultyBreakdown.easy === 0}
                    >
                      Easy
                    </Button>
                    <Button
                      size="sm"
                      className="bg-amber-600/80 hover:bg-amber-500 text-white text-xs border-0"
                      onClick={() => handleStartQuiz(chapter.id, chapter.title, 'Medium')}
                      disabled={locked || chapter.difficultyBreakdown.medium === 0}
                    >
                      Medium
                    </Button>
                    <Button
                      size="sm"
                      className="bg-rose-600/80 hover:bg-rose-500 text-white text-xs border-0"
                      onClick={() => handleStartQuiz(chapter.id, chapter.title, 'Hard')}
                      disabled={locked || chapter.difficultyBreakdown.hard === 0}
                    >
                      Hard
                    </Button>
                  </div>
                  {locked && (
                    <Button
                      variant="outline"
                      className="mt-3 w-full border-white/15 bg-transparent text-white hover:bg-white/10"
                      onClick={() => navigate("/payment")}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Go to Payment
                    </Button>
                  )}
                </div>
              </div>
            </div>
              );
            })()
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default ChaptersPage;
