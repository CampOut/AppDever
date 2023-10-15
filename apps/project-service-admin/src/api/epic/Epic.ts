import { DevProject } from "../devProject/DevProject";

export type Epic = {
  createdAt: Date;
  description: string | null;
  id: string;
  project?: DevProject | null;
  tite: string | null;
  updatedAt: Date;
};
