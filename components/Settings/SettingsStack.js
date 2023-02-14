import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";

const SettingStackNavigator = createNativeStackNavigator();

export default function SettingsStack({navigation, route}) {
    return (
        <SettingStackNavigator.Navigator>
            <SettingStackNavigator.Screen options={{ title: 'Settings' }} name="SettingsHome" children={props => <Text {...props}>Settings Home</Text>}/>
        </SettingStackNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});