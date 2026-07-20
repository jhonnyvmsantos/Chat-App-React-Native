import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import UserActions from "./UserActions";

type Props = {
    name: string;
    email: string;
    description: string;
};

export default function UserSearchResult({ name, email, description, }: Props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={styles.card}>
            <Pressable
                style={styles.header}
                onPress={() => setExpanded(!expanded)}
            >
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                        {name.charAt(0).toUpperCase()}
                    </Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>

                    <Text style={styles.email}>
                        {email}
                    </Text>

                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
            </Pressable>

            {expanded && <UserActions id="" />}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        marginTop: 18,
        padding: 16,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#E4E4E7",
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 62,
        height: 62,
        borderRadius: 31,
        backgroundColor: "#4F46E5",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 24,
    },
    info: {
        flex: 1,
        marginLeft: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
    },
    email: {
        color: "#6B7280",
        marginTop: 2,
    },
    description: {
        color: "#9CA3AF",
        marginTop: 4,
    },
});