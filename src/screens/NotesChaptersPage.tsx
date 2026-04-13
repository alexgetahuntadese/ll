import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, Brain, ChevronDown, ChevronUp, GraduationCap, Lightbulb, NotebookPen, Sparkles, Target, Zap, Lock, CreditCard } from "lucide-react";
import TopBar from "@/components/TopBar";
import StarField from "@/components/StarField";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { getChapterNote, getNotesSubject } from "@/lib/notesData";
import { getGrade12MathNotesByChapter } from "@/data/grade12MathematicsNotes";
import { getGrade11MathNotesByChapter } from "@/data/grade11MathematicsNotes";
import { getGrade12QuickNotesBySubject } from "@/data/grade12QuickNotes";
import { isFreeChapter } from "@/lib/paymentAccess";

type NoteSection = {
  title: string;
  content: string;
  highlight?: boolean;
};

const amharicChapterDisplayMap: Record<string, string> = {
  "áˆá‹•áˆ«á áŠ áŠ•á‹µ: á‰‹áŠ•á‰‹áŠ“ áˆ›áˆ…á‰ áˆ¨áˆ°á‰¥": "ምዕራፍ አንድ: ቋንቋና ማህበረሰብ",
  "áˆá‹•áˆ«á áˆáˆˆá‰µ: á‰£áˆ…áˆ‹á‹Š áŒ‹á‰¥á‰»": "ምዕራፍ ሁለት: ባህላዊ ግብዓት",
  "áˆá‹•áˆ«á áˆ¶áˆµá‰µ: áˆ´á‰¶á‰½ áŠ¥áŠ“ áŠ¥á‹µáŒˆá‰µ": "ምዕራፍ ሶስት: ሴቶች እና እድገት",
  "áˆá‹•áˆ«á áŠ áˆ«á‰µ: á‰ áˆá‹©áŠá‰µ á‹áˆµáŒ¥ á‹«áˆˆ áŠ áŠ•á‹µáŠá‰µ": "ምዕራፍ አራት: በልዩነት ውስጥ ያለ አንድነት",
  "áˆá‹•áˆ«á áŠ áˆáˆµá‰µ: á‹¨á‰‹áŠ•á‰‹ áˆˆá‹›": "ምዕራፍ አምስት: የቋንቋ ለዛ",
  "áˆá‹•áˆ«á áˆµá‹µáˆµá‰µ: á‹¨á‰³áˆ‹áˆ‹á‰†á‰½ áˆšáŠ“": "ምዕራፍ ስድስት: የታላላቆች ሚና",
  "áˆá‹•áˆ«á áˆ°á‰£á‰µ: áˆ¨áŒ…áˆ áˆá‰¦áˆˆá‹µ": "ምዕራፍ ሰባት: ረጅም ልቦለድ",
  "áˆá‹•áˆ«á áˆµáˆáŠ•á‰µ: áˆ›áˆ…á‰ áˆ«á‹Š áˆ˜áŒˆáŠ“áŠ› á‰¥á‹™áŠ€áŠ•": "ምዕራፍ ስምንት: ማህበራዊ መገናኛ ብዙኃን",
  "áˆá‹•áˆ«á á‹˜áŒ áŠ: áˆ¥áˆ« áˆáŒ áˆ«": "ምዕራፍ ዘጠኝ: ሥራ ፈጠራ",
  "áˆá‹•áˆ«á áŠ áŠ•á‹µ: á‰‹áŠ•á‰‹áŠ“ áˆ…á‰¥áˆ¨á‰°áˆ°á‰¥ (Language and Society)": "ምዕራፍ አንድ: ቋንቋና ህብረተሰብ",
  "áˆá‹•áˆ«á áˆáˆˆá‰µ: á‰…áˆ­áˆ¶á‰»á‰½áŠ• (Our Heritage)": "ምዕራፍ ሁለት: ቅርሶቻችን",
  "áˆá‹•áˆ«á áˆ¦áˆµá‰µ: á‹ˆáŒ (Traditional Literature)": "ምዕራፍ ሶስት: ወግ",
  "áˆá‹•áˆ«á áŠ áˆ«á‰µ: áˆá‰¦áˆˆá‹µ (Novel)": "ምዕራፍ አራት: ልቦለድ",
  "áˆá‹•áˆ«á áŠ áˆáˆµá‰µ: á‹¨á‰‹áŠ•á‰‹ áˆµá‹› (Linguistic Relevance)": "ምዕራፍ አምስት: የቋንቋ ስነልሳን",
  "áˆá‹•áˆ«á áˆµá‹µáˆµá‰µ: áŒáŒ¥áˆ (Poetry)": "ምዕራፍ ስድስት: ግጥም",
  "áˆá‹•áˆ«á áˆ°á‰£á‰µ: áŠ áˆ­á‰ áŠáŠá‰µ (Patriotism)": "ምዕራፍ ሰባት: አርበኝነት",
  "áˆá‹•áˆ«á áˆµáˆáŠ•á‰µ: á‰µá‹áŠá‰µ (Tradition and Lifestyle)": "ምዕራፍ ስምንት: ትውፊት",
  "áˆá‹•áˆ«á á‹˜áŒ áŠ: áˆµáŠ¬á‰µ (Success)": "ምዕራፍ ዘጠኝ: ስኬት",
  "áˆá‹•áˆ«á áŠ áˆµáˆ­: áŠªáŠáŒ¥á‰ á‰¥ (Art)": "ምዕራፍ አስር: ኪነጥበብ",
};

