import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/tetroAction";
import * as helper from "./checkBoard";

import "./game.css";
import { createBoard } from "./createBoard";

let interval: number = null;

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const gameState: any = useSelector(state => state);
  const tetroObject = gameState.tetro;
  const [time, setTimer] = React.useState(false);
  React.useEffect(() => {
    if (time) {
      interval = setInterval(() => {
        dispatch(actions.moveDown(tetroObject));
      }, 300);
    }
    return (): void => {
      clearInterval(interval);
    };
  }, [dispatch, tetroObject, time]);
  React.useEffect((): any => {
    if (!helper.checkBottom(tetroObject, tetroObject.index)) {
      dispatch(actions.addBlock(tetroObject));
      dispatch(actions.getNewBoard(tetroObject.board));
    }
  }, [dispatch, tetroObject]);
  const handleKeydown = (e: KeyboardEvent): any => {
    const key = e.keyCode;
    const { index } = tetroObject;
    switch (key) {
      case 37:
        if (helper.checkLeft(tetroObject, index)) {
          return dispatch(actions.moveLeft(tetroObject.coordinates));
        }
        return;
      case 38:
        if (helper.checkRotation(tetroObject)) {
          return dispatch(actions.moveUp(tetroObject.index));
        }
        return;
      case 39:
        if (helper.checkRight(tetroObject, index)) {
          return dispatch(actions.moveRight(tetroObject.coordinates));
        }
        return;
      case 40:
        if (helper.checkBottom(tetroObject, index)) {
          return dispatch(actions.moveDown(tetroObject));
        }
        return;
      default:
        return;
    }
  };
  React.useEffect(() => {
    window.addEventListener("keypress", handleKeydown);
    return () => {
      window.removeEventListener("keypress", handleKeydown);
    };
  });
  const Button = () => {
    if (!time) {
      return (
        <button className="btn" onClick={() => setTimer(true)}>
          <i className="fa fa-play" />
        </button>
      );
    }
    return (
      <button className="btn" onClick={() => setTimer(false)}>
        <i className="fa fa-pause" />
      </button>
    );
  };
  return (
    <div id="app">
      <div id="board">{createBoard(tetroObject)}</div>
      <div className="btn-group">{Button()}</div>
    </div>
  );
};
