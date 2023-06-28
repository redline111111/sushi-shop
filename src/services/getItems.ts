import { CategoryItem } from "@/types/Item";

export const getAllItems = async (offset?: number, limit?: number) => {
  const response = await fetch(
    `/api/items${
      offset !== undefined ? `?offset=${offset}&limit=${limit}` : ""
    }`
  );
  if (!response.ok) throw new Error("unable to fetch items");

  return response.json();
};

export const getCountItems = async (isFavorite?: boolean) => {
  const response = await fetch(
    `/api/items/count${
      isFavorite !== undefined ? `?favorite=${isFavorite}` : ""
    }`
  );

  if (!response.ok) throw new Error("unable to fetch count items");

  return response.json();
};

export const getCategories = async () => {
  const response = await fetch("/api/items/categories");

  if (!response.ok) throw new Error("unable to fetch categories");

  return response.json();
};

export const getByCategory = async (category: CategoryItem) => {
  const response = await fetch(`/api/items?category=${category}`);

  if (!response.ok) throw new Error("unable to fetch category");

  return response.json();
};

export const getFavorites = async (offset?: number, limit?: number) => {
  const response = await fetch(
    `/api/items/favorites${
      offset !== undefined ? `?offset=${offset}&limit=${limit}` : ""
    }`
  );

  if (!response.ok) throw new Error("unable to fetch favorites");

  return response.json();
};

export const getById = async (id: number) => {
  const response = await fetch(`/api/item?id=${id}`);

  if (!response.ok) throw new Error("unable to fetch item");

  return response.json();
};

export const getAllByIds = async (ids: number[]) => {
  const response = await fetch(`/api/items/ids?params=${ids}`);

  if (!response.ok) throw new Error("unable to fetch item");

  return response.json();
};
