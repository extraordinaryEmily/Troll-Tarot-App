import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import cardsData from '../assets/inputs/cards';

const CardDetails = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { title } = route.params;

    // Find the card based on the title
    const mainCard = cardsData.find(card => card.Title === title);

    if (!mainCard) {
        return <Text>Card not found</Text>;
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title={title} navigation={navigation} />
                <Image source={mainCard.Image} style={styles.cardImage} />
                <View style={styles.textContainer}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>{mainCard.Quote}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}>Type: {mainCard.Type}</Text>
                        <Text style={styles.details}>Keywords: {mainCard.Keywords}</Text>
                        <Text style={styles.details}>Reverse: {mainCard.Reverse}</Text>
                    </View>
                    
                </View>
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
        paddingHorizontal: 20,
    },
    textContainer: {
        marginTop: 20,
    },
    cardImage: {
        width: Dimensions.get('window').width * 0.5, // 60% of the screen width
        height: '40%',
    },
    subtitle: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#FFF',
        textAlign: 'center',
    },
    subtitleContainer: {
        marginVertical: 10,
        marginHorizontal: '15%',
    },
    details: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    detailsContainer: {
        marginHorizontal: '5%',
    },
});

export default CardDetails;
