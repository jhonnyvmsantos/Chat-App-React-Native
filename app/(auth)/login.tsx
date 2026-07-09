import { login } from "@/services/authService";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    async function handleLogin() {
        try {
            await login(email, password);
        } catch (error) {
            Alert.alert("Erro", error instanceof Error ? error.message : "Erro ao realizar login.");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Login
            </Text>

            <TextInput
                placeholder="E-mail"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <TextInput
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />

            <Button
                title="Entrar"
                onPress={handleLogin}
            />

            <Link
                href="/register"
                style={styles.link}
            >
                Criar uma conta
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 32,
        textAlign: "center",
    },

    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },

    link: {
        marginTop: 24,
        textAlign: "center",
    },
});