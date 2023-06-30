import data from "@/json/data.json";
import { NextResponse } from "next/server";
import { favoritesQueryHandler } from "../../query";
import { Item } from "@/types/Item";

export async function GET(req: Request) {
  if (req.url)
    return await NextResponse.json(
      (
        await favoritesQueryHandler(req, data.items as Item[])
      ).length
    );

  return NextResponse.json(data.items.length);
}
