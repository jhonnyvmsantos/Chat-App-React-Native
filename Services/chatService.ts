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

import { useAuth } from "@/contexts/AuthContext";
import { User } from "@/types/user";

const { profile } = useAuth();

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

export async function createPrivateChat(user: User): Promise<Chat | undefined> {
  if (!user || !profile) {
    return;
  }

  const privateKey = generatorPrivateKey(profile?.id || "", user.id || "");

  const chat: Chat = {
    privateKey,
    type: "user",
    participants: [profile, user],
    lastMessage: "",
    lastMessageTime: null,
    unreadCount: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const docRef = await addDoc(chatCollection, chat);

  const res = await getChat(docRef.id);

  if (!res) {
    throw new Error("Erro ao criar chat.");
  }

  return res;
}
