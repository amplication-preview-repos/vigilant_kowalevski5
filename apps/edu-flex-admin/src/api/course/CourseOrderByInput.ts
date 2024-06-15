import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  schoolId?: SortOrder;
  teacherId?: SortOrder;
  updatedAt?: SortOrder;
};
