import { FieldValue, Timestamp } from "firebase/firestore";

export type User = {
  id?: string;
  displayName: string;
  email: string;
  bio: string;
  photoURL: string;
  createdAt?: Timestamp | FieldValue;
  isOnline?: boolean;
  lastSeen?: Timestamp | FieldValue | null;
  emailSearch?: string[];
};
