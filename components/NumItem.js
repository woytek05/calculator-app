import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export const NumItem = (props) => {
    const { text, numClick, orientation } = props;

    return (
        <TouchableOpacity
            style={orientation ? styles.viewP : styles.viewL}
            onPress={() => {
                numClick(text);
            }}
        >
            <Text style={orientation ? styles.textP : styles.textL}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    viewP: {
        width: "28%",
        height: "17%",
        // backgroundColor: "#2e2f38",
        margin: 7,
    },
    viewL: {
        width: "30%",
        height: "18%",
        // backgroundColor: "#2e2f38",
        margin: 7,
    },

    textP: { fontSize: 32, color: "white", textAlign: "center" },
    textL: {
        fontSize: 28,
        color: "white",
        textAlign: "center",
    },
});

export default NumItem;
