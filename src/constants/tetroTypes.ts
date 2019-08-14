export const moveLeft = "moveLeft";
export const moveRight = "moveRight";
export const moveDown = "moveDown";

export interface tetroMoveAction {
  type: string;
  payload: number[][];
}
