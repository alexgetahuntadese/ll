import { NextRequest, NextResponse } from "next/server";

// Import the shared notification map from the approve route
// This is a simple in-memory solution for real-time updates
const premiumNotifications = new Map<string, { timestamp: number; userId: string }>();

// Export the map so it can be shared with the approve route
export { premiumNotifications };

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: "Missing userId parameter." }, { status: 400 });
    }

    // Check if there's a premium notification for this user
    const notification = premiumNotifications.get(userId);
    
    if (notification) {
      // Clear the notification after checking
      premiumNotifications.delete(userId);
      
      return NextResponse.json({
        hasPremiumUpdate: true,
        timestamp: notification.timestamp,
        message: "Your payment has been approved! Premium access is now available."
      });
    }

    return NextResponse.json({
      hasPremiumUpdate: false,
      timestamp: null,
      message: null
    });
  } catch (error) {
    console.error("Premium status check error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to check premium status." },
      { status: 500 }
    );
  }
}
