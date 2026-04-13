import type { PaymentSubmission } from "@/lib/firebase/types";

const apiJson = async <T,>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  const response = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload?.error || payload?.message || "Request failed.");
  }

  return payload as T;
};

const fileToDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read receipt file."));
    reader.readAsDataURL(file);
  });

export type PaymentSubmissionStatus = "pending" | "verified" | "rejected" | "approved" | "backend4app_pending" | "backend4app_approved" | "backend4app_rejected";

export type PaymentMethod = "cbe" | "telebirr";

export type PaymentSubmissionWithReceiptUrl = PaymentSubmission & {
  receiptUrl: string | null;
};

export type CreatePaymentSubmissionInput = {
  userId: string;
  userName: string | null;
  userPhone: string | null;
  amount: number;
  bankName: string;
  accountNumber: string;
  paymentMethod: PaymentMethod;
  transactionRef: string;
  receiptFile?: File | null;
  submitterNotes?: string;
};

type ApiSubmission = PaymentSubmissionWithReceiptUrl;

export const paymentService = {
  async listOwnSubmissions(userId: string): Promise<PaymentSubmissionWithReceiptUrl[]> {
    return apiJson<PaymentSubmissionWithReceiptUrl[]>(
      `/api/payments/submissions?userId=${encodeURIComponent(userId)}`
    );
  },

  async submitPayment(input: CreatePaymentSubmissionInput): Promise<PaymentSubmissionWithReceiptUrl> {
    const receiptBase64 = input.receiptFile ? await fileToDataUrl(input.receiptFile) : null;
    const submission = await apiJson<ApiSubmission>("/api/payments/submit", {
      method: "POST",
      body: JSON.stringify({
        userId: input.userId,
        userName: input.userName,
        userPhone: input.userPhone,
        amount: input.amount,
        bankName: input.bankName,
        accountNumber: input.accountNumber,
        transactionRef: input.transactionRef,
        paymentMethod: input.paymentMethod,
        submitterNotes: input.submitterNotes || null,
        receiptBase64,
        receiptFileName: input.receiptFile?.name || null,
        receiptContentType: input.receiptFile?.type || null,
      }),
    });

    return submission;
  },

  async submitPaymentWithReceipt(input: CreatePaymentSubmissionInput & { receiptFile: File }): Promise<PaymentSubmissionWithReceiptUrl> {
    const receiptBase64 = await fileToDataUrl(input.receiptFile);
    const receiptFileName = input.receiptFile.name || `receipt-${Date.now()}.jpg`;
    const receiptContentType = input.receiptFile.type || "image/jpeg";

    const submission = await apiJson<ApiSubmission>("/api/payments/backend4app/submit", {
      method: "POST",
      body: JSON.stringify({
        userId: input.userId,
        userName: input.userName,
        userPhone: input.userPhone,
        amount: input.amount,
        bankName: input.bankName,
        accountNumber: input.accountNumber,
        transactionRef: input.transactionRef,
        paymentMethod: input.paymentMethod,
        submitterNotes: input.submitterNotes || null,
        receiptBase64,
        receiptFileName,
        receiptContentType,
      }),
    });

    return submission;
  },

  async getBackend4AppReceipts(userId: string): Promise<PaymentSubmissionWithReceiptUrl[]> {
    return apiJson<PaymentSubmissionWithReceiptUrl[]>(`/api/payments/backend4app/receipts?userId=${encodeURIComponent(userId)}`);
  },

  async approveBackend4AppPaymentWithReceipt(paymentId: string, adminNotes?: string): Promise<PaymentSubmissionWithReceiptUrl> {
    return apiJson<PaymentSubmissionWithReceiptUrl>("/api/payments/backend4app/approve", {
      method: "POST",
      body: JSON.stringify({
        paymentId,
        adminNotes,
      }),
    });
  },

  async rejectBackend4AppPaymentWithReceipt(paymentId: string, reason: string): Promise<PaymentSubmissionWithReceiptUrl> {
    return apiJson<PaymentSubmissionWithReceiptUrl>("/api/payments/backend4app/reject", {
      method: "POST",
      body: JSON.stringify({
        paymentId,
        reason,
      }),
    });
  },

  async listAllSubmissions(): Promise<PaymentSubmissionWithReceiptUrl[]> {
    return apiJson<PaymentSubmissionWithReceiptUrl[]>("/api/payments/admin/submissions");
  },

  async getPaymentHistory(userId: string, options?: {
    status?: PaymentSubmissionStatus;
    limit?: number;
    offset?: number;
  }): Promise<{
    submissions: PaymentSubmissionWithReceiptUrl[];
    total: number;
    userId: string;
    filters: {
      status?: string;
      limit?: number;
      offset?: number;
    };
  }> {
    const params = new URLSearchParams({ userId });
    
    if (options?.status) {
      params.append('status', options.status);
    }
    
    if (options?.limit) {
      params.append('limit', options.limit.toString());
    }
    
    if (options?.offset) {
      params.append('offset', options.offset.toString());
    }

    return apiJson(`/api/payments/history?${params.toString()}`);
  },
};
