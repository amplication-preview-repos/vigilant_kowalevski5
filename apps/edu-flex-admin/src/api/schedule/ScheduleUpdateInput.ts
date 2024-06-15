import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ScheduleUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  date?: Date | null;
  teacherId?: string | null;
  time?: Date | null;
};
