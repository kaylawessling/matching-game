import React, { Component } from 'react';
import Header from './Header';
import App from './App';

class Home extends Component {
  constructor() {
    super()
    this.state = {image: ''}
  }

  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=jON8WWoZFkPIiwCKYY66FZvOenhUJN6b")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('api returned', result)
          this.setState({
            image: result.data.image_original_url
          });
        }
      )
  }

  render() {
    return (
      <div className="directions">
      <h1>It's a Match!</h1>
      <h3>Match the numbers until there are</h3>
      <h3>no more matches available. Once you</h3>
      <h3>get the hang of it, level up and try the hard version</h3>
      <hr />
      <h3></h3>
      <img src={this.state.image}></img>
      </div>
    );
  }
}

export default Home;
