import {StyleSheet} from 'react-native';
import Cat from '../examples/Cat.js'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseChallenge from "./ChooseChallenge.js";
import React from "react";

const PlayStack = createNativeStackNavigator();

export default function PlayStackScreen({navigation, route}) {
    return (
        <PlayStack.Navigator>
            <PlayStack.Screen options={{ title: 'Choose Challenge' }} name="ChallengeHome" component={ChooseChallenge}/>
            <PlayStack.Screen options={{ title: 'Play Challenge' }} name="ChallengePlay" children={props => <Cat name={'Challenge'} {...props} />}/>
        </PlayStack.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});