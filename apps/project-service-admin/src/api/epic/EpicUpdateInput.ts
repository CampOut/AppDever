import { DevProjectWhereUniqueInput } from "../devProject/DevProjectWhereUniqueInput";

export type EpicUpdateInput = {
  description?: string | null;
  project?: DevProjectWhereUniqueInput | null;
  tite?: string | null;
};
