import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

import Header from '../components/header'; // Adjust the path as necessary
import FolderButton from '../components/folderbutton';

const CardTypes = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="Types of Cards" navigation={navigation} />
        <View style={styles.folderButtonContainer}>
          {/* Row 1 */}
          <FolderButton
            imageSource={require('../assets/major_arcana_deck.png')}
            label="Major Arcana"
            onPress={() => navigation.navigate('CardList', { type: 'Major Arcana' })}
          />
          <FolderButton
            imageSource={require('../assets/wands_deck.png')}
            label="Wands"
            onPress={() => navigation.navigate('CardList', { type: 'Wands' })}
          />

          {/* Row 2 */}
          <FolderButton
            imageSource={require('../assets/swords_deck.png')}
            label="Swords"
            onPress={() => navigation.navigate('CardList', { type: 'Swords' })}
          />
          <FolderButton
            imageSource={require('../assets/cups_deck.png')}
            label="Cups"
            onPress={() => navigation.navigate('CardList', { type: 'Cups' })}
          />

          {/* Row 3 */}
          <FolderButton
            imageSource={require('../assets/pentacles_deck.png')}
            label="Pentacles"
            onPress={() => navigation.navigate('CardList', { type: 'Pentacles' })}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardTypes;

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
  folderButtonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'left', // Align buttons to the left
    alignItems: 'center',
    width: '86.5%',
  },
  textContainer: {
    width: '100%', // Make sure the container takes full width
    paddingVertical: 15, // Add some vertical padding
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
