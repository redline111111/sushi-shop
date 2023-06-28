import data from "@/json/data.json";
import { NextResponse } from "next/server";
import { IdQueryHandler, queryHandler } from "../query";
import { Item } from "@/types/Item";

export async function GET(req: Request) {
  const items = await IdQueryHandler(req, data.items as Item[]);

  return NextResponse.json(items);
}
