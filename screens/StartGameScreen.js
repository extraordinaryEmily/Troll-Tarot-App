// screens/StartGameScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Clipboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

import Header from '../components/header'; // Adjust the path as necessary

const StartGameScreen = () => {
  const navigation = useNavigation();

  const handleCopyLink = () => {
    Clipboard.setString('https://trolltarot.github.io');
    Alert.alert('Link copied!', 'The link has been copied to your clipboard.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header with Title */}
        <Header title="Start a Game" navigation={navigation} />

        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>
            Share this link or open it on the device that you will screenshare with your audience!
          </Text>
        </View>

        {/* Copyable Link */}
        <TouchableOpacity style={styles.linkContainer} onPress={handleCopyLink}>
          <Text style={styles.linkText}>https://trolltarot.github.io</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#523F5A',
  },
  container: {
    flex: 1,
    backgroundColor: '#523F5A',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'SourceSerifPro',
    fontSize: 28,
    color: '#ffffff',
    marginVertical: 20,
  },
  subtitle: {
    paddingTop: 2,
    lineHeight: 20,
    fontFamily: 'SourceSerifPro',
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'left',
    marginBottom: 10,
    marginHorizontal: 15,
  },
  linkContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: '80%',
    alignItems: 'center',
  },
  linkText: {
    fontFamily: 'SourceSerifPro',
    fontSize: 16,
    color: '#250E30',
    textAlign: 'center',
  },
  textContainer: {
    width: '100%', // Make sure the container takes full width
    paddingVertical: 15, // Add some vertical padding
  },
});

