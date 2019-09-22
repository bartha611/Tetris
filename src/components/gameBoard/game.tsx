import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions/tetroAction";
import * as boardActions from "../../actions/boardAction";
import * as gameActions from "../../actions/gameAction";
// import types for reducers
import * as tetroTypes from "../../constants/tetroTypes";
import * as gameTypes from "../../constants/gameTypes";
import * as boardTypes from "../../constants/boardTypes";

import {
  checkBottom,
  checkLeft,
  checkRight,
  checkRotation
} from "../helper/checkBoard";

import "./game.css";
import { createBoard } from "../helper/createBoard";

let interval: number = null;
const sleep = (m: number) => new Promise(resolve => setTimeout(resolve, m));

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const State: any = useSelector(state => state);
  const tetro: tetroTypes.tetroState = State.tetro;
  const boardObject: boardTypes.boardState = State.board;
  const game: gameTypes.gameState = State.game;
  React.useEffect(() => {
    if (!game.pause && !game.gameOver) {
      interval = setInterval(() => {
        dispatch(actions.moveDown(tetro));
      }, game.interval);
    } else {
      clearInterval(interval);
    }
    return (): void => {
      clearInterval(interval);
    };
  }, [dispatch, game, tetro]);
  React.useEffect(() => {
    if (!checkBottom(tetro, boardObject)) {
      dispatch(boardActions.addBlock(tetro, boardObject));
      dispatch(actions.getblock(boardObject));

      // if complete render animation
      if (boardObject.totalComplete.length > 0) {
        dispatch(gameActions.playPause());
        dispatch(boardActions.getAnimation(boardObject));
        sleep(500).then(() => {
          dispatch(gameActions.addScore(boardObject, game));
          dispatch(boardActions.removeBlock(boardObject))
          dispatch(gameActions.playPause());
        })
      }
    }
  }, [dispatch, tetro, boardObject, game]);
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
  return (
    <div id="gameBoard">
      <div id="board">{createBoard(tetro, boardObject)}</div>
      {game.gameOver && (
        <div>
          <h1>Game Over, bitch</h1>
        </div>
      )}
    </div>
  );
};
