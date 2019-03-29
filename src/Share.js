import React, { Component } from 'react';
// import Header from 'header';

class Share extends Component {
constructor () {
  super()
    this.state={weather:''}
}

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Louisville&APIID=46e0a8caad1359cdf98ff659d53ab742")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('api returned', result)
          this.setState({
            weather: result.data.Louisville
          })
        })
      }

  render() {
    return (
      <div className="weather">
      <img src={this.state.weather}></img>
      </div>
    );
  }
}

export default Share;
