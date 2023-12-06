import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import TypesComponent from './TypesComponent';
import { Card } from '../hooks/useGetAllCards';

interface EvolutionMenuProps {
  data: Card;
  id: number;
  name: string;
}

export default function EvolutionComponent({
  data,
  id,
  name,
}: EvolutionMenuProps) {
  const renderEvolution = (
    pokemonId: number,
    pokemonName: string,
    levelupTransition: string
  ) => (
    <View key={pokemonId}>
      <View style={styles.container}>
        <View style={styles.pokemonInfoContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageItem}
              source={{
                uri: `https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/${pokemonId}/regular.png`,
              }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textInfoItem}>#{pokemonId}</Text>
          <Text style={styles.textInfoItem}>{pokemonName}</Text>
          <TypesComponent data={data} textColor="white" />
        </View>
      </View>
      <View style={styles.transitionContainer}>
        <View style={styles.middlebar} />
        <Text style={styles.textLevelItem}>{levelupTransition}</Text>
      </View>
    </View>
  );

  const renderEvolutionLastIteration = (
    pokemonId: number,
    pokemonName: string
  ) => (
    <View key={pokemonId}>
      <View style={styles.container}>
        <View style={styles.pokemonInfoContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageItem}
              source={{
                uri: `https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/${pokemonId}/regular.png`,
              }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textInfoItem}>#{pokemonId}</Text>
          <Text style={styles.textInfoItem}>{pokemonName}</Text>
          <TypesComponent data={data} textColor="white" />
        </View>
      </View>
    </View>
  );

  const renderEvolutionChain = () => {
    const evolutionChain = [];
    let currentId = id;
    let levelupTransition = 'level 1'; // data.evolution.next?.[0].condition;

    const renderEvolutionRecursively = (evolutionData: any) => {
      if (evolutionData && evolutionData.length > 0) {
        const currentEvolution = evolutionData.pop();

        evolutionChain.push(
          renderEvolution(currentId++, currentEvolution.name, levelupTransition)
        );
        renderEvolutionRecursively(evolutionData);
      }
    };

    // Afficher les évolutions précédentes
    renderEvolutionRecursively(data.evolution.pre);

    // Ajouter l'évolution actuelle
    evolutionChain.push(renderEvolution(currentId++, name, levelupTransition));

    // if (data.evolution.next[1] === null) {
    //     data.evolution.next.reverse().forEach((nextEvolution: any) => {
    //       evolutionChain.push(
    //         renderEvolutionLastIteration(currentId++, nextEvolution.name)
    //       );
    //     });
    //   }

    // Afficher les évolutions suivantes
    if (data.evolution.next !== null) {
      data.evolution.next.reverse().forEach((nextEvolution: any) => {
        evolutionChain.push(
          renderEvolution(currentId++, nextEvolution.name, levelupTransition)
        );
      });
    }

    return evolutionChain;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {renderEvolutionChain()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

  container: {
    marginTop: 32,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 40,
  },

  pokemonInfoContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#444444',
    width: 134,
    height: 87,
    borderRadius: 8,
  },

  imageContainer: {
    width: 124,
    height: 124,
    bottom: 24,
  },

  imageItem: {
    width: 124,
    height: 124,
  },

  textContainer: {
    justifyContent: 'center',
    gap: 4,
    flexDirection: 'column',
  },

  textInfoItem: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontWeight: '400',
  },
  transitionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  middlebar: {
    alignSelf: 'center',
    marginTop: 8,
    width: 1,
    height: 100,
    backgroundColor: '#666666',
  },

  textLevelItem: {
    color: '#FFFFFF',
    fontWeight: '400',
    left: 24,
  },
});
