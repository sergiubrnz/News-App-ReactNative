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
            const existingNews = state.favs.findIndex(
                news => news.id === action.newsId
            );
            if (existingNews >= 0) {
                const updatedFavs = [...state.favs];
                updatedFavs.splice(existingNews);
                return { ...state, favs: updatedFavs };
            } else {
                const news = state.news.find(news => news.id === action.newsId);
                return { ...state, favs: state.favs.concat(news) };
            }
        default:
            return state;
    }
}

export default newsReducer;