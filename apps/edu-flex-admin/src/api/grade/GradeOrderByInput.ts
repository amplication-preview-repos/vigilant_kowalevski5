import { SortOrder } from "../../util/SortOrder";

export type GradeOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  studentId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
