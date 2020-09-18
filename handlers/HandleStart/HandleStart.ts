import { GameRequest } from "../../models/GameRequest";

export default function handleStart(request: any, response: any) {
  var gameData: GameRequest = request.body as GameRequest;
  console.log("START----------------------------");
  console.log(gameData);
  response.status(200).send("ok");
}
