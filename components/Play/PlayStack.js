import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseChallengeStackScreen from "./ChooseChallengeStackScreen.js";
import React from "react";
import ChallengeStackScreen from "./Challenge/ChallengeStackScreen";

const PlayStackNavigator = createNativeStackNavigator();

export default function PlayStack() {
    return (
        <PlayStackNavigator.Navigator>
            <PlayStackNavigator.Screen options={{ title: 'Choose Challenge' }} name="ChallengeHome" component={ChooseChallengeStackScreen}/>
            <PlayStackNavigator.Screen options={{ title: 'Play Challenge' }} name="ChallengePlay" component={ChallengeStackScreen}/>
        </PlayStackNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});