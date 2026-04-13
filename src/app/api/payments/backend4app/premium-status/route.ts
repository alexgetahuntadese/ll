import { NextRequest, NextResponse } from "next/server";

import { listSubmissions } from "../../_lib";
import { userProfileService } from "@/lib/firebase/auth";
import { hasPremiumPreferences, setPremiumAccess } from "@/lib/authRoles";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Missing userId parameter." }, { status: 400 });
    }

    const userProfile = await userProfileService.getUserProfile(userId);
    const profileHasPremium = hasPremiumPreferences(userProfile?.preferences as any);

    if (profileHasPremium) {
      return NextResponse.json({
        hasPremiumUpdate: false,
        timestamp: null,
        message: null,
      });
    }

    const approvedPayments = await listSubmissions({
      user: {
        __type: "Pointer",
        className: "_User",
        objectId: userId,
      },
      status: {
        $in: ["approved", "verified"],
      },
    });

    if (!approvedPayments?.results?.length) {
      return NextResponse.json({
        hasPremiumUpdate: false,
        timestamp: null,
        message: null,
      });
    }

    if (userProfile) {
      const latestSubmission = approvedPayments.results[0];
      const nextPreferences = setPremiumAccess(userProfile.preferences, {
        premium: true,
        paymentStatus: "approved",
        paidAt: new Date().toISOString(),
        paidUntil: null,
        paymentSubmissionId: latestSubmission.objectId,
      });

      await userProfileService.upsertProfile({
        ...userProfile,
        preferences: nextPreferences,
      });
    }

    return NextResponse.json({
      hasPremiumUpdate: true,
      timestamp: Date.now(),
      message: "Your payment has been approved! Premium access is now available.",
    });
  } catch (error) {
    console.error("Premium status check error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to check premium status." },
      { status: 500 }
    );
  }
}
