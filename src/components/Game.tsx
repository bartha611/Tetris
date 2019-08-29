import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/tetroAction";
import * as types from "../constants/tetroTypes";
import "./game.css";

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const gameState: any = useSelector(state => state);
  const boardObject: types.cell[][] = gameState.tetro.board;
  const handleKeydown = (e: KeyboardEvent): any => {
    const key = e.keyCode;
    e.preventDefault();
    switch (key) {
      case 37:
        return dispatch(actions.moveLeft([[]]));
      case 38:
        return dispatch(actions.moveUp([[]]));
      case 39:
        return dispatch(actions.moveRight([[]]));
      case 40:
        return dispatch(actions.moveDown([[]]));
      default:
        return;
    }
  };
  const handleKeyup = (e: KeyboardEvent): any => {
    e.preventDefault();
    console.log(`You entered ${e.keyCode}`);
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
    };
  });
  const createBoard = () => {
    let boardHTMLObject: JSX.Element[] = [];
    let items: JSX.Element[] = [];
    for (let i = 0; i < 22; i++) {
      items = [];
      for (let k = 0; k < 10; k++) {
        let cell = boardObject[i][k];
        if (cell.filled === false) {
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
  return (
    <div id="app">
      <div id="board">{createBoard()}</div>
    </div>
  );
};
