import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import photographerReducer from './reducers/photographerReducer'
import { BrowserRouter as Router,} from "react-router-dom";
import thunk from 'redux-thunk'


// const reducer = combineReducers({
//   photographerReducer, userReducer
// })
const store = createStore(photographerReducer, composeWithDevTools(applyMiddleware(thunk)));

//const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
