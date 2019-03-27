import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//App components
import Header from './Header';
import Home from './Home';
import Card from './Card';
import GameOver from './GameOver';
import EasyGame from './EasyGame';
import HardGame from './HardGame';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/EasyGame" render={ () => <EasyGame title='Easy' /> }
      <Route path="/HardGame" component={HardGame} />
    </div>
  </BrowserRouter>
      // <Route path="/restartGame" component={restartGame} title='restartGame' />
);

export default App;
