import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type AttendanceUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  date?: Date | null;
  status?: "Option1" | null;
  studentId?: string | null;
};
