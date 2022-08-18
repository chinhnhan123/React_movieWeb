import React from "react";
import { calculateWinner } from "../../HelperTictoctoe";
import Cell from "./Cell";

const Broad = (props) => {
  const game = [null, null, null, "X", "X", "X", null, null, null];
  console.log(calculateWinner(game));
  return (
    <div className="game-broad">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Broad;
