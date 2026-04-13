import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { AuthContext, type AuthContextValue } from "@/contexts/auth-context";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const clearAuthState = useCallback(() => {
    setUser(null);
    setProfile(null);
    setIsLoading(false);
  }, []);

  const checkChapterAccess = useCallback((chapterNumber: number) => {
    // All chapters are now free
    return true;
  }, [profile]);

  const value = useMemo<AuthContextValue>(() => ({
    session: user ? { user, accessToken: 'mock-token', expiresAt: null } : null,
    user,
    profile,
    isAuthenticated: Boolean(user),
    isAdmin: false,
    hasPremiumAccess: false, // Remove premium access
    paymentStatus: 'free', // Always free
    isLoading,
    displayName: profile?.name || "Student",
    refreshProfile: async () => profile,
    signIn: async (phone: string, password: string) => {
      // Mock sign in - all chapters free
      const mockProfile = {
        id: '1',
        name: 'Free Student',
        preferences: {
          hasPaid: false, // Always free
          unlockedChapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // All chapters free
        }
      };
      setUser({ id: '1', phone: '0912345678' });
      setProfile(mockProfile);
      return mockProfile;
    },
    register: async (input: any) => {
      // Mock registration
      const mockProfile = {
        id: '1',
        name: input.fullName,
        preferences: {
          hasPaid: false, // Always free
          unlockedChapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // All chapters free
        }
      };
      setUser({ id: '1', phone: input.phone });
      setProfile(mockProfile);
      return mockProfile;
    },
    updateProfile: async (input: any) => {
      // Mock update
      return profile;
    },
    signOut: async () => {
      clearAuthState();
    },
  }), [user, profile, isLoading, clearAuthState, checkChapterAccess]);

  // Add chapter access check function to global context
  useEffect(() => {
    (window as any).checkChapterAccess = checkChapterAccess;
  }, [checkChapterAccess]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
