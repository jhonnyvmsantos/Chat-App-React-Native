import { router } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

type UserActionsProps = {
    id: string
}

export default function UserActions({ id }: UserActionsProps) {
    return (
        <View style={styles.container}>
            <Action icon="💬" label="Chat" onPress={() => {
                router.push({
                    pathname: "/chat/[id]",
                    params: {
                        id: id,
                    },
                })
            }} />

            <Action icon="👋" label="Hello!" onPress={() => Alert.alert("Hello")} />

            <Action icon="🚫" label="Bloquear" />

            <Action icon="🚩" label="Denunciar" />
        </View>
    );
}

type Props = {
    icon: string;
    label: string;
    onPress?: () => void;
};

function Action({ icon, label, onPress }: Props) {
    return (
        <Pressable style={styles.action} onPress={onPress}>
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#ECECEC",
        paddingTop: 12,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    action: {
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    icon: {
        fontSize: 20,
    },
    label: {
        marginTop: 4,
        fontSize: 11,
        color: "#666",
    },
});