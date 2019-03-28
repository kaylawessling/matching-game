import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <span className="grid-header-container">
    <div className="nav">
      <ul className="nav-bar">
        <li><NavLink exact to="/EasyGame">Easy Game</NavLink></li>
        <li><NavLink to="/HardGame">Hard Game</NavLink></li>
        <li><NavLink to="/Share">Share It!</NavLink></li>
      </ul>
    </div>
  </span>
);

export default Header;
