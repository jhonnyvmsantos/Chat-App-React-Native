import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "@/firebase/config";
import { User } from "@/types/user";

async function createProfile(
  uid: string,
  displayName: string,
  email: string,
): Promise<void> {
  const user: User = {
    displayName,
    email,
    photoURL: "",
    bio: "",
    createdAt: serverTimestamp(),
    isOnline: false,
    lastSeen: null,
  };

  await setDoc(doc(db, "profile", uid), user);
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

async function getProfileByEmail(email: string) {
  const q = query(
    collection(db, "profile"),
    where("email", "==", email.toLowerCase()),
    limit(10),
  );

  const res = await getDocs(q);

  if (res.empty) {
    return null;
  }

  return {
    id: res.docs[0].id,
    ...(res.docs[0].data() as Omit<User, "id">),
  };
}

export { createProfile, getProfile, getProfileByEmail, updateProfile };

