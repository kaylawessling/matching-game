import React from 'react';
import ReactDOM from 'react-dom';
import './index.js';
import App from './App';
import Home from './Home';
import Header from './Header';
import EasyGame from './EasyGame';
import Card from './Card';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
