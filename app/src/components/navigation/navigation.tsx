import Home from "../../pages/home/home";
import Setting from "../../pages/settings/settings";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {homeUrl, settingsUrl} from "../../core/url";
import {getScreensOptions, Tab, tabBarOptions} from "./navigation.screen.service";

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={homeUrl}
                           screenOptions={({ route }) => getScreensOptions(route)}
                           tabBarOptions={tabBarOptions}>
                <Tab.Screen name={homeUrl} component={Home}  />
                <Tab.Screen name={settingsUrl} component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;