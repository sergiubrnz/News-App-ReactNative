import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './styles/DetailsCardStyles';

const DetailsCard = props => {
    return (
        <View style={Styles.screen}>
            <View style={Styles.imageContainer}>
                <Image style={Styles.image} source={{ uri: props.image }} />
            </View>
            <View style={Styles.textContainer}>
                <Text numberOfLines={2} style={Styles.title}>{props.title}</Text>
                <Text style={Styles.author}>{props.author}</Text>
                <View style={Styles.line} />
                <Text style={Styles.content}>{props.content}</Text>
            </View>
        </View>
    )
};

export default DetailsCard;