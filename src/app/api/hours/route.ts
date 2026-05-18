import { NextRequest, NextResponse } from "next/server";
import { getHours, setHours } from "@/lib/store";
import { getTokenFromHeader } from "@/lib/auth";

export async function GET() {
  const hours = await getHours();
  return NextResponse.json(hours);
}

export async function PUT(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!(await getTokenFromHeader(auth))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const hours = await request.json();
    const ok = await setHours(hours);
    if (!ok) {
      return NextResponse.json(
        { error: "Storage not configured. Please set up Upstash Redis." },
        { status: 503 }
      );
    }
    return NextResponse.json({ message: "Hours updated", hours });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
