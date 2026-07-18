import UserSearchResult from "@/components/chat/SearchResult";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateChatScreen() {

  const [email, setEmail] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled"      >
        {/* <SearchBar placeholder="Pesquisar por email..." /> */}

        {/* <Pressable onPress={handlePress}>
          <Text >
            aaaaaaaaaaaaaaa
          </Text>
        </Pressable> */}

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