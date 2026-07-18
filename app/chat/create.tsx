import UserSearchResult from "@/components/chat/SearchResult";
import SearchBar from "@/components/SearchBar";
import { getProfileByEmail } from "@/Services/profileService";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateChatScreen() {

  const [email, setEmail] = useState("")
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function search() {
      if (!email.includes("@")) {
        setUser(null);
        return;
      }

      const res = await getProfileByEmail(email);

      setUser(res);
    }

    search();
  }, [email]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled"      >
        <SearchBar value={email} onChangeText={setEmail} placeholder="Pesquisar por email..." />

        <UserSearchResult
          name="João Silva"
          email="joao@email.com"
          description="Desenvolvedor React Native"
        />

        {user && (<UserSearchResult name={user.displayName} email={user.email} description="Testando o Test..." />)}
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