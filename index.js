const bodyParser = require("body-parser");
const express = require("express");
import handleMove from "./handlers/HandleMove/HandleMove";
import handleStart from "./handlers/HandleStart/HandleStart";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.get("/", handleIndex);
app.post("/start", handleStart);
app.post("/move", handleMove);
app.post("/end", handleEnd);

app.listen(PORT, () =>
  console.log(`Battlesnake Server listening at http://127.0.0.1:${PORT}`)
);

function handleIndex(request, response) {
  var battlesnakeInfo = {
    apiversion: "1",
    author: "aeason96",
    color: "#FFA500",
    head: "default",
    tail: "default",
  };
  response.status(200).json(battlesnakeInfo);
}

function handleEnd(request, response) {
  var gameData = request.body;

  console.log("END");
  response.status(200).send("ok");
}
