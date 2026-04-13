
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, BookOpen, Clock, Target } from 'lucide-react';

interface Quiz {
  id: string;
  title: string;
  subject: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: number;
  questions: number;
  completed: boolean;
  score: number | null;
  grade: number;
  chapters: string[];
}

interface ChapterCardProps {
  chapter: string;
  subject: string;
  subjectIcon: React.ComponentType<{ className?: string }>;
  onSelectQuiz: (quiz: Quiz) => void;
  grade: number;
}

const ChapterCard = ({ chapter, subject, subjectIcon: Icon, onSelectQuiz, grade }: ChapterCardProps) => {
  const createQuiz = (difficulty: 'Easy' | 'Medium' | 'Hard'): Quiz => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      title: `${subject} - ${chapter} (${difficulty})`,
      subject: subject.toLowerCase().replace(/\s+/g, '_'),
      difficulty: difficulty,
      duration: difficulty === 'Easy' ? 30 : difficulty === 'Medium' ? 45 : 60,
      questions: difficulty === 'Easy' ? 15 : difficulty === 'Medium' ? 20 : 25,
      completed: false,
      score: null,
      grade: grade,
      chapters: [chapter]
    };
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-600 hover:bg-green-700';
      case 'Medium': return 'bg-yellow-600 hover:bg-yellow-700';
      case 'Hard': return 'bg-red-600 hover:bg-red-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <Card className="bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 rounded-lg bg-blue-500">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-sm font-semibold text-white line-clamp-2">
              {chapter}
            </CardTitle>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-300">
          <div className="flex items-center">
            <BookOpen className="mr-1 h-3 w-3" />
            <span>{subject}</span>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
            Grade {grade}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-2">
          <div className="text-xs text-gray-300 mb-2 flex items-center">
            <Target className="mr-1 h-3 w-3" />
            Choose Difficulty Level:
          </div>
          <div className="grid grid-cols-1 gap-2">
            {(['Easy', 'Medium', 'Hard'] as const).map((difficulty) => (
              <Button
                key={difficulty}
                size="sm"
                className={`text-xs text-white border-0 ${getDifficultyColor(difficulty)} transition-all duration-200`}
                onClick={() => onSelectQuiz(createQuiz(difficulty))}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <Play className="mr-1 h-3 w-3" />
                    {difficulty}
                  </div>
                  <div className="flex items-center text-xs opacity-75">
                    <Clock className="mr-1 h-2 w-2" />
                    {difficulty === 'Easy' ? '30m' : difficulty === 'Medium' ? '45m' : '60m'}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterCard;
