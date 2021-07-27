import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchInput from '../components/SearchInput';
import NewsItem from '../components/NewsItem';

const Overview = props => {

    return (
        <View style={styles.content}>
            <View style={styles.input}>
                <SearchInput onChangeText={() => { }} />
            </View>
            <View style={{paddingTop: 20}}>
            <NewsItem />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    content: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        flex: 1,
        width: '100%'
    },
    input: {
        height: '20%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});

export default Overview;
