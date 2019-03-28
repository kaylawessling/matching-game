import React, { Component } from 'react';

class Home extends Component {

render () {
  return (
    <div className="justify-center">
      <h1>It's a Match!</h1>
      <h3>Match the numbers until there are no more matches available. Once you get the hang of it, level up and try the hard version.</h3>
      <button className="example-box" onClick={EasyGame}></button>
      <button className="example-box" onClick={EasyGame}></button>
    </div>
  );
}

export default Home;
