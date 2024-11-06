import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

import Header from '../components/header'; // Adjust the path as necessary

const About = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="About Troll Tarot" navigation={navigation} />

        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>
                While coming up with ideas on what to do during game nights on Discord calls, I thought a card game would be fun.
          </Text>

          <Text style={styles.subtitle}>
                I’ve seen a lot of fun things that could happen when my friends would make things up on the fly as a joke and I realized tarot cards would be an amazing way to have some creative fun while joking around.
          </Text>

          <Text style={styles.subtitle}>
                But it’s not fun if it is all made up! So I decided to make an app (+ website) to do a tarot nutshell guide to use while playing the game and screensharing the game [website].          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default About;

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
  