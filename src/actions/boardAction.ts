import * as types from "../constants/boardTypes";
import * as tetroTypes from "../constants/tetroTypes";
import initialBoard from '../gameConfig/board'

export const addBlock = (
  state: tetroTypes.tetroState,
  boardState: types.boardState
): types.boardAction => {
  const { coordinates, color, index } = state;
  const { board, totalComplete } = boardState;
  let newBoard: types.cell[][] = [];
  let newComplete: number[] = [];
  const indices: number[] = coordinates[index];
  for (let row = 0; row < 22; row++) {
    let boardRow: types.cell[] = []
    for (let column = 0; column < 10; column++) {
      let index = row*10 + column;
      if (indices.indexOf(index) !== -1) {
        boardRow.push({filled: true, color: color})
      } else {
        boardRow.push(board[row][column])
      }
    }
    newBoard.push(boardRow);
    let filledRow:number = boardRow.filter(col => {
      return !col.filled;
    }).length
    if (filledRow === 0) {
      newComplete.push(row)
    }
  }
  console.log(newBoard);
  console.log(newComplete)
  return {
    type: types.addBlock,
    board: newBoard,
    totalComplete: newComplete
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
  console.log(initialBoard);
  return {
    type: types.boardReset,
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
  console.log(newBoard)
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
      row.push({filled: false})
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
