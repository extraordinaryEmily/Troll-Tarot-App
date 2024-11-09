import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import spreadsData from '../assets/inputs/spreads';

const SpreadDetails = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { title } = route.params;
    
    const mainSpread = spreadsData.find(spread => spread.Title === title);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title={title} navigation={navigation} />
                <Image source={mainSpread.Image} style={styles.spreadImage} />
                <View style={styles.textContainer}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>{mainSpread.Quote}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}>General: {mainSpread.General}</Text>
                        <Text style={styles.details}>Examples: {mainSpread.Examples}</Text>
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
    spreadImage: {
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

export default SpreadDetails;
