import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";

const LeaderboardStack = createNativeStackNavigator();

export default function LeaderboardStackScreen({navigation, route}) {
    return (
        <LeaderboardStack.Navigator>
            <LeaderboardStack.Screen options={{ title: 'Leaderboards' }} name="LeaderboardsHome" children={props => <Text {...props}>Leaderboards Home</Text>}/>
        </LeaderboardStack.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});