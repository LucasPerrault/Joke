import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

type SlideProps = {
    text: string,
    width: number,
}
const Slide = ({text, width }: SlideProps) => {
    const statusBarHeight = 20;
    const slideHeight = Dimensions.get('window').height - statusBarHeight;

    return (
        <View style={{ width: width, height: slideHeight, ...styles.slideContainer }}>
            <Text style={styles.textContainer}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        fontSize: 18,
        fontWeight: "600",
        padding: 50
    }
});

export default Slide;
