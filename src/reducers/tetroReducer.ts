import * as types from "../constants/tetroTypes";
import { tetronimo } from "../gameConfig/tetroShapes";
import board from "../gameConfig/board";

// Get random shape for
const randomIndex = Math.floor(Math.random() * Object.keys(tetronimo).length);
const shapes = Object.keys(tetronimo);
const randomShape = shapes[randomIndex];

const initalState: types.tetroState = {
  currentShape: randomShape,
  coordinates: tetronimo[randomShape].coordinates,
  index: 0,
  board: board
};

export const tetroReducer = (
  state = initalState,
  action: types.tetroAction
): types.tetroState => {
  switch (action.type) {
    case types.moveDown:
      return {
        ...state,
        coordinates: action.payload
      };
    case types.moveUp:
      return {
        ...state,
        coordinates: action.payload
      };
    case types.moveRight:
      return {
        ...state,
        coordinates: action.payload
      };
    case types.moveLeft:
      return {
        ...state,
        coordinates: action.payload
      };
    default:
      return state;
  }
};
