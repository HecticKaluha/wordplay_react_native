import React, {Component} from 'react';
import {Button, Image, Text, TextInput, View,} from 'react-native';
class Cat extends Component {
    state = {petAmount: 0, name: this.props.name, text: ''}
    render() {
        return (
            <View>
                <Image
                    source={this.state.petAmount <= 9 ? require('../../assets/img/cat.jpg') : require('../../assets/img/cat2.png')}
                    style={{width: 200, height: 200}}
                />
                <Text>Hello, I am your cat, {this.state.name}! You have pet me {this.state.petAmount} times!</Text>
                <Button
                    onPress={() => {
                        this.setState({petAmount: this.state.petAmount + 1});
                    }}
                    title='Pet your cat'
                />
                <TextInput
                    style={{height: 40} }
                    placeholder="Type here to give your cat a name!"
                    onChangeText={(newName) => {
                        this.setState({name: newName});
                    }}
                    defaultValue={this.state.text}
                />
            </View>
        )
    }
}

export default Cat;