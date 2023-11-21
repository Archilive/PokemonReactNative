import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

const HeartAnimation = () => {
  const favoriteIconIndex = useSharedValue(0);

  const toggleHeart = () => {
    favoriteIconIndex.value = withTiming(favoriteIconIndex.value === 0 ? 1 : 0);
  };

  const heartContainerStyle = useAnimatedStyle(() => {
    const rotateInterpolation = interpolate(
      favoriteIconIndex.value,
      [0, 1],
      [0, 360]
    );
    return {
      transform: [{ rotate: `${rotateInterpolation}deg` }],
    };
  });

  const heartImageStyle = useAnimatedStyle(() => {
    const opacityInterpolation = interpolate(
      favoriteIconIndex.value,
      [0, 1],
      [1, 0]
    );
    return {
      opacity: opacityInterpolation,
    };
  });

  const heartFilledImageStyle = useAnimatedStyle(() => {
    const opacityInterpolation = interpolate(
      favoriteIconIndex.value,
      [0, 1],
      [0, 1]
    );
    return {
      opacity: opacityInterpolation,
    };
  });

  return (
    <Animated.View style={[styles.heartContainer, heartContainerStyle]}>
      <TouchableOpacity style={styles.heart} onPress={toggleHeart}>
        <Animated.Image
          source={require('../assets/selectedPokemonPage/heart.png')}
          style={[styles.heart, heartImageStyle]}
        />
        <Animated.Image
          source={require('../assets/selectedPokemonPage/heart_filled.png')}
          style={[styles.heart, heartFilledImageStyle]}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  heartContainer: {
    position: 'absolute',
    top: '12%',
    right: '9%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  heart: {
    width: 52,
    height: 52,
    position: 'absolute',
  },
});

export default HeartAnimation;
