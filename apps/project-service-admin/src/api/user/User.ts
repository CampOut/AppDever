import { DevProject } from "../devProject/DevProject";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  devProjects?: Array<DevProject>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
