import ChatItem from "@/components/chat/ChatItem";
import { Info } from "@/types/info";

import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabListGroupsChatScreen() {
  const chats: Info[] = [
    {
      id: "grupo1",
      type: "group",
      name: "Família",
      lastMessage: "Carlos: Bom dia!",
      lastMessageTime: "09:15",
      unreadCount: 8,
      members: 8,
    },
    {
      id: "grupo2",
      type: "group",
      name: "Equipe Dev",
      lastMessage: "Deploy realizado",
      lastMessageTime: "Ontem",
      unreadCount: 0,
      members: 12,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Group Chats</Text>

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