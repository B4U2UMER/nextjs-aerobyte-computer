import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  colors?: JsonFilter;
  description?: JsonFilter;
  discountedPrice?: FloatFilter;
  id?: StringFilter;
  images?: JsonFilter;
  review?: ReviewWhereUniqueInput;
  title?: StringFilter;
  titlePrice?: FloatFilter;
  varient?: JsonFilter;
};
