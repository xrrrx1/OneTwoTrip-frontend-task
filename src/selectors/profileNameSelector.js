import { createSelector } from 'reselect';

const getNameFromStore = store => store.session.name;

const profileNameSelector = createSelector(getNameFromStore, name => name);

export default profileNameSelector;
