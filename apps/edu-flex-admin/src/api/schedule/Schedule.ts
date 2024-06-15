import { Course } from "../course/Course";

export type Schedule = {
  course?: Course | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  teacherId: string | null;
  time: Date | null;
  updatedAt: Date;
};
