import { DevProject as TDevProject } from "../api/devProject/DevProject";

export const DEVPROJECT_TITLE_FIELD = "title";

export const DevProjectTitle = (record: TDevProject): string => {
  return record.title?.toString() || String(record.id);
};
