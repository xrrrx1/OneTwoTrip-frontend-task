import { API_ROOT, LOG_IN, LOG_OUT, LOG_IN_FAILURE } from "../constants";
import axios from "axios";
import { checkAccess } from "../helpers";

export const logIn = params => async dispatch => {
  const apiData = await axios.get(API_ROOT);
  if (checkAccess({ apiData }, { params })) {
    dispatch({
      type: LOG_IN,
      payload: apiData.data
    });
  } else {
    dispatch({
      type: LOG_IN_FAILURE
    });
  }
};

export const logOut = () => async dispatch => {
  dispatch({
    type: LOG_OUT
  });
};
