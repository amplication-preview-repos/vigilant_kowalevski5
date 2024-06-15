import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type GradeUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  score?: number | null;
  studentId?: string | null;
  typeField?: "Option1" | null;
};
