import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";

export const Input = (props) => {
    const { text, orientation } = props;

    const textStyle = () => {
        if (orientation) {
            return text.length <= 10
                ? styles.textN
                : text.length <= 15
                ? styles.textSm
                : styles.textMin;
        } else {
            return text.length <= 21
                ? styles.textN
                : text.length <= 31
                ? styles.textSm
                : styles.textMin;
        }
    };

    return (
        <View style={styles.view}>
            <Text style={{ ...styles.text, ...textStyle() }}>{text}</Text>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    view: { flex: 1.5, justifyContent: "center" },
    text: {
        textAlign: "right",
        marginRight: 10,
        color: "white",
    },
    textN: {
        fontSize: 60,
    },
    textSm: {
        fontSize: 40,
    },
    textMin: {
        fontSize: 20,
    },
});
