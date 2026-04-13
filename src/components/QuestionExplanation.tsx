
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuestionExplanationProps {
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
  userAnswer: string;
}

const QuestionExplanation = ({ 
  isCorrect, 
  correctAnswer, 
  explanation,
  userAnswer 
}: QuestionExplanationProps) => {
  return (
    <Card className="bg-white/[0.04] border-white/[0.08] mt-4 animate-fade-in">
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          {isCorrect ? (
            <>
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p className="text-green-400 font-medium">Correct!</p>
            </>
          ) : (
            <>
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <p className="text-red-400 font-medium">Incorrect</p>
            </>
          )}
        </div>
        
        {!isCorrect && (
          <p className="text-white">
            Your answer: <span className="text-red-400">{userAnswer}</span><br />
            Correct answer: <span className="text-green-400">{correctAnswer}</span>
          </p>
        )}
        
        <div className="mt-2 p-3 bg-white/[0.04] rounded-md border border-white/[0.08]">
          <h4 className="text-sm font-medium text-white/60 mb-1">Explanation</h4>
          <p className="text-white text-sm">{explanation || "No explanation available."}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionExplanation;
