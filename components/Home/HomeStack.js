import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";

const HomeStackNavigator = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen name="Welcome" children={props => <Text {...props}>Home, Welcome</Text>}/>
        </HomeStackNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});