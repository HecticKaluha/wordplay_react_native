import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View,} from 'react-native';

export default function StyleableButton(props) {
    let {onPress, title, style} = props;
    return (
        <TouchableNativeFeedback
            onPress={props.onPress}>
            {/*<View style={styles.button}>*/}
            <View style={props.style ? props.style : styles.button}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 240,
        backgroundColor: 'green',
        alignSelf: 'center',
        borderRadius:50
    },
    buttonText: {
        textAlign: 'center',
        padding: 15,
        color: 'white',
    },
});