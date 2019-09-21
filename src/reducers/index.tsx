import { combineReducers } from "redux";
import { tetroReducer } from "./tetroReducer";
import { boardReducer } from "./boardReducer";
import { gameReducer } from "./gameReducer";

export const rootReducer = combineReducers({
  tetro: tetroReducer,
  board: boardReducer,
  game: gameReducer
});
