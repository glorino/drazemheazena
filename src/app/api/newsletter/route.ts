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
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existing = await sql`
      SELECT id, is_active FROM newsletter_subscribers 
      WHERE email = ${email}
    `;

    if (existing.length > 0) {
      if (existing[0].is_active) {
        return NextResponse.json(
          { message: "You are already subscribed!" },
          { status: 200 }
        );
      }
      // Reactivate subscription
      await sql`
        UPDATE newsletter_subscribers 
        SET is_active = true 
        WHERE email = ${email}
      `;
      return NextResponse.json(
        { message: "Welcome back! Your subscription has been reactivated." },
        { status: 200 }
      );
    }

    const result = await sql`
      INSERT INTO newsletter_subscribers (email)
      VALUES (${email})
      RETURNING id, subscribed_at
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing! You will receive our latest updates.",
        id: result[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
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

    const subscribers = await sql`
      SELECT COUNT(*) as count FROM newsletter_subscribers 
      WHERE is_active = true
    `;

    return NextResponse.json({
      success: true,
      count: parseInt(subscribers[0].count),
    });
  } catch (error) {
    console.error("Fetch subscribers error:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}
