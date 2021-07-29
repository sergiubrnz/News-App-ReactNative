import React from 'react';
import { View, StyleSheet } from 'react-native';
import DetailsCard from '../components/DetailsCard';

const NewsDetails = props => {
    return <View style={styles.content}>
        <DetailsCard 
        style={styles.details}
        title={props.title}
        />
    </View>
};

NewsDetails.navigationOptions = navData => {
    return {
        headerTitle: 'Article Details'
    };
};

const styles = StyleSheet.create({
    content:{
        flex:1,
        paddingTop:50,
        paddingHorizontal:25
    },
    details:{
    }
});

export default NewsDetails;
