import data from "@/json/data.json";
import { NextResponse } from "next/server";
import { queryHandler } from "../../query";
import { Item } from "@/types/Item";

export async function GET(req: Request) {
  const favorites = data.items.filter((item) => item.favorite);

  if (req.url) {
    const items = await queryHandler(req, favorites as Item[]);
    return NextResponse.json(items);
  }
  return NextResponse.json(favorites);
}
