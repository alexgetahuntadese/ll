import type { User as FirebaseUser } from "firebase/auth";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getIdTokenResult,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile as firebaseUpdateProfile,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { auth, firebaseConfigError, firebaseReady, firestore } from "@/lib/firebase/client";
import type { AppSession, Json, UserProfile, RegisterInput, UpdateProfileInput } from "@/lib/auth/types";

const USERS_COLLECTION = "users";
const PHONE_EMAIL_DOMAIN = "simple-road.firebaseapp.local";
let authInitializationPromise: Promise<void> | null = null;
let firestoreAvailable = true;

const requireFirebase = () => {
  if (!firebaseReady || !auth || !firestore) {
    throw new Error(firebaseConfigError || "Firebase is not configured.");
  }
};

const ensureAuthInitialized = async () => {
  requireFirebase();

  if (!authInitializationPromise) {
    authInitializationPromise = setPersistence(auth!, browserLocalPersistence).catch((error) => {
      authInitializationPromise = null;
      throw error;
    });
  }

  await authInitializationPromise;
};

export const normalizePhoneNumber = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("2519") && digits.length === 12) {
    return `0${digits.slice(3)}`;
  }
  if (digits.startsWith("002519") && digits.length === 13) {
    return `0${digits.slice(5)}`;
  }
  if (digits.length === 9 && digits.startsWith("9")) {
    return `0${digits}`;
  }
  if (digits.length === 10 && digits.startsWith("09")) {
    return digits;
  }
  return digits;
};

export const isValidEthiopianPhoneNumber = (phone: string) => {
  return /^09\d{8}$/.test(phone);
};

const sanitizePhoneDigits = (phone: string) => normalizePhoneNumber(phone).replace(/[^\d]/g, "");

const phoneToEmail = (phone: string) => `${sanitizePhoneDigits(phone)}@${PHONE_EMAIL_DOMAIN}`;

const emailToPhone = (email: string | null | undefined) => {
  if (!email) {
    return "";
  }

  const suffix = `@${PHONE_EMAIL_DOMAIN}`;
  return email.endsWith(suffix) ? email.slice(0, -suffix.length) : "";
};

const isInternalPhoneEmail = (email: string | null | undefined) =>
  Boolean(email && email.endsWith(`@${PHONE_EMAIL_DOMAIN}`));

const sanitizeProfileEmail = (email: string | null | undefined) =>
  isInternalPhoneEmail(email) ? null : email?.trim() || null;

const isFirestoreUnavailableError = (error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  return message.includes("Database '(default)' not found");
};

const markFirestoreUnavailable = (error: unknown) => {
  if (isFirestoreUnavailableError(error)) {
    firestoreAvailable = false;
  }
};

const blankProfile = (authId: string, phone: string, email: string | null): UserProfile => ({
  id: authId,
  auth_id: authId,
  name: null,
  mobile: phone,
  email: sanitizeProfileEmail(email),
  phone,
  grade: null,
  school: null,
  profile_image_url: null,
  date_of_birth: null,
  gender: null,
  preferences: { role: "student" } as Json,
  is_active: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  last_login: new Date().toISOString(),
});

const userDoc = (userId: string) => doc(firestore!, USERS_COLLECTION, userId);

const fallbackProfileFromUser = (user: FirebaseUser): UserProfile => {
  const resolvedPhone = user.phoneNumber || emailToPhone(user.email) || "";
  return blankProfile(user.uid, resolvedPhone, sanitizeProfileEmail(user.email));
};

const mapFirebaseUserToAuthUser = (user: FirebaseUser) => {
  const resolvedPhone = user.phoneNumber || emailToPhone(user.email) || "";

  return {
    id: user.uid,
    phone: resolvedPhone,
    email: user.email,
    user_metadata: {
      name: user.displayName || null,
      mobile: resolvedPhone || null,
    },
  };
};

const mapFirebaseUserToSession = async (user: FirebaseUser): Promise<AppSession> => {
  const tokenResult = await getIdTokenResult(user, false);

  return {
    accessToken: tokenResult.token,
    expiresAt: tokenResult.expirationTime,
    user: mapFirebaseUserToAuthUser(user),
  };
};

