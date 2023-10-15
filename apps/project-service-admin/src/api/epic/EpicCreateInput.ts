import { DevProjectWhereUniqueInput } from "../devProject/DevProjectWhereUniqueInput";

export type EpicCreateInput = {
  description?: string | null;
  project?: DevProjectWhereUniqueInput | null;
  tite?: string | null;
};
