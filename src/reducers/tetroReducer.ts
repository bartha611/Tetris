import * as types from "../constants/tetroTypes";
import { tetronimo } from "../gameConfig/tetroShapes";

// Get random shape for initialboard

const randomIndex = Math.floor(Math.random() * Object.keys(tetronimo).length);
const shapes = Object.keys(tetronimo);
const randomShape = shapes[randomIndex];

const initalState: types.tetroState = {
  coordinates: tetronimo[randomShape].coordinates,
  index: 0,
  color: tetronimo[randomShape].color
};

export const tetroReducer = (
  state = initalState,
  action: types.tetroAction
): types.tetroState => {
  switch (action.type) {
    case types.move:
      return {
        ...state,
        coordinates: action.coordinates
      };
    case types.rotate:
      return {
        ...state,
        index: action.index
      };
    case types.getBlock:
      return {
        coordinates: action.coordinates,
        index: action.index,
        color: action.color
      };
    default:
      return state;
  }
};
