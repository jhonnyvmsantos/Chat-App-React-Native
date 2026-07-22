import { Timestamp } from "firebase/firestore";

export type User = {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  createdAt?: Timestamp;
  isOnline?: boolean;
  lastSeen?: Timestamp | null;
  emailSearch?: string[];
};
