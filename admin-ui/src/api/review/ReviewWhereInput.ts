import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  products?: ProductWhereUniqueInput;
  rating?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
