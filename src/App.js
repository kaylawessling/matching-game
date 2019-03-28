import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import Card from './Card';
import GameOver from './GameOver';
import EasyGame from './EasyGame';
import HardGame from './HardGame';
import Share from './Share';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Route path="/" component={Home} />
      <HardGame />
      <Share />
    </div>
  </BrowserRouter>
);
export default App;
