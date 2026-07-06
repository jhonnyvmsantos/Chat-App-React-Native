export interface Info {
  id: string;
  name: string;
  type: "user" | "group";
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
  avatar?: string;
  isOnline?: boolean;
  description?: string;
  members?: number;
}
