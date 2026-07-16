import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function UserActions() {
    return (
        <View style={styles.container}>
            <ActionButton
                icon="💬"
                title="Entrar no chat"
                color="#2563EB"
                onPress={() => Alert.alert("Chat")}
            />

            <ActionButton
                icon="👋"
                title='Enviar "Hello!"'
                color="#16A34A"
                onPress={() => Alert.alert("Hello!")}
            />

            <ActionButton
                icon="🚫"
                title="Bloquear"
                color="#F59E0B"
            />

            <ActionButton
                icon="🚩"
                title="Denunciar"
                color="#DC2626"
            />
        </View>
    );
}

type ButtonProps = {
    icon: string;
    title: string;
    color: string;
    onPress?: () => void;
};

function ActionButton({ icon, title, color, onPress, }: ButtonProps) {
    return (
        <Pressable
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            <Text style={styles.icon}>{icon}</Text>

            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        gap: 10,
    },

    button: {
        height: 50,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
    },

    icon: {
        fontSize: 18,
    },

    text: {
        marginLeft: 12,
        color: "#FFF",
        fontWeight: "600",
        fontSize: 16,
    },
});