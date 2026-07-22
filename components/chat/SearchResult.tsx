import { generatorPrivateKey } from "@/Services/chatService";
import { useAuth } from "@/contexts/AuthContext";
import { User } from "@/types/user";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import UserActions from "./UserActions";

interface UserSearchResultProps {
    user: User;
}

export default function UserSearchResult({ user }: UserSearchResultProps) {
    const { profile } = useAuth()
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={styles.card}>
            <Pressable
                style={styles.header}
                onPress={() => setExpanded(!expanded)}
            >
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                        {user?.displayName[0].toUpperCase()}
                    </Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.name}>{user?.displayName}</Text>

                    <Text style={styles.email}>
                        {user?.email}
                    </Text>

                    <Text style={styles.description}>
                        {user?.bio}
                    </Text>
                </View>
            </Pressable>

            {expanded && <UserActions id={generatorPrivateKey(profile?.id || "", user?.id || "")} />}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        marginTop: 18,
        padding: 16,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#E4E4E7",
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 62,
        height: 62,
        borderRadius: 31,
        backgroundColor: "#4F46E5",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 24,
    },
    info: {
        flex: 1,
        marginLeft: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
    },
    email: {
        color: "#6B7280",
        marginTop: 2,
    },
    description: {
        color: "#9CA3AF",
        marginTop: 4,
    },
});