const getChapterDisplayTitle = (subject: string, chapter: string) => {
  if (subject === "Amharic") {
    return amharicChapterDisplayMap[chapter] ?? chapter;
  }
  return chapter;
};

const parseNoteSections = (note: string): NoteSection[] => {
  const labels = [
    "Focus:",
    "Key point:",
    "Remember:",
    "Practice:",
    "Example based:",
    "Exam style:",
    "Subject deepening:",
    "Must memorize:",
    "Must practice:",
    "Past exam style:",
    "Step 1 –",
    "Step 2 –",
    "Step 3 –",
    "Step 4 –",
  ];

  const firstMatch = labels
    .map((label) => ({ label, index: note.indexOf(label) }))
    .filter((item) => item.index >= 0)
    .sort((a, b) => a.index - b.index)[0];

  if (!firstMatch) {
    return [{ title: "Chapter focus", content: note, highlight: true }];
  }

  const sections: NoteSection[] = [];
  const intro = note.slice(0, firstMatch.index).trim();
  if (intro) {
    sections.push({ title: "Chapter focus", content: intro, highlight: true });
  }

  const points = labels
    .map((label) => ({ label, index: note.indexOf(label) }))
    .filter((item) => item.index >= 0)
    .sort((a, b) => a.index - b.index);

  points.forEach((point, index) => {
    const end = index + 1 < points.length ? points[index + 1].index : note.length;
    const raw = note.slice(point.index, end).trim();
    const withoutLabel = raw.replace(point.label, "").trim();
    const normalizedTitle = point.label.replace(":", "");
    sections.push({
      title: normalizedTitle,
      content: withoutLabel,
    });
  });

  return sections;
};

const sectionTone = (title: string) => {
  const normalized = title.toLowerCase();
  if (normalized.includes("focus")) return "from-violet-500/20 to-fuchsia-500/20 border-violet-300/25";
  if (normalized.includes("key point") || normalized.includes("deepening")) return "from-sky-500/20 to-cyan-500/20 border-sky-300/25";
  if (normalized.includes("remember") || normalized.includes("memorize")) return "from-amber-500/20 to-orange-500/20 border-amber-300/25";
  if (normalized.includes("practice")) return "from-emerald-500/20 to-teal-500/20 border-emerald-300/25";
  if (normalized.includes("example")) return "from-indigo-500/20 to-blue-500/20 border-indigo-300/25";
  if (normalized.includes("exam")) return "from-rose-500/20 to-pink-500/20 border-rose-300/25";
  return "from-white/10 to-white/5 border-white/15";
};

