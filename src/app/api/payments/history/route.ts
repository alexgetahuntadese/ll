import { NextRequest, NextResponse } from "next/server";

import { listSubmissions, mapParseSubmission } from "../_lib";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const status = searchParams.get("status");
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");

    if (!userId) {
      return NextResponse.json({ error: "userId is required." }, { status: 400 });
    }

    const whereClause: Record<string, unknown> = {
      user: {
        __type: "Pointer",
        className: "_User",
        objectId: userId,
      },
    };

    if (status) {
      whereClause.status = status;
    }

    const queryParams: Record<string, unknown> = {
      where: whereClause,
      order: "-submittedAt",
    };
    
    if (limit) {
      queryParams.limit = parseInt(limit);
    }
    
    if (offset) {
      queryParams.skip = parseInt(offset);
    }

    const response = await listSubmissions(queryParams);
    const submissions = response.results.map(mapParseSubmission);

    return NextResponse.json({
      submissions,
      total: submissions.length,
      userId,
      filters: { status, limit, offset },
    });
  } catch (error) {
    console.error("Payment history fetch error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch payment history." },
      { status: 500 }
    );
  }
}
