import { User } from "@/types/user";

export const users: User[] = [
  {
    id: "me",
    name: "Jhonny",
    isOnline: true,
  },
  {
    id: "1",
    name: "Maria",
    isOnline: true,
  },
  {
    id: "2",
    name: "João",
    isOnline: false,
    lastSeen: "Hoje às 18:15",
  },
  {
    id: "3",
    name: "Carlos",
    isOnline: true,
  },
  {
    id: "4",
    name: "Ana",
    isOnline: false,
    lastSeen: "Ontem",
  },
];
