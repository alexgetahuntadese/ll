import { useAuth } from "@/hooks/useAuth";

const AuthDebug = () => {
  const { isAuthenticated, isAdmin, isLoading, user, profile } = useAuth();

  if (isLoading) {
    return <div>Loading auth state...</div>;
  }

  return (
    <div className="p-4 bg-black/10 rounded-lg text-white text-sm">
      <h3 className="font-bold mb-2">Auth Debug Info:</h3>
      <div>Is Authenticated: {isAuthenticated ? "✅ Yes" : "❌ No"}</div>
      <div>Is Admin: {isAdmin ? "✅ Yes" : "❌ No"}</div>
      <div>User ID: {user?.id || "None"}</div>
      <div>User Phone: {user?.phone || "None"}</div>
      <div>Profile ID: {profile?.id || "None"}</div>
      <div>Profile Name: {profile?.name || "None"}</div>
      <div>Profile Preferences: {JSON.stringify(profile?.preferences || {}, null, 2)}</div>
    </div>
  );
};

export default AuthDebug;
