import ChatItem from "@/components/chat/ChatItem";
import { Chat } from "@/types/chat";
import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabListGroupsChatScreen() {

  const chat: Chat[] = [
    {
      id: "grupo1",
      name: "Família",
      lastMessage: "Carlos: Bom dia!",
      lastMessageTime: "09:15",
      unreadCount: 8,
    },
    {
      id: "grupo2",
      name: "Equipe Dev",
      lastMessage: "Deploy realizado",
      lastMessageTime: "Ontem",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Group's Chats</Text>

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
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
