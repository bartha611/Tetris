import initialBoard from "../gameConfig/board";
import * as types from "../constants/boardTypes";

const currentState: types.boardState = {
  board: initialBoard,
  totalComplete: []
};

export const boardReducer = (
  state = currentState,
  action: types.boardAction
) => {
  switch (action.type) {
    case types.addBlock:
      return {
        ...state,
        board: action.board,
        totalComplete: action.totalComplete
      };
    case types.reset:
      return {
        ...state,
        board: initialBoard
      };
    case types.removeBlock:
      return {
        ...state,
        board: action.board,
        totalComplete: []
      };
    default:
      return state;
  }
};
