import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import cardsData from '../assets/inputs/cards.json';

const CardList = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { Type } = route.params;

    const cards = cardsData.filter(card => card.Type === Type);

    const renderCard = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CardDetail', { cardId: item.id })}>
            <Image source={item.Image} style={styles.cardImage}/>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title={type} navigation={navigation} />
                
                <FlatList
                data={cards}
                renderItem={renderCard}
                keyExtractor={item => item.id}
                numColumns={3} // Display 3 cards per row
                columnWrapperStyle={styles.row} // Style for the row
                contentContainerStyle={styles.cardList}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#523F5A',
    },
    container: {
      flex: 1,
      backgroundColor: '#523F5A',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    cardList: {
      paddingTop: 10,
    },
    row: {
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    card: {
      margin: 5,
      width: windowWidth * 0.28, // Each card takes up about 28% of screen width
    },
    cardImage: {
      width: '100%',
      height: 150, // Fixed height for consistency
      borderRadius: 10,
    },
  });
  
export default CardList;