import React, { useState, useEffect } from 'react';
import { Grade9Question } from '../data/grade9Questions';
import { 
  GameProgress, 
  Achievement, 
  Badge, 
  Level, 
  ACHIEVEMENTS, 
  BADGES, 
  LEVELS, 
  calculateLevel, 
  calculateStreakBonus, 
  getQuestionMultiplier, 
  updateProgress, 
  getRandomEncouragement 
} from '../data/grade9Gamification';
import { QuizNavigation, QuestionCard, QuizProgress } from './QuizNavigation';

interface GamifiedQuizProps {
  questions: Grade9Question[];
  onComplete: (progress: GameProgress) => void;
  initialProgress?: GameProgress;
  onPEV?: () => void;
  showPEVButton?: boolean;
}

export const GamifiedQuiz: React.FC<GamifiedQuizProps> = ({
  questions,
  onComplete,
  initialProgress,
  onPEV,
  showPEVButton = false
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showHint, setShowHint] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameProgress, setGameProgress] = useState<GameProgress>(initialProgress || {
    totalPoints: 0,
    currentLevel: 1,
    badges: [],
    streak: 0,
    completedQuestions: [],
    achievements: []
  });
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [showAchievement, setShowAchievement] = useState<Achievement | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const currentLevel = calculateLevel(gameProgress.totalPoints);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const isCorrect = answer === currentQuestion.correct;
    
    const updatedProgress = updateProgress(
      gameProgress,
      currentQuestion.id,
      isCorrect,
      timeTaken,
      currentQuestion.questionType || 'multiple-choice',
      currentQuestion.points || 10
    );
    
    setGameProgress(updatedProgress);
    
    // Check for new achievements
    const newAchievements = ACHIEVEMENTS.filter(achievement => {
      const wasUnlocked = updatedProgress.achievements.some(a => a.id === achievement.id && a.unlocked);
      const isNowUnlocked = updatedProgress.achievements.some(a => a.id === achievement.id && a.unlocked);
      return isNowUnlocked && !wasUnlocked;
    });
    
    if (newAchievements.length > 0) {
      setShowAchievement(newAchievements[0]);
      setTimeout(() => setShowAchievement(null), 3000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer('');
      setShowHint(false);
      setIsAnswered(false);
      setTimeRemaining(questions[currentQuestionIndex - 1]?.timeLimit || 60);
      setStartTime(Date.now());
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer('');
      setShowHint(false);
      setIsAnswered(false);
      setTimeRemaining(questions[currentQuestionIndex + 1]?.timeLimit || 60);
      setStartTime(Date.now());
    } else {
      onComplete(gameProgress);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setShowHint(false);
    setIsAnswered(false);
    setTimeRemaining(questions[0]?.timeLimit || 60);
    setStartTime(Date.now());
  };

  const canGoPrevious = currentQuestionIndex > 0;
  const canGoNext = isAnswered && currentQuestionIndex < questions.length - 1;
  const isCompleted = isAnswered && currentQuestionIndex === questions.length - 1;

  const handleHint = () => {
    if (currentQuestion.hints && currentQuestion.hints.length > 0 && !showHint) {
      setShowHint(true);
      // Deduct points for using hint
      setGameProgress(prev => ({
        ...prev,
        totalPoints: Math.max(0, prev.totalPoints - 5)
      }));
    }
  };

  const getAnswerDisplay = () => {
    switch (currentQuestion.questionType) {
      case 'true-false':
        return (
          <div className="space-y-3">
            <button
              onClick={() => handleAnswerSelect('True')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === 'True' 
                  ? 'border-blue-500 bg-blue-100' 
                  : 'border-gray-300 hover:border-blue-400'
              }`}
            >
              <span className="text-lg font-semibold">True</span>
            </button>
            <button
              onClick={() => handleAnswerSelect('False')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === 'False' 
                  ? 'border-blue-500 bg-blue-100' 
                  : 'border-gray-300 hover:border-blue-400'
              }`}
            >
              <span className="text-lg font-semibold">False</span>
            </button>
          </div>
        );
      
      case 'fill-blank':
        return (
          <input
            type="text"
            value={selectedAnswer}
            onChange={(e) => handleAnswerSelect(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        );
      
      case 'word-puzzle':
        return (
          <div className="grid grid-cols-2 gap-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === option 
                    ? 'border-green-500 bg-green-100' 
                    : 'border-gray-300 hover:border-green-400'
                }`}
              >
                <span className="font-mono text-lg">{option}</span>
              </button>
            ))}
          </div>
        );
      
      case 'matching':
        return (
          <div className="space-y-4">
            <p className="text-lg font-semibold mb-4">Match the items correctly:</p>
            <div className="grid grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`p-3 rounded border-2 text-left transition-all ${
                    selectedAnswer === option 
                      ? 'border-purple-500 bg-purple-100' 
                      : 'border-gray-300 hover:border-purple-400'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'drag-drop':
        return (
          <div className="space-y-4">
            <p className="text-lg font-semibold mb-4">Drag and drop to arrange in correct order:</p>
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-100 rounded border-2 border-dashed border-gray-400"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        );
      
      default: // multiple-choice
        return (
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === option 
                    ? 'border-blue-500 bg-blue-100' 
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <span className="text-lg">{option}</span>
              </button>
            ))}
          </div>
        );
    }
  };

  const isCorrect = selectedAnswer === currentQuestion.correct;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Navigation */}
      <QuizNavigation
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onNext={handleNext}
        onRestart={handleRestart}
        onPEV={onPEV}
        canGoNext={canGoNext}
        isCompleted={isCompleted}
        showPEV={showPEVButton}
      />

      {/* Progress */}
      <QuizProgress
        current={currentQuestionIndex}
        total={questions.length}
        answered={gameProgress.completedQuestions.map(id => 
          questions.findIndex(q => q.id === id)
        ).filter(i => i >= 0)}
        correct={gameProgress.completedQuestions.map(id => 
          questions.findIndex(q => q.id === id)
        ).filter(i => i >= 0 && questions[i]?.correct === selectedAnswer)}
        timeRemaining={timeRemaining}
        totalTime={currentQuestion.timeLimit}
      />

      {/* Question Card */}
      <QuestionCard
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        category={currentQuestion.questionType || 'Multiple Choice'}
        difficulty={currentQuestion.difficulty}
      >
        {/* Question Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            {currentQuestion.badges && currentQuestion.badges.length > 0 && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                🏆 {currentQuestion.badges[0]}
              </span>
            )}
            {currentQuestion.hints && currentQuestion.hints.length > 0 && (
              <button
                onClick={handleHint}
                disabled={showHint}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:opacity-50"
              >
                💡 Hint (-5 pts)
              </button>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                timeRemaining <= 10 ? 'text-red-600 animate-pulse' : 'text-gray-700'
              }`}>
                {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-600">Time</div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{currentQuestion.question}</h2>
          
          {/* Hint Display */}
          {showHint && currentQuestion.hints && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="font-semibold text-yellow-800 mb-1">💡 Hint:</div>
              <div className="text-yellow-700">{currentQuestion.hints[0]}</div>
            </div>
          )}
        </div>

        {/* Answer Options */}
        <div className="mb-6">
          {getAnswerDisplay()}
        </div>

        {/* Feedback */}
        {isAnswered && (
          <div className={`p-4 rounded-lg mb-6 ${
            isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">
                {isCorrect ? '✅' : '❌'}
              </span>
              <span className={`text-xl font-bold ${
                isCorrect ? 'text-green-700' : 'text-red-700'
              }`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            
            {isCorrect && (
              <div className="text-green-700">
                <div className="font-semibold mb-2">Excellent work!</div>
                <div className="text-sm">
                  {getRandomEncouragement(gameProgress.streak)}
                </div>
                {currentQuestion.streakBonus && currentQuestion.streakBonus > 0 && (
                  <div className="text-sm font-semibold text-yellow-600 mt-2">
                    🔥 Streak Bonus: +{currentQuestion.streakBonus} points!
                  </div>
                )}
              </div>
            )}
            
            <div className="text-gray-700 text-sm mt-3">
              <strong>Explanation:</strong> {currentQuestion.explanation}
            </div>
            
            {currentQuestion.example && (
              <div className="text-gray-600 text-sm mt-2">
                <strong>Example:</strong> {currentQuestion.example}
              </div>
            )}
          </div>
        )}
      </QuestionCard>
    </div>
  );
};
