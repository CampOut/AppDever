import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DevProjectTitle } from "../devProject/DevProjectTitle";

export const EpicEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
