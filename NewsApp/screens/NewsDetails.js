import React from 'react';
import { View, StyleSheet } from 'react-native';
import DetailsCard from '../components/DetailsCard';
import { useSelector, useDispatch } from 'react-redux';

const NewsDetails = props => {

    const newsId = props.route.params.newsId;

    const SelectedNews = useSelector(state =>
        state.newsReducer.news.find(news => news.id === newsId)
    );


    return <View style={styles.content}>
        <DetailsCard
            style={styles.details}
            title={SelectedNews.title}
            author={SelectedNews.author}
            image={SelectedNews.imageUrl}
            content={SelectedNews.content}
        />
    </View>
};

NewsDetails.navigationOptions = navData => {
    return {
        headerTitle: 'Article Details'
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 25
    },
    details: {
    }
});

export default NewsDetails;
