import {RouteProp} from "@react-navigation/core/lib/typescript/src/types";
import {ParamListBase} from "@react-navigation/routers";
import React, {ReactNode} from "react";
import {homeUrl, settingsUrl} from "../../core/url";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {TabBarIconOptions} from "../../server/models/navigation/navigation.type";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export const Tab = createBottomTabNavigator();

export const tabBarOptions = {
    showLabel: false,
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
}

export const getScreensOptions = (route: RouteProp<ParamListBase, string>, navigation?: any): any => {
    return {
        tabBarIcon: (options: TabBarIconOptions) => {
            switch (route.name) {
                case homeUrl:
                    return options.focused
                        ? <MaterialIcons name="home" size={options.size} color={options.color} />
                        : <MaterialCommunityIcons name="home-outline" size={options.size} color={options.color} />

                case settingsUrl:
                    return options.focused
                        ? <MaterialIcons name="settings" size={options.size} color={options.color} />
                        : <AntDesign name="setting" size={options.size} color={options.color} />
            }
        }
    }
}