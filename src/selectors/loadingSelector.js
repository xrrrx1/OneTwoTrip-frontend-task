import { createSelector } from 'reselect';

const getLoadingFromStore = store => store.news.isLoading;

const loadingSelector = createSelector(getLoadingFromStore, isLoading => isLoading);

export default loadingSelector;
