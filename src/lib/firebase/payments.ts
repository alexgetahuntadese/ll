import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";

import { authService, userProfileService } from "@/lib/firebase/auth";
import { firebaseConfigError, firebaseReady, firestore, storage } from "@/lib/firebase/client";
import type { PaymentSubmission, Json } from "@/lib/firebase/types";
import { hasPremiumPreferences, isAdminPreferences, setPremiumAccess } from "@/lib/authRoles";

const PAYMENT_SUBMISSIONS_COLLECTION = "payment_submissions";
const PAYMENT_RECEIPTS_BUCKET = "payment-receipts";

const requireFirebase = () => {
  if (!firebaseReady || !firestore || !storage) {
    throw new Error(firebaseConfigError || "Firebase is not configured.");
  }
};

const formatPaymentError = (error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);

  if (message.includes("storage/unauthorized") || message.includes("permission-denied")) {
    return "Payment receipt upload is blocked by Firebase permissions. Please try again in a moment.";
  }

  if (message.includes("storage/invalid-format")) {
    return "Only image receipts are allowed.";
  }

  if (message.includes("storage/quota-exceeded")) {
    return "Storage quota was exceeded. Please contact support.";
  }

  if (message.includes("storage/retry-limit-exceeded")) {
    return "Receipt upload timed out. Please try again.";
  }

  return message || "Payment submission failed.";
};

export type PaymentSubmissionStatus = "pending" | "verified" | "rejected" | "approved";
export type PaymentMethod = "cbe" | "telebirr";

export type PaymentSubmissionWithReceiptUrl = PaymentSubmission & {
  receiptUrl: string | null;
};

export type CreatePaymentSubmissionInput = {
  amount: number;
  bankName: string;
  accountNumber: string;
  paymentMethod: PaymentMethod;
  transactionRef: string;
  receiptFile: File;
  submitterNotes?: string;
};

const sanitizeFileName = (value: string) =>
  value.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

const toPaymentSubmission = (value: PaymentSubmission): PaymentSubmissionWithReceiptUrl => ({
  ...value,
  receiptUrl: value.receipt_url,
});

const createReceiptUrl = async (receiptPath: string | null) => {
  if (!receiptPath) {
    return null;
  }

  const receiptRef = ref(storage!, receiptPath);
  return getDownloadURL(receiptRef);
};

const withReceiptUrls = async (submissions: PaymentSubmission[]) =>
  Promise.all(
    submissions.map(async (submission) => ({
      ...toPaymentSubmission(submission),
      receiptUrl: await createReceiptUrl(submission.receipt_path),
    })),
  );

const uploadReceipt = async (userId: string, file: File) => {
  const extension = file.name.includes(".") ? file.name.split(".").pop()?.toLowerCase() : "jpg";
  const normalizedExtension = extension || "jpg";
  const fileBase = sanitizeFileName(file.name.replace(/\.[^.]+$/, "")) || "receipt";
  const filePath = `${PAYMENT_RECEIPTS_BUCKET}/${userId}/${Date.now()}-${fileBase}.${normalizedExtension}`;
  const storageRef = ref(storage!, filePath);

  await uploadBytes(storageRef, file, {
    contentType: file.type || "application/octet-stream",
  });

  return {
    receiptPath: filePath,
    receiptContentType: file.type || null,
    receiptSizeBytes: file.size || null,
  };
};

const paymentDoc = (id: string) => doc(firestore!, PAYMENT_SUBMISSIONS_COLLECTION, id);

const requireAdmin = async () => {
  const currentUser = await authService.getCurrentUser();
  if (!currentUser) {
    throw new Error("User not authenticated");
  }

  const profile = await userProfileService.getUserProfile(currentUser.uid);
  if (!profile || !isAdminPreferences(profile.preferences)) {
    throw new Error("Admin access required");
  }

  return currentUser;
};

