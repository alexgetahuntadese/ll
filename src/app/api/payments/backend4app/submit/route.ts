import { NextRequest, NextResponse } from "next/server";

import { createSubmission, mapParseSubmission, uploadReceiptToBack4App } from "../../_lib";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      userId,
      userName,
      userPhone,
      amount,
      bankName,
      accountNumber,
      transactionRef,
      paymentMethod,
      submitterNotes,
      receiptBase64,
      receiptFileName,
      receiptContentType,
    } = body ?? {};

    if (!userId || !amount || !bankName || !accountNumber || !transactionRef || !paymentMethod) {
      return NextResponse.json({ error: "Missing required payment fields." }, { status: 400 });
    }

    // Upload receipt to Back4App file storage
    let receiptUrl = null;
    if (receiptBase64 && receiptFileName) {
      const uploadedFile = await uploadReceiptToBack4App(
        receiptFileName,
        receiptContentType || "application/octet-stream",
        receiptBase64
      );
      receiptUrl = uploadedFile.url;
    }

    const created = await createSubmission({
      user: {
        __type: "Pointer",
        className: "_User",
        objectId: userId,
      },
      userName: userName || null,
      userPhone: userPhone || null,
      amount: Number(amount),
      bankName,
      accountNumber,
      transactionRef,
      paymentMethod,
      status: "pending",
      receiptUrl: receiptUrl,
      submittedAt: {
        __type: "Date",
        iso: new Date().toISOString(),
      },
      submitterNotes: submitterNotes || null,
    });

    return NextResponse.json(
      mapParseSubmission({
        objectId: created.objectId,
        createdAt: created.createdAt,
        updatedAt: created.createdAt,
        user: {
          __type: "Pointer",
          className: "_User",
          objectId: userId,
        },
        userName: userName || null,
        userPhone: userPhone || null,
        amount: Number(amount),
        bankName,
        accountNumber,
        transactionRef,
        paymentMethod,
        status: "pending",
        receiptUrl: receiptUrl,
        submittedAt: {
        __type: "Date",
        iso: new Date().toISOString(),
      },
        submitterNotes: submitterNotes || null,
      })
    );
  } catch (error) {
    console.error("Back4App payment submit error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Payment submission failed." },
      { status: 500 }
    );
  }
}
