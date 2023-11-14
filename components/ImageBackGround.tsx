import { ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

const BackgroundImg = ({ image, children }) => (
  <ImageBackground source={image} resizeMode="cover" style={styles.background}>
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default BackgroundImg;
