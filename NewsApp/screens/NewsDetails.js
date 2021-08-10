import React, { useEffect, useCallback, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DetailsCard from '../components/DetailsCard';
import { useSelector, useDispatch } from 'react-redux';
import { addFavs } from '../store/actions/news';
import Styles from './styles/NewsDetailsScreen';

const NewsDetails = props => {
    let availableNews;
    const theme = useSelector((state) => state.colorReducer.color);
    const [isPressed, setIsPressed] = useState(false);
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
        setIsPressed(true);
        props.navigation.goBack();
        dispatch(addFavs(newsId));
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


    return <View style={Styles.content}>{isPressed ? (<View></View >) : (
        <DetailsCard
            style={Styles.details}
            title={SelectedNews.title}
            author={SelectedNews.author}
            image={SelectedNews.imageUrl}
            content={SelectedNews.content}
        />)}
    </View>
};

export default NewsDetails;
