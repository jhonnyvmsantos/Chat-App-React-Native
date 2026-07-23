import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    query,
    serverTimestamp,
    setDoc,
    where,
} from "firebase/firestore";

import { db } from "@/firebase/config";
import { Chat } from "@/types/chat";
import { User } from "@/types/user";
import { generatorPrivateKey } from "./infoService";

const coll = collection(db, "chat");

export async function getChat(chatId: string) {
  const ref = doc(db, "chat", chatId);

  const res = await getDoc(ref);

  if (!res.exists()) return null;

  return {
    id: res.id,
    ...(res.data() as Omit<Chat, "id">),
  };
}

export async function getPrivateChat(uid1: string, uid2: string) {
  const key = generatorPrivateKey(uid1, uid2);

  const q = query(coll, where("privateKey", "==", key), limit(1));

  const res = await getDocs(q);

  if (res.empty) return null;

  return {
    id: res.docs[0].id,
    ...(res.docs[0].data() as Omit<Chat, "id">),
  };
}

export async function createPrivateChat(participants: User[]) {
  const key = generatorPrivateKey(
    participants[0].id || "",
    participants[1].id || "",
  );

  const docRef = await addDoc(coll, {
    type: "user",
    participants,
    privateKey: key,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  // cria a subcollection
  await setDoc(doc(db, "chat", docRef.id, "metadata", "config"), {
    createdAt: serverTimestamp(),
  });

  return getChat(docRef.id);
}

export async function createGroupChat(
  title: string,
  participants: User[],
  description?: string,
  photoUrl?: string,
) {
  const docRef = await addDoc(coll, {
    type: "group",
    title,
    participants,
    description,
    photoUrl,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  await setDoc(doc(db, "chat", docRef.id, "metadata", "config"), {
    createdAt: serverTimestamp(),
  });

  return getChat(docRef.id);
}