export const paymentService = {
  async listOwnSubmissions(): Promise<PaymentSubmissionWithReceiptUrl[]> {
    requireFirebase();
    const user = await authService.getCurrentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    try {
      const snapshot = await getDocs(query(
        collection(firestore!, PAYMENT_SUBMISSIONS_COLLECTION),
        where("user_id", "==", user.uid),
      ));
      const submissions = snapshot.docs
        .map((entry) => entry.data() as PaymentSubmission)
        .sort((a, b) => new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime());

      return withReceiptUrls(submissions);
    } catch (error) {
      throw new Error(formatPaymentError(error));
    }
  },

  async submitPayment(input: CreatePaymentSubmissionInput): Promise<PaymentSubmissionWithReceiptUrl> {
    requireFirebase();
    const user = await authService.getCurrentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    try {
      const uploadedReceipt = await uploadReceipt(user.uid, input.receiptFile);
      const currentProfile = await userProfileService.getUserProfile(user.uid);
      const submissionId = `${user.uid}_${Date.now()}`;

      const submission: PaymentSubmission = {
        id: submissionId,
        user_id: user.uid,
        user_name: currentProfile?.name || user.displayName || user.email || null,
        user_phone: currentProfile?.phone || currentProfile?.mobile || user.phoneNumber || null,
        amount: input.amount,
        bank_name: input.bankName.trim(),
        account_number: input.accountNumber.trim(),
        transaction_ref: input.transactionRef.trim(),
        payment_method: input.paymentMethod,
        status: "pending",
        receipt_path: uploadedReceipt.receiptPath,
        receipt_url: null,
        receipt_content_type: uploadedReceipt.receiptContentType,
        receipt_size_bytes: uploadedReceipt.receiptSizeBytes,
        submitted_at: new Date().toISOString(),
        verified_at: null,
        reviewer_notes: null,
        submitter_notes: input.submitterNotes?.trim() || null,
        verified_by: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      await setDoc(paymentDoc(submission.id), submission);

      if (currentProfile && !hasPremiumPreferences(currentProfile.preferences)) {
        const nextPreferences = setPremiumAccess(currentProfile.preferences, {
          premium: false,
          paymentStatus: "pending",
          paymentSubmissionId: submission.id,
        });

        await userProfileService.upsertProfile({
          ...currentProfile,
          preferences: nextPreferences,
        });
      }

      return {
        ...submission,
        receiptUrl: await createReceiptUrl(submission.receipt_path),
      };
    } catch (error) {
      throw new Error(formatPaymentError(error));
    }
  },
};

export const paymentAdminService = {
  async listAllSubmissions(): Promise<PaymentSubmissionWithReceiptUrl[]> {
    requireFirebase();
    await requireAdmin();
    const snapshot = await getDocs(collection(firestore!, PAYMENT_SUBMISSIONS_COLLECTION));
    const submissions = snapshot.docs
      .map((entry) => entry.data() as PaymentSubmission)
      .sort((a, b) => new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime());

    return withReceiptUrls(submissions);
  },

  async reviewSubmission(input: {
    submission: PaymentSubmission;
    status: PaymentSubmissionStatus;
    reviewerNotes?: string;
  }): Promise<PaymentSubmissionWithReceiptUrl> {
    requireFirebase();
    const currentUser = await requireAdmin();
    const submissionRef = paymentDoc(input.submission.id);
    const snapshot = await getDoc(submissionRef);

    if (!snapshot.exists()) {
      throw new Error("This payment submission could not be found.");
    }

    const submission = snapshot.data() as PaymentSubmission;
    const targetUserId = submission.user_id;
    const verifiedAt = input.status === "verified" || input.status === "approved" ? new Date().toISOString() : null;
    const nextSubmission: PaymentSubmission = {
      ...submission,
      status: input.status,
      reviewer_notes: input.reviewerNotes?.trim() || null,
      verified_at: verifiedAt,
      verified_by: currentUser?.uid || null,
      updated_at: new Date().toISOString(),
    };

    await setDoc(submissionRef, nextSubmission, { merge: true });

    if (targetUserId) {
      const profile = await userProfileService.getUserProfile(targetUserId);
      if (profile) {
        const nextPreferences = setPremiumAccess(profile.preferences, {
          premium: input.status === "verified" || input.status === "approved",
          paymentStatus: input.status,
          paidAt: verifiedAt,
          paymentSubmissionId: submission.id,
        });

        await userProfileService.upsertProfile({
          ...profile,
          preferences: nextPreferences,
        });
      }
    }

    return {
      ...nextSubmission,
      receiptUrl: await createReceiptUrl(nextSubmission.receipt_path),
    };
  },
};
