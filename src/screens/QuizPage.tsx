import React, { useState, useEffect } from 'react';
import StarField from '@/components/StarField';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

import QuestionCard from '@/components/QuestionCard';
import Results from '@/components/Results';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Eye, Clock, Target, Brain, CheckCircle2, RotateCcw } from 'lucide-react';
import TopBar from "@/components/TopBar";
import { useAuth } from "@/hooks/useAuth";
import { isFreeChapter } from '@/lib/paymentAccess';
import { getQuestionsForSubject, getQuizChapterTitles, type QuizQuestion } from '@/lib/quizContentLoader';

const unsupportedGrade12QuizSubjects = new Set([
]);

const QuizPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { hasPremiumAccess: premiumAccess } = useAuth();
  const subject = params.subject;
  const chapterId = params.chapterId ? decodeURIComponent(params.chapterId) : null;
  const difficulty = params.difficulty;
  const grade = params.grade;
  
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAnswerForQuestion, setShowAnswerForQuestion] = useState<number | null>(null);
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set());
  const [chapterTitles, setChapterTitles] = useState<string[]>([]);

  const initializeQuestions = async () => {
    if (!subject || !chapterId || !difficulty || !grade) {
      setError('Missing required quiz parameters');
      setIsLoading(false);
      return;
    }

    if (grade === '12' && unsupportedGrade12QuizSubjects.has(subject)) {
      setError(`Grade 12 ${subject} quizzes are not available yet. Use the notes section for this subject.`);
      setQuestions([]);
      setIsLoading(false);
      return;
    }
    
    try {
      const [fetchedQuestions, fetchedChapterTitles] = await Promise.all([
        getQuestionsForSubject(subject, chapterId, difficulty, grade, 10),
        getQuizChapterTitles(subject, grade),
      ]);
      setChapterTitles(fetchedChapterTitles);
      
      if (fetchedQuestions.length > 0) {
        setQuestions(fetchedQuestions);
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowResults(false);
        setStartTime(Date.now());
        setElapsedTime(0);
        setError(null);
      } else {
        setError(`No questions available for Grade ${grade} ${subject} - ${chapterId} (${difficulty} level)`);
        setQuestions([]);
      }
    } catch (err) {
      console.error('Error initializing questions:', err);
      setError('Failed to load quiz questions. Please try again.');
      setQuestions([]);
    }
    
    setIsLoading(false);
  };

  useEffect(() => {
    initializeQuestions();
  }, [subject, chapterId, difficulty, grade]);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (!showResults && !isLoading && startTime > 0 && questions.length > 0) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [showResults, startTime, isLoading, questions.length]);

  const handleAnswerSelect = (answer: string) => {
    console.log('Answer selected:', answer, 'for question index:', currentQuestionIndex);
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };

  const handleShowAnswer = () => {
    console.log('Show answer clicked for question index:', currentQuestionIndex);
    setShowAnswerForQuestion(currentQuestionIndex);
    setRevealedAnswers(prev => new Set([...prev, currentQuestionIndex]));
  };

  const handleNextQuestion = () => {
    console.log('Next question clicked, current index:', currentQuestionIndex, 'total:', questions.length);
    setShowAnswerForQuestion(null); // Hide explanation when moving to next question
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = (): number => {
    let correctAnswersCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctAnswersCount++;
      }
    });
    return correctAnswersCount;
  };

  const formatTime = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
  
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  const handleRetakeQuiz = () => {
    setShowAnswerForQuestion(null);
    setRevealedAnswers(new Set());
    initializeQuestions();
  };

  const handleBackToChapters = () => {
    if (grade && subject) {
      navigate(`/grade/${grade}/subject/${subject}/chapters`);
    } else {
      navigate(-1);
    }
  };

  if (isLoading) {
    return (
    <div className="app-shell container mx-auto pt-14 px-4 pb-4">
      <StarField starCount={30} shootingCount={2} />
      <TopBar />
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Loading Quiz...
          </h2>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-[250px] bg-white/[0.08]" />
          <Skeleton className="h-4 w-[400px] bg-white/[0.08]" />
          <Skeleton className="h-10 bg-white/[0.08]" />
          <Skeleton className="h-10 bg-white/[0.08]" />
          <Skeleton className="h-10 bg-white/[0.08]" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
    <div className="app-shell container mx-auto pt-14 px-4 pb-4">
      <StarField starCount={30} shootingCount={2} />
      <TopBar />
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Quiz Error
          </h2>
        </div>
        <div className="rounded-lg border border-red-400/35 bg-red-950/45 p-6 shadow-xl">
          <p className="text-red-400 text-lg mb-4">
            {error.includes('Unable to load the current question') ? (
              <>
                Unable to load the current question. 
                Please try refreshing the page.
              </>
            ) : (
              <>
                {error.includes('No questions available') ? (
                  <>
                    No questions available for this chapter and difficulty level. 
                    Please try a different difficulty level or chapter.
                  </>
                ) : (
                  <>
                    {error}
                  </>
                )}
              </>
            )}
          </p>
          <div className="space-x-4">
            <Button 
              onClick={initializeQuestions}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white"
            >
              Try Again
            </Button>
            <Button 
              variant="outline"
              onClick={handleBackToChapters}
              className="border-white/[0.08] text-white hover:bg-white/10"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!subject || !chapterId || !difficulty) {
    return (
    <div className="app-shell container mx-auto pt-14 px-4 pb-4">
      <StarField starCount={30} shootingCount={2} />
      <TopBar />
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Invalid Quiz Parameters
          </h2>
        </div>
        <div className="rounded-lg border border-yellow-400/35 bg-yellow-950/45 p-6 shadow-xl">
          <p className="text-yellow-400">
            Missing required parameters. 
            <br />
            <span className="text-sm">Please navigate from the subjects page.</span>
          </p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
    <div className="app-shell container mx-auto pt-14 px-4 pb-4">
      <StarField starCount={30} shootingCount={2} />
      <TopBar />
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            {subject} - {chapterId} ({difficulty})
          </h2>
        </div>
        <div className="rounded-lg border border-blue-400/35 bg-blue-950/45 p-6 shadow-xl">
          <p className="text-blue-400 text-lg mb-4">
            No questions available for this chapter and difficulty level.
            <br />
            <span className="text-sm">Please try a different difficulty level or chapter.</span>
          </p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const normalizedChapterId = decodeURIComponent(chapterId ?? '');
  const chapterIndex = chapterTitles.findIndex((title) => title === normalizedChapterId);
  const lockedChapter = chapterIndex >= 0 && !premiumAccess && !isFreeChapter(chapterIndex);

  if (lockedChapter) {
    return <Navigate to="/payment" replace />;
  }

  if (!currentQuestion) {
    return (
    <div className="app-shell container mx-auto pt-14 px-4 pb-4">
      <StarField starCount={30} shootingCount={2} />
      <TopBar />
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToChapters}
            className="text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-white">
            Quiz Error
          </h2>
        </div>
        <div className="rounded-lg border border-red-400/35 bg-red-950/45 p-6 shadow-xl">
          <p className="text-red-400">Unable to load the current question. Please try refreshing the page.</p>
          <Button 
            onClick={initializeQuestions}
            className="mt-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white"
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell container mx-auto pt-14 px-4 pb-4">
      <StarField starCount={30} shootingCount={2} />
      <TopBar />
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={handleBackToChapters}
          className="mb-4 text-white/90 hover:bg-white/12 transition-all duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="bg-white/[0.06] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.1]">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-white break-words whitespace-normal">
                Grade {grade} {subject} - {chapterId}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <Badge variant="outline" className="border-white/20 text-white/60 text-sm">
                  {difficulty} level
                </Badge>
                <div className="flex items-center gap-1.5 text-white/50 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{formatTime(elapsedTime)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Progress</span>
              </div>
              <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</span>
            </div>
            <Progress 
              value={((currentQuestionIndex + 1) / questions.length) * 100} 
              className="h-3 bg-white/10"
              // @ts-ignore
              indicatorClassName="bg-gradient-to-r from-violet-500 to-fuchsia-500"
            />
            <div className="flex items-center justify-between text-white/60 text-sm">
              <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>{Object.keys(selectedAnswers).length} answered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showResults ? (
        <Results 
          score={calculateScore()} 
          totalQuestions={questions.length} 
          timeTaken={formatTime(elapsedTime)}
          onRetakeQuiz={handleRetakeQuiz}
          questions={questions}
          selectedAnswers={selectedAnswers}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: Math.min(questions.length, 10) }, (_, i) => {
              const questionIndex = Math.floor(currentQuestionIndex / 10) * 10 + i;
              if (questionIndex >= questions.length) return null;
              const isAnswered = selectedAnswers[questionIndex] !== undefined;
              const isCurrent = questionIndex === currentQuestionIndex;
              
              return (
                <button
                  key={questionIndex}
                  onClick={() => {
                    setCurrentQuestionIndex(questionIndex);
                  }}
                  className={`w-8 h-8 rounded-full text-xs font-medium transition-all duration-200 ${
                    isCurrent
                      ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white scale-110 shadow-lg'
                      : isAnswered
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30'
                      : 'bg-white/10 text-white/50 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {questionIndex + 1}
                </button>
              );
            })}
          </div>
          
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            showAnswer={showAnswerForQuestion === currentQuestionIndex}
            userAnswer={selectedAnswers[currentQuestionIndex]}
          />
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0}
                className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Previous
              </Button>
              <div className="text-sm text-white/70">
                {currentQuestionIndex + 1} / {questions.length}
              </div>
            </div>
            <div className="flex gap-3">
              {!revealedAnswers.has(currentQuestionIndex) && (
                <Button
                  onClick={handleShowAnswer}
                  variant="outline"
                  size="sm"
                  className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-200"
                >
                  <Eye className="mr-1 h-4 w-4" />
                  Show Answer
                </Button>
              )}
              {revealedAnswers.has(currentQuestionIndex) && (
                <Button
                  onClick={() => {
                    setShowAnswerForQuestion(null);
                    setSelectedAnswers(prev => {
                      const newAnswers = { ...prev };
                      delete newAnswers[currentQuestionIndex];
                      return newAnswers;
                    });
                  }}
                  variant="outline"
                  size="sm"
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200"
                >
                  <RotateCcw className="mr-1 h-4 w-4" />
                  Reset Answer
                </Button>
              )}
              <Button 
                onClick={handleNextQuestion} 
                disabled={!selectedAnswers[currentQuestionIndex]}
                size="sm"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white disabled:opacity-50 shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              >
                {currentQuestionIndex === questions.length - 1 ? (
                  <>
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    Finish Quiz
                  </>
                ) : (
                  <>
                    Next
                    <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
