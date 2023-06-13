import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import { Input } from "./components/Input";
import { Output } from "./components/Output";
import { Keyboard } from "./components/Keyboard";
import React, { useState, useEffect } from "react";

export default function App() {
    const isPortrait = () => {
        let dim = Dimensions.get("screen");
        return dim.height >= dim.width;
    };

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [orientation, setOrientation] = useState(isPortrait());

    const changeInput = (val) => {
        setInput(val);
    };
    const changeOutput = (val) => {
        setOutput(val);
    };

    Dimensions.addEventListener("change", () => {
        setOrientation(isPortrait());
    });

    return (
        <View style={styles.container}>
            <StatusBar />

            <Input text={input} orientation={orientation} />
            <Output text={output} orientation={orientation} />

            <Keyboard
                changeInput={changeInput}
                changeOutput={changeOutput}
                orientation={orientation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        backgroundColor: "#4b5563",
    },
});
