import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Logo = ({ style }) => {
  return (
    <Image
      style={[styles.image, style]}
      source={require("../assets/inspirasabor.jpg")}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    borderRadius: 30,
  },
});

export default Logo;
