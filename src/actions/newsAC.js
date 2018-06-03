import axios from 'axios';
import { NEWS_API, NEWS_REQUEST, NEWS_RECEIVE } from '../constants';

export const getNews = () => async dispatch => {
  const news = await axios.get(NEWS_API);
  dispatch({
    type: NEWS_REQUEST,
  });
  setTimeout(() => {
    dispatch({
      type: NEWS_RECEIVE,
      payload: news.data.articles,
    });
  }, 1400);
};

export const getNewsId = () => {};
