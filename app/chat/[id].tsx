import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MessageInput from "@/components/chat/MessageInput";


export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // const chat = 

  // if (!chat) {
  //   return null;
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* <ChatHeader chat={chat} /> */}

      {/* <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={chat.messages || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble
            msg={item}
          />
        )}
      /> */}

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