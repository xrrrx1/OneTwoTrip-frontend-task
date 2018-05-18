import { LOG_OUT, LOG_IN_FAILURE, LOG_IN } from "../constants";

const initialState = {
  user: null,
  errorMsg: ""
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: payload.name
        },
        errorMsg: ""
      };
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMsg: ""
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMsg: payload.errorMsg
      };
    default:
      return state;
  }
};
