import React from "react";
import {Text, View, StyleSheet, Image} from 'react-native';

const ImageDetail = ({title,imageSource,imageScore}) => {
    return (
        <View >
            <Image style={styles.image} source={imageSource} />            
            <Text>{title}</Text>
            <Text>Image Score -{imageScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 180,
      }
});

export default ImageDetail;