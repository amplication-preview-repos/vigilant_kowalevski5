import { CourseUpdateManyWithoutSchoolsInput } from "./CourseUpdateManyWithoutSchoolsInput";
import { UserUpdateManyWithoutSchoolsInput } from "./UserUpdateManyWithoutSchoolsInput";

export type SchoolUpdateInput = {
  courses?: CourseUpdateManyWithoutSchoolsInput;
  name?: string | null;
  users?: UserUpdateManyWithoutSchoolsInput;
};
