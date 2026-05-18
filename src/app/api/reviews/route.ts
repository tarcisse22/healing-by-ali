import { NextRequest, NextResponse } from "next/server";
import { addPendingTestimonial } from "@/lib/store";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, service, stars, quote } = body;

    if (!name || !service || !quote || typeof stars !== "number" || stars < 1 || stars > 5) {
      return NextResponse.json(
        { error: "Please fill in all fields (name, service, stars 1-5, quote)." },
        { status: 400 }
      );
    }

    const testimonial = {
      name: String(name).trim().slice(0, 100),
      service: String(service).trim().slice(0, 100),
      stars: Math.min(5, Math.max(1, Math.round(stars))),
      quote: String(quote).trim().slice(0, 1000),
    };

    const ok = await addPendingTestimonial(testimonial);
    if (!ok) {
      return NextResponse.json(
        { error: "Unable to submit review right now. Please try again later." },
        { status: 503 }
      );
    }

    return NextResponse.json({ message: "Thank you! Your review has been submitted and is pending approval." });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
