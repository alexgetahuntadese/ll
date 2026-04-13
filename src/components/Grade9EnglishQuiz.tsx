import React, { useState } from 'react';
import { Grade9Question } from '../data/grade9Questions';
import { GameProgress } from '../data/grade9Gamification';
import { QuizOverview, QuizResults } from './QuizOverview';
import { GamifiedQuiz } from './GamifiedQuiz';

type QuizView = 'overview' | 'quiz' | 'results';

interface Grade9EnglishQuizProps {
  questions: Grade9Question[];
  initialProgress?: GameProgress;
  onComplete: (progress: GameProgress) => void;
  onPEV?: () => void;
  showPEVButton?: boolean;
}

export const Grade9EnglishQuiz: React.FC<Grade9EnglishQuizProps> = ({
  questions,
  initialProgress,
  onComplete,
  onPEV,
  showPEVButton = false
}) => {
  const [currentView, setCurrentView] = useState<QuizView>('overview');
  const [selectedQuestions, setSelectedQuestions] = useState<Grade9Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameProgress, setGameProgress] = useState<GameProgress>(initialProgress || {
    totalPoints: 0,
    currentLevel: 1,
    badges: [],
    streak: 0,
    completedQuestions: [],
    achievements: []
  });

  const handleStartQuiz = (selected: Grade9Question[]) => {
    setSelectedQuestions(selected);
    setCurrentQuestionIndex(0);
    setCurrentView('quiz');
  };

  const handleCompleteQuiz = (progress: GameProgress) => {
    setGameProgress(progress);
    setCurrentView('results');
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setGameProgress(initialProgress || {
      totalPoints: 0,
      currentLevel: 1,
      badges: [],
      streak: 0,
      completedQuestions: [],
      achievements: []
    });
    setCurrentView('overview');
  };

  const handleContinue = () => {
    setCurrentView('overview');
  };

  const handleViewAnswers = () => {
    // This could open a modal with detailed answers
    console.log('View answers clicked');
  };

  const handleSelectQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setCurrentView('quiz');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'overview':
        return (
          <QuizOverview
            questions={questions}
            gameProgress={gameProgress}
            onStartQuiz={handleStartQuiz}
            onSelectQuestion={handleSelectQuestion}
            onPEV={onPEV}
            showPEVButton={showPEVButton}
          />
        );

      case 'quiz':
        return (
          <GamifiedQuiz
            questions={selectedQuestions}
            onComplete={handleCompleteQuiz}
            initialProgress={gameProgress}
          />
        );

      case 'results':
        return (
          <QuizResults
            gameProgress={gameProgress}
            totalQuestions={selectedQuestions.length}
            onRetry={handleRetry}
            onContinue={handleContinue}
            onViewAnswers={handleViewAnswers}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-gray-800">Grade 9 English</h1>
              <nav className="flex space-x-1">
                <button
                  onClick={() => setCurrentView('overview')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentView === 'overview' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setCurrentView('quiz')}
                  disabled={selectedQuestions.length === 0}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentView === 'quiz' 
                      ? 'bg-blue-600 text-white' 
                      : selectedQuestions.length === 0 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Quiz
                </button>
                <button
                  onClick={() => setCurrentView('results')}
                  disabled={gameProgress.completedQuestions.length === 0}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentView === 'results' 
                      ? 'bg-blue-600 text-white' 
                      : gameProgress.completedQuestions.length === 0 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Results
                </button>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Progress: {gameProgress.completedQuestions.length}/{questions.length}
              </div>
              <div className="text-sm font-medium text-blue-600">
                {gameProgress.totalPoints} pts
              </div>
              <div className="text-sm font-medium text-purple-600">
                Level {gameProgress.currentLevel}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6">
        {renderCurrentView()}
      </div>
    </div>
  );
};
