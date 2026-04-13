import { useEffect, useCallback } from 'react';
import { useAuth } from './useAuth';

export const usePremiumStatusCheck = () => {
  const { user, refreshProfile, hasPremiumAccess } = useAuth();

  const checkPremiumStatus = useCallback(async () => {
    if (!user?.id) return;

    try {
      const response = await fetch(`/api/payments/backend4app/premium-status?userId=${encodeURIComponent(user.id)}`);
      const data = await response.json();

      if (response.ok && data.hasPremiumUpdate) {
        console.log('Premium access granted! Refreshing profile...');
        // Refresh the user's profile to get updated premium status
        await refreshProfile();
        
        // Show a notification to the user
        if (data.message) {
          // You could use a toast notification system here
          console.log(data.message);
        }
      }
    } catch (error) {
      console.error('Failed to check premium status:', error);
    }
  }, [user?.id, refreshProfile]);

  // Check premium status periodically (every 30 seconds)
  useEffect(() => {
    if (!user?.id || hasPremiumAccess) return;

    const interval = setInterval(checkPremiumStatus, 30000);

    // Check immediately on mount
    checkPremiumStatus();

    return () => clearInterval(interval);
  }, [user?.id, hasPremiumAccess, checkPremiumStatus]);

  // Also check when the window gains focus (user returns to the tab)
  useEffect(() => {
    if (!user?.id || hasPremiumAccess) return;

    const handleFocus = () => {
      checkPremiumStatus();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [user?.id, hasPremiumAccess, checkPremiumStatus]);

  return { checkPremiumStatus };
};
