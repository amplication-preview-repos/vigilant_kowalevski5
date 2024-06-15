import { Course } from "../course/Course";

export type Attendance = {
  course?: Course | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  studentId: string | null;
  updatedAt: Date;
};
