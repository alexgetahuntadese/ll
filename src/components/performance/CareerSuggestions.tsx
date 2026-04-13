
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CareerMatch, getTopCareerRecommendations } from '@/lib/careerData';
import { CheckCircle, XCircle, Briefcase } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface CareerSuggestionsProps {
  subjectScores: { [subject: string]: number };
}

const CareerSuggestions = ({ subjectScores }: CareerSuggestionsProps) => {
  const { t } = useLanguage();
  const matches = getTopCareerRecommendations(subjectScores, 5);
  
  if (Object.keys(subjectScores).length === 0) {
    return (
      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            {t('career.careerRecommendations')}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <p className="text-gray-400">{t('career.completeQuizzes')}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/5 border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-xl flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          {t('career.careerRecommendations')}
        </CardTitle>
        <p className="text-gray-400 text-sm">{t('career.basedOnPerformance')}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {matches.map((match, index) => (
          <CareerCard key={match.track.id} match={match} rank={index + 1} />
        ))}
      </CardContent>
    </Card>
  );
};

const CareerCard = ({ match, rank }: { match: CareerMatch; rank: number }) => {
  const { t } = useLanguage();
  const { track, matchScore, matchedSubjects, missingSubjects } = match;
  
  return (
    <div className={`p-4 rounded-lg bg-gradient-to-r ${track.color} bg-opacity-10 border border-white/10`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{track.icon}</span>
          <div>
            <h3 className="text-white font-semibold text-lg">{track.name}</h3>
            <p className="text-gray-300 text-sm">{track.description.slice(0, 80)}...</p>
          </div>
        </div>
        <Badge className={`${matchScore >= 70 ? 'bg-green-500' : matchScore >= 50 ? 'bg-yellow-500' : 'bg-orange-500'} text-white`}>
          #{rank}
        </Badge>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-300">{t('career.matchScore')}</span>
          <span className="text-white font-medium">{matchScore}%</span>
        </div>
        <Progress value={matchScore} className="h-2 bg-white/10" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <p className="text-xs text-gray-400 mb-1">{t('career.strongSubjects')}</p>
          <div className="flex flex-wrap gap-1">
            {matchedSubjects.length > 0 ? matchedSubjects.map(subject => (
              <span key={subject} className="inline-flex items-center gap-1 text-xs text-green-400">
                <CheckCircle className="h-3 w-3" />{subject}
              </span>
            )) : (
              <span className="text-xs text-gray-500">{t('career.noneYet')}</span>
            )}
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">{t('career.needPractice')}</p>
          <div className="flex flex-wrap gap-1">
            {missingSubjects.length > 0 ? missingSubjects.map(subject => (
              <span key={subject} className="inline-flex items-center gap-1 text-xs text-orange-400">
                <XCircle className="h-3 w-3" />{subject}
              </span>
            )) : (
              <span className="text-xs text-green-400">{t('career.allCovered')}</span>
            )}
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-1">{t('career.sampleCareers')}</p>
        <div className="flex flex-wrap gap-1">
          {track.careers.slice(0, 4).map(career => (
            <Badge key={career} variant="outline" className="text-xs border-white/20 text-gray-300">{career}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerSuggestions;
