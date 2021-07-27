import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const NewsItem = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onSelect}
            style={styles.news}
        >
            <Image style={styles.image} source={{ uri: 'https://cdn.shortpixel.ai/spai/w_1003+q_glossy+ret_img+to_webp/https://balkangreenenergynews.com/wp-content/uploads/2020/06/Greece-introduces-EUR-100-million-worth-subsidies-for-electric-vehicles.jpg' }} />
            <View style={styles.textSet}>
                <Text style={styles.title}>Before you buy an electric car: 21 Things You Should Know</Text>
                <Text style={styles.author}>Arnold Gray</Text>
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
        marginBottom: 5
    },
    author: {
        fontSize: 15,
        color: 'gray'
    }
});

export default NewsItem;