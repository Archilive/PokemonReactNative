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
import { LinearGradient } from 'expo-linear-gradient';
import { useGetCardById } from '../hooks/useGetCardById';
import TypesComponent from '../components/TypesComponent';
import ButtonMenu from '../components/ButtonMenuComponent';
import HeaderComponent from '../components/HeaderComponent';

export default function Details({ route }: any) {
  const { pokemonId } = route.params;

  const { data, isFetching, isError } = useGetCardById(pokemonId);

  if (isFetching) {
    return <ActivityIndicator style={styles.loadingScreen} />;
  }

  if (isError || !data) {
    return <Text style={styles.textDataMissing}>No data available</Text>;
  }

  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     // backgroundColor: 'black',
    //   }}
    // >
    <ImageBackground
      style={styles.background}
      blurRadius={50}
      source={{ uri: data.sprites.regular }}
    >
      <LinearGradient
        colors={['transparent', '#000']}
        end={[0.4, 0.75]}
        style={{ height: '100%', width: '100%' }}
      >
        <StatusBar style="light" />
        <HeaderComponent pokedexId={data.pokedexId} like={true} />
        <SafeAreaView style={styles.container} key={data.pokedexId}>
          <Image
            style={styles.cardImage}
            source={{
              uri: data.sprites.regular,
            }}
          />
          <Text style={styles.pokemonName}>{data.name.fr}</Text>

          <View style={styles.typesContainer}>
            <TypesComponent data={data} textColor="white" />
          </View>
        </SafeAreaView>
        <ButtonMenu data={data} />
      </LinearGradient>
    </ImageBackground>
    // </SafeAreaView>
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

  text: {
    top: 100,
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },

  // pokemonId: {
  //   position: 'absolute',
  //   top: '6.5%',
  //   alignSelf: 'center',
  //   color: 'white',
  //   textAlign: 'center',
  //   fontSize: 25,
  //   fontStyle: 'normal',
  //   fontWeight: '400',
  //   lineHeight: 40,
  //   zIndex: 1,
  // },

  pokemonName: {
    fontFamily: 'Montserrat-Semibold',
    width: 'auto',
    height: 'auto',
    marginVertical: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },

  cardImage: {
    height: '80%',
    width: '100%',
    // overflow: 'visible',
    // resizeMode: 'cover',
    borderRadius: 10,
  },

  typesContainer: {
    alignItems: 'center',
  },
});
