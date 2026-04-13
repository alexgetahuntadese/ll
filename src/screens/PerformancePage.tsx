
import { useState, useEffect } from 'react';
import StarField from '@/components/StarField';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Trophy, BookOpen, Target } from 'lucide-react';
import { 
  getPerformanceData, 
  getOverallAverageScore, 
  getTotalQuizCount,
  PerformanceData 
} from '@/lib/performanceUtils';
import PerformanceChart from '@/components/performance/PerformanceChart';
import SkillAnalysis from '@/components/performance/SkillAnalysis';
import CareerSuggestions from '@/components/performance/CareerSuggestions';
import PerformanceHistory from '@/components/performance/PerformanceHistory';
import ProgressOverTime from '@/components/performance/ProgressOverTime';
import { useLanguage } from '@/i18n/LanguageContext';
import TopBar from "@/components/TopBar";
import { useAuth } from '@/hooks/useAuth';
import { getProfileDisplayName, getProfileKey } from '@/lib/profileUtils';

const PerformancePage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { user, profile } = useAuth();
  const [data, setData] = useState<PerformanceData | null>(null);
  const [averageScore, setAverageScore] = useState(0);
  const [totalQuizzes, setTotalQuizzes] = useState(0);
  const profileKey = getProfileKey(profile, user);
  const displayName = getProfileDisplayName(profile, user);

  useEffect(() => {
    const performanceData = getPerformanceData(profileKey);
    setData(performanceData);
    setAverageScore(getOverallAverageScore(profileKey));
    setTotalQuizzes(getTotalQuizCount(profileKey));
  }, [profileKey]);

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 flex items-center justify-center">
        <div className="text-white">{t('common.loading')}</div>
      </div>
    );
  }

  const getScoreGrade = (score: number) => {
    if (score >= 90) return { grade: 'A+', color: 'text-green-400' };
    if (score >= 80) return { grade: 'A', color: 'text-green-400' };
    if (score >= 70) return { grade: 'B', color: 'text-blue-400' };
    if (score >= 60) return { grade: 'C', color: 'text-yellow-400' };
    if (score >= 50) return { grade: 'D', color: 'text-orange-400' };
    return { grade: 'F', color: 'text-red-400' };
  };

  const scoreGrade = getScoreGrade(averageScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={2} />
      <TopBar />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">{t('performance.dashboard')}</h1>
              <p className="text-white/50">
                {displayName}{t('performance.learningJourney')}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate('/profile')}
            className="border-white/[0.08] text-white hover:bg-white/10"
          >
            <User className="mr-2 h-4 w-4" />
            {t('performance.editProfile')}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className={`text-3xl font-bold ${scoreGrade.color}`}>
                {averageScore > 0 ? scoreGrade.grade : '-'}
              </div>
              <p className="text-sm text-white/50">{t('performance.overallGrade')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-violet-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{averageScore}%</div>
              <p className="text-sm text-white/50">{t('performance.averageScore')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{totalQuizzes}</div>
              <p className="text-sm text-white/50">{t('performance.quizzesTaken')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/[0.04] border-white/[0.08]">
            <CardContent className="p-4 text-center">
              <div className="h-8 w-8 text-2xl mx-auto mb-2">📚</div>
              <div className="text-3xl font-bold text-white">
                {Object.keys(data.analysis.subject_scores).length}
              </div>
              <p className="text-sm text-white/50">{t('performance.subjectsStudied')}</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <PerformanceChart subjectScores={data.analysis.subject_scores} />
          <ProgressOverTime attempts={data.attempts} />
          <SkillAnalysis analysis={data.analysis} />
          <CareerSuggestions subjectScores={data.analysis.subject_scores} />
          <PerformanceHistory attempts={data.attempts} />
        </div>

        {totalQuizzes === 0 && (
          <Card className="mt-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 border-0">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{t('performance.startJourney')}</h3>
              <p className="text-white/70 mb-4">
                {t('performance.takeQuizzes')}
              </p>
              <Button 
                onClick={() => navigate('/grades')}
                className="bg-white text-violet-600 hover:bg-white/90"
              >
                {t('index.browseQuizzes')}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PerformancePage;
