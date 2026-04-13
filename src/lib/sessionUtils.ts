// In-memory session management (localStorage-based for demo)
// This works without database tables

interface Session {
  id: string;
  session_code: string;
  host_name: string;
  status: 'waiting' | 'in_progress' | 'completed';
  grade: string;
  subject: string;
  chapter_id: string;
  difficulty: string;
  current_question_index: number;
  created_at: string;
}

interface Participant {
  id: string;
  session_id: string;
  player_name: string;
  score: number;
  is_host: boolean;
  joined_at: string;
}

interface SessionAnswer {
  id: string;
  session_id: string;
  participant_id: string;
  question_index: number;
  selected_answer: string;
  is_correct: boolean;
  answered_at: string;
}

const SESSIONS_KEY = 'quiz_sessions';
const PARTICIPANTS_KEY = 'session_participants';
const ANSWERS_KEY = 'session_answers';

const generateId = () => {
  if (
    typeof globalThis !== "undefined" &&
    typeof globalThis.crypto?.randomUUID === "function"
  ) {
    return globalThis.crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}-${Math.random().toString(16).slice(2)}`;
};

export const generateSessionCode = (): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

const getSessions = (): Session[] => {
  const data = localStorage.getItem(SESSIONS_KEY);
  return data ? JSON.parse(data) : [];
};

const saveSessions = (sessions: Session[]) => {
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
};

const getParticipants = (): Participant[] => {
  const data = localStorage.getItem(PARTICIPANTS_KEY);
  return data ? JSON.parse(data) : [];
};

const saveParticipants = (participants: Participant[]) => {
  localStorage.setItem(PARTICIPANTS_KEY, JSON.stringify(participants));
};

const getAnswers = (): SessionAnswer[] => {
  const data = localStorage.getItem(ANSWERS_KEY);
  return data ? JSON.parse(data) : [];
};

const saveAnswers = (answers: SessionAnswer[]) => {
  localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
};

export const createSession = async (
  hostName: string,
  grade: string,
  subject: string,
  chapterId: string,
  difficulty: string
) => {
  const sessionCode = generateSessionCode();
  const sessionId = generateId();
  
  const session: Session = {
    id: sessionId,
    session_code: sessionCode,
    host_name: hostName,
    status: 'waiting',
    grade,
    subject,
    chapter_id: chapterId,
    difficulty,
    current_question_index: 0,
    created_at: new Date().toISOString()
  };

  const sessions = getSessions();
  sessions.push(session);
  saveSessions(sessions);

  const participant: Participant = {
    id: generateId(),
    session_id: sessionId,
    player_name: hostName,
    score: 0,
    is_host: true,
    joined_at: new Date().toISOString()
  };

  const participants = getParticipants();
  participants.push(participant);
  saveParticipants(participants);

  return { session, participant };
};

export const joinSession = async (sessionCode: string, playerName: string) => {
  const sessions = getSessions();
  const session = sessions.find(
    s => s.session_code === sessionCode.toUpperCase() && s.status === 'waiting'
  );

  if (!session) throw new Error('Session not found or already started');

  const participant: Participant = {
    id: generateId(),
    session_id: session.id,
    player_name: playerName,
    score: 0,
    is_host: false,
    joined_at: new Date().toISOString()
  };

  const participants = getParticipants();
  participants.push(participant);
  saveParticipants(participants);

  return { session, participant };
};

export const getSession = (sessionCode: string): Session | null => {
  const sessions = getSessions();
  return sessions.find(s => s.session_code === sessionCode) || null;
};

export const getSessionParticipants = (sessionId: string): Participant[] => {
  const participants = getParticipants();
  return participants
    .filter(p => p.session_id === sessionId)
    .sort((a, b) => b.score - a.score);
};

export const startSession = async (sessionId: string) => {
  const sessions = getSessions();
  const index = sessions.findIndex(s => s.id === sessionId);
  if (index !== -1) {
    sessions[index].status = 'in_progress';
    sessions[index].current_question_index = 0;
    saveSessions(sessions);
  }
};

export const nextQuestion = async (sessionId: string, currentIndex: number) => {
  const sessions = getSessions();
  const index = sessions.findIndex(s => s.id === sessionId);
  if (index !== -1) {
    sessions[index].current_question_index = currentIndex + 1;
    saveSessions(sessions);
  }
};

export const endSession = async (sessionId: string) => {
  const sessions = getSessions();
  const index = sessions.findIndex(s => s.id === sessionId);
  if (index !== -1) {
    sessions[index].status = 'completed';
    saveSessions(sessions);
  }
};

export const submitAnswer = async (
  sessionId: string,
  participantId: string,
  questionIndex: number,
  selectedAnswer: string,
  isCorrect: boolean
) => {
  const answer: SessionAnswer = {
    id: generateId(),
    session_id: sessionId,
    participant_id: participantId,
    question_index: questionIndex,
    selected_answer: selectedAnswer,
    is_correct: isCorrect,
    answered_at: new Date().toISOString()
  };

  const answers = getAnswers();
  answers.push(answer);
  saveAnswers(answers);

  if (isCorrect) {
    const participants = getParticipants();
    const pIndex = participants.findIndex(p => p.id === participantId);
    if (pIndex !== -1) {
      participants[pIndex].score += 10;
      saveParticipants(participants);
    }
  }
};
