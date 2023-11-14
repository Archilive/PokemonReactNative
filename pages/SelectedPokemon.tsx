import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import BackgroundImg from '../components/ImageBackGround';
import ButtonNavigator from '../components/ButtonNavigator';
import { useGetAllCards } from '../hooks/useGetAllCards';

export default function SelectedPokemon({ navigation }: any) {
  const navigateToSelect = () => {
    navigation.navigate('Select');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <BackgroundImg
        image={require('../assets/selectedPokemonPage/background2.png')}
      > */}
      <Text style={styles.text}>Bulb</Text>

      <ButtonNavigator onPress={navigateToSelect}>
        <Text style={styles.text}>Select ---</Text>
      </ButtonNavigator>
      {/* </BackgroundImg> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
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
