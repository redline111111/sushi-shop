export interface Item extends CategoryItem {
  id: number;
  name: string;
  price: number;
  image: string;
  type: "none" | "hot" | "spicy";
  favorite?: true;
}
export type CategoryItem = {
  category?: "roll" | "nigiri" | "handRoll" | "onigiri";
};
