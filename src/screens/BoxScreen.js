import React from 'react';
import { Text, View , StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyleParent}>
        <View style={styles.viewStyleChild}>
        </View>
         <View style={styles.viewStyleSpecialChild}>
         </View>
          <View style={styles.viewStyleChild}>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyleParent : {
        borderWidth : 2,
        borderColor : 'black',
        flexDirection : 'row',
        height : 200,
        width : 360
    },
    viewStyleChild : {
        borderWidth : 2,
        borderColor : 'black',
        backgroundColor: 'orange',
        height : 100,
        width : 120
    },
    viewStyleSpecialChild : {
        borderWidth : 2,
        borderColor : 'black',
        backgroundColor: 'green',
        height : 100,
        width : 120,
        marginTop : 100
    }
});

export default BoxScreen;