import { SortOrder } from "../../util/SortOrder";

export type DevProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
