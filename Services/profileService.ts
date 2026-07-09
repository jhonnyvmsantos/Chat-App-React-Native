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
  await setDoc(doc(db, "profile", uid), {
    displayName,
    email,
    photoURL: "",
    createdAt: serverTimestamp(),
    online: false,
    lastSeen: null,
  });
}

async function getProfile(uid: string): Promise<User | null> {
  const res = await getDoc(doc(db, "profile", uid));

  if (!res.exists()) {
    return null;
  }

  return {
    id: res.id,
    ...(res.data() as Omit<User, "id">),
  };
}

async function updateProfile(uid: string, data: Partial<User>): Promise<void> {
  await updateDoc(doc(db, "profile", uid), data);
}

async function deleteProfile(uid: string): Promise<void> {
  await deleteDoc(doc(db, "profile", uid));
}

async function setOnline(uid: string, online: boolean): Promise<void> {
  await updateDoc(doc(db, "profile", uid), {
    online,
  });
}

async function updateLastSeen(uid: string): Promise<void> {
  await updateDoc(doc(db, "profile", uid), {
    lastSeen: serverTimestamp(),
  });
}

async function updatePhotoURL(uid: string, photoURL: string): Promise<void> {
  await updateDoc(doc(db, "profile", uid), {
    photoURL,
  });
}

export { createProfile, getProfile, updateProfile };

