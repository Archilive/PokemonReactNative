import React from 'react';
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
import { getTypeColor } from '../themes/themes';
import GoBackButton from '../components/GoBackButton';

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
      <GoBackButton top={'4%'} />

      <Image
        style={styles.user}
        source={require('../assets/selectPage/user.png')}
      />

      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>
          Select your {''}
          <Text
            style={{
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: 35,
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
                  style={styles.cardImage}
                  source={{
                    uri: card.sprites.regular,
                  }}
                />
                <Text style={styles.pokemonName}>{card.name.fr}</Text>
                <TypesComponent data={card} />
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
    fontStyle: 'normal',
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

  pokemonName: {
    marginTop: 'auto',
    color: '#000000',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 5,
  },

  cardImage: {
    width: 250,
    height: 250,
    position: 'relative',
    overflow: 'visible',
    resizeMode: 'cover',
    alignSelf: 'center',
    top: '-30%',
    // pointerEvents: 'none',
  },

  user: {
    width: 48,
    height: 48,
    borderRadius: 9,
    position: 'absolute',
    top: '4%',
    left: '84%',
  },
});
