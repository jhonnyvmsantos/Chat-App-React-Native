import ChatItem from "@/components/chat/ChatItem";
import { Info } from "@/types/info";

import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabListPrivateChatScreen() {
  const chats: Info[] = [
    {
      id: "1",
      type: "private",
      name: "Maria",
      lastMessage: "Oi, tudo bem?",
      lastMessageTime: "18:42",
      unreadCount: 2,
    },
    {
      id: "2",
      type: "private",
      name: "João",
      lastMessage: "Valeu!",
      lastMessageTime: "Ontem",
      unreadCount: 0,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Private Chats</Text>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem info={item} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 16,
  },

  listContent: {
    paddingBottom: 20,
  },
});