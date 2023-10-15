import { SortOrder } from "../../util/SortOrder";

export type EpicOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  tite?: SortOrder;
  updatedAt?: SortOrder;
};
