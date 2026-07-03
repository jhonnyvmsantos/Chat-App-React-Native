import { Message } from "@/types/message";

export const messages: Message[] = [
  {
    id: "1",
    senderId: "1",
    senderName: "Maria",
    text: "Oi!",
    createdAt: "18:20",
    isMine: false,
  },
  {
    id: "2",
    senderId: "me",
    senderName: "Jhonny",
    text: "Oi Maria 👋",
    createdAt: "18:21",
    isMine: true,
  },
  {
    id: "3",
    senderId: "1",
    senderName: "Maria",
    text: "Tudo bem?",
    createdAt: "18:22",
    isMine: false,
  },
  {
    id: "4",
    senderId: "me",
    senderName: "Jhonny",
    text: "Tudo ótimo!",
    createdAt: "18:23",
    isMine: true,
  },
  {
    id: "5",
    senderId: "1",
    senderName: "Maria",
    text: "Vamos jogar hoje?",
    createdAt: "18:24",
    isMine: false,
  },
  {
    id: "6",
    senderId: "me",
    senderName: "Jhonny",
    text: "Claro 😄",
    createdAt: "18:25",
    isMine: true,
  },
];
