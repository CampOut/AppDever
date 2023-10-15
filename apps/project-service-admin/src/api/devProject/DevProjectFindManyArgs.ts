import { DevProjectWhereInput } from "./DevProjectWhereInput";
import { DevProjectOrderByInput } from "./DevProjectOrderByInput";

export type DevProjectFindManyArgs = {
  where?: DevProjectWhereInput;
  orderBy?: Array<DevProjectOrderByInput>;
  skip?: number;
  take?: number;
};
