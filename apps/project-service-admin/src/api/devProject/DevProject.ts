import { Epic } from "../epic/Epic";
import { User } from "../user/User";

export type DevProject = {
  createdAt: Date;
  description: string;
  epics?: Array<Epic>;
  id: string;
  owner?: User;
  title: string;
  updatedAt: Date;
};
