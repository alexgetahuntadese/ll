"use client";

import { createContext, useContext } from "react";

import type {
  AppSession,
  AuthUser,
  RegisterInput,
  UpdateProfileInput,
  UserProfile,
} from "@/lib/auth/types";

export type AuthContextValue = {
  session: AppSession | null;
  user: AuthUser | null;
  profile: UserProfile | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  hasPremiumAccess: boolean;
  paymentStatus: string;
  isLoading: boolean;
  displayName: string;
  refreshProfile: () => Promise<UserProfile | null>;
  signIn: (phone: string, password: string) => Promise<UserProfile | null>;
  register: (input: RegisterInput) => Promise<UserProfile | null>;
  updateProfile: (input: UpdateProfileInput) => Promise<UserProfile | null>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
