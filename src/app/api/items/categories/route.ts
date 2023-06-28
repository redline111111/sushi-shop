import data from "@/json/data.json";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = new Set();
  data.items.forEach((item) => categories.add(item.category));

  return NextResponse.json(Array.from(categories));
}
