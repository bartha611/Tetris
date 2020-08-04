import * as interfaces from "../interfaces";

export const checkBottom = (
  state: interfaces.TetroState,
  boardState: interfaces.BoardState
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
  state: interfaces.TetroState,
  boardState: interfaces.BoardState
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
  state: interfaces.TetroState,
  boardState: interfaces.BoardState
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
  state: interfaces.TetroState,
  boardState: interfaces.BoardState
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

export const bottomCells = (
  state: interfaces.TetroState,
  boardState: interfaces.BoardState
): number[] => {
  let { coordinates, index } = state;
  const units = coordinates[index];
  const { board } = boardState;
  while (true) {

  }
  return coordinates[index];
};
