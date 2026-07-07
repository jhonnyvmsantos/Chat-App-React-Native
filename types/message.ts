export interface Message {
  id: string;
  senderId?: string;
  senderName?: string;
  text: string;
  createdAt: string;
  isMine: boolean;
  isGroup?: boolean;
  image?: string;
  audio?: string;
  replyTo?: string;
  status?: "sending" | "sent" | "received" | "read";
}
