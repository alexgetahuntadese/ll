import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { AuthContext, type AuthContextValue } from "@/contexts/auth-context";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo<AuthContextValue>(() => ({
    session: null,
    user: null,
    profile: null,
    isAuthenticated: false,
    isAdmin: false,
    hasPremiumAccess: false,
    paymentStatus: "",
    isLoading,
    displayName: "Student",
    refreshProfile: async () => null,
    signIn: async () => null,
    register: async () => null,
    updateProfile: async () => null,
    signOut: async () => {},
  }), [isLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
