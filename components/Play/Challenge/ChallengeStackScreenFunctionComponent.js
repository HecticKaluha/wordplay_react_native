import React, {useEffect, useState} from "react";
import {Alert, StyleSheet, Text, View} from "react-native";
import StyleableButton from "../../Touchables/StyleableButton";

export default function ChallengeStackScreenFunctionComponent(){
    const [currentWordCounter, setCurrentWordCounter] = useState(0);
    useEffect(()=>{setWord(wordArray[currentWordCounter]);}, [currentWordCounter]);
    const wordArray = ["piet", "Heijn", "Klaas", "klara"];
    const [word, setWord] = useState(wordArray[0]);
    const onPress = () => {
        setCurrentWordCounter((prevState) => prevState + 1);
    }

    return (
        <View>
            <StyleableButton title="click me" onPress={onPress}></StyleableButton>
            <Text> currentWordCounter: {currentWordCounter} </Text>
            <Text> Word: {word} </Text>
        </View>
    );
}