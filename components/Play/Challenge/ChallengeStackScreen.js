import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';
import React from "react";
import StyleableButton from "../../Touchables/StyleableButton";

class ChallengeStackScreen extends React.Component {
    state = {word: "Fiets"};
    render() {
        let {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.challengeWordInfo}>
                    <Image
                        source={require('../../../assets/img/cat.jpg')}
                        style={styles.challengeImage}
                    />
                    <Text style={styles.challengeWord}>____ {this.state.word}</Text>
                </View>
                <View style={styles.challengeButtonContainer}>
                    <StyleableButton style={styles.challengeButton} title={'De'} onPress={() => {
                        Alert.alert("Jouw keuze","Je hebt 'De' gekozen.");
                    }}></StyleableButton>
                    <StyleableButton style={styles.challengeButton} title={'Beide'} onPress={() => {
                        Alert.alert("Jouw keuze", "Je hebt beide gekozen.");
                    }}></StyleableButton>
                    <StyleableButton style={styles.challengeButton} title={'Het'} onPress={() => {
                        Alert.alert("Jouw keuze", "Je hebt 'Het' gekozen.");
                    }}></StyleableButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        padding: 15,
        alignItems: 'center',
    },
    challengeWordInfo: {
        flex: 2,
    },
    challengeImage: {
        width: 200,
        height: 200,
        margin: 15,
    },
    challengeWord: {
        fontSize: 34,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    challengeButtonContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    challengeButton: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 50,
        flex: 1,
        marginHorizontal: 5,
        height: 70,
    }
});

export default ChallengeStackScreen;