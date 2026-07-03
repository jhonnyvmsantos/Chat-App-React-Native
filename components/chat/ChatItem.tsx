import { Info } from "@/types/info";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
    info: Info;
}

export default function ChatItem({ info }: Props) {
    return (
        <Pressable
            style={styles.container}
            onPress={() =>
                router.push({
                    pathname: "/chat/[id]",
                    params: {
                        id: info.id,
                    },
                })
            }
        >
            {info.avatar ? (
                <Image
                    source={{ uri: info.avatar }}
                    style={styles.avatar}
                />
            ) : (
                <View style={styles.avatarPlaceholder}>
                    <Text style={styles.avatarLetter}>
                        {info.name[0]}
                    </Text>
                </View>
            )}

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>
                        {info.name}
                    </Text>

                    <Text style={styles.time}>
                        {info.lastMessageTime}
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text
                        numberOfLines={1}
                        style={styles.message}
                    >
                        {info.lastMessage}
                    </Text>

                    {!!info.unreadCount && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>
                                {info.unreadCount}
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

    name: {
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