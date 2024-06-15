import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: "Option1";
  school?: SchoolWhereUniqueInput;
  username?: StringFilter;
};
