
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ChevronRight, BookOpen, Target } from 'lucide-react';
import ChapterCard from './ChapterCard';

interface SubjectCardProps {
  subject: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    chapters: string[];
  };
  progress: {
    completed: number;
    total: number;
    percentage: number;
  };
  grade: number;
  onSelectQuiz: (quiz: any) => void;
  isMobile?: boolean;
}

const SubjectCard = ({ subject, progress, grade, onSelectQuiz, isMobile = false }: SubjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 60) return 'text-yellow-500';
    if (percentage >= 40) return 'text-orange-500';
    return 'text-red-500';
  };

  const ChapterContent = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <subject.icon className="h-6 w-6 text-blue-500" />
          <h3 className="text-lg font-semibold">{subject.name}</h3>
        </div>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          {subject.chapters.length} chapters
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {subject.chapters.map((chapter, index) => (
          <ChapterCard
            key={index}
            chapter={chapter}
            subject={subject.name}
            subjectIcon={subject.icon}
            onSelectQuiz={onSelectQuiz}
            grade={grade}
          />
        ))}
      </div>
    </div>
  );

  const cardContent = (
    <Card className="bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-blue-500 group-hover:bg-blue-400 transition-colors">
              <subject.icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{subject.name}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <BookOpen className="h-4 w-4" />
                <span>{subject.chapters.length} chapters</span>
              </div>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400">Progress</span>
            </div>
            <span className={`font-medium ${getProgressColor(progress.percentage)}`}>
              {progress.completed}/{progress.total} completed
            </span>
          </div>
          
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-blue-500" 
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          
          <div className="text-right">
            <span className={`text-sm font-medium ${getProgressColor(progress.percentage)}`}>
              {progress.percentage}%
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <Button 
            variant="ghost" 
            className="w-full text-blue-300 hover:text-white hover:bg-blue-600/20"
          >
            View Chapters
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          {cardContent}
        </DrawerTrigger>
        <DrawerContent className="bg-slate-900 text-white border-white/20">
          <DrawerHeader>
            <DrawerTitle className="text-white">
              {subject.name} - Grade {grade}
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-6">
            <ChapterContent />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {cardContent}
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-slate-900 text-white border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white">
            {subject.name} - Grade {grade}
          </DialogTitle>
        </DialogHeader>
        <ChapterContent />
      </DialogContent>
    </Dialog>
  );
};

export default SubjectCard;
