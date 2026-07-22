import { User } from "@/types/user";
import { FlatList, StyleSheet } from "react-native";
import UserSearchResult from "./chat/SearchResult";

interface Props {
    profiles: User[];
}

export default function ListingProfiles({ profiles }: Props) {
    return (
        <FlatList
            data={profiles}
            keyExtractor={(item) => item.id || ""}
            renderItem={({ item }) => (
                <UserSearchResult user={item}/>
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