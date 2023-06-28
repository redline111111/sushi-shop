import data from "@/json/data.json";
import { NextResponse } from "next/server";
import { queryHandler } from "../query";
import { Item } from "@/types/Item";

export async function GET(req?: Request) {
  if (req) {
    const items = await queryHandler(req, data.items as Item[]);
    return NextResponse.json(items);
  }

  return NextResponse.json(data);
}
