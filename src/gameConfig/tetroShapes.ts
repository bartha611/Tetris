import * as types from "./../constants/tetroTypes";

export const tetronimo: types.Tetronimo = {
  T: {
    coordinates: [
      [5, 14, 15, 16],
      [5, 15, 16, 25],
      [14, 15, 16, 25],
      [5, 14, 15, 25]
    ],
    color: "purple"
  },
  L: {
    coordinates: [
      [6, 14, 15, 16],
      [5, 15, 25, 26],
      [14, 15, 16, 24],
      [4, 5, 15, 25]
    ],
    color: "orange"
  },
  J: {
    coordinates: [
      [4, 14, 15, 16],
      [5, 6, 15, 25],
      [14, 15, 16, 26],
      [5, 15, 24, 25]
    ],
    color: "blue"
  },
  I: {
    coordinates: [
      [14, 15, 16, 17],
      [6, 16, 26, 36],
      [24, 25, 26, 27],
      [5, 15, 25, 35]
    ],
    color: "turquoise"
  },
  O: {
    coordinates: [[5, 6, 15, 16]],
    color: "yellow"
  },
  S: {
    coordinates: [
      [5, 6, 14, 15],
      [5, 15, 16, 26],
      [15, 16, 24, 25],
      [4, 14, 15, 25]
    ],
    color: "green"
  },
  Z: {
    coordinates: [
      [4, 5, 15, 16],
      [6, 15, 16, 25],
      [14, 15, 25, 26],
      [5, 14, 15, 24]
    ],
    color: "red"
  }
};
