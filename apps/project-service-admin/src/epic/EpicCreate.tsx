import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DevProjectTitle } from "../devProject/DevProjectTitle";

export const EpicCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="project.id"
          reference="DevProject"
          label="Project"
        >
          <SelectInput optionText={DevProjectTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="tite" />
      </SimpleForm>
    </Create>
  );
};
