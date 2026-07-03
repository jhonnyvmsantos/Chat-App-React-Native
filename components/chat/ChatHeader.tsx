import { Info } from "@/types/info";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";


interface Props {
    info: Info;
}

export default function ChatHeader({ info }: Props) {
    function openProfile() {
        // if (info.type === "private") {
        //   router.push(`/profile/user/${info.id}`);
        //   return;
        // }

        // router.push(`/profile/group/${info.id}`);
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => router.back()}
                style={styles.backButton}
            >
                <Text style={styles.backText}>←</Text>
            </Pressable>

            <Pressable
                style={styles.info}
                onPress={openProfile}
            >
                <View style={styles.avatar}>
                    <Text style={styles.avatarLetter}>
                        {info.name[0]}
                    </Text>
                </View>

                <View>
                    <Text style={styles.name}>
                        {info.name}
                    </Text>

                    {info.type === "group" && (
                        <Text style={styles.subtitle}>
                            {info.members} membros
                        </Text>
                    )}
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
    },

    backButton: {
        padding: 8,
        marginRight: 10,
    },

    backText: {
        fontSize: 22,
        fontWeight: "600",
    },

    info: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },

    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#5c6bc0",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    avatarLetter: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },

    name: {
        fontSize: 17,
        fontWeight: "600",
    },

    subtitle: {
        marginTop: 2,
        color: "#777",
        fontSize: 13,
    },
});