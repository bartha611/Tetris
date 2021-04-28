import * as React from "react";
import * as interfaces from "../interfaces";
import * as actions from "../actions";
import { potentialPosition } from "./checkBoard";
import { useDispatch } from "react-redux";

export const useHandleClick = (
  game: interfaces.GameState,
  tetro: interfaces.TetroState,
  board: interfaces.BoardState
) => {
  const dispatch = useDispatch();
  const handleClick = (event: KeyboardEvent) => {
    const newBlock = potentialPosition(tetro, board);
    const elementClass = (event.target as Element).className;
    console.log(elementClass);
    console.log(typeof elementClass);
    if (
      ["button", "fa fa-play", "fa fa-pause", "fa fa-refresh"].indexOf(
        elementClass
      ) === -1 &&
      typeof elementClass !== "object" &&
      !game.pause &&
      !game.animation &&
      !game.gameOver
    ) {
      dispatch(actions.addBlock(tetro, board, newBlock));
      dispatch(actions.getblock(board));
    }
  };
  React.useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  });
};
