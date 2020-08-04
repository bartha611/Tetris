import * as interfaces from "../interfaces";
import * as types from "../constants";
import { tetronimo } from "../gameConfig/tetroShapes";

// Get random shape for initialboard

const randomIndex = Math.floor(Math.random() * Object.keys(tetronimo).length);
const shapes = Object.keys(tetronimo);
const randomShape = shapes[randomIndex];

const initalState: interfaces.TetroState = {
  coordinates: tetronimo[randomShape].coordinates,
  index: 0,
  color: tetronimo[randomShape].color
};

export const tetroReducer = (
  state = initalState,
  action: interfaces.TetroAction
): interfaces.TetroState => {
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
