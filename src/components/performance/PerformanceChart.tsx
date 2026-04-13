
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/i18n/LanguageContext';

interface PerformanceChartProps {
  subjectScores: { [subject: string]: number };
}

const COLORS = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];

const PerformanceChart = ({ subjectScores }: PerformanceChartProps) => {
  const { t } = useLanguage();
  const subjects = Object.keys(subjectScores);
  
  if (subjects.length === 0) {
    return (
      <Card className="bg-white/5 border-white/20">
        <CardContent className="p-6 text-center text-gray-400">
          <p>{t('performance.noQuizData')}</p>
        </CardContent>
      </Card>
    );
  }

  const radarData = subjects.map(subject => ({
    subject: subject.length > 10 ? subject.slice(0, 10) + '...' : subject,
    fullSubject: subject, score: subjectScores[subject], fullMark: 100,
  }));

  const barData = subjects.map((subject, index) => ({
    subject: subject.length > 8 ? subject.slice(0, 8) + '...' : subject,
    fullSubject: subject, score: subjectScores[subject], color: COLORS[index % COLORS.length],
  }));

  return (
    <Card className="bg-white/5 border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-xl">{t('performance.subjectPerformance')}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="radar" className="w-full">
          <TabsList className="bg-white/10 border-white/20 mb-4">
            <TabsTrigger value="radar" className="data-[state=active]:bg-purple-600 text-white">
              {t('performance.radarView')}
            </TabsTrigger>
            <TabsTrigger value="bar" className="data-[state=active]:bg-purple-600 text-white">
              {t('performance.barChart')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="radar">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#9ca3af' }} />
                  <Radar name="Score" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.5} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                    formatter={(value: number, name: string, props: any) => [`${value}%`, props.payload.fullSubject]}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="bar">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: '#9ca3af' }} />
                  <YAxis type="category" dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} width={80} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                    formatter={(value: number, name: string, props: any) => [`${value}%`, props.payload.fullSubject]}
                  />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
