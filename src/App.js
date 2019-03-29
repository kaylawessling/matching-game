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

class App extends Component{
  render(){
    return(
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/HardGame" component={HardGame} />
        <Route path="/EasyGame" component={EasyGame} />
        <Route path="/Share" component={Share} />
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
