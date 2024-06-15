import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttendanceWhereInput = {
  course?: CourseWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  studentId?: StringNullableFilter;
};
