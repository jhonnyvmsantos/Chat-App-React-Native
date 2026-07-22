import { Info } from "@/types/info";
import { FlatList, StyleSheet } from "react-native";
import ChatItem from "./chat/ChatItem";

interface Props {
    info: Info[];
    type: "user" | "group"
}

export default function ListingChats({ info, type }: Props) {
    return (
        <FlatList
            data={info.filter((e) => e.type === type)}
            keyExtractor={(item) => item.id || ""}
            renderItem={({ item }) => (
                <ChatItem info={item} />
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