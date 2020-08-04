export interface Cell {
  filled: boolean;
  color?: string;
  animation?: boolean;
}

export interface BoardState {
  board: Cell[][];
  totalComplete: number[];
}

export interface BoardAction {
  type: string;
  board?: Cell[][];
  totalComplete?: number[];
}
