import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  teacherId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
