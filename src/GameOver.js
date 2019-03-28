import React from 'react';
import Share from './Share';

const GameOver = ({ restartGame }) => (
  <div className="justify-center">
    <h1>Game Over!</h1>
    <h3>If you enjoyed playing this game, share it on Facebook!</h3>
    <button className="restart-button" onClick={restartGame}>Restart Game</button>
    <button className="share-button" onClick={Share}>Share It!</button>
  </div>
);

export default GameOver;
