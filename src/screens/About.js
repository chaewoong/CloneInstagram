import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text>어바웃화면입니당</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default About;