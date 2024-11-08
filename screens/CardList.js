import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import cardsData from '../assets/inputs/cards';

const CardList = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { type } = route.params;

    const cards = cardsData.filter(card => card.Type === type);

    const renderCard = ({ item }) => (
        <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('CardDetails', { title: item.Title })}
        >
            <Image 
                source={item.Image}  // Directly using the imported image
                style={styles.cardImage} 
            />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title={type} navigation={navigation} />
                
                <FlatList
                    data={cards}
                    renderItem={renderCard}
                    keyExtractor={(item, index) => item?.Title?.toString() || index.toString()}
                    numColumns={3}  // Display 3 cards per row
                    contentContainerStyle={styles.cardList}
                    columnWrapperStyle={styles.row}
                />
            </View>
        </SafeAreaView>
    );
};

const windowWidth = Dimensions.get('window').width;

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
    cardList: {
      paddingTop: 10,
    },
    row: {
      justifyContent: 'left',
      alignItems: 'center',
    },
    card: {
      margin: 0,
      width: windowWidth * 0.28,
    },
    cardImage: {
      width: '100%',
      height: 200,
    },
});

export default CardList;
