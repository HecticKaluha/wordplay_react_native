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
});