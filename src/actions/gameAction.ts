import * as types from "../constants/gameTypes";
import * as boardTypes from "../constants/boardTypes";

import * as gameOptions from "../gameConfig/options";

export const playPause = (): types.gameAction => {
  return {
    type: types.playPause
  };
};

export const addScore = (
  boardState: boardTypes.boardState,
  gameState: types.gameState
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
    interval *= 2/3
  }
  return {
    type: types.addScore,
    score,
    lines,
    level,
    interval
  };
};