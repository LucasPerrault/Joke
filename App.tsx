import React from 'react';
import Carousel from "./app/src/components/carousel/carousel";
import {Dimensions, StatusBar, StyleSheet, View} from "react-native";


const App = () => {
    const { height: windowHeight } = Dimensions.get("window");

    return (
        <View style={{ height: windowHeight, ...styles.fullScreen}}>
            <StatusBar translucent />
            <Carousel/>
        </View>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
        position: "absolute",
        top: 0,
        backgroundColor: "red"
    },
});

export default App;
