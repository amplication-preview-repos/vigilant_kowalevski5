import { Schedule as TSchedule } from "../api/schedule/Schedule";

export const SCHEDULE_TITLE_FIELD = "teacherId";

export const ScheduleTitle = (record: TSchedule): string => {
  return record.teacherId?.toString() || String(record.id);
};
