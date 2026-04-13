'use client';

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/i18n/LanguageContext";
import AuthProvider from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import PublicRoute from "@/components/PublicRoute";
import { Suspense, lazy } from "react";
import PageLoader from "@/components/PageLoader";
import AuthDebug from "@/components/debug/AuthDebug";
import PaymentDebug from "@/components/debug/PaymentDebug";

// Lazy load components with preloading for critical paths
const Index = lazy(() => import("./screens/Index"));
const LoginPage = lazy(() => import("./screens/LoginPage"));
const SignUpPage = lazy(() => import("./screens/SignUpPage"));
const PaymentPage = lazy(() => import("./screens/PaymentPage"));

// Preload common routes after initial load
const GradesPage = lazy(() => import("./screens/GradesPage"));
const SubjectsPage = lazy(() => import("./screens/SubjectsPage"));
const ChaptersPage = lazy(() => import("./screens/ChaptersPage"));
const DashboardPage = lazy(() => import("./screens/DashboardPage"));

// Lazy load less frequent components
const GradeSelection = lazy(() => import("./screens/GradeSelection"));
const QuizPage = lazy(() => import("./screens/QuizPage"));
const CareerSimulatorPage = lazy(() => import("./screens/CareerSimulatorPage"));
const PerformancePage = lazy(() => import("./screens/PerformancePage"));
const ProfilePage = lazy(() => import("./screens/ProfilePage"));
const MatricExamPage = lazy(() => import("./screens/MatricExamPage"));
const MatricStreamPage = lazy(() => import("./screens/MatricStreamPage"));
const MatricYearPage = lazy(() => import("./screens/MatricYearPage"));
const MatricQuizPage = lazy(() => import("./screens/MatricQuizPage"));
const NotesPage = lazy(() => import("./screens/NotesPage"));
const NotesSubjectsPage = lazy(() => import("./screens/NotesSubjectsPage"));
const NotesChaptersPage = lazy(() => import("./screens/NotesChaptersPage"));
const BooksPage = lazy(() => import("./screens/BooksPage"));
const BookSubjectsPage = lazy(() => import("./screens/BookSubjectsPage"));
const WebRtcPage = lazy(() => import("./screens/WebRtcPage"));
const HostPage = lazy(() => import("./screens/HostPage"));
const JoinPage = lazy(() => import("./screens/JoinPage"));
const SessionPage = lazy(() => import("./screens/SessionPage"));


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 minutes
      gcTime: 15 * 60 * 1000, // 15 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      networkMode: 'online',
    },
    mutations: {
      networkMode: 'online',
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter future={{ v7_relativeSplatPath: true }}>
              <Routes>
                <Route path="/" element={
                  <Suspense fallback={<PageLoader />}>
                    <Index />
                  </Suspense>
                } />
                <Route path="/grades" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <GradesPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/grade/:grade" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <GradeSelection />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/grade/:grade/subjects" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <SubjectsPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route
                  path="/grade/:grade/subject/:subject"
                  element={<Navigate to="chapters" replace />}
                />
                <Route path="/grade/:grade/subject/:subject/chapters" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <ChaptersPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/grade/:grade/subject/:subject/chapter/:chapterId/difficulty/:difficulty/quiz" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <QuizPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/career-simulator" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <CareerSimulatorPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <DashboardPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/performance" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <PerformancePage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <ProfilePage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/matric" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <MatricExamPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/matric/:year" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <MatricStreamPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/matric/:year/:stream" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <MatricYearPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/matric/:year/:stream/:subject" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <MatricQuizPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/notes" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <NotesPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/notes/:grade" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <NotesSubjectsPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/notes/:grade/:subject" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <NotesChaptersPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/books" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <BooksPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/books/:grade" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <BookSubjectsPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/payment" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <PaymentPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/host" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <HostPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/join" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <JoinPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/session/:sessionCode" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <SessionPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/webrtc" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <WebRtcPage />
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/debug/auth" element={
                  <ProtectedRoute>
                    <Suspense fallback={<PageLoader />}>
                      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-slate-950 pt-14 px-4">
                        <div className="max-w-4xl mx-auto space-y-6">
                          <h1 className="text-2xl font-bold text-white mb-4">Auth Debug</h1>
                          <AuthDebug />
                          <PaymentDebug />
                        </div>
                      </div>
                    </Suspense>
                  </ProtectedRoute>
                } />
                <Route path="/login" element={
                  <PublicRoute>
                    <Suspense fallback={<PageLoader />}>
                      <LoginPage />
                    </Suspense>
                  </PublicRoute>
                } />
                <Route path="/signup" element={
                  <PublicRoute>
                    <Suspense fallback={<PageLoader />}>
                      <SignUpPage />
                    </Suspense>
                  </PublicRoute>
                } />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
