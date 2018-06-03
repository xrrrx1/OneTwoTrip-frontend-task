import { NEWS_REQUEST, NEWS_RECEIVE } from '../constants';

const initialState = {
  articles: [],
  isLoading: false,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case NEWS_RECEIVE:
      return {
        ...state,
        articles: payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
