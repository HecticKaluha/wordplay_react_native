import {StyleSheet, Text} from 'react-native';
import Cat from '../examples/Cat.js'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen({navigation, route}) {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen options={{ title: 'Profile Info' }} name="ProfileHome" children={props => <Text {...props}>Profile Home</Text>}/>
        </ProfileStack.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});