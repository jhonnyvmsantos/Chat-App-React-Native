import { FlatList, StyleSheet } from "react-native";

import ChatHeader from "@/components/chat/ChatHeader";
import MessageBubble from "@/components/chat/MessageBubble";
import MessageInput from "@/components/chat/MessageInput";

import { messages } from "@/mocks/messages";

import { Info } from "@/types/info";
import { SafeAreaView } from "react-native-safe-area-context";

const info: Info = {
  id: "1",
  type: "private",
  name: "Maria",
};

export default function ChatScreen() {
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