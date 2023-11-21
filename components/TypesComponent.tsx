import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TypeDetails = ({ typeData }: any) => {
  if (!typeData.name) {
    return null;
  }

  return (
    <View style={styles.typesContainer}>
      <Text
        style={{
          color: 'black',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Image style={styles.types} source={{ uri: typeData.image }} />
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
    marginLeft: 10,
    paddingHorizontal: 10,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  types: {
    borderRadius: 40,
    width: 25,
    height: 25,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TypesComponent;
