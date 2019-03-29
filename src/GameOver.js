import React, { Component } from 'react';
import Share from './Share';

class GameOver extends Component {
constructor() {
  super()
    this.state = {image: ''}
}

componentDidMount() {
  fetch("https://api.giphy.com/v1/gifs/translate?api_key=jON8WWoZFkPIiwCKYY66FZvOenhUJN6b&s=yay")
    .then(res => res.json())
    .then(
      (result) => {
        console.log('api returned', result)
        this.setState({
          image: result.data.source_tld
        })
      });
  };

  render () {
    return (
      <div className="yay">
        <h1>Game Over!</h1>
        <img src={this.state.image}></img>
        <h3>If you ejoyed playing this game, share it!</h3>
      </div>
    );
  }
}

export default GameOver;
