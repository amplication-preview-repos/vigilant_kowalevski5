import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type GradeCreateInput = {
  course?: CourseWhereUniqueInput | null;
  score?: number | null;
  studentId?: string | null;
  typeField?: "Option1" | null;
};
