import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type AttendanceCreateInput = {
  course?: CourseWhereUniqueInput | null;
  date?: Date | null;
  status?: "Option1" | null;
  studentId?: string | null;
};
