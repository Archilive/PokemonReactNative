import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import AboutComponent from './AboutComponent';
import StatsComponent from './StatsComponent';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ButtonMenu = ({ data }: any) => {
  const sections = ['About', 'Stats', 'Moves', 'Evolutions'];
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const animatedValue = useSharedValue(0);

  const handlePress = (section: any) => {
    setSelectedSection(section);

    if (
      section === 'Stats' ||
      section === 'Evolutions' ||
      section === 'Moves'
    ) {
      animatedValue.value = withTiming(1);
    } else {
      animatedValue.value = withTiming(0);
    }
  };

  const animatedMenuStyle = useAnimatedStyle(() => {
    const height = interpolate(animatedValue.value, [0, 1], [0.65, 0.35]);
    return {
      height,
      display: 'flex',
    };
  });

  const renderSection = () => {
    switch (selectedSection) {
      case 'About':
        return <AboutComponent weight={data.weight} height={data.height} />;
      case 'Stats':
        return (
          <StatsComponent
            hp={data.stats.hp}
            attack={data.stats.atk}
            defense={data.stats.def}
            spAttack={data.stats.spe_atk}
            spDefense={data.stats.spe_def}
            speed={data.stats.vit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonMenu}>
        {/* <Animated.Image
          source={{ uri: imagePokemon }}
          style={[animatedImageStyle]}
        /> */}
        {sections.map((section) => (
          <TouchableOpacity
            key={section}
            style={[
              styles.button,
              {
                borderBottomColor:
                  selectedSection === section ? 'white' : 'transparent',
              },
            ]}
            onPress={() => handlePress(section)}
          >
            <Text
              style={[
                styles.buttonText,
                { color: selectedSection === section ? 'white' : '#444444' },
              ]}
            >
              {section}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={styles.contentContainer}>{renderSection()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '35%',
  },

  buttonMenu: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'baseline',
    width: '100%',
    paddingBottom: 8,
  },

  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 2,
    marginRight: 8,
  },

  buttonText: {
    color: '#white',
    fontWeight: 'bold',
  },

  contentContainer: {
    paddingVertical: 16,
    width: '100%',
  },
});

export default ButtonMenu;
