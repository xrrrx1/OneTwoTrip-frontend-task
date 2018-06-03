/* global localStorage */
import { LOG_OUT, LOG_IN_FAILURE, LOG_IN } from '../constants';

const initialState = {
  name: localStorage.getItem('API_TOKEN'),
  isAuth: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOG_IN:
      localStorage.setItem('API_TOKEN', payload.name);
      return {
        ...state,
        name: payload.name,
        isAuth: true,
      };
    case LOG_OUT:
      localStorage.removeItem('API_TOKEN');
      return {
        ...state,
        name: null,
        isAuth: false,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
