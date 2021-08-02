import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import DetailsCard from '../components/DetailsCard';
import { useSelector, useDispatch } from 'react-redux';
import { addFavs } from '../store/actions/news';

const NewsDetails = props => {
    let availableNews;
    const theme = useSelector((state) => state.colorReducer.color);
    const newsId = props.route.params.newsId;
    const screen = props.route.params.screen;

    if (screen === 'savedNews') {
        availableNews = useSelector(state => state.newsReducer.favs);
    } else {
        availableNews = useSelector(state => state.newsReducer.news);
    }

    const currentNewsFav = useSelector(state =>
        state.newsReducer.favs.some(news => news.id === newsId)
    );

    const SelectedNews = availableNews.find(news => news.id === newsId);

    const dispatch = useDispatch();

    const FavsHandler = useCallback(() => {
        dispatch(addFavs(newsId));
        props.navigation.goBack();
    }, [dispatch, newsId]);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (<TouchableOpacity onPress={FavsHandler}>
                <Image
                    source={currentNewsFav ? (
                        require('../images/bookmarkFull.png')
                    ) : (
                        require('../images/bookmark.png')
                    )}
                    style={{
                        marginHorizontal: 25, tintColor:
                            currentNewsFav ? theme.SECONDARY_COLOR : '#000000'
                    }
                    }
                />
            </TouchableOpacity>)
        })
    }, [currentNewsFav]);


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


const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 25
    }
});

export default NewsDetails;
