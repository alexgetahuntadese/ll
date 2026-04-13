import type { AuthUser, UserProfile } from "@/lib/auth/types";

export const getProfileKey = (
  profile: UserProfile | null | undefined,
  user: AuthUser | null | undefined,
) => profile?.auth_id || user?.id || profile?.id || null;

export const getProfileDisplayName = (
  profile: UserProfile | null | undefined,
  user: AuthUser | null | undefined,
) =>
  profile?.name?.trim() ||
  user?.user_metadata?.name?.trim() ||
  profile?.phone?.trim() ||
  user?.phone?.trim() ||
  "Student";
