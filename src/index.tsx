import * as ReactDOM from "react-dom";
import * as React from "react";
import "../dist/styles.css";

const App: React.FC = () => {
  React.useEffect(() => {
    const timer: number = setInterval(() => {}, 1000);
    return () => clearInterval(timer);
  });
  const handleKeydown = (e: KeyboardEvent): number => {
    e.preventDefault();
    const arrows: number[] = [37, 38, 39, 40];
    if (arrows.indexOf(e.keyCode) !== -1) {
      console.log("You pressed an arrow button");
    }
    return 2;
  };
  const handleKeyup = (e: KeyboardEvent): number => {
    e.preventDefault();
    const arrows: number[] = [37, 38, 39, 40];
    if (arrows.indexOf(e.keyCode)) {
      console.log("you released arrow key");
    }
    return 2;
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
    };
  });

  const createBoard = () => {
    let board: JSX.Element[] = [];
    let height: number = 40;
    let width: number = 20;
    let items: JSX.Element[] = [];
    for (let i = 0; i < height; i++) {
      items = [];
      for (let k = 0; k < width; k++) {
        items.push(<div className="cell" />);
      }
      board.push(<div className="row">{items}</div>);
    }
    return board;
  };
  return (
    <div id="app">
      <div id="board">{createBoard()}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
