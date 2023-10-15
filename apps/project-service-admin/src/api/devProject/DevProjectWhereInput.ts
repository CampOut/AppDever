import { StringFilter } from "../../util/StringFilter";
import { EpicListRelationFilter } from "../epic/EpicListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DevProjectWhereInput = {
  description?: StringFilter;
  epics?: EpicListRelationFilter;
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
  title?: StringFilter;
};
