import initialBoard from "../gameConfig/board";
import * as types from "../constants";
import * as interfaces from "../interfaces";

const currentState: interfaces.BoardState = {
  board: initialBoard,
  totalComplete: []
};

export const boardReducer = (
  state = currentState,
  action: interfaces.BoardAction
) => {
  switch (action.type) {
    case types.addBlock:
      return {
        board: action.board,
        totalComplete: action.totalComplete
      };
    case types.boardReset:
      return {
        ...state,
        board: action.board,
        totalComplete: []
      };
    case types.removeBlock:
      return {
        ...state,
        board: action.board,
        totalComplete: []
      };
    case types.getAnimation:
      return {
        ...state,
        board: action.board
      };
    default:
      return state;
  }
};
