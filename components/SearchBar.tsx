// components/SearchBar.tsx

import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔍</Text>

      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        placeholderTextColor="#9CA3AF"
        editable={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    height: 50,
    width: "100%",

    backgroundColor: "#FFFFFF",

    borderWidth: 1,
    borderColor: "#D1D5DB",

    borderRadius: 14,

    paddingHorizontal: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  icon: {
    fontSize: 18,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
});