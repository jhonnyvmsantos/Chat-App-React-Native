import MessageBubble from "@/components/chat/MessageBubble";
import MessageInput from "@/components/chat/MessageInput";
import { useAuth } from "@/contexts/AuthContext";
import { Chat } from "@/types/chat";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { profile } = useAuth()

  const [chat, setChat] = useState<Chat | null>(null)

  useEffect(() => {
    
  }, [id])

  return (
    <SafeAreaView style={styles.container}>
      {/* <ChatHeader chat={chat} /> */}

      <View style={styles.view}>
        {chat?.messages && <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={chat.messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MessageBubble msg={item} />}
        />}
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
  view: {
    flex: 1
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 10,
  },
});