import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/tetroAction";

import "./game.css";
import { createBoard } from "./createBoard";

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const gameState: any = useSelector(state => state);
  const tetroObject = gameState.tetro;
  const handleKeydown = (e: KeyboardEvent): any => {
    const key = e.keyCode;
    switch (key) {
      case 37:
        return dispatch(actions.moveLeft(tetroObject.coordinates));
      case 38:
        return dispatch(actions.moveUp(tetroObject.index));
      case 39:
        return dispatch(actions.moveRight(tetroObject.coordinates));
      case 40:
        // check if bottom is filled
        const { coordinates, index, board } = tetroObject;
        const indices: number[] = coordinates[index];
        for (let k = 0; k < 4; k++) {
          let checkRow = Math.floor(indices[k] / 10) + 10;
          let checkColumn = indices[k] % 10;
          if (
            indices[k] + 10 > 210 ||
            board[checkRow][checkColumn].filled === true
          ) {
            return dispatch(actions.addBlock(tetroObject));
          }
        }
        return dispatch(actions.moveDown(tetroObject));
      default:
        return;
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
  return (
    <div id="app">
      <div id="board">{createBoard(tetroObject)}</div>
    </div>
  );
};
