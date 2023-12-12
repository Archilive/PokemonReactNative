import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default function Home({ navigation }: any) {
  const navigateToSelect = () => {
    navigation.navigate('Selection');
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/loadingPage/background2.png')}
    >
      <View style={styles.container}>
        <Text style={{ textDecorationLine: 'line-through', ...styles.title }}>
          Pokemon Finder
        </Text>

        <TouchableOpacity style={styles.button} onPress={navigateToSelect}>
          <Text style={styles.text}>Get Your Pokèmon</Text>
        </TouchableOpacity>
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

  title: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    lineHeight: 40,
    top: '20%',
    fontFamily: 'ClashDisplay-Semibold',
  },

  text: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontFamily: 'ClashDisplay-Regular',
    lineHeight: 40,
  },

  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    width: '80%',
    top: '70%',
  },
});
