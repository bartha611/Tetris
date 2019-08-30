import * as types from "../constants/tetroTypes";

// TODO
export const moveLeft = (currentTetro: number[][]): types.tetroMoveAction => {
  const newTetro = currentTetro.map(row => {
    let checkRow: number[] = row.sort((a,b) => {
      return (a % 10) - (b % 10)
    })
    if (checkRow[0] % 10 === 0) {
      console.log("hello");
      return row
    } else {
      const newTetro =  row.map(cell => {
        return cell -= 1
      })
      return newTetro
    }
  })
  return {
    type: types.moveLeft,
    payload: newTetro
  };
};

// TODO
export const moveRight = (currentTetro: number[][]): types.tetroMoveAction => {
  const newTetro = currentTetro.map(row => {
    const checkRow: number[] = row.sort((a,b) => {
      return (b % 10) - (a % 10)
    })
    if (checkRow[0] % 10 === 9) {
      return row
    } else {
      const newRow = row.map(cell => {
        return cell += 1
      })
      return newRow
    }
  })
  return {
    type: types.moveRight,
    payload: newTetro
  };
};

// Todo 
export const moveDown = (
  currentTetro: number[][],
  board: types.cell[][]
): types.tetroMoveAction => {
  for (let row = 0; row < currentTetro.length; row++) {
    for (let column = 0; column < currentTetro[row].length; column++) {
      currentTetro[row][column] += 10;
    }
  }
  return {
    type: types.moveDown,
    payload: currentTetro
  };
};

export const moveUp = (tetronimoIndex: number): types.tetroMoveAction => {
  tetronimoIndex = (tetronimoIndex + 1) % 4;
  return {
    type: types.moveUp,
    payload: tetronimoIndex
  };
};
