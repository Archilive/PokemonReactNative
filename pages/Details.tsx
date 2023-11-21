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
} from 'react-native';
import { useGetCardById } from '../hooks/useGetCardById';
import HeartAnimation from '../components/HeartAnimation';
import TypesComponent from '../components/TypesComponent';
import GoBackButton from '../components/GoBackButton';
import ButtonScrollView from '../components/ButtonScrollView';

export default function Details({ route, navigation }: any) {
  const { pokemonId } = route.params;

  const { data, isFetching, isError } = useGetCardById(pokemonId);

  if (isFetching) {
    return <ActivityIndicator style={styles.loadingScreen} />;
  }

  if (isError || !data) {
    return <Text style={styles.textDataMissing}>No data available</Text>;
  }

  return (
    <ImageBackground
      style={styles.background}
      blurRadius={50}
      // resizeMode="contain"
      source={{ uri: data.sprites.regular }}
    >
      {/* <ImageBackground
        style={styles.background2}
        resizeMode="contain"

        source={require('../assets/selectedPokemonPage/background2.png')}
      > */}
      <StatusBar style="light" />
      <GoBackButton top={'10%'} />

      <HeartAnimation />

      <SafeAreaView style={styles.container}>
        <View>
          <View key={data.pokedexId}>
            <Text style={styles.pokemonId}>#{data.pokedexId}</Text>
            <Text style={styles.pokemonName}>{data.name.en}</Text>
            <Image
              style={styles.cardImage}
              source={{
                uri: data.sprites.regular,
              }}
            />

            <View style={styles.typesContainer}>
              <TypesComponent data={data} />
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* <ButtonScrollView /> */}
    </ImageBackground>
    // </ImageBackground>
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

  textDataMissing: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    top: 400,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },

  background: {
    backgroundColor: '#232323',
    width: '100%',
    height: '100%',
    flex: 1,
  },

  background2: {
    flex: 1,
    opacity: 0.3,
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

  cardImage: {
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  typesContainer: {
    alignItems: 'center',
    
  },
});
