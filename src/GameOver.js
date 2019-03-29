import React from 'react';
import Share from './Share';

// game over text, restart buttons, and share button
const GameOver = ({ restartGame }) => (
  <div className="justify-center">
    <h1>Game Over!</h1>
    <h3>If you enjoyed playing this game, share it on Facebook!</h3>
    <button className="restart-button" onClick={restartGame}>Restart Game</button>
    <button className="share-button" onClick={Share}>Share It!</button>
  </div>
)

// render a 'yay' gif
constructor(
  super()
    this.state = {image: ''}
)

componentDidMount() {
  fetch("https://api.giphy.com/v1/gifs/translate?api_key=jON8WWoZFkPIiwCKYY66FZvOenhUJN6b&s=yay")
    .then(res => res.json())
    .then(
      (result) => {
        console.log('api returned', result)
        this.setState({
          image: result.data.source_tld
        });
      }
    )
);

export default GameOver;
