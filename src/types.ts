export type MenuCategory = "coffee" | "tea" | "bakery";

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  emoji: string;
  category: MenuCategory;
};