import { Item } from "@/types/Item";

export async function queryHandler(req: Request, data: Item[]) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category");
  const offset = Number(searchParams.get("offset")) || 0;
  const limit = Number(searchParams.get("limit")) || 10;

  let currentItems = data;

  if (category) {
    currentItems = data.filter((item) => item.category === category);
  }

  return currentItems.slice(offset, offset + limit);
}

export async function idsQueryHandler(req: Request, data: Item[]) {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get("params");

  let currentItems = data.filter((item) => ids?.includes(String(item.id)));

  return currentItems;
}

export async function favoritesQueryHandler(req: Request, data: Item[]) {
  const { searchParams } = new URL(req.url);

  const favorites = Boolean(searchParams.get("favorite"));

  let currentItems = data;

  if (favorites !== null) {
    currentItems = data.filter((item) => item.favorite === favorites);
  }

  return currentItems;
}

export async function IdQueryHandler(req: Request, data: Item[]) {
  const { searchParams } = new URL(req.url);

  const id = Number(searchParams.get("id"));

  let currentItems = data;

  if (id !== null) {
    currentItems = data.filter((item) => item.id === id);
  }

  return currentItems;
}
