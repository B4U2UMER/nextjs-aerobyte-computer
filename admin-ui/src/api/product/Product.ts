import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedPrice: number;
  id: string;
  images: JsonValue;
  review?: Review | null;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  varient: JsonValue;
};
