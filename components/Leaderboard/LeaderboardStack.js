import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";

const LeaderboardStackNavigator = createNativeStackNavigator();

export default function LeaderboardStack() {
    return (
        <LeaderboardStackNavigator.Navigator>
            <LeaderboardStackNavigator.Screen options={{ title: 'Leaderboards' }} name="LeaderboardsHome" children={props => <Text {...props}>Leaderboards Home</Text>}/>
        </LeaderboardStackNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});