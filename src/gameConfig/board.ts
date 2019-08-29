// create initial board for tetris
import { gameOptions } from "./options";
import * as types from "../constants/tetroTypes";

const boardObject: types.cell[][] = [];

for (let row = 0; row < gameOptions.totalRows; row++) {
  let items: types.cell[] = [];
  for (let column = 0; column < gameOptions.totalColumns; column++) {
    items.push({ filled: false });
  }
  boardObject.push(items);
}

export default boardObject;
