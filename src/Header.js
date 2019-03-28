import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import App from './App';
import HardGame from '/HardGame';
import Share from '/Share';


const Header = ({match}) => (
  <div className="grid-header-container">
  <div className="justify-end">
    <button onClick={restartGame} className="restart-button">Restart Game</button>
  </div>
    <ul className="nav-bar">
      <li><NavLink to="/EasyGame">Easy Game</NavLink></li>
      <li><NavLink to="/HardGame">Hard Game</NavLink></li>
      <li><NavLink to="/Share">Hard Game</NavLink></li>
    </ul>

    <Route exact path="/App" render={ () => <Redirect to="/App" /> } />
    <Route path="/App" component={App} />
    <Route path="/HardGame" component={HardGame} />
    <Route path="/Share" component={Share} />
  </div>
);

export default Header;
