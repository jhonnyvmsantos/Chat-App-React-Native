export interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount?: number;
  avatar?: string;
  isOnline?: boolean;
}
