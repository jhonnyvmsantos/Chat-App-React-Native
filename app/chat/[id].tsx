import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MessageInput from "@/components/chat/MessageInput";
import { useEffect } from "react";


export default function ChatScreen() {
  const { id, type } = useLocalSearchParams<{ id: string, type: "user" | "group" }>();

  useEffect(() => {
    if (type === "group") {
      return;
    }

    // (() => {

    // })()
  }, [id])

  return (
    <SafeAreaView style={styles.container}>
      {/* <ChatHeader chat={chat} /> */}

      <View>
        {/* <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={[]}
        keyExtractor={(item) => ""}
        renderItem={({ item }) => (
          <MessageBubble
            msg={item}
          />
        )}
      /> */}
      </View>

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