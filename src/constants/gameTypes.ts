export const addScore = "addScore";
export const addLines = "addLines";
export const playPause = "playPause";

export interface gameState {
  score: number;
  lines: number;
  level: number;
  pause: boolean;
  interval: number;
}

export interface gameAction {
  type: string;
  score?: number;
  lines?: number;
  level?: number;
}
