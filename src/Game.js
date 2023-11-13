import React, { useState } from 'react';
import Dice from './Dice';
import Player from './Player';
import "./styles.css"

const Game = () => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState(null);

  const rollDice = () => {
    const rollResult1 = Math.floor(Math.random() * 6) + 1;
    const rollResult2 = Math.floor(Math.random() * 6) + 1;

    setPlayer1Score(player1Score + rollResult1);
    setPlayer2Score(player2Score + rollResult2);

    if (player1Score + rollResult1 >= 20 || player2Score + rollResult2 >= 20) {
      setWinner(player1Score + rollResult1 >= 20 ? 'Player 1' : 'Player 2');
    }
  };

  return (
    <div className="game">
      <Player name="Player 1" score={player1Score} />
      <Player name="Player 2" score={player2Score} />
      <button onClick={rollDice} disabled={winner !== null}>
        Roll Dice
      </button>
      {winner && <p>{winner} wins!</p>}
      <Dice value={player1Score % 6 + 1} />
      <Dice value={player2Score % 6 + 1} />
    </div>
  );
};

export default Game;