import * as React from "react";
import * as types from "../constants/tetroTypes";

export const createBoard = (state: types.tetroState) => {
  let boardHTMLObject: JSX.Element[] = [];
  let items: JSX.Element[] = [];
  for (let i = 0; i < 22; i++) {
    items = [];
    for (let k = 0; k < 10; k++) {
      let cell = state.board[i][k];
      let cellNumber = 10 * i + k;
      if (state.coordinates[state.index].indexOf(cellNumber) !== -1) {
        items.push(
          <div className="cell" style={{ backgroundColor: state.color }} />
        );
      } else if (cell.filled === false) {
        items.push(<div className="cell" />);
      } else {
        items.push(
          <div className="cell" style={{ backgroundColor: cell.color }} />
        );
      }
    }
    boardHTMLObject.push(<div className="row">{items}</div>);
  }
  return boardHTMLObject;
};
