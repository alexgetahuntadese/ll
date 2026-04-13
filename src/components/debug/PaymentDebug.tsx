import { useAuth } from "@/hooks/useAuth";
import { firebaseReady } from "@/lib/firebase/client";

const PaymentDebug = () => {
  const { isAuthenticated, hasPremiumAccess, paymentStatus, profile } = useAuth();

  return (
    <div className="p-4 bg-black/10 rounded-lg text-white text-sm">
      <h3 className="font-bold mb-2">Payment Debug Info:</h3>
      <div>Firebase Ready: {firebaseReady ? "Yes" : "No"}</div>
      <div>Is Authenticated: {isAuthenticated ? "Yes" : "No"}</div>
      <div>Has Premium: {hasPremiumAccess ? "Yes" : "No"}</div>
      <div>Payment Status: {paymentStatus || "None"}</div>
      <div>Profile ID: {profile?.id || "None"}</div>
      <div>Profile Preferences: {JSON.stringify(profile?.preferences || {}, null, 2)}</div>

      <div className="mt-4 p-3 bg-yellow-500/20 rounded">
        <p className="font-semibold">If Firebase Ready shows "No":</p>
        <p>1. Copy .env.example to .env.local</p>
        <p>2. Add your Firebase credentials</p>
        <p>3. Restart the development server</p>
      </div>
    </div>
  );
};

export default PaymentDebug;
