import { combineReducers } from "redux";
import { tetroReducer } from "./tetroReducer";

export const rootReducer = combineReducers({
  tetro: tetroReducer
});
