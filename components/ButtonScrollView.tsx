import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AboutComponent from './AboutComponent';
import StatsComponent from './StatsComponent';

const ButtonScrollView = () => {
  const sections = ['About', 'Stats', 'Moves', 'Evolutions'];
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handlePress = (section: any) => {
    setSelectedSection(section);
    console.log(`Pressed ${section}`);
  };

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollViewContent}
      showsHorizontalScrollIndicator={false}
    >
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
          <Text style={[styles.buttonText, { color: 'white' }]}>{section}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
});

export default ButtonScrollView;
