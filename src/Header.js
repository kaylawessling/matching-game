import React from 'react';
import { NavLink } from "react-router-dom"

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/EasyGame">Easy Game</NavLink></li>
      <li><NavLink to="/HardGame">Hard Game</NavLink></li>
      <li><NavLink to="/GameOver">Restart</NavLink></li>
    </ul>
  </header>
)


// const Header = ({ restartGame }) => (
//   <div className="grid-header-container">
//     <div className="justify-end">
//       <button onClick={restartGame} className="restart-button">Restart Game</button>
//     </div>
//   </div>
// );

export default Header;
