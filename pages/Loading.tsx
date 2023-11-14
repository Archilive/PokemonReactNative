import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import ButtonNavigator from '../components/ButtonNavigator';

export default function Loading({ navigation }: any) {
  const navigateToSelect = () => {
    navigation.navigate('Select');
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/loadingPage/background2.jpg')}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>

        <ButtonNavigator onPress={navigateToSelect}>
          <Text style={styles.text}>Click me!</Text>
        </ButtonNavigator>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },
});
