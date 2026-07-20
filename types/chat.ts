import { Timestamp } from "firebase/firestore";

export interface Chat {
  id: string;
  privateKey?: string;
  name: string;
  type: "user" | "group";
  participants: string[];
  lastMessage?: string;
  lastMessageTime?: Timestamp;
  unreadCount?: number;
  avatar?: string;
  isOnline?: boolean;
  description?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
