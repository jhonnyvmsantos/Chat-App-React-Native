import FloatingAddButton from "@/components/FloatingButton";
import { router } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabListPrivateChatScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Private Chats</Text>

      {/* <SearchBar /> */}

      {/* <ListingInfo info={chats} type="user" /> */}

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