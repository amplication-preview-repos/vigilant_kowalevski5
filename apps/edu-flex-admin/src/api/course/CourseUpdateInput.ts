import { AttendanceUpdateManyWithoutCoursesInput } from "./AttendanceUpdateManyWithoutCoursesInput";
import { GradeUpdateManyWithoutCoursesInput } from "./GradeUpdateManyWithoutCoursesInput";
import { ScheduleUpdateManyWithoutCoursesInput } from "./ScheduleUpdateManyWithoutCoursesInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type CourseUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutCoursesInput;
  description?: string | null;
  grades?: GradeUpdateManyWithoutCoursesInput;
  name?: string | null;
  schedules?: ScheduleUpdateManyWithoutCoursesInput;
  school?: SchoolWhereUniqueInput | null;
  teacherId?: string | null;
};
