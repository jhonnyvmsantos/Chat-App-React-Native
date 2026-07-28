import { StyleSheet, Text, View } from "react-native";

import { Message } from "@/types/message";

type Props = {
    msg: Message;
};

export default function MessageBubble({ msg }: Props) {
    return (
        <View
            style={[
                styles.container,
                msg.isMine ? styles.mine : styles.other,
            ]}
        >
            {!msg.isMine && msg.isGroup && (
                <Text style={styles.sender}>
                    {msg.senderName}
                </Text>
            )}

            <Text style={styles.message}>
                {msg.text}
            </Text>

            <Text style={styles.time}>
                {"toDate" in msg.createdAt
                    ? msg.createdAt.toDate().toLocaleString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                    : "..."}
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