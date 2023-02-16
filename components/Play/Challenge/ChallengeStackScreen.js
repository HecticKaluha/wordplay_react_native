import {ActivityIndicator, Alert, Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from "react";
import StyleableButton from "../../Touchables/StyleableButton";

class ChallengeStackScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            word: 'Loading...',
            currentWordCounter: 0
        };
    }
    answers = ['De', 'Beide', 'Het'];

    async getChallenge() {
        try {
            const response = await fetch('http://192.168.1.53:5000/words/random/10');
            const json = await response.json();
            this.setState({data: json.data, word: json.data[this.state.currentWordCounter]['word']});
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            this.setState({isLoading: false});
        }
    }

    checkAnswer(answer) {
        let result = "Incorrect";
        let correctAnswer = "";
        let currentArticles = this.state.data[this.state.currentWordCounter]['articles'];
        let currentWord = this.capitalizeFirstLetter(this.state.data[this.state.currentWordCounter]['word']);
        let alertString = `Je gaf niet het juiste keuze voor het woord '${currentWord}'. De keuze moest zijn '${this.answers[1]}'.`;
        if (currentArticles.length === 1) {
            if(currentArticles[0]['article'].toLowerCase() === answer.toLowerCase()){
                result = 'Correct!';
            }
            alertString = `Het juiste lidwoord voor ${currentWord} is '${this.answers[this.answers.indexOf(this.capitalizeFirstLetter(currentArticles[0]['article']))]}'.`;
        }
        else{
            if(answer === 'Beide' && currentArticles.length === 2){
                result = 'Correct';
                alertString = `Voor het woord '${currentWord}' zijn beide lidwoorden goed.`;
            }
        }
        Alert.alert(`${result}`, alertString);
        this.nextWord()
    }

    nextWord() {
        if (this.state.currentWordCounter >= this.state.data.length - 1) {
            this.endChallenge()
        } else {
            this.setState({currentWordCounter: this.state.currentWordCounter + 1})
        }
    }

    endChallenge() {
        Alert.alert(`Je hebt de challenge afgerond!`, `Je kunt een nieuwe challenge starten via de 'Play' Pagina`)
        this.props.navigation.goBack();
    }

    componentDidMount() {
        this.getChallenge();
    }

    capitalizeFirstLetter(word){
        return word
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    render() {
        const {data, isLoading, currentWordCounter} = this.state;
        let {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.challengeWordInfo}>
                    <Image
                        source={require('../../../assets/img/cat.jpg')}
                        style={styles.challengeImage}
                    />
                    <Text
                        style={styles.challengeWord}>____ {this.state.data.length > 0 ? this.capitalizeFirstLetter(this.state.data[this.state.currentWordCounter]['word']) : this.capitalizeFirstLetter(this.state.word)}</Text>
                </View>
                <View style={styles.challengeButtonContainer}>
                    <StyleableButton style={styles.challengeButton} title={this.answers[0]} onPress={() => {
                        this.checkAnswer(this.answers[0]);
                    }}></StyleableButton>
                    <StyleableButton style={styles.challengeButton} title={this.answers[1]} onPress={() => {
                        this.checkAnswer(this.answers[1]);
                    }}></StyleableButton>
                    <StyleableButton style={styles.challengeButton} title={this.answers[2]} onPress={() => {
                        this.checkAnswer(this.answers[2]);
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

export default ChallengeStackScreen;