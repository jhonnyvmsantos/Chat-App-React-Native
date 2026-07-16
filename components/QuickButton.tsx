// components/QuickAuthButton.tsx

import { Alert, Pressable, StyleSheet, Text } from "react-native";

import { login, register } from "@/Services/authService";

type Props = {
    mode: "login" | "register";
};

const email = "test@gmail.com";
const password = "12345678";
const name = "Test";

export default function QuickAuthButton({ mode }: Props) {
    const handlePress = async () => {
        try {
            if (mode === "login") {
                await login(email, password);
            } else {
                await register(name, email, password);
            }
        } catch (error: any) {
            Alert.alert("Erro", error.message);
        }
    };

    return (
        <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.icon}>⚡</Text>

            <Text style={styles.text}>
                {mode === "login"
                    ? "Entrar rapidamente"
                    : "Cadastrar rapidamente"}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 14,
        backgroundColor: "#4285F4",

        justifyContent: "center",
        alignItems: "center",

        flexDirection: "row",
        gap: 10,

        marginTop: 12,
    },

    icon: {
        fontSize: 18,
    },

    text: {
        color: "#FFF",
        fontWeight: "600",
        fontSize: 16,
    },
});