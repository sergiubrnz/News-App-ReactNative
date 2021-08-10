import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Styles from './styles/NewsItemStyles';

const NewsItem = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onSelect}
            style={Styles.news}
        >
            <Image style={Styles.image} source={{ uri: props.image }} />
            <View style={Styles.textSet}>
                <Text style={Styles.title} numberOfLines={2}>{props.title}</Text>
                <Text style={Styles.author} numberOfLines={1}>{props.author}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default NewsItem;