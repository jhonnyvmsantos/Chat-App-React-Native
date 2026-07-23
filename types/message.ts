export interface Message {
  id: string;
  infoId: string;
  senderId?: string;
  text: string;
  createdAt: string;
  replyTo?: string;
  status?: "sending" | "sent" | "read";
}
