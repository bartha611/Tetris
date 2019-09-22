import * as types from "../constants/tetroTypes";
import * as boardTypes from "../constants/boardTypes";
import * as gameTypes from "../constants/gameTypes";
import { tetronimo } from "../gameConfig/tetroShapes";
import {} from "../components/helper/checkBoard";

export const moveLeft = (currentTetro: number[][]): types.tetroAction => {
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

export const moveRight = (currentTetro: number[][]): types.tetroAction => {
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

export const moveDown = (state: types.tetroState): types.tetroAction => {
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
    type: types.move,
    coordinates: newCoordinates
  };
};

export const moveUp = (tetronimoIndex: number): types.tetroAction => {
  return {
    type: types.rotate,
    index: (tetronimoIndex + 1) % 4
  };
};

export const getblock = (
  boardState: boardTypes.boardState
): types.tetroAction => {
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
      type: gameTypes.gameOver
    };
  }
  return {
    type: types.getBlock,
    coordinates: tetronimo[randomShape].coordinates,
    index: 0,
    color: tetronimo[randomShape].color
  };
};
