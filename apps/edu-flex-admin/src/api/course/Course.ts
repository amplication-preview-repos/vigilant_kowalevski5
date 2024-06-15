import { Attendance } from "../attendance/Attendance";
import { Grade } from "../grade/Grade";
import { Schedule } from "../schedule/Schedule";
import { School } from "../school/School";

export type Course = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  description: string | null;
  grades?: Array<Grade>;
  id: string;
  name: string | null;
  schedules?: Array<Schedule>;
  school?: School | null;
  teacherId: string | null;
  updatedAt: Date;
};
