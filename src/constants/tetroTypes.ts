export const move = "move";
export const rotate = "rotate";
export const getBlock = "getBlock";

export interface tetroState {
  coordinates: number[][];
  index: number;
  color: string;
}

export interface tetroMoveAction {
  type: string;
  payload: number | number[][];
}

export interface getBlockAction {
  type: string;
  payload?: tetroState;
}

interface shape {
  coordinates: number[][];
  color: string;
}
export interface Tetronimo {
  [key: string]: shape;
  T: shape;
  L: shape;
  J: shape;
  I: shape;
  O: shape;
  S: shape;
  Z: shape;
}
export interface keyboardObject {
  [key: number]: string;
  37: string;
  38: string;
  39: string;
  40: string;
}

export interface tetroAction {
  type: string;
  payload: any;
}
