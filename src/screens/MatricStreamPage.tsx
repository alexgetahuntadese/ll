import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, FlaskConical, Landmark, Users, Clock, TrendingUp, Sparkles } from 'lucide-react';
import TopBar from '@/components/TopBar';
import StarField from '@/components/StarField';
import { getMatricStreamsForYear } from '@/data/matricExams';

const streamIcons = {
  natural: FlaskConical,
  social: Landmark,
} as const;

const streamInfo = {
  natural: {
    description: 'Focus on sciences, mathematics, and technical subjects',
    color: 'from-cyan-500 to-blue-600',
    students: 'Science-oriented students'
  },
  social: {
    description: 'Focus on humanities, social sciences, and languages',
    color: 'from-amber-500 to-orange-600',
    students: 'Social science students'
  }
} as const;

const MatricStreamPage = () => {
  const { year } = useParams<{ year: string }>();
  const navigate = useNavigate();
  const yearNum = Number(year);
  const streams = getMatricStreamsForYear(yearNum);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={2} />
      <TopBar />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/matric')}
            className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{yearNum} E.C. National Exam</h1>
            </div>
            <p className="text-white/50 text-sm">Choose your academic stream to access specialized exam subjects</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {streams.map((stream, index) => {
            const StreamIcon = streamIcons[stream.key as keyof typeof streamIcons] ?? BookOpen;
            const totalQuestions = stream.subjects.reduce((sum, subject) => sum + subject.questionCount, 0);
            const info = streamInfo[stream.key as keyof typeof streamInfo];
            const isPopular = stream.key === 'natural';

            return (
              <div
                key={stream.key}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isPopular && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white border-0 shadow-lg">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                <div className={`absolute -inset-1 bg-gradient-to-r ${info.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                <Card
                  className="relative bg-white/[0.04] backdrop-blur-xl border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-pointer group h-full"
                  onClick={() => navigate(`/matric/${yearNum}/${stream.key}`)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <StreamIcon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl mb-1">{stream.label}</CardTitle>
                        <CardDescription className="text-white/40">{yearNum} E.C. exam stream</CardDescription>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{info.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <div className="flex items-center justify-center gap-1.5 text-white/50 text-sm mb-1">
                            <BookOpen className="h-4 w-4" />
                            <span>Subjects</span>
                          </div>
                          <div className="text-white text-lg font-bold">{stream.subjects.length}</div>
                        </div>
                        <div className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <div className="flex items-center justify-center gap-1.5 text-white/50 text-sm mb-1">
                            <TrendingUp className="h-4 w-4" />
                            <span>Questions</span>
                          </div>
                          <div className="text-white text-lg font-bold">{totalQuestions}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-white/40 text-xs">
                        <Users className="h-3 w-3" />
                        <span>{info.students}</span>
                      </div>

                      <Button
                        className={`w-full bg-gradient-to-r ${info.color} hover:opacity-90 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/matric/${yearNum}/${stream.key}`);
                        }}
                      >
                        View Subjects
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
            <Clock className="h-4 w-4" />
            <span>2 hour exam duration • Multiple choice format</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatricStreamPage;
