import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function StatsComponent() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.title}>Stats Us</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus
        eu justo elementum consectetur a nec velit. Curabitur in hendrerit nisi.
        Nullam consectetur diam id libero fermentum, ut facilisis turpis
        aliquam. Donec gravida euismod erat, eu viverra augue varius id. Fusce
        id fermentum velit. Aliquam euismod orci nec consectetur tincidunt.
        Integer vel lacus ac elit pellentesque gravida. Vestibulum euismod justo
        vel elit feugiat, nec interdum erat tristique.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});
