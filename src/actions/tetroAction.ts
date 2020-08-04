import * as types from "../constants";
import * as interfaces from "../interfaces";
import { tetronimo } from "../gameConfig/tetroShapes";

export const moveLeft = (currentTetro: number[][]): interfaces.TetroAction => {
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
    type: types.move,
    coordinates: newTetro
  };
};

export const moveRight = (currentTetro: number[][]): interfaces.TetroAction => {
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
    type: types.move,
    coordinates: newTetro
  };
};

export const moveDown = (
  state: interfaces.TetroState
): interfaces.TetroAction => {
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
  console.log("moving down");
  return {
    type: types.move,
    coordinates: newCoordinates
  };
};

export const moveUp = (tetronimoIndex: number): interfaces.TetroAction => {
  return {
    type: types.rotate,
    index: (tetronimoIndex + 1) % 4
  };
};

export const getblock = (
  boardState: interfaces.BoardState
): interfaces.TetroAction => {
  const { board } = boardState;
  const keys = Object.keys(tetronimo);
  // get random key
  const randomShape = keys[Math.floor(Math.random() * keys.length)];
  let indices: number[] = tetronimo[randomShape].coordinates[0];
  const takenCell = indices.filter(cell => {
    let row = Math.floor(cell / 10);
    let column = cell % 10;
    return board[row][column].filled === true;
  });
  if (takenCell.length > 0) {
    return {
      type: types.gameOver
    };
  }
  return {
    type: types.getBlock,
    coordinates: tetronimo[randomShape].coordinates,
    index: 0,
    color: tetronimo[randomShape].color
  };
};
