import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

import Header from '../components/header'; // Adjust the path as necessary
import FolderButton from '../components/folderbutton';

const SpreadTypes = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="Types of Spreads" navigation={navigation} />
        
        <View style={styles.folderButtonContainer}>
          {/* Row 1 */}
          <FolderButton
            imageSource={require('../assets/spread1.png')}
            label="Linear 3 Card"
            onPress={() => navigation.navigate('SpreadDetails', { title: 'Linear 3 Card' })}
          />
          <FolderButton
            imageSource={require('../assets/spread2.png')}
            label="Balanced 3 Card"
            onPress={() => navigation.navigate('SpreadDetails', { title: 'Balanced 3 Card' })}
          />

          {/* Row 2 */}
          <FolderButton
            imageSource={require('../assets/spread3.png')}
            label="Foundation 3 Card"
            onPress={() => navigation.navigate('SpreadDetails', { title: 'Foundation 3 Card' })}
          />
          <FolderButton
            imageSource={require('../assets/spread4.png')}
            label="Heart Shaker"
            onPress={() => navigation.navigate('SpreadDetails', { title: 'Heart Shaker' })}
          />

          {/* Row 3 */}
          <FolderButton
            imageSource={require('../assets/spread5.png')}
            label="A New Year"
            onPress={() => navigation.navigate('SpreadDetails', { title: 'A New Year' })}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SpreadTypes;

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
});
