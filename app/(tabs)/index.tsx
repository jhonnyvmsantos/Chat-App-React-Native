import ChatItem from "@/components/chat/ChatItem";
import { Chat } from "@/types/chat";
import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabListPrivateChatScreen() {

  const chat: Chat[] = [
    {
      id: "1",
      name: "Maria",
      lastMessage: "Oi, tudo bem?",
      lastMessageTime: "18:42",
      unreadCount: 2,
    },
    {
      id: "2",
      name: "João",
      lastMessage: "Valeu!",
      lastMessageTime: "Ontem",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Private's Chats</Text>

      <FlatList
        data={chat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem chat={item} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
