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

export default function Selection({ navigation }: any) {
  const navigateToSelect = (pokemonId: number) => {
    navigation.navigate('Details', { pokemonId });
  };

  const navigateToBack = (): any => {
    navigation.goBack();
  };

  const { data, isFetching } = useGetAllCards();

  if (isFetching) {
    return <ActivityIndicator style={styles.loadingScreen} />;
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/selectPage/pokeball.png')}
    >
      <TouchableOpacity style={styles.goback} onPress={navigateToBack}>
        <Image source={require('../assets/arrow_back.png')} />
      </TouchableOpacity>

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
        <Text style={styles.pokedex}>
          {data?.length} Pokémons in your Pokedex
        </Text>
        <ScrollView style={styles.scrollviewlist}>
          {Array.isArray(data) ? (
            data.map((card) => (
              <TouchableOpacity
                style={
                  (styles.cardContainer,
                  { backgroundColor: getTypeColor(card.types[0].name) })
                }
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
            <Text style={styles.text}>No data available</Text>
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
    backgroundColor: '#000000',
    flex: 1,
    resizeMode: 'cover',
  },

  cardContainer: {
    borderRadius: 15,
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
    width: '50%',
    // pointerEvents: 'none',
    marginHorizontal: '5%',
    top: '15%',
  },

  text: {
    color: 'white',
    // textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
    pointerEvents: 'none',
  },

  pokemonName: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 30,
    marginLeft: 10,
  },

  goback: {
    backgroundColor: '#373737',
    width: 48,
    height: 48,
    borderRadius: 9,
    position: 'absolute',
    top: '4%',
    left: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollviewlist: {
    width: '100%',
    height: '80%',
    color: '#FFFFFF',
    position: 'absolute',
    top: '30%',
    left: '39%',
    backgroundColor: '#373737',
  },

  pokedex: {
    color: '#FFF',
    fontSize: 15,
    fontStyle: 'normal',
    width: '28%',
    justifyContent: 'center',
    alignItems: 'center',
    top: '70%',
    marginHorizontal: '5%',
  },

  cardImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  typesContainer: {
    marginLeft: 10,
    paddingHorizontal: 10,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  types: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
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
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backgroundpoke: {
//     position: 'absolute',
//     top: '18%',

//     left: '-30%',

//     // zIndex: 1,
//     width: '110%',

//     height: '60%',
//   },
//
//   title: {
//     fontSize: 35.88, // Utilisez simplement le nombre pour définir la taille de la police
//     // fontFamily: 'clash-display', // Assurez-vous que le nom de la police est correctement défini dans votre application
//     fontWeight: '300', // Utilisez une chaîne pour définir le poids de la police
//     color: '#FFFFFF',
//     position: 'absolute',
//     top: '16%',
//     left: '4%',
//   },
//   boldtext: {
//     fontSize: 47.83,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     position: 'absolute',
//     top: '21%',
//     left: '4%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignContent: 'flex-start',
//   },
//
//   pokemonnumber: {
//     fontSize: 20,
//     lineHeight: 28,
//     fontWeight: '400',
//     color: '#FFFFFF',
//     position: 'absolute',
//     left: '4%',
//     top: '80%',
//     width: '35%',
//   },
//   scrollview: {
//     width: '100%',
//     height: '80%',
//     color: '#FFFFFF',
//     zIndex: 2,
//     position: 'absolute',
//     top: '30%',
//     left: '39%',
//     backgroundColor: '#373737',
//   },
//   pokemoncard: {
//     width: 374,
//     height: 299,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     alignSelf: 'center',
//   },
// });
