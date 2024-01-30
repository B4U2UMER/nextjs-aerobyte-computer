import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <div />
        <div />
        <NumberInput label="discountedPrice" source="discountedPrice" />
        <div />
        <ReferenceInput source="review.id" reference="Review" label="reviews">
          <SelectInput optionText={ReviewTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <NumberInput label="titlePrice" source="titlePrice" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
