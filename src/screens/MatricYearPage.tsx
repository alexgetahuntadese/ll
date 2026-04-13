import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  BookOpen,
  AlertCircle,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Languages,
  Landmark,
  Globe2,
  GraduationCap,
  ScrollText,
  Banknote,
  Lock,
  Clock,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import StarField from '@/components/StarField';
import { useAuth } from "@/hooks/useAuth";
import { isFreeMatricSubject } from '@/lib/paymentAccess';
import { getMatricSubjectsForYear } from '@/data/matricExams';
import { paymentService } from '@/lib/back4app/payments';

const subjectIcons: Record<string, LucideIcon> = {
  Mathematics: Calculator,
  Physics: Atom,
  Chemistry: FlaskConical,
  Biology: Dna,
  English: Languages,
  Civics: Landmark,
  History: ScrollText,
  Geography: Globe2,
  Economics: Banknote,
  "Scholastic Aptitude Test": GraduationCap,
};

const subjectColors: Record<string, string> = {
  Mathematics: 'from-cyan-500 to-blue-600',
  Physics: 'from-purple-500 to-indigo-600',
  Chemistry: 'from-green-500 to-emerald-600',
  Biology: 'from-emerald-500 to-teal-600',
  English: 'from-pink-500 to-rose-600',
  Civics: 'from-amber-500 to-orange-600',
  History: 'from-orange-500 to-red-600',
  Geography: 'from-blue-500 to-cyan-600',
  Economics: 'from-yellow-500 to-amber-600',
  "Scholastic Aptitude Test": 'from-violet-500 to-purple-600',
};

const MatricYearPage = () => {
  const { year, stream } = useParams<{ year: string; stream: string }>();
  const navigate = useNavigate();
  const { hasPremiumAccess: premiumAccess, user, profile } = useAuth();
  const [backendPremiumAccess, setBackendPremiumAccess] = useState(false);
  const yearNum = Number(year);
  const streamKey = stream ?? 'natural';
  const streamLabel = streamKey === 'social' ? 'Social Science' : 'Natural Science';
  const subjects = getMatricSubjectsForYear(yearNum, streamKey);

  const effectivePremiumAccess = premiumAccess || backendPremiumAccess;

  useEffect(() => {
    const userId = user?.id || profile?.id || "";
    if (premiumAccess || !userId) {
      return;
    }

    let active = true;
    const checkBackendPremium = async () => {
      try {
        const receipts = await paymentService.getBackend4AppReceipts(userId);
        if (!active) {
          return;
        }

        const hasApprovedReceipt = receipts.some((item) => item.status === "approved" || item.status === "verified");
        setBackendPremiumAccess(hasApprovedReceipt);
      } catch (error) {
        console.error("Failed to verify Back4App premium access:", error);
      }
    };

    void checkBackendPremium();

    return () => {
      active = false;
    };
  }, [backendPremiumAccess, premiumAccess, profile?.id, user?.id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={2} />
      <TopBar />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(`/matric/${yearNum}`)}
            className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{yearNum} E.C. {streamLabel}</h1>
            </div>
            <p className="text-white/50 text-sm">Select a subject to start practicing with real exam questions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {subjects.map((subj, index) => {
            const hasQuestions = subj.questionCount > 0;
            const locked = hasQuestions && !effectivePremiumAccess && !isFreeMatricSubject(index);
            const SubjectIcon = subjectIcons[subj.subject] ?? BookOpen;
            const colorClass = subjectColors[subj.subject] ?? 'from-gray-500 to-gray-600';
            const isAvailable = hasQuestions && !locked;

            return (
              <div
                key={subj.subject}
                className="group relative"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {hasQuestions && !locked && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <Badge className="bg-emerald-500/90 text-white border-0 shadow-lg text-xs">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      {isFreeMatricSubject(index) ? "Free" : "Paid"}
                    </Badge>
                  </div>
                )}
                {locked && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <Badge className="bg-amber-500/90 text-white border-0 shadow-lg text-xs">
                      <Lock className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                )}
                <div className={`absolute -inset-1 bg-gradient-to-r ${colorClass} rounded-2xl opacity-0 ${isAvailable ? 'group-hover:opacity-20' : ''} blur-xl transition-all duration-500`} />
                <Card
                  className={`relative bg-white/[0.04] backdrop-blur-xl border-white/[0.08] transition-all duration-300 ${
                    isAvailable
                      ? 'hover:bg-white/[0.08] hover:border-white/[0.15] cursor-pointer group'
                      : 'opacity-60 cursor-not-allowed'
                  } h-full`}
                  onClick={() => {
                    if (!isAvailable) {
                      return;
                    }

                    if (locked) {
                      navigate("/payment");
                      return;
                    }

                    navigate(`/matric/${yearNum}/${streamKey}/${subj.subject}`);
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg ${isAvailable ? 'group-hover:scale-110 group-hover:rotate-3' : ''} transition-all duration-300`}>
                        <SubjectIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-white text-lg truncate">{subj.subject}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs border-white/20 text-white/60">
                            {streamLabel}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <div className="flex items-center justify-center gap-1 text-white/50 text-xs mb-1">
                            <BookOpen className="h-3 w-3" />
                            <span>Questions</span>
                          </div>
                          <div className="text-white text-base font-bold">{subj.questionCount}</div>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <div className="flex items-center justify-center gap-1 text-white/50 text-xs mb-1">
                            <Clock className="h-3 w-3" />
                            <span>Time</span>
                          </div>
                          <div className="text-white text-base font-bold">2h</div>
                        </div>
                      </div>
                      
                      {isAvailable ? (
                        <Button
                          size="sm"
                          className={`w-full bg-gradient-to-r ${colorClass} hover:opacity-90 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (locked) {
                              navigate("/payment");
                              return;
                            }
                            navigate(`/matric/${yearNum}/${streamKey}/${subj.subject}`);
                          }}
                        >
                          {isFreeMatricSubject(index) ? "Start Free Exam" : "Start Exam"}
                        </Button>
                      ) : locked ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-white/20 text-white hover:bg-white/10"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/payment");
                          }}
                        >
                          <Lock className="mr-2 h-4 w-4" />
                          Unlock Subject
                        </Button>
                      ) : (
                        <div className="flex items-center justify-center gap-1.5 text-white/30 text-xs p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>Coming soon</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>{subjects.filter(s => s.questionCount > 0).length} of {subjects.length} subjects available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatricYearPage;
