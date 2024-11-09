import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView


const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/decorative-bg.png')} style={styles.backgroundImage} />
      <Image source={require('../assets/title.png')} style={styles.titleImage} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StartGame')}
        >
          <Text style={styles.buttonText}>Start a Game</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CardTypes')}
        >
          <Text style={styles.buttonText}>Types of Cards</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SpreadTypes')}
        >
          <Text style={styles.buttonText}>Types of Spreads</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HowToPlay')}
        >
          <Text style={styles.buttonText}>How to Play?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>About Troll Tarot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#523F5A',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: width * 1,
    height: width / (1080/1545),
    position: 'absolute',
    bottom: 0,
    resizeMode: 'cover',
  },
  titleImage: {
    width: width * 0.7,
    height: undefined,
    position: 'absolute',
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: height * 0.05,
  },
  buttonContainer: {
    flex: 1,
    width: '60%',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#250E30',
    width: '100%',
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'serif',
  },
});

