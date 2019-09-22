export const addScore = "addScore";
export const addLines = "addLines";
export const playPause = "playPause";
export const gameOver = "gameOver";
export const gameReset = "gameReset"

export interface gameState {
  score: number;
  lines: number;
  level: number;
  pause: boolean;
  interval: number;
  gameOver: boolean;
}

export interface gameAction {
  type: string;
  score?: number;
  lines?: number;
  level?: number;
  interval?: number;
}
