import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import SearchInput from '../components/SearchInput';
import NewsItem from '../components/NewsItem';
import { useSelector, useDispatch } from 'react-redux';
import * as newsActions from '../store/actions/news';
import Styles from './styles/OverviewScreen';

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
        <View style={Styles.content}>
            <View style={Styles.input}>
                <SearchInput onChangeText={(text) => { setSearch(text) }} />
            </View>

            {isLoading ? (<View style={Styles.centered}>
                <ActivityIndicator size="large" color={'#BEBEBE'} />
                <Text style={Styles.loadingText}>Loading articles...</Text>
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
                            <View style={Styles.centered}>
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

export default Overview;