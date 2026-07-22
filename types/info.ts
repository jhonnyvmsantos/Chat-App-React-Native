import { FieldValue, Timestamp } from "firebase/firestore";
import { User } from "./user";

export interface Info {
  id?: string;
  type: "user" | "group";
  participants: User[];
  privateKey?: string;
  photoUrl?: string;
  title?: string;
  lastMessage?: string;
  lastMessageTime?: Timestamp | null;
  unreadCount?: number;
  description?: string;
  createdAt: Timestamp | FieldValue;
  updatedAt: Timestamp | FieldValue;
}
