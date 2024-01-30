import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="colors" source="colors" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="discountedPrice" source="discountedPrice" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <ReferenceField label="reviews" source="review.id" reference="Review">
          <TextField source={REVIEW_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <TextField label="titlePrice" source="titlePrice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="varient" source="varient" />
      </Datagrid>
    </List>
  );
};
