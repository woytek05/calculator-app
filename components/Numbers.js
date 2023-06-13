import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NumItem } from "./NumItem";

export const Numbers = (props) => {
    const { numClick, orientation } = props;

    let arrGrid = [...Array(9).keys()];
    arrGrid = arrGrid.map((val, i) => {
        return (
            <NumItem
                text={val + 1}
                numClick={numClick}
                orientation={orientation}
                key={i}
            />
        );
    });

    arrGrid.push(
        <NumItem
            text={"."}
            numClick={numClick}
            orientation={orientation}
            key={9}
        />
    );
    arrGrid.push(
        <NumItem
            text={"0"}
            numClick={numClick}
            orientation={orientation}
            key={10}
        />
    );
    arrGrid.push(
        <NumItem
            text={"="}
            numClick={numClick}
            orientation={orientation}
            key={11}
        />
    );

    return <View style={styles.view}>{arrGrid}</View>;
};

export default Numbers;

const styles = StyleSheet.create({
    view: {
        flex: 3,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "center",
        backgroundColor: "#1f2937",
    },
});