const readProfileSnapshot = async (userId: string) => {
  requireFirebase();
  if (!firestoreAvailable) {
    return null;
  }

  try {
  const snapshot = await getDoc(userDoc(userId));
  if (!snapshot.exists()) {
    return null;
  }
  const profile = snapshot.data() as UserProfile;
  return {
    ...profile,
    email: sanitizeProfileEmail(profile.email),
  };
  } catch (error) {
    markFirestoreUnavailable(error);
    if (isFirestoreUnavailableError(error)) {
      return null;
    }
    throw error;
  }
};

const saveProfile = async (profile: UserProfile) => {
  requireFirebase();
  if (!firestoreAvailable) {
    return profile;
  }

  try {
    await setDoc(userDoc(profile.id), {
      ...profile,
      updated_at: new Date().toISOString(),
    }, { merge: true });
  } catch (error) {
    markFirestoreUnavailable(error);
    if (!isFirestoreUnavailableError(error)) {
      throw error;
    }
  }
  return profile;
};

export const userProfileService = {
  async getUserProfile(authId?: string): Promise<UserProfile | null> {
    requireFirebase();
    const targetUserId = authId || auth.currentUser?.uid;
    if (!targetUserId) {
      return null;
    }

    return readProfileSnapshot(targetUserId);
  },

  async upsertProfile(profile: Partial<UserProfile> & { id: string; auth_id?: string | null }) {
    requireFirebase();
    if (!firestoreAvailable) {
      const now = new Date().toISOString();
      return {
        ...blankProfile(profile.id, profile.phone || "", profile.email || null),
        ...profile,
        auth_id: profile.auth_id ?? profile.id,
        email: sanitizeProfileEmail(profile.email),
        updated_at: now,
        created_at: now,
        last_login: now,
        preferences: profile.preferences ?? ({ role: "student" } as Json),
      } as UserProfile;
    }

    const now = new Date().toISOString();
    const currentProfile = (await readProfileSnapshot(profile.id)) ?? blankProfile(profile.id, profile.phone || "", profile.email || null);
    const nextProfile: UserProfile = {
      ...currentProfile,
      ...profile,
      auth_id: profile.auth_id ?? currentProfile.auth_id,
      email: sanitizeProfileEmail(profile.email ?? currentProfile.email),
      updated_at: now,
      created_at: currentProfile.created_at || now,
      last_login: profile.last_login ?? currentProfile.last_login,
      preferences: profile.preferences ?? currentProfile.preferences,
    };

    try {
      await setDoc(userDoc(profile.id), nextProfile, { merge: true });
    } catch (error) {
      markFirestoreUnavailable(error);
      if (isFirestoreUnavailableError(error)) {
        return nextProfile;
      }
      throw error;
    }
    return nextProfile;
  },

  async updateLastLogin(authId?: string) {
    requireFirebase();
    if (!firestoreAvailable) {
      return null;
    }

    const targetUserId = authId || auth.currentUser?.uid;
    if (!targetUserId) {
      return null;
    }

    let snapshot;
    try {
      snapshot = await getDoc(userDoc(targetUserId));
    } catch (error) {
      markFirestoreUnavailable(error);
      if (isFirestoreUnavailableError(error)) {
        return null;
      }
      throw error;
    }

    if (!snapshot.exists()) {
      return null;
    }

    const profile = snapshot.data() as UserProfile;
    const nextProfile = {
      ...profile,
      last_login: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    try {
      await setDoc(userDoc(targetUserId), nextProfile, { merge: true });
    } catch (error) {
      markFirestoreUnavailable(error);
      if (isFirestoreUnavailableError(error)) {
        return nextProfile;
      }
      throw error;
    }
    return nextProfile;
  },
};

export const userService = {
  async listUsers(): Promise<UserProfile[]> {
    requireFirebase();
    const snapshot = await getDocs(collection(firestore!, USERS_COLLECTION));
    return snapshot.docs.map((entry) => entry.data() as UserProfile);
  },

  async updateUser(userId: string, changes: Partial<UserProfile>) {
    requireFirebase();
    await updateDoc(userDoc(userId), {
      ...changes,
      updated_at: new Date().toISOString(),
    });
  },

  async deleteUser(userId: string) {
    requireFirebase();
    await deleteDoc(userDoc(userId));
  },
};

export const authService = {
  async getCurrentUser() {
    await ensureAuthInitialized();
    return auth.currentUser;
  },

  async getSession() {
    await ensureAuthInitialized();
    const currentUser = auth.currentUser;
    if (!currentUser) {
      return { session: null, profile: null };
    }

    const session = await mapFirebaseUserToSession(currentUser);
    const profile = (await userProfileService.getUserProfile(currentUser.uid)) ?? fallbackProfileFromUser(currentUser);

    return { session, profile };
  },

  async signIn(input: { phone: string; password: string }) {
    await ensureAuthInitialized();
    const normalizedPhone = normalizePhoneNumber(input.phone);
    const credential = await signInWithEmailAndPassword(auth!, phoneToEmail(normalizedPhone), input.password);
    // Skip profile fetching for faster sign-in - let AuthContext handle it
    return this.getSession();
  },

  async register(input: RegisterInput) {
    await ensureAuthInitialized();
    const normalizedPhone = normalizePhoneNumber(input.phone);
    const email = phoneToEmail(normalizedPhone);
    const credential = await createUserWithEmailAndPassword(auth!, email, input.password);

    await firebaseUpdateProfile(credential.user, {
      displayName: input.fullName?.trim() || normalizedPhone,
    });

    const nextProfile = await userProfileService.upsertProfile({
      id: credential.user.uid,
      auth_id: credential.user.uid,
      name: input.fullName?.trim() || null,
      mobile: normalizedPhone || null,
      email: null,
      phone: normalizedPhone,
      is_active: true,
      preferences: { role: "student" } as Json,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      last_login: new Date().toISOString(),
      grade: null,
      school: null,
      profile_image_url: null,
      date_of_birth: null,
      gender: null,
    });

    return { session: await mapFirebaseUserToSession(credential.user), profile: nextProfile };
  },

  async updateProfile(input: UpdateProfileInput) {
    await ensureAuthInitialized();
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error("User not authenticated");
    }

    if (input.name) {
      await firebaseUpdateProfile(currentUser, { displayName: input.name });
    }

    const currentProfile = (await userProfileService.getUserProfile(currentUser.uid)) ?? blankProfile(currentUser.uid, currentUser.phoneNumber || "", currentUser.email || null);
    const nextProfile = await userProfileService.upsertProfile({
      ...currentProfile,
      id: currentUser.uid,
      auth_id: currentUser.uid,
      name: input.name ?? currentProfile.name,
      email: sanitizeProfileEmail(input.email ?? currentProfile.email),
      grade: input.grade ?? currentProfile.grade,
      school: input.school ?? currentProfile.school,
      gender: input.gender ?? currentProfile.gender,
      date_of_birth: input.date_of_birth ?? currentProfile.date_of_birth,
      profile_image_url: input.profile_image_url ?? currentProfile.profile_image_url,
      phone: currentProfile.phone || normalizePhoneNumber(currentUser.phoneNumber || ""),
    });

    return { session: await mapFirebaseUserToSession(currentUser), profile: nextProfile };
  },

  async signOut() {
    await ensureAuthInitialized();
    await firebaseSignOut(auth!);
  },

  onAuthStateChanged(
    callback: (value: { session: AppSession | null; profile: UserProfile | null }) => void | Promise<void>,
  ) {
    requireFirebase();

    void ensureAuthInitialized();

    return onAuthStateChanged(auth!, async (currentUser) => {
      if (!currentUser) {
        await callback({ session: null, profile: null });
        return;
      }

      const session = await mapFirebaseUserToSession(currentUser);
      const profile = (await userProfileService.getUserProfile(currentUser.uid)) ?? fallbackProfileFromUser(currentUser);
      await callback({ session, profile });
    });
  },
};

export const checkAuthStatus = async (): Promise<{ session: AppSession | null; profile: UserProfile | null }> => {
  requireFirebase();
  const currentUser = auth.currentUser;
  if (!currentUser) {
    return { session: null, profile: null };
  }

  return {
    session: await mapFirebaseUserToSession(currentUser),
    profile: await userProfileService.getUserProfile(currentUser.uid),
  };
};

export const formatAuthError = (error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);

  if (message.includes("auth/invalid-credential")) {
    return "Incorrect mobile number or password.";
  }

  if (message.includes("auth/email-already-in-use")) {
    return "That mobile number is already registered.";
  }

  if (message.includes("auth/weak-password")) {
    return "Password should be at least 6 characters.";
  }

  if (message.includes("auth/network-request-failed")) {
    return "Network error. Check your internet connection and try again.";
  }

  return message || "An unexpected auth error occurred.";
};

export const isPhoneAlreadyRegisteredError = (error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  return message.includes("auth/email-already-in-use");
};
