import type { Json } from "@/lib/firebase/types";

export type AuthPreferences = Json | null;

export type AuthUser = {
  id: string;
  phone: string;
  email: string | null;
  user_metadata: {
    name?: string | null;
    mobile?: string | null;
  };
};

export type AppSession = {
  accessToken: string | null;
  expiresAt: string | null;
  user: AuthUser;
};

export type UserProfile = {
  id: string;
  auth_id: string | null;
  name: string | null;
  mobile: string | null;
  email: string | null;
  phone: string;
  grade: string | null;
  school: string | null;
  profile_image_url: string | null;
  date_of_birth: string | null;
  gender: string | null;
  preferences: AuthPreferences;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  last_login: string | null;
};

export type RegisterInput = {
  fullName?: string;
  phone: string;
  password: string;
};

export type SignInInput = {
  phone: string;
  password: string;
};

export type UpdateProfileInput = {
  name?: string;
  email?: string | null;
  grade?: string | null;
  school?: string | null;
  gender?: string | null;
  date_of_birth?: string | null;
  profile_image_url?: string | null;
};

export type AuthSessionResponse = {
  token?: string | null;
  session: AppSession | null;
  profile: UserProfile | null;
};
