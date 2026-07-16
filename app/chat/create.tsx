import UserSearchResult from "@/components/chat/SearchResult";
import SearchBar from "@/components/searchBar";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <SearchBar />

        <UserSearchResult
          name="João Silva"
          email="joao@email.com"
          description="Desenvolvedor React Native"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F5",
  },

  content: {
    padding: 16,
  },
});