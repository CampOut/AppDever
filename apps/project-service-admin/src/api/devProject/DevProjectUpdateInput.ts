import { EpicUpdateManyWithoutDevProjectsInput } from "./EpicUpdateManyWithoutDevProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DevProjectUpdateInput = {
  description?: string;
  epics?: EpicUpdateManyWithoutDevProjectsInput;
  owner?: UserWhereUniqueInput;
  title?: string;
};
