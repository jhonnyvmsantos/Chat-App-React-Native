import MessageBubble from "@/components/chat/MessageBubble";
import MessageInput from "@/components/chat/MessageInput";
import { useAuth } from "@/contexts/AuthContext";
import { useChat } from "@/contexts/ChatContext";
import { getMessages } from "@/services/messageService";
import { Chat } from "@/types/chat";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  const { profile } = useAuth()
  const { currentChat } = useChat()

  const [chat, setChat] = useState<Chat | null>(null)

  useEffect(() => {
    (async () => {
      if (!currentChat) return;

      const messages = await getMessages(currentChat?.id || "")

      setChat({
        ...currentChat,
        messages
      })
    })()
  }, [chat?.id])

  useEffect(() => {
    console.log({chat})
  }, [chat])

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

      <MessageInput chatId={chat?.id || ""} userId={profile?.id || ""} reply={""} />
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