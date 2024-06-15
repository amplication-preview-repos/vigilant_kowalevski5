export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  recipientId: string | null;
  senderId: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
