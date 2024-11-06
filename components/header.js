import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.header}>
            <MaterialIcons 
                name='arrow-back' 
                size={28} 
                onPress={() => navigation.goBack()} // Navigate back when pressed
                style={styles.icon}
            />
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'white',
        marginTop: '7%',
    },
    headerText: {
        paddingTop: 40,
        fontWeight: 'semibold',
        fontSize: 30,
        color: 'white',
        fontFamily: 'serif',
    },
    icon: {
        position: 'absolute',
        left: 8,
        color: 'white',
    }
});

export default Header;
