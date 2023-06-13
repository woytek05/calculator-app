import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { OperatorItem } from "./OperatorItem";
import { OperatorItemLeft } from "./OperatorItemLeft";

export const Operators = (props) => {
    const { operatorClick, orientation } = props;

    const signs = ["Del", "C", "/", "*", "-", "+"];
    const arrOperators = signs.map((item, i) => {
        return (
            <OperatorItem
                text={item}
                key={i}
                operatorClick={operatorClick}
                orientation={orientation}
            />
        );
    });

    const extensions = ["Sqrt", "Pow", "Sin", "Cos"];
    const arrExteOpe = extensions.map((item, i) => {
        return (
            <OperatorItemLeft
                text={item}
                key={i + 10}
                operatorClick={operatorClick}
                orientation={orientation}
            />
        );
    });

    if (orientation) {
        return <View style={styles.view1}>{arrOperators}</View>;
    } else {
        return (
            <View style={styles.view2}>
                <View style={styles.operators}>{arrExteOpe}</View>
                <View style={styles.operators}>{arrOperators}</View>
            </View>
        );
    }
};

export default Operators;

const styles = StyleSheet.create({
    view1: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#111827",
    },
    view2: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#111827",
    },
    operators: {
        width: "50%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
});
