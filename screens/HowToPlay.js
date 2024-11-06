import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

import Header from '../components/header'; // Adjust the path as necessary

const HowToPlay = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="How to Play?" navigation={navigation} />

        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>
              Select a spread according to wishes and feel free to try different things, ask unique questions. Choose the cards with your non-dominant hand. Once the spread is full, refer to this guide for more information.
          </Text>

          <Text style={styles.subtitle}>
              General information about the cards: The deck consists of 78 cards. Cards with a Roman numeral and title are the Major Arcana cards, which represent large events in one’s life that can be life/situation changing. The remaining cards are Minor Arcana cards and can be split into four types: Wands (action and what you’re doing), Cups (emotional connection and how you feel), Swords (thoughts and how you think), and Pentacles (finances and material possessions).
          </Text>

          <Text style={styles.subtitle}>
              Again, more information is within the guide for cards and spreads. You can wing it or be really serious about it, but have a little fun trolling and playing around with Troll Tarot.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HowToPlay;

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
  textContainer: {
    width: '100%', // Make sure the container takes full width
    paddingVertical: 15, // Add some vertical padding
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
});
