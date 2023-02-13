import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
} from 'react-native';

export default class StyleableButton extends Component {
    render() {
        let {onPress, title, style} = this.props;
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}>
                {/*<View style={styles.button}>*/}
                <View style={this.props.style ? this.props.style : styles.button}>
                    <Text style={styles.buttonText}>{this.props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
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