import React from 'react';

const Header = ({ restartGame }) => (
  <div className="grid-header-container">
    <div>
      <ul>
        <li><a href="EasyGame.js"><span>Easy</span></a></li>
        <li><a href="HardGame.js"><span>Hard</span></a></li>
      </ul>
    </div>
    <div className="justify-end">
      <button onClick={restartGame} className="restart-button">Restart Game</button>
    </div>
  </div>
);

export default Header;
