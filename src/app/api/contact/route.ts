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
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required" },
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

    const result = await sql`
      INSERT INTO contact_submissions (name, email, phone, subject, message)
      VALUES (${name}, ${email}, ${phone || null}, ${subject}, ${message})
      RETURNING id, created_at
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We will get back to you soon!",
        id: result[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit message. Please try again." },
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

    const submissions = await sql`
      SELECT * FROM contact_submissions 
      ORDER BY created_at DESC 
      LIMIT 50
    `;

    return NextResponse.json({ success: true, data: submissions });
  } catch (error) {
    console.error("Fetch submissions error:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
