import FloatingAddButton from "@/components/FloatingButton";
import ListingChat from "@/components/ListingChats";
import { useAuth } from "@/contexts/AuthContext";
import { getAllUserChats } from "@/services/chatService";
import { Chat } from "@/types/chat";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabListPrivateChatScreen() {
  const { profile } = useAuth()
  const [chats, setChats] = useState<Chat[] | null>(null)

  useEffect(() => {
    (async () => {
      if (profile) {
        const res = await getAllUserChats(profile, "user")
        
        setChats(res)
      }
    })()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Private Chats</Text>

      {/* <SearchBar /> */}

      <ListingChat chats={chats !== null ? chats : []} type="user" />

      <FloatingAddButton onPress={() => router.push("/chat/create")} />
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
  }
});