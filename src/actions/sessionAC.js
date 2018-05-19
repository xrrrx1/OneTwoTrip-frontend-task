import {
  API_ROOT,
  LOG_IN,
  // LOG_OUT,
  LOG_IN_FAILURE
} from "../constants";
import axios from "axios";
import { checkAccess } from "../helpers";

export const accessToken = ({ name, password }) => async dispatch => {
  if (checkAccess({ name, password })) {
    const name = await axios.get(API_ROOT);
    dispatch({
      type: LOG_IN,
      payload: name
    });
  } else {
    dispatch({
      type: LOG_IN_FAILURE
    });
  }
};
