import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export default function AboutComponent({ weight, height }: any) {
  return (
    <ScrollView>
      <Text style={styles.description}>
        Having been domesticated from birth, Bulbasaur is regarded as both a rar
        and welf-behaved Pokémon.
      </Text>
      <View style={styles.pokemonInfoContainer}>
        <View style={styles.infoItem}>
          <Image
            style={styles.iconItem}
            source={require('../assets/balance.png')}
          />
          <Text style={styles.textInfoItem}>{weight}</Text>
        </View>
        <View style={styles.middlebar} />
        <View style={styles.infoItem}>
          <Image
            style={styles.iconItem}
            source={require('../assets/arrow_height.png')}
          />
          <Text style={styles.textInfoItem}>{height}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pokemonInfoContainer: {
    alignSelf: 'center',
    backgroundColor: '#444444',
    display: 'flex',
    flexDirection: 'row',
    width: 380,
    height: 95,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },

  description: {
    width: 380,
    color: '#999999',
    fontSize: 14,
    alignSelf: 'center',
    marginBottom: 32,
  },

  infoItem: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
  },

  textInfoItem: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-Semibold',
  },

  iconItem: {
    width: 24,
    height: 24,
    marginRight: 8,
  },

  middlebar: {
    width: 1,
    height: 47,
    backgroundColor: '#666666',
  },
});
