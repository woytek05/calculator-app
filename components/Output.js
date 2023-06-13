import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Output = (props) => {
    const { text, orientation } = props;

    return (
        <View style={styles.view}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default Output;

const styles = StyleSheet.create({
    view: { flex: 1, justifyContent: "center", backgroundColor: "#374151" },

    text: {
        fontSize: 28,
        textAlign: "right",
        marginRight: 14,
        color: "#d1d5db",
    },
});
