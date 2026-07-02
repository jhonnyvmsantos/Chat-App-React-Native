// components/ConversationList.tsx

import { Chat } from "@/types/chat";
import { FlatList } from "react-native";
import ChatItem from "./chatItem";

interface Props {
    chat: Chat[];
}

export default function listingChats({
    chat,
}: Props) {
    return (
        <FlatList
            data={chat}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ChatItem chat={item} />
            )}
        />
    );
}