import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ScheduleCreateInput = {
  course?: CourseWhereUniqueInput | null;
  date?: Date | null;
  teacherId?: string | null;
  time?: Date | null;
};
