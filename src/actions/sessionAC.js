import { API_ROOT, LOG_IN, LOG_OUT, LOG_IN_FAILURE } from "../constants";
import axios from "axios";
import { checkAccess } from "../helpers";

export const httpGet = async endPoint => {
  try {
    const response = await axios.get(`${API_ROOT}/${endPoint}`);
    if (response.ok) {
      return response;
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.warn("httpGet error ", err);
  }
};

export function logIn(params, cb) {
  return dispatch => {
    if (checkAccess(params)) {
      dispatch({
        type: LOG_IN,
        payload: {
          name: params.username
        }
      });
      cb();
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMsg: "Имя пользователя или пароль введены не верно"
        },
        error: true
      });
    }
  };
}

export function logOut() {
  return {
    type: LOG_OUT
  };
}
