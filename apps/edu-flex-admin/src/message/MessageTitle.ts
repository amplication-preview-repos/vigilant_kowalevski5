import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "recipientId";

export const MessageTitle = (record: TMessage): string => {
  return record.recipientId?.toString() || String(record.id);
};
