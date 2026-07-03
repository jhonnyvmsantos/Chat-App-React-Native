import {
    Pressable,
    StyleSheet,
    Text,
} from "react-native";

interface Props {
    title: string;
    onPress(): void;
}

export default function ProfileActionButton({
    title,
    onPress,
}: Props) {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 20,
        backgroundColor: "#5c6bc0",
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
    },

    text: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
});