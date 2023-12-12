import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useGetAllCards } from '../hooks/useGetAllCards';
import TypesComponent from '../components/TypesComponent';
import { getBackgroundType, getTypeColor } from '../themes/themes';
import HeaderComponent from '../components/HeaderComponent';

export default function Selection({ navigation }: any) {
  const navigateToSelect = (pokemonId: number) => {
    navigation.navigate('Details', { pokemonId });
  };

  const { data, isFetching } = useGetAllCards();

  if (isFetching) {
    return <ActivityIndicator style={styles.loadingScreen} />;
  }

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="contain"
      source={require('../assets/selectPage/pokeball.png')}
    >
      <HeaderComponent like={false} />

      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>
          Select your {''}
          <Text
            style={{
              fontSize: 35,
              fontFamily: 'ClashDisplay-Semibold',
            }}
          >
            Pokémon
          </Text>
          <View style={{ paddingLeft: 10 }}>
            <Image
              style={{
                width: 32,
                height: 32,
              }}
              source={require('../assets/selectPage/pokeballTitle.png')}
            />
          </View>
        </Text>
        <Text style={styles.pokedexLength}>
          {data?.length} Pokémons in your Pokedex
        </Text>

        <ScrollView style={styles.scrollviewlist}>
          {Array.isArray(data) ? (
            data.map((card) => (
              <TouchableOpacity
                style={{
                  ...styles.cardContainer,
                  backgroundColor: getTypeColor(card.types[0].name),
                }}
                onPress={() => navigateToSelect(card.pokedexId)}
                key={card.pokedexId}
              >
                <Image
                  source={getBackgroundType(card.types[0].name)}
                  //
                  style={styles.backgroundType}
                />
                <Image
                  style={styles.cardImage}
                  source={{
                    uri: card.sprites.regular,
                  }}
                />
                <Text style={styles.pokemonName}>{card.name.fr}</Text>
                <TypesComponent data={card} textColor="#000000" />
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.textDataMissing}>No data available</Text>
          )}
        </ScrollView>
      </View>
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

  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    flex: 1,
  },

  title: {
    fontFamily: 'ClashDisplay-Regular',
    color: 'white',
    fontSize: 35,
    fontWeight: '200',
    lineHeight: 40,
    width: '60%',
    marginHorizontal: '5%',
    top: '15%',
  },

  textDataMissing: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
    pointerEvents: 'none',
  },

  pokedexLength: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'ClashDisplay-Regular',
    width: '28%',
    justifyContent: 'center',
    alignItems: 'center',
    top: '70%',
    marginHorizontal: '5%',
  },

  scrollviewlist: {
    width: '100%',
    height: '80%',
    position: 'absolute',
    top: '30%',
    left: '30%',
  },

  cardContainer: {
    width: 374,
    height: 250,
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'column',
    padding: 12,
  },

  backgroundType: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  cardImage: {
    width: 250,
    height: 250,
    position: 'relative',
    overflow: 'visible',
    resizeMode: 'cover',
    alignSelf: 'center',
    top: '-30%',
    zIndex: 1,
  },

  pokemonName: {
    fontFamily: 'ClashDisplay-Semibold',
    marginTop: 'auto',
    color: '#000000',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 5,
  },
});
