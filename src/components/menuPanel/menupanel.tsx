import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../../constants/gameTypes";
import "./menupanel.css";
import { playPause } from "../../actions/gameAction";
import { reset } from "../../actions/boardAction";

export const MenuPanel = () => {
  const State: any = useSelector(state => state);
  const gameObject: types.gameState = State.game;
  const dispatch = useDispatch();
  const button = () => {
    if (gameObject.pause) {
      return (
        <button type="submit" onClick={() => dispatch(playPause())}>
          <i className="fa fa-play" />
        </button>
      );
    } else {
      return (
        <button type="submit" onClick={() => dispatch(playPause())}>
          <i className="fa fa-pause" />
        </button>
      );
    }
  };
  return (
    <div id="menu">
      <div className="game-info">
        <div className="title">Level</div>
        <div className="value">{gameObject.level}</div>
      </div>
      <div className="game-info">
        <div className="title">Score</div>
        <div className="value">{gameObject.score}</div>
      </div>
      <div className="game-info">
        <div className="title">Lines</div>
        <div className="value">{gameObject.lines}</div>
      </div>
      <div className="button">
        <div className="play">{button()}</div>
        <div className="reset">
          <button type="submit" onClick={() => dispatch(reset())}>
            <i className="fa fa-refresh" />
          </button>
        </div>
      </div>
    </div>
  );
};
