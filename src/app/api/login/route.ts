import { NextRequest, NextResponse } from "next/server";
import { verifyCredentials, createToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!verifyCredentials(email, password)) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
    const token = await createToken();
    return NextResponse.json({ token });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
