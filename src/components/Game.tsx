import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import * as interfaces from "../interfaces";
import { sleep } from "../utils/sleep";

// import types for reducers

import { checkBottom } from "../utils/checkBoard";

import { useHandleKeydown } from "../utils/useHandleKeydown";

import { createBoard } from "../utils/createBoard";
import { useHandleClick } from "../utils/useHandleClick";
import { useHandleMousemove } from "../utils/useHandleMousemove";
let interval: number | null = null;

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const State: any = useSelector(state => state);
  const tetro: interfaces.TetroState = State.tetro;
  const boardObject: interfaces.BoardState = State.board;
  const game: interfaces.GameState = State.game;

  React.useEffect(() => {
    if (!game.pause && !game.gameOver && !game.animation) {
      interval = setInterval(() => {
        dispatch(actions.moveDown(tetro));
      }, game.interval);
    } else {
      clearInterval(interval);
    }
    return (): void => {
      clearInterval(interval);
    };
  }, [dispatch, game, tetro.coordinates]);

  useHandleKeydown(game, tetro, boardObject);
  useHandleClick(game, tetro, boardObject);
  useHandleMousemove(tetro, boardObject);

  React.useEffect(() => {
    const animation = async () => {
      dispatch(actions.setAnimation());
      clearInterval(interval);
      dispatch(actions.getAnimation(boardObject));
      dispatch(actions.addScore(boardObject, game));
      await sleep(800);
      dispatch(actions.removeBlock(boardObject));
      dispatch(actions.setAnimation());
    };
    if (!checkBottom(tetro, boardObject)) {
      dispatch(actions.addBlock(tetro, boardObject));
      dispatch(actions.getblock(boardObject));
    }
    if (boardObject.totalComplete.length > 0 && !game.animation) {
      animation();
    }
  }, [dispatch, tetro, boardObject, game]);

  return (
    <div>
      <div className="board">{createBoard(tetro, boardObject)}</div>
      {game.gameOver && (
        <div>
          <h1>Game Over, bitch</h1>
        </div>
      )}
    </div>
  );
};
