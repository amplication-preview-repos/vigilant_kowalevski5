import { Attendance as TAttendance } from "../api/attendance/Attendance";

export const ATTENDANCE_TITLE_FIELD = "studentId";

export const AttendanceTitle = (record: TAttendance): string => {
  return record.studentId?.toString() || String(record.id);
};
