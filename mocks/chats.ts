import { Chats } from "@/types/chats";

export const chats: Chats = {
  users: [
    {
      id: "1",
      name: "Maria",
      type: "user",
      lastMessage: "Claro 😄",
      lastMessageTime: "18:25",
      unreadCount: 0,
      isOnline: true,
    },
    {
      id: "2",
      name: "João",
      type: "user",
      lastMessage: "Valeu! Boa noite.",
      lastMessageTime: "20:15",
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: "3",
      name: "Carlos",
      type: "user",
      lastMessage: "Pode deixar!",
      lastMessageTime: "09:34",
      unreadCount: 1,
      isOnline: true,
    },
    {
      id: "4",
      name: "Ana",
      type: "user",
      lastMessage: "Até lá!",
      lastMessageTime: "14:06",
      unreadCount: 2,
      isOnline: true,
    },
  ],

  groups: [
    {
      id: "1",
      name: "Desenvolvimento",
      type: "group",
      lastMessage: "Perfeito 👍",
      lastMessageTime: "08:10",
      unreadCount: 0,
      members: 8,
    },
    {
      id: "2",
      name: "Família",
      type: "group",
      lastMessage: "Combinado, até domingo! ❤️",
      lastMessageTime: "19:35",
      unreadCount: 3,
      members: 12,
    },
    {
      id: "3",
      name: "Amigos",
      type: "group",
      lastMessage: "Fechou, bora! 🎮",
      lastMessageTime: "22:18",
      unreadCount: 1,
      members: 6,
    },
  ],
};
