import {ActivityIndicator, Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import StyleableButton from "../../Touchables/StyleableButton";
import Challenge from "./Challenge";

export default function ChallengeStackScreen(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const {navigation} = props;

    useEffect(() => {
        getChallenge();
    }, [])

    async function getChallenge() {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        try {
            await delay(2000);
            fetch('http://192.168.1.53:5000/words/random/10')
                // fetch('http://local.ip.in.network:5000/words/random/10')
                .then(response => response.json())
                .then(json => {
                    setData(json.data)
                });
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            { data.length > 0 && (<Challenge navigation={navigation} data={data} />)}
            { isLoading && (<ActivityIndicator size={60} color="#2196F3" style={styles.container}/>)}
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
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
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