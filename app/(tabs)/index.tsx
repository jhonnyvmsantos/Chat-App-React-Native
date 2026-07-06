import ChatItem from "@/components/chat/ChatItem";

import { chats } from "@/mocks/chats";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabListPrivateChatScreen() {

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