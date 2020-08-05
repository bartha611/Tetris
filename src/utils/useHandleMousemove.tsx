import * as React from "react";
import * as interfaces from "../interfaces";
import * as actions from "../actions";
import { useDispatch } from "react-redux";

export const useHandleMousemove = (
  tetro: interfaces.TetroState,
  board: interfaces.BoardState
) => {
  const dispatch = useDispatch();
  const handleMove = (event: MouseEvent) => {
    if (event.movementX > 0) {
    }
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  });
};
