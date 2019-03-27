import React, { PureComponent } from 'react';
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
      // <Route path="/restartGame" component={restartGame} title='restartGame' />
} />

)

export default App;
