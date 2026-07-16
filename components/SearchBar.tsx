import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="#888" />

            <TextInput
                placeholder="Pesquisar..."
                placeholderTextColor="#888"
                editable={false}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 48,
        marginVertical: 10,
    },

    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
        color: "#000",
    },
});