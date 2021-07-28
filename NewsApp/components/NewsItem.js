import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const NewsItem = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onSelect}
            style={styles.news}
        >
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.textSet}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.author}>{props.author}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    news: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '80%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    image: {
        width: '30%',
        height: 85
    },
    textSet: {
        paddingVertical: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: '#222222'
    },
    author: {
        fontSize: 15,
        color: '#777777'
    }
});

export default NewsItem;