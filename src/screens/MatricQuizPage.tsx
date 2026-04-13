import { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle2, XCircle, ChevronRight, Clock, Target, Brain, Lightbulb, RotateCcw, Eye } from 'lucide-react';
import type { MatricExamQuestion } from '@/data/matricExams';
import TopBar from '@/components/TopBar';
import StarField from '@/components/StarField';
import { useAuth } from '@/hooks/useAuth';
import { isFreeMatricSubject } from '@/lib/paymentAccess';
import { getMatricQuestions, getMatricSubjectIndex } from '@/data/matricExams';

const MatricQuizPage = () => {
  const { year, stream, subject } = useParams<{ year: string; stream: string; subject: string }>();
  const navigate = useNavigate();
  const { hasPremiumAccess } = useAuth();
  const yearNum = Number(year);
  const streamKey = stream ?? 'natural';
  const streamLabel = streamKey === 'social' ? 'Social Science' : 'Natural Science';
  const [questions, setQuestions] = useState<MatricExamQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [subjectIndex, setSubjectIndex] = useState(-1);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const answeredCount = answers.filter(a => a !== null).length;
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const scoreableQuestions = questions.filter((question) => question.correctAnswer >= 0).length;

  useEffect(() => {
    let active = true;

    const load = async () => {
      setIsLoading(true);
      const nextQuestions = await getMatricQuestions(yearNum, streamKey, subject ?? '');
      const nextSubjectIndex = getMatricSubjectIndex(yearNum, streamKey, subject ?? '');

      if (!active) {
        return;
      }

      setSubjectIndex(nextSubjectIndex);
      setQuestions(nextQuestions);
      setAnswers(new Array(nextQuestions.length).fill(null));
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowCorrectAnswer(false);
      setScore(0);
      setFinished(false);
      setIsLoading(false);
    };

    void load();

    return () => {
      active = false;
    };
  }, [streamKey, subject, yearNum]);

  const locked = subjectIndex >= 0 && !hasPremiumAccess && !isFreeMatricSubject(subjectIndex);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 overflow-hidden relative flex items-center justify-center">
        <StarField starCount={30} shootingCount={2} />
        <TopBar />
        <div className="relative z-10 text-white/70">Loading exam...</div>
      </div>
    );
  }

  if (locked) {
    return <Navigate to="/payment" replace />;
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 overflow-hidden relative flex items-center justify-center">
        <StarField starCount={30} shootingCount={2} />
        <TopBar />
        <div className="text-center text-white relative z-10">
          <p className="text-xl mb-4">No questions available yet for {subject} ({yearNum} E.C.)</p>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigate(`/matric/${yearNum}/${streamKey}`)}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const currentQuestion: MatricExamQuestion = questions[currentIndex];

  const renderRichText = (text: string, keyPrefix: string) => {
    const parts = text.split(/(\[Image:\s*[^\]]+\])/g).filter(Boolean);

    return parts.map((part, index) => {
      const match = part.match(/^\[Image:\s*([^\]]+)\]$/);
      if (!match) {
        return (
          <span key={`${keyPrefix}-text-${index}`} className="whitespace-pre-line">
            {part}
          </span>
        );
      }

      const source = match[1].trim();
      if (!/^https?:\/\//i.test(source)) {
        return (
          <span key={`${keyPrefix}-placeholder-${index}`} className="text-white/45 text-sm italic">
            {part}
          </span>
        );
      }

      return (
        <img
          key={`${keyPrefix}-image-${index}`}
          src={source}
          alt="Exam diagram"
          loading="lazy"
          className="w-full max-h-72 object-contain rounded-xl border border-white/10 bg-white p-2"
        />
      );
    });
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    // Update answers array
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    
    if (currentQuestion.correctAnswer >= 0 && index === currentQuestion.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(answers[currentIndex + 1] || null);
      setShowExplanation(answers[currentIndex + 1] !== null);
    }
  };

  const handleShowAnswer = () => {
    setShowCorrectAnswer(true);
    setShowExplanation(true);
    // Auto-select the correct answer for learning purposes
    if (currentQuestion.correctAnswer >= 0) {
      setSelectedAnswer(currentQuestion.correctAnswer);
      const newAnswers = [...answers];
      newAnswers[currentIndex] = currentQuestion.correctAnswer;
      setAnswers(newAnswers);
    }
  };

  const handleResetQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowCorrectAnswer(false);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setSelectedAnswer(answers[currentIndex - 1] || null);
      setShowExplanation(answers[currentIndex - 1] !== null);
      setShowCorrectAnswer(false);
    }
  };

  if (finished) {
    const percentage = scoreableQuestions > 0
      ? Math.round((score / scoreableQuestions) * 100)
      : 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 overflow-hidden relative">
        <StarField starCount={30} shootingCount={2} />
        <TopBar />
        <div className="max-w-lg mx-auto relative z-10 mt-20 text-center">
          <Card className="bg-white/[0.06] backdrop-blur-xl border-white/[0.1]">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-2">Exam Complete!</h2>
              <p className="text-white/50 mb-6">{subject} - {streamLabel} - {yearNum} E.C.</p>
              <div className="text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                {percentage}%
              </div>
              <p className="text-white/60 mb-2">{score} / {scoreableQuestions || questions.length} correct</p>
              {scoreableQuestions === 0 && (
                <p className="text-white/40 text-sm mb-8">
                  This exam set does not include an official answer key in the source.
                </p>
              )}
              {scoreableQuestions > 0 && <div className="mb-8" />}
              <div className="flex gap-3 justify-center">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigate(`/matric/${yearNum}/${streamKey}`)}>
                  Back to Subjects
                </Button>
                <Button
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                  onClick={() => {
                    setCurrentIndex(0);
                    setSelectedAnswer(null);
                    setShowExplanation(false);
                    setScore(0);
                    setFinished(false);
                  }}
                >
                  Retry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 overflow-hidden relative">
      <StarField starCount={30} shootingCount={2} />
      <TopBar />

        <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(`/matric/${yearNum}/${streamKey}`)} className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-white">{subject} - {streamLabel}</h1>
              <Badge variant="outline" className="border-white/20 text-white/60 text-sm">
                {yearNum} E.C.
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-1.5">
                <Target className="h-4 w-4" />
                <span>Question {currentIndex + 1} of {questions.length}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>2 hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>Score: {score}/{scoreableQuestions}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between text-white/60 text-sm mb-2">
            <span>Progress</span>
            <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}%</span>
          </div>
          <Progress 
            value={((currentIndex + 1) / questions.length) * 100} 
            className="h-2 bg-white/10"
            // @ts-ignore
            indicatorClassName="bg-gradient-to-r from-violet-500 to-fuchsia-500"
          />
          <div className="flex justify-between mt-3">
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: Math.min(questions.length, 10) }, (_, i) => {
                const questionIndex = Math.floor(currentIndex / 10) * 10 + i;
                if (questionIndex >= questions.length) return null;
                const isAnswered = answers[questionIndex] !== null;
                const isCurrent = questionIndex === currentIndex;
                
                return (
                  <button
                    key={questionIndex}
                    onClick={() => {
                      setCurrentIndex(questionIndex);
                      setSelectedAnswer(answers[questionIndex] || null);
                      setShowExplanation(answers[questionIndex] !== null);
                    }}
                    className={`w-8 h-8 rounded-full text-xs font-medium transition-all duration-200 ${
                      isCurrent
                        ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'
                        : isAnswered
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-white/10 text-white/50 border border-white/20'
                    }`}
                  >
                    {questionIndex + 1}
                  </button>
                );
              })}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1 && selectedAnswer === null}
              className="text-white/40 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        {(currentQuestion.sectionGroupTitle || currentQuestion.sectionTitle || currentQuestion.sectionDirection) && (
          <Card className="bg-white/[0.04] backdrop-blur-xl border-white/[0.08] mb-6">
            <CardContent className="p-5">
              {currentQuestion.sectionGroupTitle && (
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="border-white/20 text-white/60 text-xs">
                    Section
                  </Badge>
                  <div className="text-sm text-white/50 font-semibold">{currentQuestion.sectionGroupTitle}</div>
                </div>
              )}
              {currentQuestion.sectionTitle && (
                <div className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-400" />
                  {currentQuestion.sectionTitle}
                </div>
              )}
              {currentQuestion.sectionDirection && (
                <div className="text-white/60 text-sm whitespace-pre-line leading-relaxed">{currentQuestion.sectionDirection}</div>
              )}
            </CardContent>
          </Card>
        )}

        <Card className="bg-white/[0.04] backdrop-blur-xl border-white/[0.08] mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-bold">{currentIndex + 1}</span>
              </div>
              <div className="flex-1 text-white text-lg font-medium leading-relaxed">
                {renderRichText(currentQuestion.question, `question-${currentQuestion.id}`).map((node, index) => (
                  <Fragment key={`question-fragment-${index}`}>{node}</Fragment>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                let borderClass = 'border-white/[0.08] hover:border-white/20';
                let bgClass = 'bg-white/[0.02] hover:bg-white/[0.06]';
                const hasAnswerKey = currentQuestion.correctAnswer >= 0;
                const isSelected = selectedAnswer === idx;

                if (selectedAnswer !== null) {
                  if (hasAnswerKey && idx === currentQuestion.correctAnswer) {
                    borderClass = 'border-emerald-500/50 bg-emerald-500/10';
                  } else if (idx === selectedAnswer) {
                    borderClass = hasAnswerKey ? 'border-red-500/50 bg-red-500/10' : 'border-amber-500/40 bg-amber-500/10';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-xl border ${borderClass} ${bgClass} transition-all duration-200 flex items-start gap-3 group ${
                      selectedAnswer === null ? 'hover:scale-[1.02]' : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium shrink-0 transition-all duration-200 ${
                      isSelected
                        ? hasAnswerKey && idx === currentQuestion.correctAnswer
                          ? 'bg-emerald-500 text-white'
                          : hasAnswerKey
                          ? 'bg-red-500 text-white'
                          : 'bg-amber-500 text-white'
                        : 'bg-white/10 text-white/60'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <div className="text-white/80 text-sm flex-1 leading-relaxed">
                      {renderRichText(option, `option-${currentQuestion.id}-${idx}`).map((node, nodeIndex) => (
                        <Fragment key={`option-fragment-${nodeIndex}`}>{node}</Fragment>
                      ))}
                    </div>
                    {selectedAnswer !== null && hasAnswerKey && idx === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 ml-auto shrink-0" />
                    )}
                    {selectedAnswer === idx && hasAnswerKey && idx !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-400 ml-auto shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {!showExplanation && (
          <div className="flex justify-center mb-6">
            <Button
              onClick={handleShowAnswer}
              disabled={selectedAnswer !== null}
              className="bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <Eye className="h-4 w-4 mr-2" />
              Show Answer
            </Button>
          </div>
        )}

        {showExplanation && (
          <Card className="bg-white/[0.04] backdrop-blur-xl border-white/[0.08] mb-6 animate-fade-in">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  currentQuestion.correctAnswer >= 0 ? 'bg-emerald-500/20' : 'bg-amber-500/20'
                }`}>
                  {currentQuestion.correctAnswer >= 0 ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Lightbulb className="h-4 w-4 text-amber-400" />
                  )}
                </div>
                <div className="flex-1">
                  {currentQuestion.correctAnswer >= 0 ? (
                    <div className="mb-3">
                      <p className="text-emerald-300 text-sm font-medium mb-2">
                        Correct Answer: {String.fromCharCode(65 + currentQuestion.correctAnswer)}
                      </p>
                      <p className="text-white/70 text-sm italic">
                        {currentQuestion.options[currentQuestion.correctAnswer]}
                      </p>
                    </div>
                  ) : (
                    <p className="text-amber-300 text-sm font-medium mb-3">
                      Official answer key unavailable in source.
                    </p>
                  )}
                  {currentQuestion.explanation && (
                    <div className="bg-white/[0.02] rounded-lg p-3 border border-white/[0.06]">
                      <p className="text-white/70 text-sm leading-relaxed">{currentQuestion.explanation}</p>
                    </div>
                  )}
                  {showCorrectAnswer && (
                    <div className="mt-3 pt-3 border-t border-white/[0.10]">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleResetQuestion}
                        className="text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reset Question
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedAnswer !== null && (
          <div className="flex justify-between items-center">
            <Button 
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <div className="text-white/40 text-sm">
              {answeredCount} of {questions.length} questions answered
            </div>
            <Button 
              onClick={handleNext} 
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg hover:shadow-violet-500/30 transition-all duration-300 gap-2"
            >
              {currentIndex + 1 >= questions.length ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Finish Exam
                </>
              ) : (
                <>
                  Next Question
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatricQuizPage;
