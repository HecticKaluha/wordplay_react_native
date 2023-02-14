import {StyleSheet} from 'react-native';
import Cat from '../examples/Cat.js'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseChallengeStackScreen from "./ChooseChallengeStackScreen.js";
import React from "react";

const PlayStackNavigator = createNativeStackNavigator();

export default function PlayStack() {
    return (
        <PlayStackNavigator.Navigator>
            <PlayStackNavigator.Screen options={{ title: 'Choose Challenge' }} name="ChallengeHome" component={ChooseChallengeStackScreen}/>
            <PlayStackNavigator.Screen options={{ title: 'Play Challenge' }} name="ChallengePlay" children={props => <Cat name={'Challenge'} {...props} />}/>
        </PlayStackNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});