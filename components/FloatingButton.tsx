// components/FloatingAddButton.tsx

import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    onPress?: () => void;
};

export default function FloatingAddButton({ onPress }: Props) {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
            android_ripple={{ color: "#FFFFFF33", borderless: true }}
        >
            <Text style={styles.icon}>+</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        right: 20,
        bottom: 25,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#2563EB",
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        zIndex: 9999,
    },

    icon: {
        color: "#FFF",
        fontSize: 34,
        fontWeight: "300",
        marginTop: -2,
    },
});