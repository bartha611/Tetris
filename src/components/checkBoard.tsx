import * as types from "../constants/tetroTypes";

export const checkBottom = (state: types.tetroState): boolean => {
  const { board, index, coordinates } = state;

  return true;
};
