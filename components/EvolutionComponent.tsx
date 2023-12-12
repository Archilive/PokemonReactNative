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
}: Readonly<EvolutionMenuProps>) {
  const renderEvolution = (
    pokemonId: number,
    pokemonName: string,
    levelupTransition?: string
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

  const renderEvolutionLastEvolution = (
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
    const evolutionList = [];

    const twoEvolutionFromTheTop = data.evolution.pre?.length == 1;
    const twoEvolution = data.evolution.next?.length == 1;
    const threeEvolutionFromTheTop = data.evolution.pre?.length == 2;
    const threeEvolution = data.evolution.next?.length == 2;

    const isFirstEvolution = data.evolution.pre;
    const isThirdEvolution = data.evolution.next;

    const secondEvolution = data.evolution.next?.[0] ?? null;
    const thirdEvolution = data.evolution.next?.[1] ?? null;

    if (data.evolution.pre === null && data.evolution.next === null) {
      evolutionList.push(renderEvolutionLastEvolution(id, name));
      return evolutionList;
    }

    if (isFirstEvolution === null) {
      console.log(data.evolution);
      // évolution 1
      if (twoEvolution) {
        evolutionList.push(
          renderEvolution(
            id,
            name,
            `${data.evolution.next?.[0].condition ?? 'N/A'}`
          )
        );
        evolutionList.push(
          renderEvolutionLastEvolution(
            id + 1,
            `${data.evolution.next?.[0].name}`
          )
        );
      }

      if (threeEvolution) {
        if (secondEvolution) {
          evolutionList.push(
            renderEvolution(
              id,
              name,
              `${data.evolution.next?.[0].condition ?? 'N/A'}`
            )
          );
        }
        if (secondEvolution) {
          evolutionList.push(
            renderEvolution(
              id + 1,
              secondEvolution.name,
              `${data.evolution.next?.[1].condition}`
            )
          );
        }
        if (thirdEvolution) {
          evolutionList.push(
            renderEvolutionLastEvolution(id + 2, thirdEvolution.name)
          );
        }
      }
    } else if (isThirdEvolution === null && threeEvolutionFromTheTop) {
      // évolution 3
      evolutionList.push(
        renderEvolution(
          id,
          `${data.evolution.pre?.[0].name}`,
          `${data.evolution.pre?.[0].condition ?? 'N/A'}`
        )
      );
      evolutionList.push(
        renderEvolution(
          id + 1,
          `${data.evolution.pre?.[1].name}`,
          `${data.evolution.pre?.[1].condition}`
        )
      );

      evolutionList.push(renderEvolutionLastEvolution(id + 2, name));
    } else {
      // évolution 2

      if (twoEvolutionFromTheTop && secondEvolution === null) {
        evolutionList.push(
          renderEvolution(
            id,
            `${data.evolution.pre?.[0].name}`,
            `${data.evolution.pre?.[0].condition ?? 'N/A'}`
          )
        );
        evolutionList.push(renderEvolutionLastEvolution(id + 1, name));
        return evolutionList;
      }

      if (data.evolution.pre?.[0] && secondEvolution) {
        evolutionList.push(
          renderEvolution(
            id,
            `${data.evolution.pre[0].name}`,
            `${data.evolution.pre[0].condition ?? 'N/A'}`
          )
        );
      }
      evolutionList.push(
        renderEvolution(id + 1, name, data.evolution.next?.[0].condition)
      );

      evolutionList.push(
        renderEvolutionLastEvolution(id + 2, `${data.evolution.next?.[0].name}`)
      );
    }

    return evolutionList;
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
