import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sleep } from "../utils/sleep";
import * as actions from "../actions";
import * as interfaces from "../interfaces";

export const MenuPanel = () => {
  const State: any = useSelector(state => state);
  const gameObject: interfaces.GameState = State.game;
  const boardObject: interfaces.BoardState = State.board;
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(actions.reset());
    dispatch(actions.boardReset());
    sleep(1000).then(() => {
      dispatch(actions.getblock(boardObject));
    });
  };
  return (
    <div className="menu">
      <div className="menu__info">
        <div className="menu__title">Level</div>
        <div className="menu__value">{gameObject.level}</div>
      </div>
      <div className="menu__info">
        <div className="menu__title">Score</div>
        <div className="menu__value">{gameObject.score}</div>
      </div>
      <div className="menu__info">
        <div className="menu__title">Lines</div>
        <div className="menu__value">{gameObject.lines}</div>
      </div>
      <div className="button">
        <div className="play">
          <button
            className="button"
            type="submit"
            onClick={() => dispatch(actions.playPause())}
          >
            <i className={`fa ${gameObject.pause ? "fa-play" : "fa-pause"}`} />
          </button>
        </div>
        <div className="reset">
          <button type="submit" onClick={() => reset()}>
            <i className="fa fa-refresh" />
          </button>
        </div>
      </div>
    </div>
  );
};
