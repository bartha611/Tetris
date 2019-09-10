import * as types from "../constants/tetroTypes";
import { tetronimo } from "../gameConfig/tetroShapes";

export const moveLeft = (currentTetro: number[][]): types.tetroMoveAction => {
  const newTetro = currentTetro.map(row => {
    let checkRow: number[] = row.sort((a, b) => {
      return (a % 10) - (b % 10);
    });
    if (checkRow[0] % 10 === 0) {
      return row;
    }
    return row.map(cell => {
      return (cell -= 1);
    });
  });
  return {
    type: types.moveLeft,
    payload: newTetro
  };
};

export const moveRight = (currentTetro: number[][]): types.tetroMoveAction => {
  const newTetro = currentTetro.map(row => {
    const checkRow: number[] = row.sort((a, b) => {
      return (b % 10) - (a % 10);
    });
    if (checkRow[0] % 10 === 9) {
      return row;
    }
    return row.map(cell => {
      return (cell += 1);
    });
  });
  return {
    type: types.moveRight,
    payload: newTetro
  };
};

export const moveDown = (state: types.tetroState): types.tetroMoveAction => {
  const newCoordinates: number[][] = state.coordinates.map(rotation => {
    const checkRotation: number[] = rotation.sort((a, b) => {
      return b - a;
    });
    if (Math.floor(checkRotation[0] / 10) > 21) {
      return rotation;
    }
    return rotation.map(cell => {
      return (cell += 10);
    });
  });
  return {
    type: types.moveDown,
    payload: newCoordinates
  };
};

export const moveUp = (tetronimoIndex: number): types.tetroMoveAction => {
  tetronimoIndex = (tetronimoIndex + 1) % 4;
  return {
    type: types.moveUp,
    payload: tetronimoIndex
  };
};

export const addBlock = (state: types.tetroState): types.tetroMoveAction => {
  let { coordinates, color, index, board, currentShape } = state;
  const indices: number[] = coordinates[index];
  for (let k = 0; k < 4; k++) {
    let row = Math.floor(indices[k] / 10);
    let column = indices[k] % 10;
    board[row][column] = {
      filled: true,
      color: color
    };
  }
  const newShape = Object.keys(tetronimo)[Math.floor(Math.random() * 7)];
  currentShape = newShape;
  coordinates = tetronimo[newShape].coordinates;
  color = tetronimo[newShape].color;
  return {
    type: types.addBlock,
    payload: {
      currentShape: currentShape,
      coordinates: coordinates,
      color: color,
      board: board,
      index: 0
    }
  };
};

export const getNewBoard = (board: types.cell[][]): types.tetroMoveAction => {
  let newBoard: types.cell[][] = board;
  // create an empty row to replace full rows.  It will be put on top
  const newRow: types.cell[] = [];
  for (let i = 0; i < 10; i++) {
    newRow.push({ filled: false });
  }
  let totalFilled: number = 0;
  // iterate from bottom of board to find full rows
  for (let row = board.length - 1; row > -1; row--) {
    for (let column = 0; column < 10; column++) {
      if (board[row][column].filled === false) {
        newBoard[row + totalFilled] = board[row];
        break;
      } else if (column === 9 && board[row][column].filled === true) {
        totalFilled++;
      }
    }
    // replace full rows with empty rows on top of board
    for (let k = 0; k < totalFilled; k++) {
      newBoard[k] = newRow;
    }
  }
  return {
    type: types.getNewBoard,
    payload: newBoard
  };
};
