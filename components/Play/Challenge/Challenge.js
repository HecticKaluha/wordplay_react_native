import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import StyleableButton from "../../Touchables/StyleableButton";

function Challenge(props) {
    const {navigation, data} = props;
    const [word, setWord] = useState('Loading...');
    const [currentArticles, setCurrentArticles] = useState([]);
    const [currentWordCounter, setCurrentWordCounter] = useState(0);
    const answers = ['De', 'Beide', 'Het'];

    useEffect(()=>{
        if(data.length > 0){
            setWord(capitalizeFirstLetter(data[currentWordCounter]['word']))
            setCurrentArticles(data[currentWordCounter]['articles'])
        }
    }, [currentWordCounter]);

    const AsyncAlert = (title, msg) => new Promise((resolve) => {
        Alert.alert(
            title,
            msg,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        resolve();
                    },
                },
            ],
            { cancelable: false },
        );
    });

    function checkAnswer(answer) {
        let result = "Incorrect";
        let alertString = `Je gaf niet het juiste keuze voor het woord '${word}'. De keuze moest zijn '${answers[1]}'.`;
        if (currentArticles.length === 1) {
            if (currentArticles[0]['article'].toLowerCase() === answer.toLowerCase()) {
                result = 'Correct!';
            }
            alertString = `Het juiste lidwoord voor ${word} is '${answers[answers.indexOf(capitalizeFirstLetter(currentArticles[0]['article']))]}'.`;
        } else {
            if (answer === 'Beide' && currentArticles.length === 2) {
                result = 'Correct';
                alertString = `Voor het woord '${word}' zijn beide lidwoorden goed.`;
            }
        }
        AsyncAlert(result, alertString).
        then(()=>{
            nextWord()
        });
    }

    function nextWord() {
        if (currentWordCounter >= data.length - 1) {
            endChallenge()
        } else {
            setCurrentWordCounter(currentWordCounter + 1)
        }
    }

    function endChallenge() {
        AsyncAlert("Je hebt de challenge afgerond!", "Je kunt een nieuwe challenge starten via de 'Play' Pagina")
            .then(()=>{
                navigation.goBack();
            });
    }

    function capitalizeFirstLetter(wordToCapitalize) {
        return wordToCapitalize
            .toLowerCase()
            .split(' ')
            .map((wordToCapitalize) => wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1))
            .join(' ');
    }

    return (
        <View style={styles.container}>
            <View style={styles.challengeWordInfo}>
                <Image
                    source={require('../../../assets/img/cat.jpg')}
                    style={styles.challengeImage}
                />
                <Text
                    style={styles.challengeWord}>____ {word}</Text>
            </View>
            <View style={styles.challengeButtonContainer}>
                <StyleableButton style={styles.challengeButton} title={answers[0]} onPress={() => {
                    checkAnswer(answers[0]);
                }}></StyleableButton>
                <StyleableButton style={styles.challengeButton} title={answers[1]} onPress={() => {
                    checkAnswer(answers[1]);
                }}></StyleableButton>
                <StyleableButton style={styles.challengeButton} title={answers[2]} onPress={() => {
                    checkAnswer(answers[2]);
                }}></StyleableButton>
            </View>
        </View>
    );
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
        alignSelf: 'center'
    },
    challengeWord: {
        fontSize: 34,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
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

export default Challenge;