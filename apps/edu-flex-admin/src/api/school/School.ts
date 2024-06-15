import { Course } from "../course/Course";
import { User } from "../user/User";

export type School = {
  courses?: Array<Course>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
