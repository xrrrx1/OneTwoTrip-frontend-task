import { createSelector } from 'reselect';

const getNewsFromStore = store => store.news.articles;

const newsSelector = createSelector(getNewsFromStore, articles => articles);

export default newsSelector;
