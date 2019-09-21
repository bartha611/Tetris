export const addBlock = "addBlock";
export const reset = "reset";
export const removeBlock = "removeBlock";

export interface cell {
  filled: boolean;
  color?: string;
  animation?: boolean;
}

export interface boardState {
  board: cell[][];
  totalComplete: number[];
}

export interface boardAction {
  type: string;
  board?: cell[][];
  totalComplete?: number[];
}
