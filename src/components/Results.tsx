
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Clock, RotateCcw, ArrowLeft, BarChart3, Trophy, Target, TrendingUp } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { saveQuizAttempt } from '@/lib/performanceUtils';
import { useLanguage } from '@/i18n/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { getProfileKey } from '@/lib/profileUtils';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

interface ResultsProps {
  score: number;
  totalQuestions: number;
  timeTaken: string;
  onRetakeQuiz: () => void;
  questions: Question[];
  selectedAnswers: { [key: number]: string };
  grade?: string;
  subject?: string;
  chapter?: string;
  difficulty?: string;
}

const Results = ({ 
  score, 
  totalQuestions, 
  timeTaken, 
  onRetakeQuiz, 
  questions, 
  selectedAnswers,
  grade,
  subject,
  chapter,
  difficulty
}: ResultsProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const { t } = useLanguage();
  const { user, profile } = useAuth();
  const hasSavedAttemptRef = useRef(false);
  const percentage = Math.round((score / totalQuestions) * 100);
  const profileKey = getProfileKey(profile, user);
  
  useEffect(() => {
    if (hasSavedAttemptRef.current) {
      return;
    }

    const attemptGrade = grade || params.grade || 'Unknown';
    const attemptSubject = subject || params.subject || 'Unknown';
    const attemptChapter = chapter || params.chapterId || 'Unknown';
    const attemptDifficulty = difficulty || params.difficulty || 'medium';
    
    const attemptData = {
      grade: attemptGrade,
      subject: attemptSubject,
      chapter: attemptChapter,
      difficulty: attemptDifficulty,
      score: percentage,
      correct_answers: score,
      total_questions: totalQuestions,
      time_spent: timeTaken,
    };

    saveQuizAttempt(attemptData, profileKey);
    hasSavedAttemptRef.current = true;
  }, [chapter, difficulty, grade, params.chapterId, params.difficulty, params.grade, params.subject, profileKey, score, subject, timeTaken, totalQuestions, percentage]);
  
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBadgeColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return t('results.excellentPerformance');
    if (percentage >= 80) return t('results.greatJob');
    if (percentage >= 70) return t('results.goodWork');
    if (percentage >= 60) return t('results.fairPerformance');
    if (percentage >= 50) return t('results.improving');
    return t('results.keepStudying');
  };

  const handleBackToChapters = () => {
    if (params.grade && params.subject) {
      navigate(`/grade/${params.grade}/subject/${params.subject}/chapters`);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/[0.06] backdrop-blur-xl border-white/[0.1] text-white shadow-xl">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
              <Trophy className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold mb-4 text-white">{t('results.complete')}</CardTitle>
          <div className="space-y-6">
            <div className="relative">
              <div className={`text-7xl font-bold ${getScoreColor(percentage)} bg-gradient-to-br ${
                percentage >= 80 ? 'from-emerald-400 to-green-500' :
                percentage >= 60 ? 'from-amber-400 to-yellow-500' :
                'from-red-400 to-rose-500'
              } bg-clip-text text-transparent`}>
                {percentage}%
              </div>
              <div className="mt-4 space-y-2">
                <Badge 
                  className={`${getScoreBadgeColor(percentage)} text-white text-lg px-6 py-3 shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    {score} {t('results.outOf')} {totalQuestions} {t('results.correct').toLowerCase()}
                  </div>
                </Badge>
                <div className="text-white/60 text-sm">
                  {getPerformanceMessage(percentage)}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{t('results.timeTaken')}</span>
                </div>
                <span className="text-white font-medium">{timeTaken}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-white/60 text-sm">
                  <span>Accuracy</span>
                  <span className="text-white font-medium">{percentage}%</span>
                </div>
                <Progress 
                  value={percentage} 
                  className="h-3 bg-white/10"
                  // @ts-ignore
                  indicatorClassName={`bg-gradient-to-r ${
                    percentage >= 80 ? 'from-emerald-500 to-green-500' :
                    percentage >= 60 ? 'from-amber-500 to-yellow-500' :
                    'from-red-500 to-rose-500'
                  }`}
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/[0.05] rounded-lg p-3 border border-white/[0.1]">
                  <div className="text-2xl font-bold text-emerald-400">{score}</div>
                  <div className="text-xs text-white/60">Correct</div>
                </div>
                <div className="bg-white/[0.05] rounded-lg p-3 border border-white/[0.1]">
                  <div className="text-2xl font-bold text-red-400">{totalQuestions - score}</div>
                  <div className="text-xs text-white/60">Incorrect</div>
                </div>
                <div className="bg-white/[0.05] rounded-lg p-3 border border-white/[0.1]">
                  <div className="text-2xl font-bold text-blue-400">{totalQuestions}</div>
                  <div className="text-xs text-white/60">Total</div>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onRetakeQuiz}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              {t('results.retake')}
            </Button>
            <Button 
              onClick={() => navigate('/performance')}
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              {t('results.viewPerformance')}
            </Button>
            <Button 
              variant="outline"
              onClick={handleBackToChapters}
              className="border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.backToChapters')}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{t('results.questionReview')}</h3>
        </div>
        {questions.map((question, index) => {
          const userAnswer = selectedAnswers[index];
          const isCorrect = userAnswer === question.correct;
          
          return (
            <Card key={question.id} className="bg-white/[0.04] backdrop-blur-xl border-white/[0.08] text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-white/[0.08] text-white border border-white/[0.15]">
                      <div className="flex items-center gap-2">
                        <Target className="h-3 w-3" />
                        {t('quiz.question')} {index + 1}
                      </div>
                    </Badge>
                    <div className={`flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${
                      isCorrect 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {isCorrect ? (
                        <><CheckCircle className="h-3 w-3" /> Correct</>
                      ) : (
                        <><XCircle className="h-3 w-3" /> Incorrect</>
                      )}
                    </div>
                  </div>
                  {isCorrect ? (
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500" />
                  )}
                </div>
                <CardTitle className="text-lg font-medium text-white leading-relaxed">
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {question.options && question.options.map((option, optionIndex) => {
                  let buttonClass = "w-full justify-start text-left h-auto p-3 border transition-all duration-200 ";
                  
                  if (option === question.correct) {
                    buttonClass += "bg-emerald-500/20 border-emerald-500/50 text-emerald-100";
                  } else if (option === userAnswer && !isCorrect) {
                    buttonClass += "bg-red-500/20 border-red-500/50 text-red-100";
                  } else {
                    buttonClass += "bg-white/[0.05] border-white/[0.15] text-white/70";
                  }

                  return (
                    <Button
                      key={optionIndex}
                      variant="outline"
                      className={buttonClass}
                      disabled
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                          option === question.correct
                            ? 'bg-emerald-500 text-white'
                            : option === userAnswer && !isCorrect
                            ? 'bg-red-500 text-white'
                            : 'bg-white/10 text-white/70'
                        }`}>
                          {String.fromCharCode(65 + optionIndex)}
                        </div>
                        <span className="flex-1 text-sm">{option}</span>
                        {option === question.correct && (
                          <CheckCircle className="h-4 w-4 text-emerald-400 ml-auto" />
                        )}
                        {option === userAnswer && !isCorrect && (
                          <XCircle className="h-4 w-4 text-red-400 ml-auto" />
                        )}
                      </div>
                    </Button>
                  );
                })}
                
                {question.explanation && (
                  <div className="mt-4 rounded-lg border border-blue-400/30 bg-blue-950/45 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 rounded bg-blue-500/20">
                        <BarChart3 className="h-3 w-3 text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-blue-300 text-sm">{t('results.explanation')}:</h4>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">{question.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
