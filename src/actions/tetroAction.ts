import * as types from "../constants/tetroTypes";
import { tetronimo } from "../gameConfig/tetroShapes";
import {} from "../components/helper/checkBoard";

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
    type: types.move,
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
    type: types.move,
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
    type: types.move,
    payload: newCoordinates
  };
};

export const moveUp = (tetronimoIndex: number): types.tetroMoveAction => {
  return {
    type: types.rotate,
    payload: (tetronimoIndex + 1) % 4
  };
};

export const getblock = (): types.getBlockAction => {
  const keys = Object.keys(tetronimo);
  // get random key
  const randomShape = keys[Math.floor(Math.random() * keys.length)];
  return {
    type: types.getBlock,
    payload: {
      coordinates: tetronimo[randomShape].coordinates,
      index: 0,
      color: tetronimo[randomShape].color
    }
  };
};
