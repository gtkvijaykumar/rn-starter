import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {

    const freinds =  [
        { name: "Friend #1", age: 21},
        { name: "Friend #2", age: 32},
        { name: "Friend #3", age: 30},
        { name: "Friend #4", age: 34},
        { name: "Friend #5", age: 24},
        { name: "Friend #6", age: 26},
        { name: "Friend #7", age: 28},
        { name: "Friend #8", age: 31},
        { name: "Friend #9", age: 35},
        { name: "Friend #10", age: 22}
    ];

    return (
        <View> 
            <FlatList
                keyExtractor={ friend =>  friend.name}
                data = {freinds}   
                renderItem = {({item}) => {
                   return <Text style = {styles.textStyle}> {item.name} - Age {item.age}</Text>;
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical : 30
    }
});

export default ListScreen;