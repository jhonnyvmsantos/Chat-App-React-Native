import { Link } from "expo-router";
import { useState } from "react";
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import QuickAuthButton from "@/components/QuickButton";
import { register } from "@/services/authService";

export default function RegisterScreen() {
    const [displayName, setDisplayName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleRegister() {
        if (password !== confirmPassword) {
            Alert.alert(
                "Erro",
                "As senhas não coincidem.",
            );

            return;
        }

        try {
            await register(
                displayName,
                email,
                password,
            );
        } catch (error) {
            Alert.alert("Erro", error instanceof Error ? error.message : "Erro ao cadastrar usuário.");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Cadastro
            </Text>

            <TextInput
                placeholder="Nome"
                value={displayName}
                onChangeText={setDisplayName}
                style={styles.input}
            />

            <TextInput
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
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

            <TextInput
                placeholder="Confirmar senha"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.input}
            />

            <Button
                title="Cadastrar"
                onPress={handleRegister}
            />

            <Link
                href="/login"
                style={styles.link}
            >
                Já possui uma conta?
            </Link>

            <QuickAuthButton mode="register"/>
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