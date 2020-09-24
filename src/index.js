import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {Provider} from 'react-redux';
// import { createStore, applyMiddleare} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import trunk from 'redux-trunk';
// import photographerReducer from './reducers/photographerReducer'

//const store = createStore(photographerReducer, composeWithDevTools(applyMiddleare(trunk)));

ReactDOM.render(
  <React.StrictMode>
   
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
