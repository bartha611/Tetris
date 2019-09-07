import * as types from "../constants/tetroTypes";

export const checkBottom = (
  state: types.tetroState,
  index: number
): boolean => {
  const { board, coordinates } = state;
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

export const checkRight = (state: types.tetroState, index: number): boolean => {
  const { board, coordinates } = state;
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

export const checkLeft = (state: types.tetroState, index: number): boolean => {
  const { board, coordinates } = state;
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

export const checkRotation = (state: types.tetroState): boolean => {
  const { board, coordinates } = state;
  let { index } = state;
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
