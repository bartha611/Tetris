export const moveLeft = "moveLeft";
export const moveRight = "moveRight";
export const moveDown = "moveDown";
export const moveUp = "moveUp";
export const addBlock = "addBlock";
export const getNewBoard = "getNewBoard";

export interface cell {
  filled: boolean;
  color?: string;
}

export interface tetroState {
  currentShape: string;
  coordinates: number[][];
  index: number;
  color: string;
  board: cell[][];
}

export interface tetroMoveAction {
  type: string;
  payload?: number[][] | number | tetroState | cell[][];
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
  payload?: any;
}
