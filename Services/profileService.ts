import {
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/firebase/config";
import { User } from "@/types/user";

async function createProfile(
  uid: string,
  displayName: string,
  email: string,
): Promise<void> {
  await setDoc(doc(db, "users", uid), {
    displayName,
    email,
    photoURL: "",
    createdAt: serverTimestamp(),
    online: false,
    lastSeen: null,
  });
}

async function getProfile(uid: string): Promise<User | null> {
  const snapshot = await getDoc(doc(db, "users", uid));

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<User, "id">),
  };
}

async function updateProfile(uid: string, data: Partial<User>): Promise<void> {
  await updateDoc(doc(db, "users", uid), data);
}

async function deleteProfile(uid: string): Promise<void> {
  await deleteDoc(doc(db, "users", uid));
}

async function setOnline(uid: string, online: boolean): Promise<void> {
  await updateDoc(doc(db, "users", uid), {
    online,
  });
}

async function updateLastSeen(uid: string): Promise<void> {
  await updateDoc(doc(db, "users", uid), {
    lastSeen: serverTimestamp(),
  });
}

async function updatePhotoURL(uid: string, photoURL: string): Promise<void> {
  await updateDoc(doc(db, "users", uid), {
    photoURL,
  });
}

export { createProfile, getProfile, updateProfile };

