import type { Json } from "@/lib/firebase/types";

const asObject = (value: Json | null | undefined) => {
  if (!value || Array.isArray(value) || typeof value !== "object") {
    return null;
  }

  return value as Record<string, Json | undefined>;
};

export const getPreferenceRole = (preferences: Json | null | undefined) => {
  const objectValue = asObject(preferences);
  const role = objectValue?.role;

  return typeof role === "string" ? role.trim().toLowerCase() : "";
};

export const isAdminPreferences = (preferences: Json | null | undefined) =>
  getPreferenceRole(preferences) === "admin";

export const getPaymentStatus = (preferences: Json | null | undefined) => {
  const objectValue = asObject(preferences);
  const status = objectValue?.payment_status;

  return typeof status === "string" ? status.trim().toLowerCase() : "";
};

export const getPaidUntil = (preferences: Json | null | undefined) => {
  const objectValue = asObject(preferences);
  const paidUntil = objectValue?.paid_until;

  return typeof paidUntil === "string" && paidUntil.trim() ? paidUntil.trim() : null;
};

export const hasPremiumPreferences = (preferences: Json | null | undefined) => {
  const objectValue = asObject(preferences);
  const premiumFlag = objectValue?.premium;
  const paymentStatus = getPaymentStatus(preferences);
  const paidUntil = getPaidUntil(preferences);

  if (typeof premiumFlag !== "boolean" || !premiumFlag) {
    return false;
  }

  if (paymentStatus && paymentStatus !== "verified" && paymentStatus !== "approved") {
    return false;
  }

  if (!paidUntil) {
    return true;
  }

  return new Date(paidUntil).getTime() > Date.now();
};

export const setPreferenceRole = (
  preferences: Json | null | undefined,
  role: string | null,
) => {
  const nextPreferences = { ...(asObject(preferences) ?? {}) };

  if (!role) {
    delete nextPreferences.role;
    return nextPreferences;
  }

  nextPreferences.role = role;
  return nextPreferences;
};

type PremiumAccessOptions = {
  premium: boolean,
  paymentStatus?: "pending" | "verified" | "rejected" | null,
  paidAt?: string | null,
  paidUntil?: string | null,
  paymentSubmissionId?: string | null,
};

export const setPremiumAccess = (
  preferences: Json | null | undefined,
  options: PremiumAccessOptions,
) => {
  const nextPreferences = { ...(asObject(preferences) ?? {}) };

  nextPreferences.premium = options.premium;

  if (options.paymentStatus) {
    nextPreferences.payment_status = options.paymentStatus;
  } else {
    delete nextPreferences.payment_status;
  }

  if (options.paidAt) {
    nextPreferences.paid_at = options.paidAt;
  } else {
    delete nextPreferences.paid_at;
  }

  if (options.paidUntil) {
    nextPreferences.paid_until = options.paidUntil;
  } else {
    delete nextPreferences.paid_until;
  }

  if (options.paymentSubmissionId) {
    nextPreferences.payment_submission_id = options.paymentSubmissionId;
  } else {
    delete nextPreferences.payment_submission_id;
  }

  return nextPreferences;
};
