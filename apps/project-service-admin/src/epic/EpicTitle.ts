import { Epic as TEpic } from "../api/epic/Epic";

export const EPIC_TITLE_FIELD = "tite";

export const EpicTitle = (record: TEpic): string => {
  return record.tite?.toString() || String(record.id);
};
