import * as React from "react";
import * as interfaces from "../interfaces";
import { potentialPosition } from "./checkBoard";

export const createBoard = (
  state: interfaces.TetroState,
  boardState: interfaces.BoardState
) => {
  let boardHTMLObject: JSX.Element[] = [];
  const { board } = boardState;
  const highlightedCells = potentialPosition(state, boardState);
  const { coordinates, index, color } = state;
  let items: JSX.Element[] = [];
  for (let i = 0; i < board.length; i++) {
    items = [];
    for (let k = 0; k < board[i].length; k++) {
      let cell = board[i][k];
      let cellNumber = 10 * i + k;
      if (cell.animation) {
        items.push(
          <div className={`cell cell__animation cell__filled--${color}`} />
        );
      } else if (coordinates[index].indexOf(cellNumber) > -1 || cell.filled) {
        items.push(
          <div
            className={`cell cell__filled cell__filled--${
              cell.filled ? cell.color : color
            }`}
          />
        );
      } else if (highlightedCells.indexOf(cellNumber) > -1) {
        items.push(
          <div
            className={`cell cell__filled cell__filled--${color} cell__filter`}
          />
        );
      } else {
        items.push(<div className="cell" />);
      }
    }
    boardHTMLObject.push(<div className="row">{items}</div>);
  }
  return boardHTMLObject;
};
