export interface TetroState {
  coordinates: number[][];
  index: number;
  color: string;
}

export interface TetroAction {
  type: string;
  coordinates?: number[][];
  index?: number;
  color?: string;
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
export interface KeyboardObject {
  [key: number]: string;
  37: string;
  38: string;
  39: string;
  40: string;
}
