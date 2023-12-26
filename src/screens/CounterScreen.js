import React, {useReducer} from "react";
import { Text , View, Button, StyleSheet} from "react-native";

const reducer = (state, action) => {

    if(action.type == 'counter'){
        return (state + action.payload < 0 || state + action.payload >20) ? state : state + action.payload ;     
    }

};

const CounterScreen = () => {

    const [counter, dispatch] = useReducer( reducer, 0);

    return (
        <View>
            <Button title="Increase Counter" onPress={ () => {
                //dont do this like below instead use setCounter
                //counter++;
                //counter = counter + 1;
                dispatch({type: 'counter', payload: 1});
            }} />
            <Button title="Decrease Counter" onPress={ () => {
                //dont do this like below instead use setCounter
                //counter--;
                dispatch({type: 'counter', payload : -1});
            }} />
            <Text> This is Counter Screen { counter }</Text>
        </View>
    );

};

const styles = StyleSheet.create({});

export default CounterScreen;