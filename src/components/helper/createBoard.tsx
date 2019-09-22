import * as React from "react";
import * as types from "../../constants/boardTypes";
import * as tetroTypes from "../../constants/tetroTypes";

export const createBoard = (
  state: tetroTypes.tetroState,
  boardState: types.boardState
) => {
  let boardHTMLObject: JSX.Element[] = [];
  const { board } = boardState;
  const { coordinates, index, color } = state;
  let items: JSX.Element[] = [];
  for (let i = 0; i < board.length; i++) {
    items = [];
    for (let k = 0; k < board[i].length; k++) {
      if (board.length !== 22) {
      }
      let cell = board[i][k];
      let cellNumber = 10 * i + k;
      if (coordinates[index].indexOf(cellNumber) !== -1) {
        items.push(<div className="cell" style={{ backgroundColor: color }} />);
      } else if (cell.animation) {
        items.push(
          <div
            className="cell animation"
            style={{ backgroundColor: cell.color }}
          />
        );
      } else if (cell.filled === false) {
        items.push(<div className="cell" style={{backgroundColor: "black"}} />);
      } else {
        items.push(
          <div
            className="cell filled"
            style={{ backgroundColor: cell.color }}
          />
        );
      }
    }
    boardHTMLObject.push(<div className="row">{items}</div>);
  }
  return boardHTMLObject;
};
