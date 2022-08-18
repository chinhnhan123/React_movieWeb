import { React, useState } from "react";
import { calculateWinner } from "../../HelperTictoctoe";
import Broad from "./Broad";
import "./Gamestyle.css";
const Game = () => {
  const [broad, setBroad] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(broad);
  const handleClick = (index) => {
    const copyBroad = [...broad];
    if (winner || copyBroad[index]) return;
    copyBroad[index] = xIsNext ? "X" : "O";
    setBroad(copyBroad);
    setXIsNext(!xIsNext);
  };
  const handleClickResetGame = () => {
    setBroad(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div>
      <Broad cells={broad} onClick={handleClick}></Broad>
      <button onClick={handleClickResetGame}> Reset Game</button>
      {winner ? `Winner is ${!xIsNext ? "X" : "O"} ` : " "}
    </div>
  );
};

export default Game;
