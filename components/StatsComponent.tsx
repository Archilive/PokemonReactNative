import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

interface StatData {
  title: string;
  number: number;
  image: any;
}

interface StatsComponentProps {
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
}

const StatsComponent: React.FC<StatsComponentProps> = ({
  hp,
  attack,
  defense,
  spAttack,
  spDefense,
  speed,
}: StatsComponentProps) => {
  const statsData: StatData[] = [
    {
      title: 'HP',
      number: hp,
      image: require('../assets/selectedPokemonPage/stats_bar.png'),
    },
    {
      title: 'Attack',
      number: attack,
      image: require('../assets/selectedPokemonPage/stats_bar.png'),
    },
    {
      title: 'Defense',
      number: defense,
      image: require('../assets/selectedPokemonPage/stats_bar.png'),
    },
    {
      title: 'Sp. Atk',
      number: spAttack,
      image: require('../assets/selectedPokemonPage/stats_bar.png'),
    },
    {
      title: 'Sp. Def',
      number: spDefense,
      image: require('../assets/selectedPokemonPage/stats_bar.png'),
    },
    {
      title: 'Speed',
      number: speed,
      image: require('../assets/selectedPokemonPage/stats_bar.png'),
    },
  ];
  return (
    <ScrollView
      style={styles.scrollViewContainer}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View>
        {statsData.map((stat, index) => (
          <View style={styles.contentContainer} key={index}>
            <Text style={styles.titleContent}>{stat.title}</Text>
            <Text style={styles.numberContent}>{stat.number}</Text>
            <Image source={stat.image} style={styles.statsImage} />
          </View>
        ))}
      </View>

      <Text style={styles.description}>
        The ranges shown on the right are for a level 100 Pokémon. Maximum
        values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values
        are based on a hindering nature, 0 EVs, 0 IVs.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    display: 'flex',
    overflow: 'hidden',
    paddingHorizontal: 24,
  },

  scrollViewContent: {
    flexGrow: 1,
  },

  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleContent: {
    color: '#999999',
    fontSize: 14,
    fontWeight: 'bold',
    width: 80,
  },

  numberContent: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
    marginVertical: 32,
  },

  statsImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
});

export default StatsComponent;
