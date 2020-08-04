import * as React from "react";
import * as actions from "../actions";
import * as interfaces from "../interfaces";
import { useDispatch } from "react-redux";
import {
  checkLeft,
  checkRight,
  checkRotation,
  checkBottom
} from "../utils/checkBoard";

export const useHandleKeydown = (
  game: interfaces.GameState,
  tetro: interfaces.TetroState,
  boardObject: interfaces.BoardState
) => {
  const dispatch = useDispatch();

  const handleKeydown = (e: KeyboardEvent): any => {
    const key = e.keyCode;
    if (game.pause || game.gameOver) {
      return;
    }
    switch (key) {
      case 37:
        e.preventDefault();
        if (checkLeft(tetro, boardObject)) {
          return dispatch(actions.moveLeft(tetro.coordinates));
        }
        return;
      case 38:
        e.preventDefault();
        if (checkRotation(tetro, boardObject)) {
          return dispatch(actions.moveUp(tetro.index));
        }
        return;
      case 39:
        e.preventDefault();
        if (checkRight(tetro, boardObject)) {
          return dispatch(actions.moveRight(tetro.coordinates));
        }
        return;
      case 40:
        e.preventDefault();
        if (checkBottom(tetro, boardObject)) {
          return dispatch(actions.moveDown(tetro));
        }
        return;
      default:
        return;
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeydown, true);
    return () => {
      window.removeEventListener("keydown", handleKeydown, true);
    };
  });
};
