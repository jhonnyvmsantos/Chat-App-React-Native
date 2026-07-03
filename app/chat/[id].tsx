import { FlatList, StyleSheet, View } from "react-native";

import ChatHeader from "@/components/chat/ChatHeader";
import MessageBubble from "@/components/chat/MessageBubble";
import MessageInput from "@/components/chat/MessageInput";

import { messages } from "@/mocks/messages";

import { Info } from "@/types/info";

const info: Info = {
  id: "1",
  type: "private",
  name: "Maria",
};

export default function ChatScreen() {
  return (
    <View style={styles.container}>
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
    </View>
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