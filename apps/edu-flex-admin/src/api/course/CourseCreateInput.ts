import { AttendanceCreateNestedManyWithoutCoursesInput } from "./AttendanceCreateNestedManyWithoutCoursesInput";
import { GradeCreateNestedManyWithoutCoursesInput } from "./GradeCreateNestedManyWithoutCoursesInput";
import { ScheduleCreateNestedManyWithoutCoursesInput } from "./ScheduleCreateNestedManyWithoutCoursesInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type CourseCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutCoursesInput;
  description?: string | null;
  grades?: GradeCreateNestedManyWithoutCoursesInput;
  name?: string | null;
  schedules?: ScheduleCreateNestedManyWithoutCoursesInput;
  school?: SchoolWhereUniqueInput | null;
  teacherId?: string | null;
};
