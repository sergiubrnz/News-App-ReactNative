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
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                <Text style={styles.author} numberOfLines={1}>{props.author}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    news: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 15,
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 15,
        paddingVertical: 10
    },
    image: {
        width: '30%',
        height: 80
    },
    textSet: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '70%'
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