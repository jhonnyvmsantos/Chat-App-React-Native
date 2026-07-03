import { StyleSheet, Text, View } from "react-native";

interface Props {
    title: string;
    value: string;
}

export default function ProfileInfo({
    title,
    value,
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>

            <Text style={styles.value}>
                {value}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        backgroundColor: "#fff",
    },

    title: {
        fontWeight: "600",
        marginBottom: 5,
        color: "#666",
    },

    value: {
        fontSize: 16,
    },
});