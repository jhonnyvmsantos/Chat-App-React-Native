import { useChat } from "@/contexts/ChatContext";
import { Chat } from "@/types/chat";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
    chat: Chat;
}

export default function ChatItem({ chat }: Props) {
    const { setCurrentChat } = useChat()

    return (
        <Pressable
            style={styles.container}
            onPress={() => {
                setCurrentChat(chat)
                router.push({ pathname: "/chat", })
            }}
        >
            {chat.photoUrl ? (
                <Image
                    source={{ uri: chat.photoUrl }}
                    style={styles.avatar}
                />
            ) : (
                <View style={styles.avatarPlaceholder}>
                    <Text style={styles.avatarLetter}>
                        {chat.title ? chat.title[0] : ""}
                    </Text>
                </View>
            )}

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {chat.title}
                    </Text>

                    <Text style={styles.time}>
                        {chat.lastMessageTime?.toDate().toLocaleString("pt-BR")}
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text
                        numberOfLines={1}
                        style={styles.message}
                    >
                        {chat.lastMessage || "Sem mensagens no chat."}
                    </Text>

                    {!!chat.unreadCount && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>
                                {chat.unreadCount}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 14,
        backgroundColor: "#FFF",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EFEFEF",
    },

    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },

    avatarPlaceholder: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#4F46E5",
        justifyContent: "center",
        alignItems: "center",
    },

    avatarLetter: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "700",
    },

    content: {
        flex: 1,
        marginLeft: 14,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    footer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
    },

    title: {
        fontSize: 16,
        fontWeight: "600",
    },

    message: {
        flex: 1,
        color: "#666",
        fontSize: 14,
    },

    time: {
        color: "#888",
        fontSize: 12,
    },

    badge: {
        minWidth: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: "#22C55E",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 6,
    },

    badgeText: {
        color: "#FFF",
        fontWeight: "700",
        fontSize: 12,
    },
});