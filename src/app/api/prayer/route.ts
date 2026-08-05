import { NextRequest, NextResponse } from "next/server";
import sql, { initDatabase } from "@/lib/db";

let initialized = false;

export async function POST(request: NextRequest) {
  try {
    if (!initialized) {
      await initDatabase();
      initialized = true;
    }

    const body = await request.json();
    const { name, email, request: prayerRequest, isAnonymous } = body;

    if (!prayerRequest) {
      return NextResponse.json(
        { error: "Prayer request is required" },
        { status: 400 }
      );
    }

    const displayName = isAnonymous ? "Anonymous" : name || "Anonymous";

    const result = await sql`
      INSERT INTO prayer_requests (name, email, request, is_anonymous)
      VALUES (${displayName}, ${email || null}, ${prayerRequest}, ${isAnonymous || false})
      RETURNING id, created_at
    `;

    return NextResponse.json(
      {
        success: true,
        message:
          "Your prayer request has been received. Our prayer team will stand with you in prayer.",
        id: result[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Prayer request error:", error);
    return NextResponse.json(
      { error: "Failed to submit prayer request. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!initialized) {
      await initDatabase();
      initialized = true;
    }

    const requests = await sql`
      SELECT * FROM prayer_requests 
      ORDER BY created_at DESC 
      LIMIT 50
    `;

    return NextResponse.json({ success: true, data: requests });
  } catch (error) {
    console.error("Fetch prayer requests error:", error);
    return NextResponse.json(
      { error: "Failed to fetch prayer requests" },
      { status: 500 }
    );
  }
}
