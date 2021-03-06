import * as types from "../constants/gameTypes";
import * as interfaces from "../interfaces";

const initialState: interfaces.GameState = {
  score: 0,
  lines: 0,
  pause: false,
  level: 1,
  interval: 500,
  animation: false,
  gameOver: false
};

export const gameReducer = (
  state: interfaces.GameState = initialState,
  action: interfaces.GameAction
) => {
  switch (action.type) {
    case types.setAnimation:
      return {
        ...state,
        animation: !state.animation
      };
    case types.addScore:
      return {
        ...state,
        score: action.score,
        lines: action.lines,
        level: action.level,
        interval: action.interval
      };
    case types.addLines:
      return {
        ...state,
        lines: state.lines + action.lines
      };
    case types.playPause:
      return {
        ...state,
        pause: !state.pause
      };
    case types.gameOver:
      return {
        ...state,
        pause: true,
        gameOver: true
      };
    case types.gameReset:
      return {
        ...state,
        pause: false,
        score: 0,
        level: 1,
        lines: 0,
        interval: 500
      };
    default:
      return state;
  }
};
