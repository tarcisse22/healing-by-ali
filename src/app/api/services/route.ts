import { NextRequest, NextResponse } from "next/server";
import { getServices, setServices } from "@/lib/store";
import { getTokenFromHeader } from "@/lib/auth";

export async function GET() {
  const services = await getServices();
  return NextResponse.json(services);
}

export async function PUT(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!(await getTokenFromHeader(auth))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const services = await request.json();
    const ok = await setServices(services);
    if (!ok) {
      return NextResponse.json(
        { error: "Storage not configured. Please set up Upstash Redis." },
        { status: 503 }
      );
    }
    return NextResponse.json({ message: "Services updated", services });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
