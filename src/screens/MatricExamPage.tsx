import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, BookOpen, Clock, TrendingUp, Award, Sparkles } from 'lucide-react';
import TopBar from '@/components/TopBar';
import StarField from '@/components/StarField';
import { getMatricStreamsForYear, getMatricYears } from '@/data/matricExams';

const MatricExamPage = () => {
  const navigate = useNavigate();
  const yearSummaries = getMatricYears().map((year) => {
    const streams = getMatricStreamsForYear(year);
    const totalQuestions = streams.reduce(
      (sum, stream) => sum + stream.subjects.reduce((streamSum, subject) => streamSum + subject.questionCount, 0),
      0,
    );

    return { year, streamsCount: streams.length, totalQuestions };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={2} />
      <TopBar />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">National Matric Exams</h1>
            </div>
            <p className="text-white/50 text-sm">Practice with authentic past exam questions by year</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yearSummaries.map(({ year, streamsCount, totalQuestions }, index) => {
            const isLatest = index === 0;

            return (
              <div
                key={year}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isLatest && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 shadow-lg">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Latest
                    </Badge>
                  </div>
                )}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <Card
                  className="relative bg-white/[0.04] backdrop-blur-xl border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-pointer group h-full"
                  onClick={() => navigate(`/matric/${year}`)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Calendar className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl mb-1">{year} E.C.</CardTitle>
                        <CardDescription className="text-white/40">National Exam</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-white/50">
                          <BookOpen className="h-4 w-4" />
                          <span>{streamsCount} streams</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/50">
                          <TrendingUp className="h-4 w-4" />
                          <span>{totalQuestions} questions</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-white/40 text-xs">
                        <Clock className="h-3 w-3" />
                        <span>2 hours per exam</span>
                      </div>

                      <Button
                        className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/matric/${year}`);
                        }}
                      >
                        Choose Stream
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
            <Award className="h-4 w-4" />
            <span>Official EUEE Past Papers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatricExamPage;
