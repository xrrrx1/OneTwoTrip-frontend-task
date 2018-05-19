import { LOG_OUT, LOG_IN_FAILURE, LOG_IN } from "../constants";

const initialState = {
  name: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOG_IN:
      return {
        ...state,
        name: payload
      };
    case LOG_OUT:
      return {
        ...state,
        name: null
      };
    case LOG_IN_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};
