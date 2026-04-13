
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QuizAttempt } from '@/lib/performanceUtils';
import { format } from 'date-fns';
import { TrendingUp } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProgressOverTimeProps {
  attempts: QuizAttempt[];
}

const ProgressOverTime = ({ attempts }: ProgressOverTimeProps) => {
  const { t } = useLanguage();

  if (attempts.length < 2) {
    return (
      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            {t('performance.progressOverTime')}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <p className="text-gray-400">{t('performance.completeAtLeast2')}</p>
        </CardContent>
      </Card>
    );
  }

  const sortedAttempts = [...attempts]
    .sort((a, b) => new Date(a.attempted_at).getTime() - new Date(b.attempted_at).getTime())
    .slice(-20);

  const chartData = sortedAttempts.map((attempt, index) => ({
    date: format(new Date(attempt.attempted_at), 'MMM d'),
    score: attempt.score, subject: attempt.subject, index: index + 1,
  }));

  const movingAverage = chartData.map((item, index) => {
    const start = Math.max(0, index - 2);
    const subset = chartData.slice(start, index + 1);
    const avg = subset.reduce((sum, i) => sum + i.score, 0) / subset.length;
    return { ...item, trend: Math.round(avg) };
  });

  return (
    <Card className="bg-white/5 border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-xl flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          {t('performance.progressOverTime')}
        </CardTitle>
        <p className="text-gray-400 text-sm">{t('performance.scoreProgression')}</p>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={movingAverage} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={{ stroke: '#374151' }} />
              <YAxis domain={[0, 100]} tick={{ fill: '#9ca3af' }} axisLine={{ stroke: '#374151' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value: number, name: string) => [`${value}%`, name === 'score' ? t('results.score') : t('performance.trendLine')]}
              />
              <Line type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6', r: 4 }} activeDot={{ r: 6, fill: '#a78bfa' }} />
              <Line type="monotone" dataKey="trend" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-gray-400">{t('performance.individualScores')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-green-500" style={{ width: '20px' }} />
            <span className="text-gray-400">{t('performance.trendLine')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressOverTime;
