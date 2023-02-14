import {StyleSheet, Text} from 'react-native';
import Cat from '../examples/Cat.js'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen({navigation, route}) {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Welcome" children={props => <Text {...props}>Home, Welcome</Text>}/>
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});