import * as types from "../../constants/tetroTypes";
import * as boardTypes from "../../constants/boardTypes";

export const checkBottom = (
  state: types.tetroState,
  boardState: boardTypes.boardState
): boolean => {
  const { coordinates, index } = state;
  const { board } = boardState;
  const checkIndices: number[] = coordinates[index];
  for (let k = 0; k < 4; k++) {
    let checkRow = Math.floor(checkIndices[k] / 10);
    let checkColumn = checkIndices[k] % 10;
    if (checkRow > 20 || board[checkRow + 1][checkColumn].filled) {
      return false;
    }
  }
  return true;
};

export const checkRight = (
  state: types.tetroState,
  boardState: boardTypes.boardState
): boolean => {
  const { coordinates, index } = state;
  const { board } = boardState;
  const checkIndices: number[] = coordinates[index];
  for (let k = 0; k < 4; k++) {
    let checkRow = Math.floor(checkIndices[k] / 10);
    let checkColumn = checkIndices[k] % 10;
    if (checkColumn === 9 || board[checkRow][checkColumn + 1].filled) {
      return false;
    }
  }
  return true;
};

export const checkLeft = (
  state: types.tetroState,
  boardState: boardTypes.boardState
): boolean => {
  const { coordinates, index } = state;
  const { board } = boardState;
  const checkIndices: number[] = coordinates[index];
  for (let k = 0; k < 4; k++) {
    let checkRow = Math.floor(checkIndices[k] / 10);
    let checkColumn = checkIndices[k] % 10;
    if (checkColumn === 0 || board[checkRow][checkColumn - 1].filled) {
      return false;
    }
  }
  return true;
};

export const checkRotation = (
  state: types.tetroState,
  boardState: boardTypes.boardState
): boolean => {
  let { coordinates, index } = state;
  const { board } = boardState;
  index = (index + 1) % 4;
  const checkIndices: number[] = coordinates[index];
  for (let k = 0; k < 4; k++) {
    let checkRow = Math.floor(checkIndices[k] / 10);
    let checkColumn = checkIndices[k] % 10;
    if (board[checkRow][checkColumn].filled) {
      return false;
    }
  }
  return true;
};
