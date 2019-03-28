import React from 'react';
// import { Route, NavLink } from 'react-router-dom';
//
// import HardGame from '/HardGame';


const Header = ({ restartGame }) => (
  <div className="grid-header-container">
  <div className="justify-end">
    <button onClick={restartGame} className="restart-button">Restart Game</button>
  </div>
    <ul className="nav-bar">
      <li><NavLink to="/HardGame">Hard Game<NavLink></li>
      <li><NavLink to="/Share">Hard Game<NavLink></li
    </ul>
  </div>

  <Route path="/App" component={Easy} />
  <Route path="/HardGame" component={HardGame} />
  <Route path="/Share" component={Share} />
);

export default Header;
