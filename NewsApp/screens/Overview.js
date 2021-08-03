import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import SearchInput from '../components/SearchInput';
import NewsItem from '../components/NewsItem';
import { useSelector, useDispatch } from 'react-redux';
import * as newsActions from '../store/actions/news';

const Overview = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('Motorcycle');
    const [isRefreshing, setIsRefreshing] = useState(false);

    const news = useSelector(state => state.newsReducer.news);
    const dispatch = useDispatch();

    const loadNews = useCallback(async () => {
        setIsRefreshing(true);
        try {
            await dispatch(newsActions.fetchNews(search))
        } catch (err) {
            console.log(err);
        }
        setIsRefreshing(false);
    }, [dispatch, setIsLoading, search])

    useEffect(() => {
        setIsLoading(true);
        loadNews().then(() => {
            setIsLoading(false);
        });
    }, [dispatch, loadNews]);

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
                <View>
                    <FlatList
                        onRefresh={loadNews}
                        refreshing={isRefreshing}
                        style={{ padding: 15 }}
                        showsVerticalScrollIndicator={false}
                        data={news}
                        ListEmptyComponent={
                            <View style={styles.centered}>
                                <Text style={{ fontSize: 16 }}>No news found for your search. Try something else</Text>
                            </View>
                        }
                        keyExtractor={item => item.id}
                        renderItem={itemData => (
                            <NewsItem
                                image={itemData.item.imageUrl}
                                title={itemData.item.title}
                                author={itemData.item.author}
                                onSelect={() => props.navigation.navigate(
                                    'ArticleDetails', {
                                    newsId: itemData.item.id,
                                    screen: 'Overview'
                                }
                                )}
                            />
                        )}
                    />
                </View>)
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