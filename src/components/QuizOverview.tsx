import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, RotateCcwIcon, ListIcon } from 'lucide-react';
import { Grade9Question } from '../data/grade9Questions';
import { GameProgress } from '../data/grade9Gamification';

interface QuizOverviewProps {
  questions: Grade9Question[];
  gameProgress: GameProgress;
  onStartQuiz: () => void;
  onSelectQuestion: (index: number) => void;
  onPEV?: () => void;
  showPEVButton?: boolean;
}

export const QuizOverview: React.FC<QuizOverviewProps> = ({
  questions,
  gameProgress,
  onStartQuiz,
  onSelectQuestion,
  onPEV,
  showPEVButton = false
}) => {
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleQuestionSelection = (index: number) => {
    setSelectedQuestions(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleSelectAll = () => {
    if (showAll) {
      setSelectedQuestions([]);
    } else {
      setSelectedQuestions(questions.map((_, index) => index));
    }
    setShowAll(!showAll);
  };

  const handleStartSelected = () => {
    if (selectedQuestions.length > 0) {
      // Reorder questions based on selection
      const orderedQuestions = selectedQuestions.length === questions.length 
        ? questions 
        : selectedQuestions.map(index => questions[index]);
      
      // This would need to be handled by parent component
      console.log('Starting quiz with questions:', orderedQuestions);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50 border-green-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Hard': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'multiple-choice': return '🔘';
      case 'true-false': return '✓';
      case 'fill-blank': return '📝';
      case 'word-puzzle': return '🧩';
      case 'matching': return '🔗';
      case 'drag-drop': return '🔄';
      default: return '📚';
    }
  };

  const displayQuestions = showAll ? questions : questions.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Grade 9 English Quiz</h1>
            <p className="text-gray-600 mt-2">Select questions to include in your quiz</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{gameProgress.totalPoints}</div>
              <div className="text-sm text-gray-600">Total Points</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-purple-600">Level {gameProgress.currentLevel}</div>
              <div className="text-sm text-gray-600">Current Level</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSelectAll}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <ListIcon className="w-4 h-4" />
            <span>{showAll ? 'Deselect All' : 'Select All'}</span>
          </button>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAll(false)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                showAll 
                  ? 'bg-gray-200 text-gray-600' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Show First 6
            </button>
            {selectedQuestions.length > 0 && (
              <button
                onClick={handleStartSelected}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
              >
                Start Quiz ({selectedQuestions.length} questions)
              </button>
            )}
            {/* PEV Button */}
            {showPEVButton && onPEV && (
              <button
                onClick={onPEV}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all"
                title="Post Exam Review"
              >
                <span>📝</span>
                <span>PEV</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Questions Grid */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayQuestions.map((question, index) => {
            const actualIndex = questions.indexOf(question);
            const isSelected = selectedQuestions.includes(actualIndex);
            const isCompleted = gameProgress.completedQuestions.includes(question.id);
            
            return (
              <div
                key={question.id}
                onClick={() => toggleQuestionSelection(actualIndex)}
                className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  isSelected 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                } ${isCompleted ? 'opacity-75' : ''}`}
              >
                {/* Selection Checkbox */}
                <div className="absolute top-2 right-2">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    isSelected 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'bg-white border-gray-300'
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010-1.414l-8-8a1 1 0 00-1.414 0L4.586 9.414a1 1 0 001.414 1.414l8 8a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Question Content */}
                <div className="mb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold">
                      {question.points} pts
                    </span>
                    <span className="text-lg">
                      {getTypeIcon(question.questionType)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {question.question}
                  </h3>
                </div>

                {/* Question Meta */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <span>Unit: {question.chapter}</span>
                    <span>Type: {question.questionType || 'Multiple Choice'}</span>
                  </div>
                  {isCompleted && (
                    <span className="text-green-600 font-medium">✓ Completed</span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className={`absolute bottom-2 left-2 right-2 opacity-0 hover:opacity-100 transition-opacity ${
                  isSelected ? 'hidden' : ''
                }`}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectQuestion(actualIndex);
                    }}
                    className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 shadow-lg"
                    title="Start from this question"
                  >
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        {!showAll && questions.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Load All Questions ({questions.length - 6} more)
            </button>
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quiz Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{questions.length}</div>
            <div className="text-sm text-gray-600">Total Questions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{gameProgress.completedQuestions.length}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">{gameProgress.badges.length}</div>
            <div className="text-sm text-gray-600">Badges Earned</div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface QuizResultsProps {
  gameProgress: GameProgress;
  totalQuestions: number;
  onRetry: () => void;
  onContinue: () => void;
  onViewAnswers: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  gameProgress,
  totalQuestions,
  onRetry,
  onContinue,
  onViewAnswers
}) => {
  const accuracy = gameProgress.completedQuestions.length > 0 
    ? (gameProgress.completedQuestions.filter(qId => {
        const question = questions.find(q => q.id === qId);
        return question && question.correct === gameProgress.selectedAnswer;
      }).length / gameProgress.completedQuestions.length) * 100
    : 0;

  const getPerformanceMessage = () => {
    if (accuracy >= 90) return { message: "Outstanding! 🏆", color: "text-green-600" };
    if (accuracy >= 80) return { message: "Excellent work! ⭐", color: "text-blue-600" };
    if (accuracy >= 70) return { message: "Good job! 👍", color: "text-yellow-600" };
    if (accuracy >= 60) return { message: "Keep practicing! 📚", color: "text-orange-600" };
    return { message: "Keep learning! 💪", color: "text-red-600" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Trophy Animation */}
        <div className="text-6xl mb-6 animate-bounce">
          {accuracy >= 80 ? '🏆' : accuracy >= 60 ? '⭐' : '📚'}
        </div>

        {/* Performance Message */}
        <h1 className={`text-4xl font-bold mb-4 ${performance.color}`}>
          {performance.message}
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-800">{gameProgress.totalPoints}</div>
            <div className="text-sm text-gray-600">Total Points</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-800">{accuracy.toFixed(1)}%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-800">{gameProgress.streak}</div>
            <div className="text-sm text-gray-600">Best Streak</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-800">{gameProgress.achievements.length}</div>
            <div className="text-sm text-gray-600">Achievements</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={onRetry}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
          >
            <RotateCcwIcon className="w-4 h-4 mr-2 inline" />
            Retry Quiz
          </button>
          <button
            onClick={onContinue}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
          >
            Continue Learning
          </button>
          <button
            onClick={onViewAnswers}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold"
          >
            Review Answers
          </button>
        </div>
      </div>
    </div>
  );
};
