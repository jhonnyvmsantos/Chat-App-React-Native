import { FieldValue, Timestamp } from "firebase/firestore";

export interface Message {
  id: string;
  chatId: string;
  senderId?: string;
  text: string;
  createdAt: Timestamp | FieldValue;
  replyTo?: string;
  status?: "sending" | "sent" | "read";

  isMine?: boolean;
  senderName?: string;
  isGroup?: boolean;
}
