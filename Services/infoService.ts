import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/firebase/config";
import { Info } from "@/types/info";
import { User } from "@/types/user";

const coll = collection(db, "info");

export function generatorPrivateKey(myUid: string, otherUid: string): string {
  return [myUid, otherUid].sort().join("_");
}

export async function getInfo(uid: string): Promise<Info | null> {
  const ref = doc(db, "info", uid);

  const res = await getDoc(ref);

  if (!res.exists()) {
    return null;
  }

  return {
    id: res.id,
    ...(res.data() as Omit<Info, "id">),
  };
}

export async function createPrivateInfo(
  user: User,
  profile: User,
): Promise<Info | null> {
  if (!user || !profile) {
    return null;
  }

  const privateKey = generatorPrivateKey(profile?.id || "", user.id || "");

  const info: Info = {
    privateKey,
    type: "user",
    participants: [profile, user],
    lastMessage: "",
    lastMessageTime: null,
    unreadCount: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const docRef = await addDoc(coll, info);

  const res = await getInfo(docRef.id);

  if (!res) {
    throw new Error("Erro ao criar o info.");
  }

  return res;
}
