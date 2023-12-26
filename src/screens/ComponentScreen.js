import React from "react";
import {View,Text, StyleSheet} from "react-native";

const ComponentScreen = function(){
    const myName = "G.Vijay Kumar";
    return (
    <View>
        <Text style = {styles.textStyle}>Getting Started with React Native.</Text>
        <Text style = {styles.nameStyle}>My name is {myName}</Text>
    </View>
    );

};

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 45
    },
    nameStyle : {
        fontSize : 20
    }
});

export default ComponentScreen;