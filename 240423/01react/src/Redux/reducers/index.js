import { combineReducers } from "redux";
import movieReducer from "./moviereducer";

export default combineReducers({ movie: movieReducer });
