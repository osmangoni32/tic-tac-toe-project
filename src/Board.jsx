import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  //const squares = squares[squares.length - 1];
  const handleSquare = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return; // If filled, return the current state unchanged
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "winner:" + winner;
  } else {
    status = "Next player:" + (xIsNext ? "X" : "O");
  }
  
  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleSquare(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquare(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquare(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleSquare(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquare(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquare(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleSquare(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquare(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquare(8)} />
      </div>
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
