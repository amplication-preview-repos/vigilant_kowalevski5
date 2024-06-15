import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GradeWhereInput = {
  course?: CourseWhereUniqueInput;
  id?: StringFilter;
  score?: FloatNullableFilter;
  studentId?: StringNullableFilter;
  typeField?: "Option1";
};
