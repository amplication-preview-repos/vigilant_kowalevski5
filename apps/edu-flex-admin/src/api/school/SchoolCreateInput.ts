import { CourseCreateNestedManyWithoutSchoolsInput } from "./CourseCreateNestedManyWithoutSchoolsInput";
import { UserCreateNestedManyWithoutSchoolsInput } from "./UserCreateNestedManyWithoutSchoolsInput";

export type SchoolCreateInput = {
  courses?: CourseCreateNestedManyWithoutSchoolsInput;
  name?: string | null;
  users?: UserCreateNestedManyWithoutSchoolsInput;
};
