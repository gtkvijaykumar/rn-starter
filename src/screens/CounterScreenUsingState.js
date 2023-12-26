import React, {useState} from "react";
import { Text , View, Button, StyleSheet} from "react-native";

const CounterScreenUsingState = () => {

    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase Counter" onPress={ () => {
                //dont do this like below instead use setCounter
                //counter++;
                //counter = counter + 1;
                setCounter(counter +1);
            }} />
            <Button title="Decrease Counter" onPress={ () => {
                //dont do this like below instead use setCounter
                //counter--;
                setCounter(counter -1);
            }} />
            <Text> This is Counter Screen { counter }</Text>
        </View>
    );

};

const styles = StyleSheet.create({});

export default CounterScreenUsingState;