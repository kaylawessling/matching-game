import React from 'react';
// import Header from 'header';

class Share extends Component {
constructor () {
  super()
    this.state={weather:''}
}

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Louisville")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('api returned', result)
          this.setState({
            weather: result.data.image_original_url
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
