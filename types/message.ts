export interface Message {
  id: string;
  chatId: string;
  senderId?: string;
  text: string;
  createdAt: string;
  replyTo?: string;
  status?: "sending" | "sent" | "read";
}
