import React from 'react';
import { ChevronRightIcon, RotateCcwIcon } from 'lucide-react';

interface QuizNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  onNext: () => void;
  onRestart: () => void;
  onPEV?: () => void;
  canGoNext: boolean;
  isCompleted: boolean;
  showPEV?: boolean;
}

export const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentIndex,
  totalQuestions,
  onNext,
  onRestart,
  onPEV,
  canGoNext,
  isCompleted,
  showPEV = false
}) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 mb-6">
      {/* Progress Indicator */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onRestart}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group"
          title="Restart Quiz"
        >
          <RotateCcwIcon className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
        </button>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-600">Question</span>
          <span className="text-lg font-bold text-blue-600">{currentIndex + 1}</span>
          <span className="text-sm font-medium text-gray-600">of {totalQuestions}</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
            canGoNext
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>{isCompleted ? 'Complete' : 'Next'}</span>
          <ChevronRightIcon className="w-4 h-4" />
        </button>

        {/* PEV Button */}
        {showPEV && onPEV && (
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
  );
};

interface QuestionCardProps {
  children: React.ReactNode;
  questionNumber: number;
  totalQuestions: number;
  category?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  children,
  questionNumber,
  totalQuestions,
  category,
  difficulty
}) => {
  const getDifficultyColor = (diff?: string) => {
    switch (diff) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      {/* Question Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          {category && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              {category}
            </span>
          )}
          {difficulty && (
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="text-sm text-gray-500">
            Question {questionNumber} of {totalQuestions}
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="mb-6">
        {children}
      </div>
    </div>
  );
};

interface QuizProgressProps {
  current: number;
  total: number;
  answered: number[];
  correct: number[];
  timeRemaining?: number;
  totalTime?: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({
  current,
  total,
  answered,
  correct,
  timeRemaining,
  totalTime
}) => {
  const progressPercentage = (current / total) * 100;
  const correctPercentage = answered.length > 0 ? (correct.length / answered.length) * 100 : 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      {/* Overall Progress */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Quiz Progress</span>
          <span className="text-sm font-medium text-gray-700">
            {current + 1} / {total}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Accuracy */}
      {answered.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Accuracy</span>
            <span className={`text-sm font-medium ${
              correctPercentage >= 80 ? 'text-green-600' : 
              correctPercentage >= 60 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {correctPercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                correctPercentage >= 80 ? 'bg-green-500' : 
                correctPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${correctPercentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Timer */}
      {timeRemaining !== undefined && totalTime !== undefined && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Time Remaining</span>
          <div className="flex items-center space-x-2">
            <div className={`text-lg font-bold ${
              timeRemaining <= 30 ? 'text-red-600 animate-pulse' : 
              timeRemaining <= 60 ? 'text-yellow-600' : 'text-gray-700'
            }`}>
              {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
            </div>
            <div className="w-24 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                style={{ 
                  width: `${((totalTime - timeRemaining) / totalTime) * 100}%` 
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Question Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: total }, (_, index) => {
          const isAnswered = answered.includes(index);
          const isCorrect = correct.includes(index);
          const isCurrent = index === current;
          
          return (
            <button
              key={index}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                isCurrent 
                  ? 'bg-blue-600 border-blue-600 scale-125' 
                  : isCorrect 
                    ? 'bg-green-500 border-green-500' 
                    : isAnswered 
                      ? 'bg-red-500 border-red-500' 
                      : 'bg-gray-300 border-gray-300 hover:border-gray-400'
              }`}
              title={`Question ${index + 1}${
                isCorrect ? ' (Correct)' : 
                isAnswered ? ' (Incorrect)' : 
                isCurrent ? ' (Current)' : ''
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
