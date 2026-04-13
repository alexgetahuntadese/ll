import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import AppLogo from "@/components/AppLogo";
import {
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
    title: "Exam practice",
    description: "Review matric and entrance exam questions in a calm study flow.",
    href: "/matric",
    icon: FileText,
  },
  {
    title: "Subject quizzes",
    description: "Practice chapters and track progress with simple quiz cards.",
    href: "/grades",
    icon: GraduationCap,
  },
];

const trustPoints = [
  "Built for Ethiopian learners with clear grade and subject organization.",
  "Uses real textbook and exam practice paths, not vague promises.",
  "Keeps student progress connected through Firebase authentication.",
  "Offers direct contact details and straightforward support.",
];

const stats = [
  { label: "Grade levels", value: "9–12" },
  { label: "Practice areas", value: "Textbooks, exams, quizzes" },
  { label: "Session sync", value: "Profile tracking" },
];

const sections = [
  {
    title: "Textbooks by grade",
    description: "Find digital textbooks arranged by grade and subject for faster study navigation.",
  },
  {
    title: "Exam preparation",
    description: "Practice past-style questions for matric and entrance exam readiness.",
  },
  {
    title: "Profile progress",
    description: "Save performance and access history in one student account.",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const {
    isAuthenticated,
    displayName,
    profile,
    session,
    signOut,
    hasPremiumAccess,
  } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const userName =
    profile?.name || displayName || session?.user.user_metadata?.name || session?.user.phone || "Student";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-100 via-slate-50 to-white">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
        >
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="min-w-0 rounded-2xl transition hover:opacity-90"
            >
              <AppLogo className="min-w-[160px]" />
            </button>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Simple Road</p>
              <p className="text-sm text-slate-600">Ethiopian learning platform</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <button onClick={() => navigate("/books")} className="transition hover:text-slate-900">
              Books
            </button>
            <button onClick={() => navigate("/matric")} className="transition hover:text-slate-900">
              Exams
            </button>
            <button onClick={() => navigate("/grades")} className="transition hover:text-slate-900">
              Quizzes
            </button>
            {isAuthenticated ? (
              <>
                <button onClick={() => navigate("/profile")} className="transition hover:text-slate-900">
                  Profile
                </button>
                <button
                  onClick={handleSignOut}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Sign out
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Login
              </button>
            )}
          </nav>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-20"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              <span>Secure student accounts and easy progress tracking</span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.75rem]">
                Study Ethiopian textbooks and exam prep in one calm, clear interface.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                Simple Road gives learners a clear path to textbooks, matric and entrance exam practice, and profile-based progress tracking.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate(isAuthenticated ? "/grades" : "/signup")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
              >
                {isAuthenticated ? "Continue learning" : "Create free account"}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate("/matric")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Browse exam practice
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3 rounded-3xl bg-slate-100 p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Student account</p>
                  <p className="text-sm text-slate-600">Session and progress stay saved.</p>
                </div>
                <Users className="h-6 w-6 text-slate-700" />
              </div>

              {isAuthenticated ? (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Welcome back</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950">{userName}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {hasPremiumAccess ? "Premium access is active." : "Your account is ready. Continue studying."}
                  </p>
                </div>
              ) : (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Get started</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950">Free sign-up for students</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Sign in to access textbooks, quizzes, and exam prep in one place.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Feature</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Why it helps</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A straightforward homepage with study tools, not crowded marketing.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              The interface is designed to guide students to textbooks, exam practice, and quiz progress without excess visuals.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-slate-700" />
              <p className="text-sm font-semibold text-slate-900">Contact</p>
            </div>
            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <Phone className="h-4 w-4 text-slate-500" />
                <span>0992010092 / 0950502881</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <Mail className="h-4 w-4 text-slate-500" />
                <span>alexgetahuntadese@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Get started</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Choose the path that matches the student’s current need.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Read textbooks, practice past exam questions, and keep track of quiz performance in one simple app.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/books")}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:bg-slate-50"
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

      <footer className="border-t border-slate-200 bg-slate-100">
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
