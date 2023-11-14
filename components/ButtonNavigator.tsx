import { TouchableOpacity, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';

type Props = {
  onPress: () => void;
  children: ReactNode;
};

const ButtonNavigator = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    height: 70,
    width: 248,
    alignItems: 'center',
    justifyContent: 'center',
    left: 80,
    // top: -10,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default ButtonNavigator;
