import * as types from "../constants";
import * as interfaces from "../interfaces";

export const addBlock = (
  state: interfaces.TetroState,
  boardState: interfaces.BoardState,
  block?: number[]
): interfaces.BoardAction => {
  const { coordinates, color, index } = state;
  const { board } = boardState;
  let newBoard: interfaces.Cell[][] = [];
  let newComplete: number[] = [];
  const indices: number[] = block ? block : coordinates[index];
  for (let row = 0; row < 22; row++) {
    let boardRow: interfaces.Cell[] = [];
    for (let column = 0; column < 10; column++) {
      let index = row * 10 + column;
      if (indices.indexOf(index) !== -1) {
        boardRow.push({ filled: true, color: color });
      } else {
        boardRow.push(board[row][column]);
      }
    }
    newBoard.push(boardRow);
    let filledRow: number = boardRow.filter(col => {
      return !col.filled;
    }).length;
    if (filledRow === 0) {
      newComplete.push(row);
    }
  }
  return {
    type: types.addBlock,
    board: newBoard,
    totalComplete: newComplete
  };
};

export const boardReset = (): interfaces.BoardAction => {
  let initialBoard: interfaces.Cell[][] = [];
  for (let row = 0; row < 22; row++) {
    let items: interfaces.Cell[] = [];
    for (let column = 0; column < 10; column++) {
      items.push({ filled: false, color: "black" });
    }
    initialBoard.push(items);
  }
  return {
    type: types.boardReset,
    board: initialBoard
  };
};

export const getAnimation = (boardState: interfaces.BoardState) => {
  const { board, totalComplete } = boardState;
  let newBoard: interfaces.Cell[][] = [];
  for (let k = 0; k < board.length; k++) {
    if (totalComplete.indexOf(k) !== -1) {
      const newRow = board[k].map(cell => {
        cell.animation = true;
        return cell;
      });
      newBoard.push(newRow);
    } else {
      newBoard.push(board[k]);
    }
  }
  return {
    type: types.getAnimation,
    board: newBoard
  };
};

export const removeBlock = (boardState: interfaces.BoardState) => {
  const { board, totalComplete } = boardState;
  let newBoard: interfaces.Cell[][] = [];
  let row: interfaces.Cell[] = [];
  for (let column = 0; column < 10; column++) {
    row.push({ filled: false });
  }
  for (let i = 0; i < totalComplete.length; i++) {
    newBoard.push(row);
  }
  for (let k = 0; k < board.length; k++) {
    if (totalComplete.indexOf(k) !== -1) {
      continue;
    } else {
      newBoard.push(board[k]);
    }
  }
  return { type: types.removeBlock, board: newBoard };
};
