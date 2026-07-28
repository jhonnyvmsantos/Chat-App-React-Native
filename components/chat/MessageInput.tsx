import { sendMessage } from "@/temp/messageService";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface Props {
  chatId: string;
  userId: string;
  reply: string;
}

export default function MessageInput({ chatId, userId, reply }: Props) {
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma mensagem..."
        value={message}
        onChangeText={setMessage}
      />

      <Pressable
        style={styles.button}
        onPress={async () => {
          await sendMessage(chatId, userId, message, reply)
        }}
      >
        <Text style={styles.buttonText}>
          Enviar
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ececec",
  },

  input: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    borderRadius: 25,
    paddingHorizontal: 16,
    marginRight: 10,
  },

  button: {
    backgroundColor: "#4a67ff",
    borderRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 18,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});