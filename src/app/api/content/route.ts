import { NextResponse } from "next/server";
import { getAllContent } from "@/lib/store";

export async function GET() {
  const content = await getAllContent();
  return NextResponse.json(content);
}
