import { useAuth } from "@/contexts/AuthContext";
import { createPrivateInfo, generatorPrivateKey, getInfo } from "@/Services/infoService";
import { User } from "@/types/user";
import { router } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

type UserActionsProps = {
    user: User
}

export default function UserActions({ user }: UserActionsProps) {
    const { profile } = useAuth()

    return (
        <View style={styles.container}>
            <Action icon="💬" label="Chat" onPress={async () => {
                let res = await getInfo(generatorPrivateKey(profile?.id || "", user?.id || ""))

                if (res === null && profile) {
                    res = await createPrivateInfo(user, profile)
                }

                router.push({
                    pathname: "/chat/[id]",
                    params: {
                        id: res?.id || "",
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