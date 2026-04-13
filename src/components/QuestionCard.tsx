
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Brain } from 'lucide-react';
import QuestionExplanation from './QuestionExplanation';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
  showAnswer?: boolean;
  userAnswer?: string;
}

const QuestionCard = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  questionNumber, 
  totalQuestions,
  showAnswer = false,
  userAnswer = ''
}: QuestionCardProps) => {
  // Ensure we have valid question data
  if (!question || !question.question || !Array.isArray(question.options) || question.options.length < 2) {
    return (
      <Card className="mb-6 border-red-400/45 bg-red-950/45 text-white shadow-xl">
        <CardContent className="p-6">
          <p className="text-red-400">Invalid question data. Please try refreshing the quiz.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/[0.06] backdrop-blur-xl border-white/[0.1] text-white shadow-xl hover:shadow-2xl transition-all duration-300 mb-6">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <Badge variant="secondary" className="border border-blue-300/30 bg-blue-500/90 text-white shadow-sm">
              Question {questionNumber} of {totalQuestions}
            </Badge>
          </div>
          {showAnswer && (
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
              userAnswer === question.correct 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}>
              {userAnswer === question.correct ? (
                <><CheckCircle2 className="h-4 w-4" /> Correct</>
              ) : (
                <><XCircle className="h-4 w-4" /> Incorrect</>
              )}
            </div>
          )}
        </div>
        <CardTitle className="text-lg font-semibold text-white leading-relaxed break-words whitespace-normal">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let buttonClass = `w-full justify-start text-left h-auto p-4 transition-all duration-300 border `;
            let icon = null;
            
            if (showAnswer) {
              // When answer is revealed, highlight correct and incorrect answers
              if (option === question.correct) {
                buttonClass += "bg-emerald-500/20 border-emerald-500/50 text-emerald-100 hover:bg-emerald-500/30";
                icon = <CheckCircle2 className="h-5 w-5 text-emerald-400 ml-auto" />;
              } else if (option === selectedAnswer && option !== question.correct) {
                buttonClass += "bg-red-500/20 border-red-500/50 text-red-100 hover:bg-red-500/30";
                icon = <XCircle className="h-5 w-5 text-red-400 ml-auto" />;
              } else {
                buttonClass += "bg-white/[0.05] border-white/[0.15] text-white/60 hover:bg-white/[0.10]";
              }
            } else {
              // Normal state when answer is not revealed
              if (selectedAnswer === option) {
                buttonClass += "bg-blue-500/20 border-blue-500/50 text-blue-100 hover:bg-blue-500/30 shadow-lg transform scale-[1.02]";
              } else {
                buttonClass += "bg-white/[0.05] border-white/[0.15] text-white/80 hover:bg-white/[0.10] hover:border-white/[0.25] hover:transform hover:scale-[1.01]";
              }
            }

            return (
              <Button
                key={`${question.id}-option-${index}`}
                variant="outline"
                className={buttonClass}
                onClick={() => !showAnswer && onAnswerSelect(option)}
                disabled={showAnswer}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                    showAnswer && option === question.correct
                      ? 'bg-emerald-500 text-white'
                      : showAnswer && option === selectedAnswer && option !== question.correct
                      ? 'bg-red-500 text-white'
                      : selectedAnswer === option
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white/70'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1 break-words whitespace-normal text-sm leading-relaxed">{option}</span>
                  {icon}
                </div>
              </Button>
            );
          })}
        </div>

        {showAnswer && (
          <QuestionExplanation
            isCorrect={userAnswer === question.correct}
            correctAnswer={question.correct}
            explanation={question.explanation}
            userAnswer={userAnswer}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
