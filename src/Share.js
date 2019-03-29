import React from 'react';
// import Header from 'header';

const Share = () => {
return(
  <div>
<h1>Enjoy the game? Share it on Facebook!</h1>

<div id="shareBtn" class="btn btn-success clearfix">Share</div>

<h3 style={{"margin-top": "50px"}}>
  <hr />
  <a className="btn btn-small" target="_blank"  href="https://developers.facebook.com/docs/sharing/reference/share-dialog">Share Dialog Documentation</a>
</h3>
</div>)

// weather API component
  constructor() {
    super();
    this.state = {weather: ''}
  }

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Louisville")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('api returned', result)
          this.setState({
            weather: result.data.image_original_url
          });
  };
}

// <script>
// document.getElementById('shareBtn').onclick = function() {
//   FB.ui({
//     method: 'share',
//     display: 'popup',
//     href: 'https://developers.facebook.com/docs/',
//   }, function(response){});
// }
// </script>

export default Share;
