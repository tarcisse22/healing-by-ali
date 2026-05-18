import { NextRequest, NextResponse } from "next/server";
import { getContact, setContact } from "@/lib/store";
import { getTokenFromHeader } from "@/lib/auth";

export async function GET() {
  const contact = await getContact();
  return NextResponse.json(contact);
}

export async function PUT(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!(await getTokenFromHeader(auth))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const contact = await request.json();
    const ok = await setContact(contact);
    if (!ok) {
      return NextResponse.json(
        { error: "Storage not configured. Please set up Upstash Redis." },
        { status: 503 }
      );
    }
    return NextResponse.json({ message: "Contact updated", contact });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
