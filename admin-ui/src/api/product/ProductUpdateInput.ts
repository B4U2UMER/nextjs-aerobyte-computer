import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountedPrice?: number;
  images?: InputJsonValue;
  review?: ReviewWhereUniqueInput | null;
  title?: string;
  titlePrice?: number;
  varient?: InputJsonValue;
};
