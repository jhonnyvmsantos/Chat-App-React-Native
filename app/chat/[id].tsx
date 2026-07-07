import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import { chats } from "@/mocks/chats";
import { groups, users } from "@/mocks/messages";

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const info =
    chats.users.find((chat) => chat.id === id) ??
    chats.groups.find((chat) => chat.id === id);

  if (!info) {
    return null;
  }

  const messages =
    info.type === "user"
      ? users
      : groups;

  return (
    <SafeAreaView style={styles.container}>
      {/* <ChatHeader info={info} />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble
            message={item}
          />
        )}
      />

      <MessageInput /> */}
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