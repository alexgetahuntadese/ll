
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, Star, AlertTriangle } from 'lucide-react';
import { SkillAnalysis as SkillAnalysisType } from '@/lib/performanceUtils';
import { getSkillLevel } from '@/lib/careerData';
import { useLanguage } from '@/i18n/LanguageContext';

interface SkillAnalysisProps {
  analysis: SkillAnalysisType;
}

const SkillAnalysisComponent = ({ analysis }: SkillAnalysisProps) => {
  const { t } = useLanguage();
  const { difficulty_performance, improvement_trend, strengths, weaknesses } = analysis;

  const getTrendIcon = () => {
    if (improvement_trend > 5) return <TrendingUp className="h-5 w-5 text-green-500" />;
    if (improvement_trend < -5) return <TrendingDown className="h-5 w-5 text-red-500" />;
    return <Minus className="h-5 w-5 text-gray-400" />;
  };

  const getTrendMessage = () => {
    if (improvement_trend > 10) return t('performance.excellentProgress');
    if (improvement_trend > 5) return t('performance.goodImprovement');
    if (improvement_trend > 0) return t('performance.slightImprovement');
    if (improvement_trend === 0) return t('performance.stablePerformance');
    if (improvement_trend > -5) return t('performance.slightDecline');
    return t('performance.needsAttention');
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-lg">{t('performance.difficultyBreakdown')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-green-400">{t('performance.easy')}</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${difficulty_performance.easy}%` }} />
                </div>
                <span className="text-white w-12 text-right">{difficulty_performance.easy}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-yellow-400">{t('performance.medium')}</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full transition-all" style={{ width: `${difficulty_performance.medium}%` }} />
                </div>
                <span className="text-white w-12 text-right">{difficulty_performance.medium}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-red-400">{t('performance.hard')}</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full transition-all" style={{ width: `${difficulty_performance.hard}%` }} />
                </div>
                <span className="text-white w-12 text-right">{difficulty_performance.hard}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-lg">{t('performance.progressTrend')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/10 rounded-lg">{getTrendIcon()}</div>
            <div>
              <div className="text-2xl font-bold text-white">
                {improvement_trend > 0 ? '+' : ''}{improvement_trend}%
              </div>
              <div className="text-sm text-gray-400">{getTrendMessage()}</div>
            </div>
          </div>
          <p className="text-sm text-gray-400">{t('performance.basedOnComparison')}</p>
        </CardContent>
      </Card>

      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            {t('performance.strengths')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {strengths.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {strengths.map(subject => (
                <Badge key={subject} className="bg-green-500/20 text-green-400 border-green-500/30">{subject}</Badge>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">{t('performance.strengthsHint')}</p>
          )}
        </CardContent>
      </Card>

      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            {t('performance.areasForImprovement')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {weaknesses.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {weaknesses.map(subject => (
                <Badge key={subject} className="bg-orange-500/20 text-orange-400 border-orange-500/30">{subject}</Badge>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">{t('performance.noAreasNeeded')}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillAnalysisComponent;
