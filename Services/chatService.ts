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

function createPrivateKey(uid1: string, uid2: string): string {
  return [uid1, uid2].sort().join("_");
}

export async function getChat(chatId: string): Promise<Chat | null> {
  const ref = doc(db, "chat", chatId);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<Chat, "id">),
  };
}

export async function getPrivateChat(
  uid1: string,
  uid2: string,
): Promise<Chat | null> {
  const privateKey = createPrivateKey(uid1, uid2);

  const q = query(
    chatCollection,
    where("privateKey", "==", privateKey),
    limit(1),
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  const chat = snapshot.docs[0];

  return {
    id: chat.id,
    ...(chat.data() as Omit<Chat, "id">),
  };
}

export async function createPrivateChat(
  uid1: string,
  uid2: string,
  name: string,
  avatar?: string,
  description?: string,
): Promise<Chat> {
  const privateKey = createPrivateKey(uid1, uid2);

  const docRef = await addDoc(chatCollection, {
    privateKey,

    name,
    type: "user",

    avatar,
    description,

    participants: [uid1, uid2],

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
  uid1: string,
  uid2: string,
  name: string,
  avatar?: string,
  description?: string,
): Promise<Chat> {
  const existing = await getPrivateChat(uid1, uid2);

  if (existing) {
    return existing;
  }

  return createPrivateChat(uid1, uid2, name, avatar, description);
}
