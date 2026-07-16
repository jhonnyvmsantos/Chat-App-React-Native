import ListingChats from "@/components/listingChats";
import { chats } from "@/mocks/chats";

import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabListGroupsChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Group Chats</Text>

      <ListingChats chats={chats} type="group" />
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