import { useAuth } from "@/hooks/useAuth";

interface RequireAdminProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const RequireAdmin = ({ children, fallback }: RequireAdminProps) => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  if (!isAuthenticated || !isAdmin) {
    return fallback || <div>Admin access required</div>;
  }

  return <>{children}</>;
};

export default RequireAdmin;
