import {Button, StyleSheet, Text, View} from 'react-native';
import React from "react";
import StyleableButton from "../Touchables/StyleableButton";

export default class Home extends React.Component {
    render() {
        let {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Choose your type of challenge!</Text>
                <StyleableButton style={styles.button} title={'Play Challenge'} onPress={() => navigation.navigate('Play_Challenge')}></StyleableButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:5
    },
    button: {
        width: 300,
        backgroundColor: '#2196F3',
        alignSelf: 'center',
        borderRadius:50
    },
});