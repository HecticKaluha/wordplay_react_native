import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";

const SettingStack = createNativeStackNavigator();

export default function SettingsStackScreen({navigation, route}) {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen options={{ title: 'Settings' }} name="SettingsHome" children={props => <Text {...props}>Settings Home</Text>}/>
        </SettingStack.Navigator>
    );
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});