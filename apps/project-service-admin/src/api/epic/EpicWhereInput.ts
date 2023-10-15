import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DevProjectWhereUniqueInput } from "../devProject/DevProjectWhereUniqueInput";

export type EpicWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  project?: DevProjectWhereUniqueInput;
  tite?: StringNullableFilter;
};
