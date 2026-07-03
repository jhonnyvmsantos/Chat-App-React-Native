import { StyleSheet, Text, View } from "react-native";

import { Message } from "@/types/message";

interface Props {
    message: Message;
    currentUserId: string;
    isGroup: boolean;
}

export default function MessageBubble({
    message,
    currentUserId,
    isGroup,
}: Props) {
    const isMine = message.senderId === currentUserId;

    return (
        <View
            style={[
                styles.container,
                isMine ? styles.mine : styles.other,
            ]}
        >
            {!isMine && isGroup && (
                <Text style={styles.sender}>
                    {message.senderName}
                </Text>
            )}

            <Text style={styles.message}>
                {message.text}
            </Text>

            <Text style={styles.time}>
                {message.createdAt}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        maxWidth: "80%",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 16,
    },

    mine: {
        alignSelf: "flex-end",
        backgroundColor: "#DCF8C6",
    },

    other: {
        alignSelf: "flex-start",
        backgroundColor: "#ffffff",
    },

    sender: {
        color: "#4a67ff",
        fontWeight: "bold",
        marginBottom: 4,
    },

    message: {
        fontSize: 16,
        color: "#222",
    },

    time: {
        alignSelf: "flex-end",
        fontSize: 11,
        color: "#888",
        marginTop: 5,
    },
});