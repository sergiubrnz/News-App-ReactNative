import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Button } from 'react-native';
import SearchInput from '../components/SearchInput';
import NewsItem from '../components/NewsItem';
import { useSelector, useDispatch } from 'react-redux';
import * as newsActions from '../store/actions/news';

const Overview = props => {
    const [isLoading, setIsLoading] = useState(false);

    const news = useSelector(state => state.newsReducer.news);
    const dispatch = useDispatch();


    useEffect(() => {
        setIsLoading(true);
        dispatch(newsActions.fetchNews()).then(() => {
            setIsLoading(false);
        });
    }, [dispatch]);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={'black'} />
            </View>
        );
    }


    return (
        <View style={styles.content}>
            <View style={styles.input}>
                <SearchInput onChangeText={()=>{}} />
            </View>
            <FlatList
                style={{ padding: 15 }}
                data={news}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <NewsItem
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        title={itemData.item.author}
                        onSelect={() => props.navigation.navigate(
                            'Article Details'
                        )}
                    />
                )}
            />
        </View>
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
    }
});

export default Overview;
