import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ChatHeader from "@/components/chat/ChatHeader";
import MessageBubble from "@/components/chat/MessageBubble";
import MessageInput from "@/components/chat/MessageInput";

import { groupChats } from "@/mocks/groupChats";
import { privateChats } from "@/mocks/privateChats";

import {
  groupMessages,
  privateMessages,
} from "@/mocks/messages";

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const info =
    privateChats.find((chat) => chat.id === id) ??
    groupChats.find((chat) => chat.id === id);

  if (!info) {
    return null;
  }

  const messages =
    info.type === "private"
      ? privateMessages
      : groupMessages;

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader info={info} />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble
            message={item}
            currentUserId="me"
            isGroup={info.type === "group"}
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