import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeListRelationFilter } from "../grade/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type CourseWhereInput = {
  attendances?: AttendanceListRelationFilter;
  description?: StringNullableFilter;
  grades?: GradeListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  schedules?: ScheduleListRelationFilter;
  school?: SchoolWhereUniqueInput;
  teacherId?: StringNullableFilter;
};