const sectionIcon = (title: string) => {
  const normalized = title.toLowerCase();
  if (normalized.includes("focus")) return <Sparkles className="h-4 w-4 text-violet-200" />;
  if (normalized.includes("key point") || normalized.includes("deepening")) return <Brain className="h-4 w-4 text-sky-200" />;
  if (normalized.includes("remember") || normalized.includes("memorize")) return <NotebookPen className="h-4 w-4 text-amber-200" />;
  if (normalized.includes("practice")) return <Zap className="h-4 w-4 text-emerald-200" />;
  if (normalized.includes("example")) return <Lightbulb className="h-4 w-4 text-indigo-200" />;
  if (normalized.includes("exam")) return <Target className="h-4 w-4 text-rose-200" />;
  return <NotebookPen className="h-4 w-4 text-white/70" />;
};

const toBulletItems = (content: string) => {
  if (content.includes("•")) {
    return content
      .split("•")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  const lineBullets = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- ") || line.startsWith("* "))
    .map((line) => line.slice(2).trim())
    .filter(Boolean);

  return lineBullets;
};

const NotesChaptersPage = () => {
  const navigate = useNavigate();
  const { hasPremiumAccess: premiumAccess } = useAuth();
  const { grade, subject } = useParams();
  const gradeNumber = Number(grade);
  const decodedSubject = decodeURIComponent(subject || "");
  const subjectData = getNotesSubject(gradeNumber, decodedSubject);
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});
  const [quickMode, setQuickMode] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [topicFilter, setTopicFilter] = useState("");
  const [trapOnlyMode, setTrapOnlyMode] = useState(false);
  const [bookmarkedNoteIds, setBookmarkedNoteIds] = useState<string[]>([]);
  const [bookmarkedOnlyMode, setBookmarkedOnlyMode] = useState(false);
  const [dailyFiveMode, setDailyFiveMode] = useState(false);
  const [shuffleMode, setShuffleMode] = useState(false);

  const toggleExpanded = (chapter: string) => {
    setExpandedChapters((prev) => ({ ...prev, [chapter]: !prev[chapter] }));
  };

  const parseQuickQuestion = (value: string) => {
    const [left, right] = value.split("->").map((item) => item.trim());
    return {
      question: left || value,
      answer: right || "",
    };
  };

  const isMathQuickDeck = (gradeNumber === 12 || gradeNumber === 11) && decodedSubject === "Mathematics";
  const isGrade12QuickDeckSubject =
    gradeNumber === 12 &&
    ["Biology", "Physics", "Chemistry", "Mathematics"].includes(decodedSubject);

  useEffect(() => {
    if (!isGrade12QuickDeckSubject) return;
    try {
      const raw = localStorage.getItem("grade12QuickNoteBookmarks");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setBookmarkedNoteIds(parsed.filter((v) => typeof v === "string"));
      }
    } catch {
      // Ignore parse/storage errors gracefully.
    }
  }, [isGrade12QuickDeckSubject]);

  if (!subjectData) {
    return <Navigate to={`/notes/${gradeNumber}`} replace />;
  }

  const quickDeck = isGrade12QuickDeckSubject ? getGrade12QuickNotesBySubject(decodedSubject) : [];
  const filteredQuickDeck = quickDeck
    .filter((note) => note.topic.toLowerCase().includes(topicFilter.toLowerCase()))
    .filter((note) => (trapOnlyMode ? note.examTrap.trim().length > 0 : true))
    .filter((note) => (bookmarkedOnlyMode ? bookmarkedNoteIds.includes(note.id) : true));

  const shuffledDeck = shuffleMode
    ? [...filteredQuickDeck].sort((a, b) => a.id.localeCompare(b.id)).sort(() => Math.random() - 0.5)
    : filteredQuickDeck;
  const withDailyFive = dailyFiveMode ? shuffledDeck.slice(0, 5) : shuffledDeck;
  const attemptedCount = withDailyFive.filter((note) => showAllAnswers || revealedAnswers[note.id]).length;

  const toggleBookmark = (id: string) => {
    setBookmarkedNoteIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem("grade12QuickNoteBookmarks", JSON.stringify(next));
      } catch {
        // Ignore storage errors gracefully.
      }
      return next;
    });
  };

  const resetQuickSession = () => {
    setShowAllAnswers(false);
    setRevealedAnswers({});
    setTopicFilter("");
    setTrapOnlyMode(false);
    setBookmarkedOnlyMode(false);
    setDailyFiveMode(false);
    setShuffleMode(false);
  };

  const openChapterQuiz = (chapter: string) => {
    navigate(
      `/grade/${gradeNumber}/subject/${encodeURIComponent(decodedSubject)}/chapter/${encodeURIComponent(chapter)}/difficulty/easy/quiz`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-8 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={40} shootingCount={4} />
      <TopBar />

      <div className="max-w-5xl mx-auto relative z-10">
        <Button
          variant="ghost"
          className="text-white/70 hover:text-white hover:bg-white/5 mb-8 transition-colors"
          onClick={() => navigate(`/notes/${gradeNumber}`)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Subjects
        </Button>

        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-6">
            <GraduationCap className="h-4 w-4" />
            Grade {gradeNumber} • {decodedSubject}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Chapter Notes
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            {gradeNumber === 12
              ? "Grade 12 chapter notes are now expanded to match full unit coverage while staying separate from the quiz flow."
              : "Short revision notes only, organized on a dedicated page and kept separate from the quiz flow."}
          </p>
          {isMathQuickDeck && (
            <div className="mt-4">
              <Button
                variant="outline"
                className="text-white border-white/25 bg-white/5 hover:bg-white/10"
                onClick={() => setQuickMode((prev) => !prev)}
              >
                {quickMode ? "Normal Mode" : "Quick Mode"}
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-5">
          {premiumAccess && isGrade12QuickDeckSubject && quickDeck.length > 0 && (
            <div className="group relative opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl opacity-10 blur-xl" />
              <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 md:p-7">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-white/10 text-white border-0">Grade 12</Badge>
                  <Badge variant="outline" className="text-white/70 border-white/20">{decodedSubject}</Badge>
                  <Badge variant="outline" className="text-white/70 border-white/20">{filteredQuickDeck.length} fast notes</Badge>
                  <Badge variant="outline" className="text-white/70 border-white/20">
                    Bookmarks: {bookmarkedNoteIds.length}
                  </Badge>
                  <Badge variant="outline" className="text-white/70 border-white/20">
                    Progress: {attemptedCount}/{withDailyFive.length}
                  </Badge>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-white mb-4">Fast Revision Notes</h2>
                <div className="flex flex-col md:flex-row gap-3 mb-4">
                  <input
                    value={topicFilter}
                    onChange={(e) => setTopicFilter(e.target.value)}
                    placeholder="Filter topics (e.g. probability, derivative)"
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40"
                  />
                  <Button
                    variant="outline"
                    className="text-white border-white/30 bg-transparent hover:bg-white/10"
                    onClick={() => setTrapOnlyMode((prev) => !prev)}
                  >
                    {trapOnlyMode ? "Show All Notes" : "Trap-Only Mode"}
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white/30 bg-transparent hover:bg-white/10"
                    onClick={() => setBookmarkedOnlyMode((prev) => !prev)}
                  >
                    {bookmarkedOnlyMode ? "All Notes" : "Bookmarked Only"}
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white/30 bg-transparent hover:bg-white/10"
                    onClick={() => setDailyFiveMode((prev) => !prev)}
                  >
                    {dailyFiveMode ? "Full Deck" : "Daily 5 Notes"}
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white/30 bg-transparent hover:bg-white/10"
                    onClick={() => setShuffleMode((prev) => !prev)}
                  >
                    {shuffleMode ? "Ordered Deck" : "Shuffle Notes"}
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white/30 bg-transparent hover:bg-white/10"
                    onClick={() => setShowAllAnswers((prev) => !prev)}
                  >
                    {showAllAnswers ? "Hide All Answers" : "Reveal All Answers"}
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white/30 bg-transparent hover:bg-white/10"
                    onClick={resetQuickSession}
                  >
                    Reset Session
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {withDailyFive.map((note) => (
                    <div key={note.id} className="rounded-xl border border-white/15 bg-white/[0.04] p-4">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <p className="text-sm font-semibold text-white">📘 Topic: {note.topic}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-white/70 border-white/20">
                            {decodedSubject}
                          </Badge>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 px-2 text-white border-white/30 bg-transparent hover:bg-white/10"
                            onClick={() => toggleBookmark(note.id)}
                          >
                            {bookmarkedNoteIds.includes(note.id) ? "★" : "☆"}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <p className="text-white/70 text-xs uppercase tracking-wide mb-1">🧠 Key Idea</p>
                          <p className="text-white/90">{note.keyIdea}</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-xs uppercase tracking-wide mb-1">⚡ Key Points</p>
                          <ul className="list-disc pl-5 text-white/90">
                            {note.keyPoints.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-md border border-rose-300/25 bg-rose-500/10 p-2">
                          <p className="text-rose-100/90 text-xs uppercase tracking-wide mb-1">❗ Exam Trap</p>
                          <p className="text-white/90">{note.examTrap}</p>
                        </div>
                        <div className="rounded-md border border-emerald-300/25 bg-emerald-500/10 p-2">
                          <p className="text-emerald-100/90 text-xs uppercase tracking-wide mb-1">📝 Quick Question</p>
                          <p className="text-white/90 mb-2">{parseQuickQuestion(note.quickQuestion).question}</p>
                          {showAllAnswers || revealedAnswers[note.id] ? (
                            <p className="text-emerald-100 text-sm">
                              Answer: {parseQuickQuestion(note.quickQuestion).answer}
                            </p>
                          ) : (
                            <p className="text-white/70 text-sm">Try first, then reveal answer.</p>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 text-white border-white/30 bg-transparent hover:bg-white/10"
                            onClick={() =>
                              setRevealedAnswers((prev) => ({ ...prev, [note.id]: !prev[note.id] }))
                            }
                          >
                            {showAllAnswers || revealedAnswers[note.id] ? "Hide Answer" : "Reveal Answer"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {subjectData.chapters.map((chapter, index) => {
            const locked = !premiumAccess && !isFreeChapter(index);
            const mathNotes = isMathQuickDeck
              ? gradeNumber === 12
                ? getGrade12MathNotesByChapter(chapter)
                : getGrade11MathNotesByChapter(chapter)
              : [];
            const hasMathNotes = mathNotes.length > 0;
            const note = getChapterNote(gradeNumber, decodedSubject, chapter);
            const sections = parseNoteSections(note);
            const isExpanded = Boolean(expandedChapters[chapter]);
            const compactSections = isExpanded ? sections : sections.slice(0, 3);

            return (
              <div
                key={chapter}
                className="group relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.08 + index * 0.04}s`, animationFillMode: "forwards" }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500" />
                <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 md:p-7 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.15] shadow-2xl">
                  <Sparkles className="absolute top-4 right-4 h-4 w-4 text-white/10 group-hover:text-white/30 transition-colors duration-500" />
                  <div className="flex items-start gap-4 mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg ring-4 ring-white/10 shrink-0">
                      <NotebookPen className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className="bg-white/10 text-white border-0">Grade {gradeNumber}</Badge>
                        <Badge variant="outline" className="text-white/60 border-white/15">{decodedSubject}</Badge>
                        <Badge variant="outline" className="text-white/70 border-white/20">
                          {sections.length} quick cards
                        </Badge>
                        {locked && (
                          <Badge variant="outline" className="border-amber-300/40 bg-amber-500/15 text-amber-100">
                            <Lock className="mr-1 h-3 w-3" />
                            Locked
                          </Badge>
                        )}
                      </div>
                      <h2 className="text-lg md:text-xl font-bold text-white">
                        {getChapterDisplayTitle(decodedSubject, chapter)}
                      </h2>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white/70 hover:text-white hover:bg-white/10 rounded-lg"
                      onClick={() => {
                        if (locked) {
                          navigate("/payment");
                          return;
                        }

                        toggleExpanded(chapter);
                      }}
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-1" />
                          Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-1" />
                          More
                        </>
                      )}
                    </Button>
                  </div>

                  {locked ? (
                    <div className="rounded-xl border border-white/15 bg-white/[0.04] p-5 text-white/80">
                      <p className="text-sm">
                        This chapter is locked. Please complete payment to access notes.
                      </p>
                      <Button
                        onClick={() => navigate("/payment")}
                        className="mt-4 bg-white text-slate-950 hover:bg-white/90 rounded-xl"
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Unlock Chapter Notes
                      </Button>
                    </div>
                  ) : hasMathNotes ? (
                    <div className="space-y-3">
                      {mathNotes.map((n) => (
                        <div key={n.id} className="rounded-xl border border-white/15 bg-white/[0.04] p-4">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <Badge className="bg-violet-500/20 text-violet-100 border-0">Mathematics</Badge>
                            <p className="text-sm font-semibold text-white">{n.topic}</p>
                          </div>

                          {quickMode ? (
                            <ul className="text-sm text-white/80 space-y-1 list-disc pl-5">
                              {n.points.slice(0, 3).map((point) => (
                                <li key={point}>{point}</li>
                              ))}
                            </ul>
                          ) : (
                            <div className="space-y-2">
                              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                <p className="text-xs uppercase tracking-wide text-white/60 mb-1">Key Idea</p>
                                <p className="text-sm text-white/85">{n.keyIdea}</p>
                              </div>
                              <div className="rounded-lg border border-yellow-200/20 bg-yellow-400/10 p-3">
                                <p className="text-xs uppercase tracking-wide text-yellow-100/80 mb-1">Key Points</p>
                                <ul className="text-sm text-white/85 space-y-1 list-disc pl-5">
                                  {n.points.map((point) => (
                                    <li key={point}>{point}</li>
                                  ))}
                                </ul>
                              </div>
                              {n.formula && (
                                <div className="rounded-lg border border-blue-200/20 bg-blue-400/10 p-3">
                                  <p className="text-xs uppercase tracking-wide text-blue-100/80 mb-1">Formula</p>
                                  <p className="text-sm text-white/90">{n.formula}</p>
                                </div>
                              )}
                              <div className="rounded-lg border border-rose-200/20 bg-rose-500/10 p-3">
                                <p className="text-xs uppercase tracking-wide text-rose-100/80 mb-1">Exam Trap</p>
                                <p className="text-sm text-white/90">{n.examTrap}</p>
                              </div>
                              <div className="rounded-lg border border-emerald-200/20 bg-emerald-500/10 p-3">
                                <p className="text-xs uppercase tracking-wide text-emerald-100/80 mb-1">Quick Question</p>
                                <p className="text-sm text-white mb-2">{n.quickQuestion.stem}</p>
                                <ul className="space-y-1">
                                  {n.quickQuestion.options.map((option, optionIndex) => (
                                    <li
                                      key={option}
                                      className={`text-sm rounded px-2 py-1 ${
                                        optionIndex === n.quickQuestion.correctIndex
                                          ? "bg-emerald-500/25 text-emerald-100 border border-emerald-300/30"
                                          : "bg-white/5 text-white/80 border border-white/10"
                                      }`}
                                    >
                                      {String.fromCharCode(65 + optionIndex)}. {option}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      <div className="pt-1">
                        <Button
                          onClick={() => openChapterQuiz(chapter)}
                          className="bg-white text-slate-950 hover:bg-white/90 rounded-xl"
                        >
                          <BookOpen className="mr-2 h-4 w-4" />
                          Go to This Chapter Quiz
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {compactSections.map((section) => (
                          <div
                            key={`${chapter}-${section.title}`}
                            className={`rounded-xl border p-4 bg-gradient-to-br ${sectionTone(section.title)} ${
                              section.highlight ? "md:col-span-2" : ""
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              {sectionIcon(section.title)}
                              <p className="text-xs uppercase tracking-wide text-white/70">{section.title}</p>
                            </div>
                            {toBulletItems(section.content).length > 0 ? (
                              <ul className="list-disc pl-5 space-y-1 text-sm text-white/75 leading-6">
                                {toBulletItems(section.content).map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-white/75 leading-6">{section.content}</p>
                            )}
                          </div>
                        ))}
                      </div>
                      {!isExpanded && sections.length > 3 && (
                        <p className="text-xs text-white/50 mt-3">Tap More to open the full revision deck.</p>
                      )}
                      <div className="mt-4">
                        <Button
                          onClick={() => openChapterQuiz(chapter)}
                          className="bg-white text-slate-950 hover:bg-white/90 rounded-xl"
                        >
                          <BookOpen className="mr-2 h-4 w-4" />
                          Go to This Chapter Quiz
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Button
            onClick={() => navigate(`/grade/${gradeNumber}/subject/${encodeURIComponent(decodedSubject)}/chapters`)}
            className="bg-white text-slate-950 hover:bg-white/90 rounded-xl"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Open Quiz Chapters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotesChaptersPage;
