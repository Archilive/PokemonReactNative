import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useGetCardById } from '../hooks/useGetCardById';
import HeartAnimation from '../components/HeartAnimation';
import TypesComponent from '../components/TypesComponent';

export default function Details({ route, navigation }: any) {
  const { pokemonId } = route.params;

  const { data, isFetching, isError } = useGetCardById(pokemonId);

  if (isFetching) {
    return <ActivityIndicator style={styles.loadingScreen} />;
  }

  if (isError || !data) {
    return <Text style={styles.textDataMissing}>No data available</Text>;
  }

  const navigateToBack = (): any => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/selectedPokemonPage/background2.png')}
    >
      <TouchableOpacity style={styles.goback} onPress={navigateToBack}>
        <Image source={require('../assets/arrow_back.png')} />
      </TouchableOpacity>

      <HeartAnimation />

      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <View key={data.pokedexId}>
            <Text style={styles.pokemonId}>#{data.pokedexId}</Text>
            <Text style={styles.pokemonName}>{data.name.fr}</Text>
            <Image
              style={styles.cardImage}
              source={{
                uri: data.sprites.regular,
              }}
            />

            <TypesComponent data={data} />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  loadingScreen: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#000000',
  },

  text: {
    top: 100,
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },

  pokemonId: {
    top: '15%',
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },

  pokemonName: {
    top: '100%',
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },

  background: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  textDataMissing: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    top: 400,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },

  cardImage: {
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  goback: {
    backgroundColor: '#373737',
    width: 48,
    height: 48,
    borderRadius: 9,
    position: 'absolute',
    top: '10%',
    left: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
