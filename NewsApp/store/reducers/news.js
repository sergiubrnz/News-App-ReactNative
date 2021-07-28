import { SET_NEWS } from "../actions/news";

const initialState = {
    news: []
};

const newsReducer =  (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                news: action.news
            }
    }
    return state;
}

export default newsReducer; 