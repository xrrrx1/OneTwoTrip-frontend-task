import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import newsReducer from "./newsReducer";

export default combineReducers({
  session: sessionReducer,
  news: newsReducer
});
