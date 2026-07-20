import { Chat } from "@/types/chat";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";


interface Props {
    chat: Chat;
}

export default function ChatHeader({ chat }: Props) {
    function openProfile() {
        if (chat.type === "user") {
            router.push({
                pathname: "/profile/user/[id]",
                params: {
                    id: chat.id,
                },
            });

            return;
        }

        router.push({
            pathname: "/profile/group/[id]",
            params: {
                id: chat.id,
            },
        });
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => router.back()}
                style={styles.backButton}
            >
                <Text style={styles.backText}>←</Text>
            </Pressable>

            <Pressable
                style={styles.chat}
                onPress={openProfile}
            >
                <View style={styles.avatar}>
                    <Text style={styles.avatarLetter}>
                        {chat.name[0]}
                    </Text>
                </View>

                <View>
                    <Text style={styles.name}>
                        {chat.name}
                    </Text>

                    {chat.type === "group" && (
                        <Text style={styles.subtitle}>
                            {chat.participants.length} membros
                        </Text>
                    )}
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
    },

    backButton: {
        padding: 8,
        marginRight: 10,
    },

    backText: {
        fontSize: 22,
        fontWeight: "600",
    },

    chat: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },

    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#5c6bc0",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    avatarLetter: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },

    name: {
        fontSize: 17,
        fontWeight: "600",
    },

    subtitle: {
        marginTop: 2,
        color: "#777",
        fontSize: 13,
    },
});