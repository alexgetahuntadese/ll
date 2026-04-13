import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";import { useAuth } from '@/hooks/useAuth';import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  Library,
  Mail,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

const quickLinks = [
  {
    title: "Ethiopian textbooks",
    description: "Browse grade-based digital textbooks for Grades 9 to 12.",
    href: "/books",
    icon: Library,
  },
  {
    title: "Entrance exam practice",
    description: "Review past-style EUEE and matric questions in one place.",
    href: "/matric",
    icon: FileText,
  },
  {
    title: "Subject quizzes",
    description: "Practice chapter quizzes and check progress by subject.",
    href: "/grades",
    icon: GraduationCap,
  },
];

const trustPoints = [
  "Focused on Ethiopian textbooks, quizzes, and entrance exam preparation.",
  "Built around clearly labeled grade and subject sections instead of vague offers.",
  "Includes direct contact details and real access paths for students.",
  "Uses Firebase authentication and Firestore for account and learning data.",
];

const sections = [
  {
    title: "Textbooks by grade",
    description:
      "Find textbook collections organized for Grades 9, 10, 11, and 12 with subject-based navigation.",
  },
  {
    title: "Exam preparation",
    description:
      "Practice Ethiopian University Entrance Exam and matric questions with a cleaner study flow.",
  },
  {
    title: "Student progress",
    description:
      "Track quiz activity, profile details, and performance from one student account.",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, displayName, profile, session, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const userName = profile?.name || displayName || session?.user.user_metadata?.name || session?.user.phone || "Student";

  return (
    <div className="min-h-screen bg-stone-100 text-slate-900">
      <div className="relative overflow-hidden border-b border-stone-300 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.06),_transparent_45%),linear-gradient(180deg,_#f8fafc_0%,_#f5f5f4_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-300/60" />
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8"
        >
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Simple Road" className="h-10 w-10 rounded-xl border border-stone-300 bg-white p-1.5 shadow-sm" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Simple Road</p>
              <p className="text-sm text-slate-600">Ethiopian learning platform</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <button onClick={() => navigate("/books")} className="transition hover:text-slate-900">Books</button>
            <button onClick={() => navigate("/matric")} className="transition hover:text-slate-900">Exams</button>
            {isAuthenticated ? (
              <>
                <button onClick={() => navigate("/profile")} className="transition hover:text-slate-900">Profile</button>
                <button onClick={handleSignOut} className="transition hover:text-slate-900">Sign Out</button>
              </>
            ) : (
              <button onClick={() => navigate("/login")} className="transition hover:text-slate-900">Login</button>
            )}
          </nav>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800">
              <ShieldCheck className="h-4 w-4" />
              <span>Structured for students and families</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Ethiopian textbooks, entrance exam practice, and student study tools in one clear place.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              The landing page now reflects what the platform actually offers: grade-based learning materials,
              textbook access, subject quizzes, and Ethiopian entrance exam preparation inspired by the clearer
              academic structure seen on Kehulum.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => navigate("/profile")}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
                  >
                    Open profile
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => navigate("/grades")}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-stone-50"
                  >
                    Continue studying
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/signup")}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
                  >
                    Create student account
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => navigate("/matric")}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-stone-50"
                  >
                    Browse exam practice
                  </button>
                </>
              )}
            </div>

            {isAuthenticated ? (
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Active session</p>
                <div className="mt-4 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-slate-900">Welcome back, {userName}.</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Your profile is connected, and this session will keep your progress in sync.
                    </p>
                  </div>
                  <div className="mt-4 rounded-2xl bg-slate-100 p-4 text-sm text-slate-700 sm:mt-0">
                    <p className="font-semibold text-slate-900">Session details</p>
                    <p className="mt-2">Phone: {session?.user.phone || profile?.phone || "Unknown"}</p>
                    <p>Account: {profile?.name ? "Student profile" : "Anonymous"}</p>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-stone-300 bg-white/80 p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-6">
            <div className="rounded-[28px] border border-stone-300 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.22)]">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">What students can find here</p>
                  <p className="mt-1 text-sm text-slate-500">Organized by grade, subject, and exam type</p>
                </div>
                <BookOpen className="h-6 w-6 text-slate-500" />
              </div>

              <div className="mt-5 space-y-4">
                {quickLinks.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => navigate(item.href)}
                    className="block w-full text-left rounded-2xl border border-stone-200 bg-stone-50 p-4 transition hover:border-slate-300 hover:bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-slate-900 p-2.5 text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-base font-semibold text-slate-900">{item.title}</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">Academic scope</p>
                <p className="mt-2 text-sm leading-6 text-amber-950/80">
                  Grade 9-12 textbook coverage, subject quizzes, notes, and Ethiopian University Entrance Exam
                  preparation.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
              className="rounded-[26px] border border-stone-300 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Section</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-300 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Why it feels credible</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Clear educational language builds more trust than inflated promises.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              The homepage now avoids invented ratings, exaggerated claims, and luxury-style wording. Instead, it
              explains the real product: textbook access, exam preparation, grade navigation, and student accounts.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-emerald-400" />
              <p className="text-sm font-semibold text-slate-200">Visible contact details</p>
            </div>

            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <Phone className="h-4 w-4 text-slate-400" />
                <span>0992010092 / 0950502881</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <Mail className="h-4 w-4 text-slate-400" />
                <span>alexgetahuntadese@gmail.com</span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Students can sign in, browse books, practice exams, and return to their profile and performance pages
              from the same account.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-stone-300 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Get started</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Start with the section that matches the student&apos;s current need.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Use the books section for reading, the exam section for practice, and the student account for ongoing
                quiz and performance tracking.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/books")}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:bg-stone-50"
              >
                Open textbooks
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
              >
                Register and continue
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-300 bg-stone-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-medium text-slate-800">Simple Road</p>
            <p className="mt-1">Study support for Ethiopian students, with textbooks, quizzes, and exam practice.</p>
          </div>
          <div className="text-left lg:text-right">
            <p>Created by Milkesa Comm. Getahun Tadese</p>
            <p className="mt-1">2026 Simple Road. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
