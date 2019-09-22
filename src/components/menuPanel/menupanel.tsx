import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../../constants/gameTypes";
import * as boardTypes from '../../constants/boardTypes'
import "./menupanel.css";
import { playPause } from "../../actions/gameAction";
import * as boardActions from '../../actions/boardAction';
import * as tetroActions from '../../actions/tetroAction';
import * as gameActions from '../../actions/gameAction'

const sleep = (m: number) => new Promise(resolve => setTimeout(resolve, ))

export const MenuPanel = () => {
  const State: any = useSelector(state => state);
  const gameObject: types.gameState = State.game;
  const boardObject: boardTypes.boardState = State.board;
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(boardActions.reset())
    dispatch(gameActions.reset())
    sleep(1000).then(() => {
      dispatch(tetroActions.getblock(boardObject))
    })
  }
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
          <button type="submit" onClick={() => reset()}>
            <i className="fa fa-refresh" />
          </button>
        </div>
      </div>
    </div>
  );
};
