import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ChatHeader from "@/components/chat/ChatHeader";
import MessageBubble from "@/components/chat/MessageBubble";
import MessageInput from "@/components/chat/MessageInput";

import { messages } from "@/mocks/messages";

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const chat = messages.find((chat) => chat.id === id)

  if (!chat) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader info={chat} />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={chat.messages || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble
            msg={item}
          />
        )}
      />

      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
  },

  list: {
    flex: 1,
  },

  listContent: {
    paddingVertical: 10,
  },
});