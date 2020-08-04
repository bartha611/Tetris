export interface GameState {
  score: number;
  lines: number;
  level: number;
  interval: number;
  pause: boolean;
  gameOver: boolean;
  animation: boolean;
}

export interface GameAction {
  type: string;
  score?: number;
  lines?: number;
  level?: number;
  interval?: number;
}
