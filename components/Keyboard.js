import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Numbers } from "./Numbers";
import { Operators } from "./Operators";

export const Keyboard = (props) => {
    const { changeInput, changeOutput, orientation } = props;

    const [strInput, setStrInput] = useState("");
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        changeInput(strInput);
        changeOutput(result);
    });

    const numClick = (value) => {
        if (value === "=") {
            resultClick(strInput);
            return;
        }

        const last = strInput.slice(-1);
        if (value === "." && (last === "." || last === "")) return;

        setNumber(number + value);
        setStrInput(strInput + value);
    };

    const resultClick = (value) => {
        const last = Number(value.slice(-1));
        if (last != last) value = value.slice(0, -1);
        setResult(eval(value));
    };

    const operatorClick = (value) => {
        let res = null;
        const last = Number(strInput.slice(-1));
        if (last != last) res = eval(strInput.slice(0, -1));
        else {
            res = eval(strInput);
        }

        switch (value) {
            case "Del":
                delClick();
                break;

            case "C":
                clearClick();
                break;

            case "Sqrt":
                if (strInput) {
                    setStrInput("");
                    setResult(Math.sqrt(res));
                    break;
                }

            case "Pow":
                if (strInput) {
                    setStrInput("");
                    setResult(Math.pow(res, 2));
                    break;
                }

            case "Sin":
                if (strInput) {
                    setStrInput("");
                    setResult(Math.sin((res * Math.PI) / 180.0));
                    break;
                }

            case "Cos":
                if (strInput) {
                    setStrInput("");
                    setResult(Math.cos((res * Math.PI) / 180.0));
                    break;
                }

            default:
                if (strInput) {
                    let str = strInput;
                    const last = Number(str.slice(-1));
                    if (last != last) str = str.slice(0, -1);

                    setStrInput(str + value);
                    setNumber("");
                }
        }
    };

    const delClick = () => {
        setStrInput(strInput.slice(0, -1));
    };

    const clearClick = () => {
        setStrInput("");
        setNumber("");
        setResult("");
    };

    return (
        <View style={styles.view}>
            <Numbers numClick={numClick} orientation={orientation} />
            <Operators
                operatorClick={operatorClick}
                orientation={orientation}
            />
        </View>
    );
};

export default Keyboard;

const styles = StyleSheet.create({
    view: { flex: 4, flexDirection: "row" },
});
