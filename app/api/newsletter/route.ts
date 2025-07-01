import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

console.log("BREVO_API_KEY:", process.env.BREVO_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const BREVO_LIST_ID = process.env.BREVO_LIST_ID;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await axios.post(
      "https://api.brevo.com/v3/contacts",
      {
        email,
        listIds: [parseInt(BREVO_LIST_ID!)],
        updateEnabled: true,
      },
      {
        headers: {
          "api-key": BREVO_API_KEY!,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      }
    );
    return NextResponse.json({ success: true });
  } catch (error: any) {
    // Log the full error for debugging
    console.error("Brevo API error:", error?.response?.data || error.message || error);
    return NextResponse.json(
      { error: error?.response?.data?.message || JSON.stringify(error?.response?.data) || "Failed to add to Brevo." },
      { status: 500 }
    );
  }
}