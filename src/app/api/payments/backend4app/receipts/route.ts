import { NextRequest, NextResponse } from "next/server";

import { listSubmissions, mapParseSubmission } from "../../_lib";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Missing userId parameter." }, { status: 400 });
    }

    const response = await listSubmissions({
      user: {
        __type: "Pointer",
        className: "_User",
        objectId: userId,
      },
    });
    const submissions = response.results.map(mapParseSubmission);

    return NextResponse.json(submissions);
  } catch (error) {
    console.error("Back4App receipts fetch error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch receipts." },
      { status: 500 }
    );
  }
}
