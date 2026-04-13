import { NextRequest, NextResponse } from "next/server";

import { getSubmission, mapParseSubmission, updateSubmission } from "../../_lib";
import { userProfileService } from "@/lib/firebase/auth";
import { setPremiumAccess } from "@/lib/authRoles";
import { premiumNotifications } from "../premium-status/route";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentId, adminNotes } = body ?? {};

    if (!paymentId) {
      return NextResponse.json({ error: "Missing paymentId." }, { status: 400 });
    }

    const existing = await getSubmission(paymentId);
    
    // Update payment status to approved
    await updateSubmission(paymentId, {
      status: "approved",
      submitterNotes: adminNotes || existing.submitterNotes || null,
    });

    // Grant premium access to the user if they have a user ID
    if (existing.user?.objectId) {
      try {
        // Get the user's current profile
        const userProfile = await userProfileService.getUserProfile(existing.user.objectId);
        
        if (userProfile) {
          // Update user preferences to grant premium access
          const currentPreferences = userProfile.preferences as any || {};
          const updatedPreferences = setPremiumAccess(currentPreferences, {
            premium: true,
            paymentStatus: "verified",
            paidAt: new Date().toISOString(),
            paidUntil: null, // No expiration - lifetime access
            paymentSubmissionId: paymentId,
          });

          // Update the user profile with premium access
          const updatedProfile = await userProfileService.upsertProfile({
            ...userProfile,
            preferences: updatedPreferences,
          });
          
          // Store notification for real-time premium access update
          premiumNotifications.set(existing.user.objectId, {
            timestamp: Date.now(),
            userId: existing.user.objectId,
          });
          
          console.log(`Granted premium access to user ${existing.user.objectId} for payment ${paymentId}`);
        }
      } catch (profileError) {
        console.error("Failed to update user premium access:", profileError);
        // Continue with payment approval even if profile update fails
      }
    }

    const updated = await getSubmission(paymentId);
    return NextResponse.json(mapParseSubmission(updated));
  } catch (error) {
    console.error("Back4App payment approve error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to approve payment." },
      { status: 500 }
    );
  }
}
