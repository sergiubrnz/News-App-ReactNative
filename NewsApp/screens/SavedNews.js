import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import NewsItem from '../components/NewsItem';
import Styles from './styles/SavedNewsScreen';

const SavedNews = props => {
    const fav = useSelector(state => state.newsReducer.favs);
    return (
        <View style={Styles.content}>
            <View>
                <FlatList
                    style={{ padding: 15 }}
                    showsVerticalScrollIndicator={false}
                    data={fav}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={
                        <View style={Styles.content}>
                            <Text style={{ fontSize: 16, textAlign: 'center' }}>You have no saved news yet. Start saving some</Text>
                        </View>
                    }
                    renderItem={itemData => (
                        <NewsItem
                            image={itemData.item.imageUrl}
                            title={itemData.item.title}
                            author={itemData.item.author}
                            onSelect={() => props.navigation.navigate(
                                'ArticleDetails', {
                                newsId: itemData.item.id,
                                screen: 'savedNews'
                            }
                            )}
                        />
                    )
                    }
                />
            </View>
        </View >
    )
};

export default SavedNews;
