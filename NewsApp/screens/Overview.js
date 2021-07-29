import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import SearchInput from '../components/SearchInput';
import NewsItem from '../components/NewsItem';
import { useSelector, useDispatch } from 'react-redux';
import * as newsActions from '../store/actions/news';

const Overview = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('Motorcycle');

    const news = useSelector(state => state.newsReducer.news);
    const dispatch = useDispatch();


    useEffect(() => {
        setIsLoading(true);
        dispatch(newsActions.fetchNews(search)).then(() => {
            setIsLoading(false);
        });
    }, [dispatch, search]);

    // if (!isLoading && news.length === 0) {
    //     return (
    //         <View style={styles.centered}>
    //             <Text>No news found for your search. Try something else</Text>
    //         </View>
    //     );
    // }


    return (
        <View style={styles.content}>
            <View style={styles.input}>
                <SearchInput onChangeText={(text) => { setSearch(text) }} />
            </View>

            {isLoading ? (<View style={styles.centered}>
                <ActivityIndicator size="large" color={'#BEBEBE'} />
                <Text style={styles.loadingText}>Loading articles...</Text>
            </View>
            ) : (
                (!isLoading && news.length === 0) ? (
                    <View style={styles.centered}>
                        <Text>No news found for your search. Try something else</Text>
                    </View>
                ) : (
                    <View>
                        <FlatList
                            style={{ padding: 15 }}
                            data={news}
                            keyExtractor={item => item.id}
                            renderItem={itemData => (
                                <NewsItem
                                    image={itemData.item.imageUrl}
                                    title={itemData.item.title}
                                    author={itemData.item.author}
                                    onSelect={() => props.navigation.navigate(
                                        'Article Details', {
                                        newsId: itemData.item.id
                                    }
                                    )}
                                />
                            )}
                        />
                    </View>)
            )


            }


        </View >
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
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 14,
        color: '#BEBEBE'
    }
});

export default Overview;
