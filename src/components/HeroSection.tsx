import { StyleSheet, View, Image, Dimensions } from 'react-native';
import React from 'react';
import images from "../constants/images";


const { width, height } = Dimensions.get('window');

export const HeroSection = () => {
  return (
    <View style={styles.container}>
      <Image source={images.turtle} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center', 
  },
  image: {
    width: width, 
    height: height / 3,
    resizeMode: 'cover', 
  },
});

export default HeroSection;
