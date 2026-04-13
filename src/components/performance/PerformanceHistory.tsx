
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QuizAttempt } from '@/lib/performanceUtils';
import { Clock, BookOpen, Trophy } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '@/i18n/LanguageContext';

interface PerformanceHistoryProps {
  attempts: QuizAttempt[];
}

const PerformanceHistory = ({ attempts }: PerformanceHistoryProps) => {
  const [filter, setFilter] = useState<string>('all');
  const { t } = useLanguage();
  
  const subjects = [...new Set(attempts.map(a => a.subject))];
  
  const filteredAttempts = filter === 'all' 
    ? attempts 
    : attempts.filter(a => a.subject === filter);

  const sortedAttempts = [...filteredAttempts].sort(
    (a, b) => new Date(b.attempted_at).getTime() - new Date(a.attempted_at).getTime()
  );

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (attempts.length === 0) {
    return (
      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-xl">{t('history.quizHistory')}</CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <BookOpen className="h-12 w-12 text-gray-500 mx-auto mb-3" />
          <p className="text-gray-400">{t('history.noAttempts')}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/5 border-white/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white text-xl">{t('history.quizHistory')}</CardTitle>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
            <SelectValue placeholder={t('history.filterBySubject')} />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            <SelectItem value="all" className="text-white hover:bg-gray-700">{t('history.allSubjects')}</SelectItem>
            {subjects.map(subject => (
              <SelectItem key={subject} value={subject} className="text-white hover:bg-gray-700">{subject}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {sortedAttempts.map(attempt => (
            <div 
              key={attempt.attempt_id}
              className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-white font-medium">{attempt.subject}</h4>
                  <p className="text-sm text-gray-400">
                    {t('common.grade')} {attempt.grade} • {attempt.chapter}
                  </p>
                </div>
                <Badge className={`${getScoreColor(attempt.score)} text-white`}>
                  {attempt.score}%
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" />
                  {attempt.correct_answers}/{attempt.total_questions}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {attempt.time_spent}
                </span>
                <Badge variant="outline" className="border-white/20 text-gray-300 capitalize">
                  {attempt.difficulty}
                </Badge>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {format(new Date(attempt.attempted_at), 'MMM d, yyyy h:mm a')}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceHistory;
