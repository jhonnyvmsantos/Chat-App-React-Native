import { Chat } from "@/types/chat";
import { FlatList, StyleSheet } from "react-native";
import ChatItem from "./chat/ChatItem";

interface Props {
    chat: Chat[];
    type: "user" | "group"
}

export default function ListingChat ({ chat, type }: Props) {
    return (
        <FlatList
            data={chat.filter((e) => e.type === type)}
            keyExtractor={(item) => item.id || ""}
            renderItem={({ item }) => (
                <ChatItem chat={item} />
            )}
            contentContainerStyle={styles.listContent}
        />
    );
}

const styles = StyleSheet.create({
    listContent: {
        paddingBottom: 20,
    },
});