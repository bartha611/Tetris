// create initialBoard for tetris
import { gameOptions } from "./options";
import * as interfaces from "../interfaces";

const initialBoard: interfaces.Cell[][] = [];

for (let row = 0; row < gameOptions.totalRows; row++) {
  let items: interfaces.Cell[] = [];
  for (let column = 0; column < gameOptions.totalColumns; column++) {
    items.push({ filled: false });
  }
  initialBoard.push(items);
}

export default initialBoard;
