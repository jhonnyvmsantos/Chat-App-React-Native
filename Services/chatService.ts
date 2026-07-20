import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import { db } from "@/firebase/config";
import { Chat } from "@/types/chat";

const chatCollection = collection(db, "chat");

export function generatorPrivateKey(myUid: string, otherUid: string): string {
  return [myUid, otherUid].sort().join("_");
}

export async function getChat(chatId: string): Promise<Chat | null> {
  const ref = doc(db, "chat", chatId);

  const res = await getDoc(ref);

  if (!res.exists()) {
    return null;
  }

  return {
    id: res.id,
    ...(res.data() as Omit<Chat, "id">),
  };
}

export async function getPrivateChat(
  myUid: string,
  otherUid: string,
): Promise<Chat | null> {
  const privateKey = generatorPrivateKey(myUid, otherUid);

  const q = query(
    chatCollection,
    where("privateKey", "==", privateKey),
    limit(1),
  );

  const res = await getDocs(q);

  if (res.empty) {
    return null;
  }

  const chat = res.docs[0];

  return {
    id: chat.id,
    ...(chat.data() as Omit<Chat, "id">),
  };
}

export async function createPrivateChat(
  myUid: string,
  otherUid: string,
  name: string,
  avatar?: string,
): Promise<Chat> {
  const privateKey = generatorPrivateKey(myUid, otherUid);

  const docRef = await addDoc(chatCollection, {
    privateKey,
    name,
    type: "user",
    avatar,
    participants: [myUid, otherUid],
    lastMessage: "",
    lastMessageTime: "",
    unreadCount: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  const chat = await getChat(docRef.id);

  if (!chat) {
    throw new Error("Erro ao criar chat.");
  }

  return chat;
}

export async function getOrCreatePrivateChat(
  myUid: string,
  otherUid: string,
  name: string,
  avatar?: string,
): Promise<Chat> {
  const existing = await getPrivateChat(myUid, otherUid);

  if (existing) {
    return existing;
  }

  return createPrivateChat(myUid, otherUid, name, avatar);
}
