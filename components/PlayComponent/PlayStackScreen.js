import {StyleSheet} from 'react-native';
import Cat from '../examples/Cat.js'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./Home.js";
import React from "react";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";

const PlayStack = createNativeStackNavigator();

export default function PlayStackScreen({navigation, route}) {
    React.useLayoutEffect(() => {
        const tabHiddenRoutes = ["Play_Challenge"];
        if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
            navigation.setOptions({tabBarStyle: {display: 'none'}});
            navigation.setOptions({headerShown: false});
        }else {
            navigation.setOptions({tabBarStyle: {display: 'flex'}});
        }
    }, [navigation, route]);

    return (
        <PlayStack.Navigator>
            <PlayStack.Screen name="Play_Home" children={props => <Home navigation={props.navigation}
                                                                        name={'Play_Home'} {...props} />}/>
            <PlayStack.Screen name="Play_Challenge" children={props => <Cat name={'Challenge'} {...props} />}/>
        </PlayStack.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});