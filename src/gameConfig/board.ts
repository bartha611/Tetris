// create initialBoard for tetris
import { gameOptions } from "./options";
import * as types from "../constants/boardTypes";

const initialBoard: types.cell[][] = [];

for (let row = 0; row < gameOptions.totalRows; row++) {
  let items: types.cell[] = [];
  for (let column = 0; column < gameOptions.totalColumns; column++) {
    items.push({ filled: false});
  }
  initialBoard.push(items);
}

export default initialBoard;
