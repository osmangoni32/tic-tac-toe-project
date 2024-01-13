import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsnext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    setXIsnext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `go to the move # ${move}`;
    } else {
      description = "start the game";
    }
    const jumpto = (move) => {
      setXIsnext(move % 2 === 0);
      setCurrentMove(move);
    };
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpto(move);
          }}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>{moves}</div>
    </div>
  );
}
