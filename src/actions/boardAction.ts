import * as types from "../constants/boardTypes";
import * as tetroTypes from "../constants/tetroTypes";
import initialBoard from '../gameConfig/board'

export const addBlock = (
  state: tetroTypes.tetroState,
  boardState: types.boardState
): types.boardAction => {
  const { coordinates, color, index } = state;
  let { board, totalComplete } = boardState;
  let newBoard = board;
  const indices: number[] = coordinates[index];
  for (let k = 0; k < 4; k++) {
    let row = Math.floor(indices[k] / 10);
    let column = indices[k] % 10;
    newBoard[row][column] = {
      filled: true,
      color: color
    };

    // check if row is complete
    const filledRow = board[row].filter(column => {
      return !column.filled;
    });
    if (filledRow.length === 0) {
      totalComplete.push(row);
    }
  }
  return {
    type: types.addBlock,
    board: newBoard,
    totalComplete
  };
};

export const reset = (): types.boardAction => {
  let initialBoard: types.cell[][] = []
  for (let row = 0; row < 22; row++) {
    let items: types.cell[] = [];
    for (let column = 0; column < 10; column++) {
      items.push({ filled: false, color: "black" });
    }
    initialBoard.push(items);
  }
  return {
    type: types.reset,
    board: initialBoard
  };
};

export const getAnimation = (boardState: types.boardState) => {
  const { board, totalComplete } = boardState;
  let newBoard: types.cell[][] = [];
  for (let k = 0; k < board.length; k++) {
    if (totalComplete.indexOf(k) !== -1) {
      const newRow = board[k];
      newRow.map(cell => {
        cell.animation = true
      })
    } else {
      newBoard.push(board[k])
    }
  }
  return {
    type: types.getAnimation,
    board: newBoard
  };
};

export const removeBlock = (boardState: types.boardState) => {
    const { board, totalComplete} = boardState;
    let newBoard: types.cell[][] = [];
    let row: types.cell[] = [];
    for (let column = 0; column < 10; column++) {
      row.push({filled: false, color: "black"})
    }
    for (let i = 0; i < totalComplete.length; i++) {
      newBoard.push(row);
    }
    for (let k = 0; k < board.length; k++) {
      if (totalComplete.indexOf(k) !== -1) {
        continue
      } else {
        newBoard.push(board[k])
      }
    }
    return { type: types.removeBlock, board: newBoard };
  };
