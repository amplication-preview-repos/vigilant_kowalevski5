import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ScheduleWhereInput = {
  course?: CourseWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  teacherId?: StringNullableFilter;
  time?: DateTimeNullableFilter;
};
