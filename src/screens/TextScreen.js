import React, {useState} from "react";
import {View,Text, StyleSheet, TextInput} from "react-native";

const TextScreen = function(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
<View>
    <View>
        <Text>Enter Name: </Text>
        <TextInput 
            style = {styles.input} 
            autoCapitalize="none"
            autoCorrect= {false}
            value={name}
            onChangeText={ (newValue) => setName(newValue)}
        />
        <Text>My name is: {name}</Text>
    </View>
    <View>
        <Text>Enter Password: </Text>
        <TextInput 
            style = {styles.input} 
            autoCapitalize="none"
            autoCorrect= {false}
            value={password}
            onChangeText={ (newValue) => setPassword(newValue)}
        />
        { password.length <5 ? <Text>Password Must Contains atleast 5 Characters</Text> : null}

        <Text>My Password is: {password}</Text>
    </View>
</View>
    );

};

const styles = StyleSheet.create({
    input: {
        margin : 15,
        borderColor : "black",
        borderWidth : 1
    }
});

export default TextScreen;