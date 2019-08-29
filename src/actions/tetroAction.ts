import * as types from "../constants/tetroTypes";

// TODO
export const moveLeft = (currentTetro: number[][]): types.tetroMoveAction => {
  console.log("You pressed left!");
  return {
    type: types.moveLeft,
    payload: currentTetro
  };
};

// TODO
export const moveRight = (currentTetro: number[][]): types.tetroMoveAction => {
  console.log("You pressed right!");
  return {
    type: types.moveRight,
    payload: currentTetro
  };
};

// TODO
export const moveDown = (currentTetro: number[][]): types.tetroMoveAction => {
  console.log("You pressed down!");
  return {
    type: types.moveDown,
    payload: currentTetro
  };
};

export const moveUp = (currentTetro: number[][]): types.tetroMoveAction => {
  console.log("You pressed up!");
  return {
    type: types.moveUp,
    payload: currentTetro
  };
};
