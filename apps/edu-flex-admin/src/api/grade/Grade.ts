import { Course } from "../course/Course";

export type Grade = {
  course?: Course | null;
  createdAt: Date;
  id: string;
  score: number | null;
  studentId: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
