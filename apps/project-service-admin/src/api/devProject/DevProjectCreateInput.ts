import { EpicCreateNestedManyWithoutDevProjectsInput } from "./EpicCreateNestedManyWithoutDevProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DevProjectCreateInput = {
  description: string;
  epics?: EpicCreateNestedManyWithoutDevProjectsInput;
  owner: UserWhereUniqueInput;
  title: string;
};
