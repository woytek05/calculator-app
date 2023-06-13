import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export const OperatorItemLeft = (props) => {
    const { text, operatorClick, orientation } = props;
    return (
        <TouchableOpacity
            style={styles.block}
            onPress={() => {
                operatorClick(text);
            }}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default OperatorItemLeft;

const styles = StyleSheet.create({
    block: {
        width: "80%",
        height: "19%",
        justifyContent: "center",
        margin: 7,
    },
    text: { fontSize: 24, color: "white", textAlign: "center" },
});
