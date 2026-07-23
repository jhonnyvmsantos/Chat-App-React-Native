import { FieldValue, Timestamp } from "firebase/firestore";
import { Message } from "./message";
import { User } from "./user";

export interface Chat {
  id?: string;
  privateKey?: string;
  type: "user" | "group";
  participants: User[];
  photoUrl?: string;
  title?: string;
  description?: string;
  messages?: Message[];
  createdAt: Timestamp | FieldValue;
  updatedAt: Timestamp | FieldValue;
}
