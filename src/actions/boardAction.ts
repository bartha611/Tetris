import * as types from "../constants/boardTypes";
import * as tetroTypes from "../constants/tetroTypes";

export const addBlock = (
  state: tetroTypes.tetroState,
  boardState: types.boardState
): types.boardAction => {
  const { coordinates, color, index } = state;
  let { board, totalComplete } = boardState;
  const indices: number[] = coordinates[index];
  for (let k = 0; k < 4; k++) {
    let row = Math.floor(indices[k] / 10);
    let column = indices[k] % 10;
    board[row][column] = {
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
    board,
    totalComplete
  };
};

export const reset = (): types.boardAction => {
  return {
    type: types.reset
  };
};

export const getAnimation = (boardState: types.boardState) => {
  let { board } = boardState;
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < 10; column++) {
      if (!board[row][column].filled) {
        break;
      } else if (column === 9 && board[row][column].filled) {
        board[row].map(column => {
          column.animation = true;
          return column;
        });
      }
    }
  }
  return {
    type: types.addBlock,
    payload: board
  };
};

export const removeBlock = (boardState: types.boardState) => {
  return (dispatch: any) => {
    let { board, totalComplete } = boardState;
    let newBoard = board;
    for (let row = board.length - 1; row > -1; row--) {
      if (totalComplete.indexOf(row) !== -1) {
        continue;
      }
      let totalRowsFilledBelow: number = totalComplete.filter(filledRow => {
        return filledRow > row;
      }).length;
      newBoard[row + totalRowsFilledBelow] = board[row];
    }

    // add empty rows back into the newBoard
    for (let k = 0; k < totalComplete.length; k++) {
      for (let column = 0; column < 10; column++) {
        newBoard[k][column].filled = false;
      }
    }
    console.log(newBoard)
    return dispatch({ type: types.removeBlock, board: newBoard });
  };
};
