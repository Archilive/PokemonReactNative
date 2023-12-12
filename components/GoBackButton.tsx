import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoBackButton = () => {
  const navigation = useNavigation();

  const navigateToBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.goBackButton} onPress={navigateToBack}>
      <Image source={require('../assets/arrow_back.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goBackButton: {
    backgroundColor: '#373737',
    width: 48,
    height: 48,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default GoBackButton;
