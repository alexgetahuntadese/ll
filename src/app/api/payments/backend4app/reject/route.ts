import { NextRequest, NextResponse } from "next/server";

import { getSubmission, mapParseSubmission, updateSubmission } from "../../_lib";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentId, reason } = body ?? {};

    if (!paymentId) {
      return NextResponse.json({ error: "Missing paymentId." }, { status: 400 });
    }

    const existing = await getSubmission(paymentId);
    await updateSubmission(paymentId, {
      status: "rejected",
      submitterNotes: reason || existing.submitterNotes || null,
    });

    const updated = await getSubmission(paymentId);
    return NextResponse.json(mapParseSubmission(updated));
  } catch (error) {
    console.error("Back4App payment reject error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to reject payment." },
      { status: 500 }
    );
  }
}
