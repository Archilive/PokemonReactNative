import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TypeDetails = ({ typeData, textColor }: any) => {
  if (!typeData.name) {
    return null;
  }

  return (
    <View style={styles.typesContainer}>
      <Image style={styles.types} source={{ uri: typeData.image }} />
      <Text
        style={{
          color: textColor || 'white',
          textAlign: 'center',
          fontFamily: 'ClashDisplay-Regular',
        }}
      >
        {typeData.name}
      </Text>
    </View>
  );
};

const TypesComponent = ({ data, textColor }: any) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TypeDetails typeData={data.types[0]} textColor={textColor} />
      {data.types[1]?.name && (
        <TypeDetails typeData={data.types[1]} textColor={textColor} />
      )}
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
