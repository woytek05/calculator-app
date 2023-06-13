import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export const OperatorItem = (props) => {
    const { text, operatorClick, orientation } = props;
    return (
        <TouchableOpacity
            style={orientation ? styles.blockP : styles.blockL}
            onPress={() => {
                operatorClick(text);
            }}
        >
            <Text style={orientation ? styles.textP : styles.textL}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default OperatorItem;

const styles = StyleSheet.create({
    blockP: {
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: "10%",
    },
    blockL: {
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: "12%",
    },
    textP: { fontSize: 28, color: "white", textAlign: "center" },
    textL: { fontSize: 20, color: "white", textAlign: "center" },
});
