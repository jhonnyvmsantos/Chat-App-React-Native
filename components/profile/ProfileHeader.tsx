import { StyleSheet, Text, View } from "react-native";

interface Props {
    name: string;
}

export default function ProfileHeader({ name }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {name[0]}
                </Text>
            </View>

            <Text style={styles.name}>
                {name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 30,
        backgroundColor: "#fff",
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#5c6bc0",
        justifyContent: "center",
        alignItems: "center",
    },

    avatarText: {
        color: "#fff",
        fontSize: 42,
        fontWeight: "bold",
    },

    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: "700",
    },
});