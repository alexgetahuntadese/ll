import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  CreditCard,
  ShieldCheck,
  Upload,
  XCircle,
} from "lucide-react";

import StarField from "@/components/StarField";
import TopBar from "@/components/TopBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import { paymentService, type PaymentSubmissionWithReceiptUrl } from "@/lib/back4app/payments";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

const PAYMENT_AMOUNT_BIRR = "200";

const bankOptions = {
  cbe: {
    label: "Commercial Bank of Ethiopia",
    accountName: "Alexander Getahun Tadese",
    accountNumber: "1000282751279",
  },
  telebirr: {
    label: "Telebirr",
    accountName: "Alexander Getahun Tadese",
    accountNumber: "0949835147",
  },
} as const;

const statusMeta = {
  verified: {
    label: "Verified",
    className: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  approved: {
    label: "Approved",
    className: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  pending: {
    label: "Pending Review",
    className: "bg-amber-500/15 text-amber-100 border-amber-400/30",
    icon: <Clock3 className="h-4 w-4" />,
  },
  rejected: {
    label: "Rejected",
    className: "bg-rose-500/15 text-rose-100 border-rose-400/30",
    icon: <XCircle className="h-4 w-4" />,
  },
} as const;

const PaymentPage = () => {
  const navigate = useNavigate();
  const { displayName, hasPremiumAccess, isAdmin, paymentStatus, profile, refreshProfile, user } = useAuth();
  const { t } = useLanguage();
  const [paymentMethod, setPaymentMethod] = useState<"cbe" | "telebirr">("cbe");
  const [transactionRef, setTransactionRef] = useState("");
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [notes, setNotes] = useState("");
  const [submissions, setSubmissions] = useState<PaymentSubmissionWithReceiptUrl[]>([]);
  const [isLoadingSubmissions, setIsLoadingSubmissions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentChannel = bankOptions[paymentMethod];

  const accessState = useMemo(() => {
    if (hasPremiumAccess) {
      return {
        label: t("payment.premiumActive"),
        description: t("payment.premiumActiveDesc"),
        className: "bg-emerald-500/15 text-emerald-100 border-emerald-400/30",
      };
    }

    if (paymentStatus === "pending") {
      return {
        label: t("payment.paymentPending"),
        description: t("payment.paymentPendingDesc"),
        className: "bg-amber-500/15 text-amber-100 border-amber-400/30",
      };
    }

    if (paymentStatus === "rejected") {
      return {
        label: t("payment.paymentRejected"),
        description: t("payment.paymentRejectedDesc"),
        className: "bg-rose-500/15 text-rose-100 border-rose-400/30",
      };
    }

    return {
      label: t("payment.paymentRequired"),
      description: t("payment.paymentRequiredDesc"),
      className: "bg-sky-500/15 text-sky-100 border-sky-400/30",
    };
  }, [hasPremiumAccess, paymentStatus, t]);

  const refreshSubmissions = async () => {
    try {
      const userId = user?.uid || profile?.id || "";
      if (!userId) return;
      const items = await paymentService.listOwnSubmissions(userId);
      setSubmissions(items);
    } catch (error) {
      console.error("Failed to refresh submissions:", error);
    }
  };

  useEffect(() => {
    let active = true;

    const loadSubmissions = async () => {
      setIsLoadingSubmissions(true);

      try {
        const userId = user?.uid || profile?.id || "";
        if (!userId) return;
        const items = await paymentService.listOwnSubmissions(userId);
        if (active) {
          setSubmissions(items);
        }
      } catch (error) {
        if (active) {
          console.error("Failed to load payment submissions:", error);
        }
      } finally {
        if (active) {
          setIsLoadingSubmissions(false);
        }
      }
    };

    void loadSubmissions();

    return () => {
      active = false;
    };
  }, [user, profile]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!transactionRef.trim()) {
      toast.error(t("payment.enterTransactionRef"));
      return;
    }

    const userId = user?.uid || profile?.id || "";
    if (!userId) {
      toast.error("User not authenticated");
      return;
    }

    setIsSubmitting(true);

    try {
      if (receiptFile) {
        await paymentService.submitPaymentWithReceipt({
          userId,
          userName: profile?.name || displayName || null,
          userPhone: profile?.phone || null,
          amount: Number(PAYMENT_AMOUNT_BIRR),
          bankName: currentChannel.label,
          accountNumber: currentChannel.accountNumber,
          paymentMethod,
          transactionRef: transactionRef.trim(),
          receiptFile,
          submitterNotes: notes.trim(),
        });
      } else {
        await paymentService.submitPayment({
          userId,
          userName: profile?.name || displayName || null,
          userPhone: profile?.phone || null,
          amount: Number(PAYMENT_AMOUNT_BIRR),
          bankName: currentChannel.label,
          accountNumber: currentChannel.accountNumber,
          paymentMethod,
          transactionRef: transactionRef.trim(),
          receiptFile: null,
          submitterNotes: notes.trim(),
        });
      }

      toast.success(receiptFile ? t("payment.paymentSubmitted") : t("payment.paymentSubmittedWithoutReceipt"));
      setTransactionRef("");
      setReceiptFile(null);
      setFileInputKey((current) => current + 1);
      setNotes("");
      await Promise.all([refreshSubmissions(), refreshProfile()]);
    } catch (error: any) {
      toast.error(error?.message || t("payment.paymentError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-slate-950 pt-14 px-4 pb-4 md:p-8 md:pt-14 overflow-hidden relative">
      <StarField starCount={36} shootingCount={2} />
      <TopBar />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{t("payment.title")}</h1>
            <p className="text-white/55 text-sm">
              {t("payment.subtitle")} {displayName}.
            </p>
          </div>
          <Badge className={accessState.className}>{accessState.label}</Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-white/[0.05] border-white/[0.10] backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                {t("payment.payAmount")}
              </CardTitle>
              <CardDescription className="text-white/60">
                {t("payment.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-white/65 text-sm">{t("payment.requiredAmount")}</p>
                      <p className="text-3xl font-bold text-white">{t("payment.payAmount")}</p>
                    </div>
                    <ShieldCheck className="h-8 w-8 text-emerald-300" />
                  </div>
                  <p className="mt-3 text-sm text-white/55">{accessState.description}</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paymentMethod" className="text-white">{t("payment.paymentMethod")}</Label>
                  <select
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={(event) => setPaymentMethod(event.target.value as "cbe" | "telebirr")}
                    className="flex h-10 w-full rounded-md border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white"
                  >
                    <option value="cbe" className="text-black">CBE</option>
                    <option value="telebirr" className="text-black">Telebirr</option>
                  </select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-white">{t("payment.receiverName")}</Label>
                    <Input value={currentChannel.accountName} readOnly className="bg-white/[0.03] border-white/10 text-white/70" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">{t("payment.accountNumber")}</Label>
                    <Input value={currentChannel.accountNumber} readOnly className="bg-white/[0.03] border-white/10 text-white/70" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transactionRef" className="text-white">{t("payment.transactionRef")}</Label>
                  <Input
                    id="transactionRef"
                    value={transactionRef}
                    onChange={(event) => setTransactionRef(event.target.value)}
                    placeholder={t("payment.enterTransactionRef")}
                    className="bg-white/[0.04] border-white/15 text-white placeholder:text-white/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="receipt" className="text-white">{t("payment.receiptScreenshot")}</Label>
                  <Input
                    key={fileInputKey}
                    id="receipt"
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={(event) => setReceiptFile(event.target.files?.[0] ?? null)}
                    className="bg-white/[0.04] border-white/15 text-white file:text-white"
                  />
                  <p className="text-xs text-white/45">{t("payment.fileTypes")}</p>
                  <p className="text-xs text-amber-200/90">{t("payment.receiptOptionalHelp")}</p>
                  {receiptFile && (
                    <p className="text-xs text-emerald-200">
                      Selected: {receiptFile.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-white">{t("payment.notesForReview")}</Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder={t("payment.optionalNotes")}
                    className="bg-white/[0.04] border-white/15 text-white placeholder:text-white/30"
                  />
                </div>

                <div className="rounded-xl border border-sky-400/30 bg-sky-500/10 p-4 text-sm text-sky-100">
                  <p className="font-semibold mb-2">💡 {t("payment.afterSubmission")}</p>
                  <ul className="space-y-1 text-xs">
                    <li>• {t("payment.receiptStored")}</li>
                    <li>• {t("payment.refreshPage")}</li>
                    <li>• {t("payment.premiumActivates")}</li>
                    <li>• {t("payment.receiveNotification")}</li>
                  </ul>
                </div>

                {isAdmin && (
                  <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-4 text-sm text-cyan-100">
                    {t("payment.adminAccount")}{" "}
                    <Link to="/admin/payments" className="font-semibold text-cyan-200 underline underline-offset-4">
                      {t("payment.adminPaymentApprovalsPage")}
                    </Link>
                    .
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || hasPremiumAccess}
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-semibold"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {hasPremiumAccess ? t("payment.premiumAlreadyActive") : isSubmitting ? t("payment.submitting") : t("payment.submitPaymentReceipt")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white/[0.05] border-white/[0.10] backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">{t("payment.accessSummary")}</CardTitle>
                <CardDescription className="text-white/60">
                  {t("payment.currentAccessState")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45 mb-2">{t("payment.student")}</p>
                  <p className="text-white font-semibold">{profile?.name || displayName}</p>
                  <p className="text-white/55 text-sm">{profile?.phone || "No phone number available"}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45 mb-2">Status</p>
                  <Badge className={accessState.className}>{accessState.label}</Badge>
                  <p className="text-white/60 text-sm mt-3">{accessState.description}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45 mb-2">{t("payment.whatHappensNext")}</p>
                  <div className="space-y-2 text-sm text-white/65">
                    <p>{t("payment.transferInstructions")}</p>
                    <p>{t("payment.uploadInstructions")}</p>
                    <p>{t("payment.adminReviewInstructions")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/[0.05] border-white/[0.10] backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">{t("payment.submissionHistory")}</CardTitle>
                <CardDescription className="text-white/60">
                  {t("payment.recentSubmissions")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingSubmissions ? (
                  <div className="text-sm text-white/55">{t("payment.loadingSubmissions")}</div>
                ) : submissions.length === 0 ? (
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/55">
                    {t("payment.noSubmissions")}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {submissions.map((submission) => {
                      const meta = statusMeta[submission.status as keyof typeof statusMeta] || {
                        label: t("payment.unknown"),
                        className: "bg-gray-500/15 text-gray-200 border-gray-400/30",
                        icon: <Clock3 className="h-4 w-4" />,
                      };

                      return (
                        <div key={submission.id} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="font-medium text-white">{submission.payment_method.toUpperCase()} {t("payment.cbePayment").toLowerCase() === submission.payment_method.toLowerCase() ? "" : t("payment.telebirrPayment").toLowerCase() === submission.payment_method.toLowerCase() ? "" : ""} payment</p>
                              <p className="text-sm text-white/55">
                                {submission.amount} ETB • {t("payment.ref")} {submission.transaction_ref}
                              </p>
                            </div>
                            <Badge className={meta.className}>
                              {meta.icon}
                              <span className="ml-1">{meta.label}</span>
                            </Badge>
                          </div>
                          <p className="mt-3 text-xs text-white/45">
                            {t("payment.submitted")} {new Date(submission.submitted_at).toLocaleString()}
                          </p>
                          {submission.submitter_notes && (
                            <p className="mt-2 text-sm text-white/60">{t("payment.submitterNotes")} {submission.submitter_notes}</p>
                          )}
                          {submission.reviewer_notes && (
                            <p className="mt-2 text-sm text-white/60">{t("payment.reviewerNotes")} {submission.reviewer_notes}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
