import { db } from "@/firebase/config";
import { Message } from "@/types/message";
import {
    addDoc,
    collection,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";

export async function sendMessage(
  chatId: string,
  senderId: string,
  text: string,
  replyTo?: string,
) {
  const docRef = await addDoc(collection(db, "chat", chatId, "messages"), {
    infoId: chatId,
    senderId,
    text,
    replyTo,
    status: "sent",
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getMessages(chatId: string): Promise<Message[]> {
  const q = query(
    collection(db, "chat", chatId, "messages"),
    orderBy("createdAt"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Message, "id">),
  }));
}
