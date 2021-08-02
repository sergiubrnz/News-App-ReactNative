import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import NewsItem from '../components/NewsItem';

const SavedNews = props => {
    const fav = useSelector(state => state.newsReducer.favs);
    console.log(fav);
    return (
        <View style={styles.content}>
            <View>
                <FlatList
                    style={{ padding: 15 }}
                    showsVerticalScrollIndicator={false}
                    data={fav}
                    keyExtractor={item => item.id}
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

export default SavedNews;
