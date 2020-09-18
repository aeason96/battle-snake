import { Game } from "./Game";

export type GameRequest = {
  game: Game;
  turn: number;
  board: object;
  you: object;
};
