import {StyleSheet, Text} from 'react-native';
import Cat from '../examples/Cat.js'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";

const ProfileStackNavigator = createNativeStackNavigator();

export default function ProfileStack({navigation, route}) {
    return (
        <ProfileStackNavigator.Navigator>
            <ProfileStackNavigator.Screen options={{ title: 'Profile Info' }} name="ProfileHome" children={props => <Text {...props}>Profile Home</Text>}/>
        </ProfileStackNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});