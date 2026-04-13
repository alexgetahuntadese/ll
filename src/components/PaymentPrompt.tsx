import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, CheckCircle2, Clock, CreditCard, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { getTrialAccess, getTrialDaysRemaining, isTrialExpired, type TrialAccess } from "@/lib/paymentAccess";

type PaymentPromptProps = {
  context: string;
  className?: string;
};

const PaymentPrompt = ({ context, className = "" }: PaymentPromptProps) => {
  const navigate = useNavigate();
  const { hasPremiumAccess, paymentStatus } = useAuth();
  const [trialAccess, setTrialAccess] = useState<TrialAccess | null>(null);

  useEffect(() => {
    setTrialAccess(getTrialAccess());
  }, []);

  const trialActive = trialAccess && !isTrialExpired(trialAccess);
  const trialExpired = trialAccess && isTrialExpired(trialAccess);
  const daysRemaining = getTrialDaysRemaining(trialAccess);

  const statusText = "All chapters and subjects are unlocked! Start learning immediately.";

  const statusIcon = <CheckCircle2 className="h-3.5 w-3.5" />;
  const statusLabel = "All Unlocked";

  return (
    <div className={`rounded-3xl border border-emerald-400/25 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/10 p-5 text-white shadow-xl backdrop-blur-xl ${className}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-100">
            {statusIcon}
            {statusLabel}
          </div>
          <h2 className="text-xl font-bold text-white">Keep learning access open in {context}</h2>
          <p className="mt-1 max-w-2xl text-sm text-white/75">{statusText}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={() => navigate("/payment")}
            className="bg-white text-slate-950 hover:bg-white/90"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            {hasPremiumAccess ? "Manage Access" : paymentStatus === "pending" ? "Check Review" : "Open Payment"}
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/payment")}
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            {hasPremiumAccess ? "View Payment History" : trialActive ? "Manage Trial" : "Start Free Trial"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPrompt;
