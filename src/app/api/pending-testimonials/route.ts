import { NextRequest, NextResponse } from "next/server";
import { getPendingTestimonials, approvePendingTestimonial, rejectPendingTestimonial } from "@/lib/store";
import { getTokenFromHeader } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!(await getTokenFromHeader(auth))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const pending = await getPendingTestimonials();
  return NextResponse.json(pending);
}

export async function POST(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!(await getTokenFromHeader(auth))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { action, index } = await request.json();
    if (typeof index !== "number") {
      return NextResponse.json({ error: "Index is required" }, { status: 400 });
    }
    if (action === "approve") {
      const ok = await approvePendingTestimonial(index);
      if (!ok) {
        return NextResponse.json({ error: "Failed to approve" }, { status: 500 });
      }
      return NextResponse.json({ message: "Testimonial approved and published!" });
    } else if (action === "reject") {
      const ok = await rejectPendingTestimonial(index);
      if (!ok) {
        return NextResponse.json({ error: "Failed to reject" }, { status: 500 });
      }
      return NextResponse.json({ message: "Testimonial rejected." });
    }
    return NextResponse.json({ error: "Invalid action. Use 'approve' or 'reject'." }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
