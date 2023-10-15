import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { DEVPROJECT_TITLE_FIELD } from "../devProject/DevProjectTitle";

export const EpicShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Project"
          source="devproject.id"
          reference="DevProject"
        >
          <TextField source={DEVPROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="tite" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
