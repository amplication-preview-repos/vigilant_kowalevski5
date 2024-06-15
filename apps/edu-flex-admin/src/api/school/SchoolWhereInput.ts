import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SchoolWhereInput = {
  courses?: CourseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
