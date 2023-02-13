import {StyleSheet, Alert} from 'react-native';
import Cat from '../examples/Cat.js'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./Home.js";
import React, {Component} from "react";

const PlayStack = createNativeStackNavigator();

export default class PlayStackScreen extends Component {
    render() {
        return (
            <PlayStack.Navigator>
                <PlayStack.Screen name="Play_Home" children={props => <Home navigation={props.navigation}
                                                                            name={'Play_Home'} {...props} />}/>
                <PlayStack.Screen name="Play_Challenge" children={props => <Cat name={'Challenge'} {...props} />}/>
            </PlayStack.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    class: {
        property: 'value',
    }
});