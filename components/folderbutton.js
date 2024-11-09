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
        <Image source={imageSource} style={styles.image}/>
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
    height: windowHeight * 0.22,
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
    width: '90%',
    height: '60%', // Container takes up 64% of the button's height
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Prevents overflow
    // backgroundColor: '#FF0000',
    marginTop: 8,
  },
  image: {
    width: '100%', // Make the image take the full width of the container
    height: '100%',
    // height: 'auto', // Height adjusts automatically based on the width
    // maxHeight: '100%', // Ensures the image does not exceed the container's height
    resizeMode: "contain",
  },
  labelContainer: {
    width: '90%',
    height: '20%', // Bottom 1/3 of the button
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: '#0000FF',
    marginTop: 5,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#523F5A',
    lineHeight: 15,
    textAlign: 'center',
    justifyContent: 'flex-start',
    textAlignVertical: 'top'
  },
});