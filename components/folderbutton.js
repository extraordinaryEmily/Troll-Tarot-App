import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import * as SplashScreen from 'expo-splash-screen';

import * as Font from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FolderButton = ({ imageSource, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FolderButton;

const styles = StyleSheet.create({
  button: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.2,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    margin: windowWidth * 0.02,
    elevation: 2, // For a slight shadow effect on Android
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  imageContainer: {
    width: '100%',
    height: '64%', // Container takes up 64% of the button's height
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Prevents overflow
  },
  image: {
    width: '100%', // Make the image take the full width of the container
    height: 'auto', // Height adjusts automatically based on the width
    maxHeight: '100%', // Ensures the image does not exceed the container's height
  },
  labelContainer: {
    width: '100%',
    height: '34%', // Bottom 1/3 of the button
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#523F5A',
  },
});
