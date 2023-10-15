import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEVPROJECT_TITLE_FIELD } from "../devProject/DevProjectTitle";

export const EpicList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Epics"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
