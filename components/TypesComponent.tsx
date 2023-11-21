import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TypeDetails = ({ typeData }: any) => {
  if (!typeData.name) {
    return null;
  }

  return (
    <View style={styles.typesContainer}>
      <Image style={styles.types} source={{ uri: typeData.image }} />
      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          
        }}
      >
        {typeData.name}
      </Text>
    </View>
  );
};

const TypesComponent = ({ data }: any) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TypeDetails typeData={data.types[0]} />
      {data.types[1]?.name && <TypeDetails typeData={data.types[1]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  typesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 10,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    gap: 5,
  },

  types: {
    borderRadius: 45,
    width: 15,
    height: 15,
  },
});

export default TypesComponent;
