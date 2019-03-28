import React, { Component } from 'react';
import Header from './Header';
import App from './App';

class Home extends Component {
  render() {
    return (
      <div className="directions">
      <h1>It's a Match!</h1>
      <h3>Match the numbers until there are</h3>
      <h3>no more matches available. Once you</h3>
      <h3>get the hang of it, level up and try the hard version</h3>
      <hr />
      </div>
    );
  }
}

export default Home;
