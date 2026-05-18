import { NextRequest, NextResponse } from "next/server";
import { getTestimonials, setTestimonials } from "@/lib/store";
import { getTokenFromHeader } from "@/lib/auth";

export async function GET() {
  const testimonials = await getTestimonials();
  return NextResponse.json(testimonials);
}

export async function PUT(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!(await getTokenFromHeader(auth))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const testimonials = await request.json();
    const ok = await setTestimonials(testimonials);
    if (!ok) {
      return NextResponse.json(
        { error: "Storage not configured. Please set up Upstash Redis." },
        { status: 503 }
      );
    }
    return NextResponse.json({ message: "Testimonials updated", testimonials });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (!(await getTokenFromHeader(auth))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const testimonial = await request.json();
    const current = await getTestimonials();
    current.push(testimonial);
    const ok = await setTestimonials(current);
    if (!ok) {
      return NextResponse.json(
        { error: "Storage not configured. Please set up Upstash Redis." },
        { status: 503 }
      );
    }
    return NextResponse.json({ message: "Testimonial added", testimonials: current });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
