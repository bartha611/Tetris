import * as types from "../constants";
import * as interfaces from "../interfaces";

import * as gameOptions from "../gameConfig/options";

export const setAnimation = (): interfaces.GameAction => {
  return {
    type: types.setAnimation
  };
};

export const playPause = (): interfaces.GameAction => {
  return {
    type: types.playPause
  };
};

export const addScore = (
  boardState: interfaces.BoardState,
  gameState: interfaces.GameState
) => {
  let scoring: gameOptions.scoring = {
    1: 40,
    2: 100,
    3: 400,
    4: 1200
  };
  const { totalComplete } = boardState;
  let { score, lines, level, interval } = gameState;
  score += scoring[totalComplete.length] * level;
  lines += totalComplete.length;
  if (lines > 9) {
    lines -= 10;
    level += 1;
    interval *= 2 / 3;
  }
  return {
    type: types.addScore,
    score,
    lines,
    level,
    interval
  };
};

export const reset = () => {
  return {
    type: types.gameReset,
    score: 0,
    lines: 0,
    level: 1,
    interval: 500
  };
};
