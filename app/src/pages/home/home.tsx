import {View, Text} from "react-native";
import React from "react";
import {homeStyleSheet} from "./home.style"

const Home = () => {
    return (
        <View style={homeStyleSheet.container}>
            <Text>Home Screen</Text>
        </View>
    );
}

export default Home;