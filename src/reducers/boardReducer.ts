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
        board: action.board,
        totalComplete: action.totalComplete
      };
    case types.boardReset:
      console.log(action.board)
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
      }
    default:
      return state;
  }
};
