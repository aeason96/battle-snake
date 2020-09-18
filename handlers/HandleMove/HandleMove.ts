export default function handleMove(request, response): void {
  var gameData = request.body;

  var possibleMoves = ["up", "down", "left", "right"];
  var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

  console.log("MOVE: " + move);
  console.log(request.body);
  response.status(200).send({
    move: move,
  });
}
