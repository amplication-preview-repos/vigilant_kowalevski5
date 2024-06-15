import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipientId?: SortOrder;
  senderId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
