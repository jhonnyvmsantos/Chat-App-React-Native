import { Timestamp } from "firebase/firestore";

export type User = {
  id: string;
  displayName: string;
  email: string;
  bio: string;
  photoURL: string;
  createdAt: Timestamp;
  online: boolean;
  lastSeen: Timestamp | null;
  emailSearch?: string[];
};
