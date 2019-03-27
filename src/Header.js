import React from 'react';
import { Link } from "react-router-dom";
import Home from './Home';
import EasyGame from "./EasyGame";
import HardGame from './HardGame';
import { withRouter } from "react-router-dom"

// const Header = () => (
  <header>
    <ul className="main-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/EasyGame">Easy Game</Link></li>
      <li><Link to="/HardGame">Hard Game</Link></li>
      <li><Link to="/GameOver">Restart</Link></li>
    </ul>
)


const Header = ({ restartGame }) => (
  <div className="grid-header-container">
    <div className="justify-end">
      <button onClick={restartGame} className="restart-button">Restart Game</button>
    </div>
  </div>
);

export default Header;
