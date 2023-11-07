import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

// const image = {
//   uri: 'https://i.pinimg.com/564x/77/97/e0/7797e0008b1e4ef14882abbcb73a82bd.jpg',
// };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/loadingPage/background.jpg')}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.text}>Welcome</Text>

      <StatusBar style="auto" />

      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => alert('Hello, world!')}
      >
        <Text style={styles.text}>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    top: -250,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Cherry Bomb',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 40,
  },

  touchableOpacity: {
    height: 70,
    width: 248,
    alignItems: 'center',
    justifyContent: 'center',
    left: 80,
    top: -10,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
});
