import { ADD_FAV, SET_NEWS } from "../actions/news";
import News from "../../models/news";

const initialState = {
    news: [],
    favs: []
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                news: action.news,
                favs: state.favs
            }
        case ADD_FAV:
            console.log(state.favs)
            const existingNews = state.favs.findIndex(
                news => news.id === action.newsId
            );
            let updatedFavs;
            if (existingNews >= 0) {
                updatedFavs = [...state.favs];
                updatedFavs.splice(existingNews,1);
            } else {
                const news = state.news.find(news => news.id === action.newsId);
                updatedFavs = [...state.favs.concat(news)]
            }
            return { ...state, favs: updatedFavs };
        default:
            return state;
    }
}

export default newsReducer;