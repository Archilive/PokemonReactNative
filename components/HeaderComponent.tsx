import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import HeartAnimation from './HeartAnimation';
import GoBackButton from './GoBackButton';

const HeaderComponent = ({ pokedexId, like }: any) => {
  if (like) {
    return (
      <View
        style={{
          top: '10%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 120,
          zIndex: 1,
        }}
      >
        <GoBackButton />
        <Text style={styles.pokemonId}>#{pokedexId}</Text>

        <HeartAnimation />
      </View>
    );
  } else {
    return (
      <View
        style={{
          top: '10%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 280,
          zIndex: 1,
        }}
      >
        <GoBackButton />
        <Image
          style={styles.user}
          source={require('../assets/selectPage/user.png')}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  pokemonId: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 40,
    zIndex: 1,
  },
  user: {
    width: 48,
    height: 48,
    borderRadius: 9,
    // position: 'absolute',
    // top: '7%',
    // left: '84%',
  },
});

export default HeaderComponent;
