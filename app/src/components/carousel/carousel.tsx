import React, { useRef } from "react";
import { Animated, SafeAreaView, ScrollView, useWindowDimensions, Dimensions } from "react-native";
import Slide from "./slide/slide";

const Carousel = () => {

    const examples = ['yuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhou', 'yahi', 'yoho', 'youhou', 'cammbert', 'bastien', 'ouch'];
    const { height: windowHeight } = Dimensions.get("window");

    const scrollY = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();

    return (
        <SafeAreaView style={{ height: windowHeight }}>
            <ScrollView pagingEnabled
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}>
                {
                    examples.map((t, k) => <Slide key={k} text={t} width={windowWidth}/>)
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default Carousel;
