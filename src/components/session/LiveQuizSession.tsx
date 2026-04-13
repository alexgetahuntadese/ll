import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface LiveQuizSessionProps {
  question: Question;
  onAnswer: (selectedAnswer: string, isCorrect: boolean) => void;
  hasAnswered: boolean;
}

const LiveQuizSession = ({ question, onAnswer, hasAnswered }: LiveQuizSessionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    if (hasAnswered) return;
    setSelectedAnswer(option);
    const isCorrect = option === question.correctAnswer;
    onAnswer(option, isCorrect);
  };

  const getOptionStyle = (option: string) => {
    if (!hasAnswered) {
      return "bg-white/10 hover:bg-white/20 border-white/20 text-white";
    }
    
    if (option === question.correctAnswer) {
      return "bg-green-500/30 border-green-500 text-white";
    }
    
    if (option === selectedAnswer && option !== question.correctAnswer) {
      return "bg-red-500/30 border-red-500 text-white";
    }
    
    return "bg-white/5 border-white/10 text-white/50";
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-xl text-white leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleSelect(option)}
            disabled={hasAnswered}
            variant="outline"
            className={`w-full justify-start text-left p-4 h-auto ${getOptionStyle(option)}`}
          >
            <span className="mr-3 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="flex-1">{option}</span>
            {hasAnswered && option === question.correctAnswer && (
              <Check className="h-5 w-5 text-green-400" />
            )}
            {hasAnswered && option === selectedAnswer && option !== question.correctAnswer && (
              <X className="h-5 w-5 text-red-400" />
            )}
          </Button>
        ))}
        
        {hasAnswered && (
          <div className="text-center text-white/60 mt-4">
            {selectedAnswer === question.correctAnswer 
              ? "🎉 Correct! +10 points" 
              : "❌ Wrong answer"}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LiveQuizSession;
