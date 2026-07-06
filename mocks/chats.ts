import { Info } from "@/types/info";

export const chats: Info[] = [
  {
    id: "1",
    name: "Maria",
    type: "user",
    lastMessage: "Oi, tudo bem?",
    lastMessageTime: "18:42",
    unreadCount: 2,
    //   avatar?: "",
    isOnline: true,
    // description: "",
    // members: 1,
  },
  {
    id: "2",
    type: "user",
    name: "João",
    lastMessage: "Valeu!",
    lastMessageTime: "Ontem",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: "3",
    type: "user",
    name: "Mario",
    lastMessage: "É sobre isso, né",
    lastMessageTime: "Há 2 dias",
    unreadCount: 1,
    isOnline: true,
  },
];
