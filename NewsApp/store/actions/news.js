import News from "../../models/news";

export const SET_NEWS = 'SET_NEWS';
export const ADD_FAV = 'ADD_FAV';

export const fetchNews = (search) => {
    return async dispatch => {
        try {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${search}&from=2021-07-28&sortBy=popularity&apiKey=4270ac4b72504d49848ffd0be3ffe660`,
            )

            const resData = await response.json();
            const news = [];

            for (const key in resData.articles) {
                news.push(
                    new News(
                        resData.articles[key].title,
                        resData.articles[key].description,
                        resData.articles[key].url,
                        resData.articles[key].urlToImage,
                        resData.articles[key].author
                    )
                );
            }

            dispatch({ type: SET_NEWS, news: news });
        } catch (err) {
            console.log(err);
        }
    }
}

export const addFavs = (id) => {
    return { type: ADD_FAV, newsId: id };
}