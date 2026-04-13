import { useEffect, useState, useCallback } from "react";
import StarField from '@/components/StarField';
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Copy, Play, Trophy, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  getSession, 
  getSessionParticipants, 
  startSession, 
  endSession, 
  nextQuestion, 
  submitAnswer 
} from "@/lib/sessionUtils";
import { getQuestionsForQuiz } from "@/lib/quizUtils";
import LiveQuizSession from "@/components/session/LiveQuizSession";
import SessionLeaderboard from "@/components/session/SessionLeaderboard";
import { useLanguage } from "@/i18n/LanguageContext";

type SessionStatus = 'waiting' | 'in_progress' | 'completed';

interface Session {
  id: string;
  session_code: string;
  host_name: string;
  status: SessionStatus;
  grade: string;
  subject: string;
  chapter_id: string;
  difficulty: string;
  current_question_index: number;
}

interface Participant {
  id: string;
  player_name: string;
  score: number;
  is_host: boolean;
}

interface NormalizedQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

const SessionPage = () => {
  const { sessionCode } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const [session, setSession] = useState<Session | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isHost, setIsHost] = useState(false);
  const [participantId, setParticipantId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<NormalizedQuestion[]>([]);
  const [hasAnswered, setHasAnswered] = useState(false);

  const refreshData = useCallback(() => {
    if (!sessionCode) return;
    
    const currentSession = getSession(sessionCode);
    if (currentSession) {
      setSession(currentSession);
      setParticipants(getSessionParticipants(currentSession.id));
    }
  }, [sessionCode]);

  useEffect(() => {
    const storedParticipantId = sessionStorage.getItem('participantId');
    const storedIsHost = sessionStorage.getItem('isHost') === 'true';
    setParticipantId(storedParticipantId);
    setIsHost(storedIsHost);

    refreshData();
    const interval = setInterval(refreshData, 1000);
    return () => clearInterval(interval);
  }, [sessionCode, refreshData]);

  useEffect(() => {
    if (session?.status === 'in_progress' && questions.length === 0) {
      loadQuestions();
    }
  }, [session?.status]);

  useEffect(() => {
    setHasAnswered(false);
  }, [session?.current_question_index]);

  const loadQuestions = () => {
    if (!session) return;
    const quizQuestions = getQuestionsForQuiz(
      parseInt(session.grade),
      session.subject,
      session.chapter_id,
      session.difficulty
    );
    setQuestions(quizQuestions.slice(0, 10));
  };

  const handleStartSession = async () => {
    if (!session) return;
    await startSession(session.id);
    refreshData();
  };

  const handleNextQuestion = async () => {
    if (!session) return;
    await nextQuestion(session.id, session.current_question_index);
    refreshData();
  };

  const handleEndSession = async () => {
    if (!session) return;
    await endSession(session.id);
    refreshData();
  };

  const handleAnswerSubmit = async (selectedAnswer: string, isCorrect: boolean) => {
    if (!session || !participantId || hasAnswered) return;
    setHasAnswered(true);
    await submitAnswer(session.id, participantId, session.current_question_index, selectedAnswer, isCorrect);
    refreshData();
  };

  const copyCode = () => {
    navigator.clipboard.writeText(sessionCode || '');
    toast({ title: t('common.codeCopied') });
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 flex items-center justify-center overflow-hidden relative">
        <StarField starCount={30} shootingCount={2} />
        <div className="text-white text-xl">{t('common.loading')}</div>
      </div>
    );
  }

  if (session.status === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
        <StarField starCount={30} shootingCount={2} />
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="text-center">
              <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-3xl text-white">{t('results.complete')}</CardTitle>
            </CardHeader>
            <CardContent>
              <SessionLeaderboard participants={participants} />
              <Button
                onClick={() => navigate('/grades')}
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500"
              >
                {t('common.backToHome')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (session.status === 'in_progress' && questions.length > 0) {
    const currentQuestion = questions[session.current_question_index];
    const isLastQuestion = session.current_question_index >= questions.length - 1;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
        <StarField starCount={30} shootingCount={2} />
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="text-white">
              {t('quiz.question')} {session.current_question_index + 1} / {questions.length}
            </div>
            <div className="text-white flex items-center gap-2">
              <Users className="h-4 w-4" />
              {participants.length} {t('common.players')}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              {currentQuestion && (
                <LiveQuizSession
                  question={currentQuestion}
                  onAnswer={handleAnswerSubmit}
                  hasAnswered={hasAnswered}
                />
              )}
              
              {isHost && (
                <div className="mt-4 flex gap-2">
                  {!isLastQuestion ? (
                    <Button onClick={handleNextQuestion} className="flex-1 bg-blue-500 hover:bg-blue-600">
                      {t('session.nextQuestion')}
                    </Button>
                  ) : (
                    <Button onClick={handleEndSession} className="flex-1 bg-green-500 hover:bg-green-600">
                      {t('session.endQuiz')}
                    </Button>
                  )}
                </div>
              )}
            </div>

            <div>
              <SessionLeaderboard participants={participants} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
      <StarField starCount={30} shootingCount={2} />
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/grades")}
          className="text-white hover:bg-white/10 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('common.leaveSession')}
        </Button>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-4">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-white">{t('session.sessionCode')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              onClick={copyCode}
              className="bg-white/20 rounded-lg p-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-white/30 transition-colors"
            >
              <span className="text-4xl font-mono font-bold text-white tracking-widest">
                {session.session_code}
              </span>
              <Copy className="h-5 w-5 text-white/70" />
            </div>
            <p className="text-center text-white/60 text-sm mt-2">{t('common.clickToCopy')}</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-4">
          <CardHeader>
            <CardTitle className="text-lg text-white flex items-center gap-2">
              <Users className="h-5 w-5" />
              {t('common.players')} ({participants.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {participants.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-white/10 rounded-lg p-3"
                >
                  <span className="text-white">{p.player_name}</span>
                  {p.is_host && (
                    <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">{t('common.host')}</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-4">
          <CardContent className="pt-4">
            <div className="text-white/80 text-sm space-y-1">
              <p>{t('common.grade')}: {session.grade}</p>
              <p>{t('common.subject')}: {session.subject}</p>
              <p>{t('common.difficulty')}: {session.difficulty}</p>
            </div>
          </CardContent>
        </Card>

        {isHost ? (
          <Button
            onClick={handleStartSession}
            disabled={participants.length < 1}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3"
          >
            <Play className="mr-2 h-5 w-5" />
            {t('session.startQuiz')}
          </Button>
        ) : (
          <div className="text-center text-white/60">
            {t('session.waitingForHost')}
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionPage;
