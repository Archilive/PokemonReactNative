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
import BackgroundImg from '../components/ImageBackGround';
import ButtonNavigator from '../components/ButtonNavigator';
import { useGetAllCards } from '../hooks/useGetAllCards';

export default function Select({ navigation }: any) {
  
  const navigateToSelect = () => {
    navigation.navigate('SelectedPokemon');
  };

  const handleNavigateToHome = () => {
    navigation.navigate('Loading');
  };

  const { data, isFetching } = useGetAllCards();

  if (isFetching) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/selectPage/pokeball.png')}
    >
      <TouchableOpacity style={styles.goback} onPress={handleNavigateToHome}>
        <Image source={require('../assets/selectPage/arrow_back.png')} />
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>
          Select Your Pokémon{''}
          <Image source={require('../assets/selectPage/pokeballTitle.png')} />
        </Text>

        {Array.isArray(data) ? (
          data.map((card) => (
            <Text style={styles.text} key={card.id}>
              {card.name.fr}
            </Text>
          ))
        ) : (
          <Text style={styles.text}>No data available</Text>
        )}
        {/* <BackgroundImg image={require('../assets/selectPage/pokeball.png')}> */}
        <ButtonNavigator onPress={navigateToSelect}>
          <Text style={styles.title}>qzd</Text>
        </ButtonNavigator>
        {/* </BackgroundImg> */}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
  },

  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },

  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },

  goback: {
    backgroundColor: '#373737',
    width: 48,
    height: 48,
    borderRadius: 9,
    position: 'absolute',
    top: '4%', // Utilisation de pourcentage plutôt que de valeur absolue
    left: '4%', // Utilisation de pourcentage plutôt que de valeur absolue
    justifyContent: 'center',
    alignItems: 'center',
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
//   goback: {
//     backgroundColor: '#373737',
//     width: 48,
//     height: 48,
//     borderRadius: 9,
//     position: 'absolute',
//     top: '4%',

//     left: '4%',

//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   user: {
//     width: 48,
//     height: 48,
//     borderRadius: 9,
//     position: 'absolute',
//     top: '4%',
//     left: '84%', // Utilisation de pourcentage plutôt que de valeur absolue
//   },
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
//   pokeball: {
//     width: 60,
//     height: 60,
//   },
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
