
import { Badge } from '@/components/ui/badge';
import ChapterCard from './ChapterCard';

interface SubjectSectionProps {
  title: string;
  subjects: Array<{
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    chapters: string[];
  }>;
  badgeColor: string;
  onSelectQuiz: (quiz: any) => void;
  grade: number;
}

const SubjectSection = ({ title, subjects, badgeColor, onSelectQuiz, grade }: SubjectSectionProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <h5 className="text-lg font-semibold text-white">{title}</h5>
        <Badge variant="secondary" className={`ml-3 ${badgeColor}`}>
          {subjects.length} subjects
        </Badge>
      </div>
      
      {subjects.map((subject, subjectIndex) => (
        <div key={subjectIndex} className="mb-6">
          <div className="flex items-center mb-3">
            <div className="p-2 rounded-lg bg-blue-500 mr-3">
              <subject.icon className="h-5 w-5 text-white" />
            </div>
            <h6 className="text-md font-medium text-white">{subject.name}</h6>
            <Badge variant="secondary" className="ml-2 bg-white/20 text-white">
              {subject.chapters.length} chapters
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pl-12">
            {subject.chapters.map((chapter, chapterIndex) => (
              <ChapterCard
                key={chapterIndex}
                chapter={chapter}
                subject={subject.name}
                subjectIcon={subject.icon}
                onSelectQuiz={onSelectQuiz}
                grade={grade}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectSection;
