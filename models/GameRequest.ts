import { Game } from "./Game";

type GameRequest = {
  game: Game;
  turn: number;
  board: object;
  you: object;
};
