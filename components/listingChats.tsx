// components/ConversationList.tsx

import { Info } from "@/types/info";
import { FlatList } from "react-native";
import ChatItem from "./chat/ChatItem";

interface Props {
    info: Info[];
}

export default function listingChats({
    info,
}: Props) {
    return (
        <FlatList
            data={info}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ChatItem info={item} />
            )}
        />
    );
}