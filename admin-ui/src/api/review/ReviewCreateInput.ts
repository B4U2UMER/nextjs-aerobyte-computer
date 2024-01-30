import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  products?: ProductWhereUniqueInput | null;
  rating?: number | null;
  user: UserWhereUniqueInput;
};
