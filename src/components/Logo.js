import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Logo = ({ style }) => {
  return (
    <Image
      style={[styles.image, style]}
      source={require("../assets/inspirasabor.jpg")}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%', // Largura responsiva, ajusta-se à largura do pai
    aspectRatio: 1, // Mantém a proporção original da imagem
  },
});

export default Logo;
