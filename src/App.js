import React from 'react';
import './App.css';
import PhotographersContainer from  './containers/PhotographersContainer'
import ReviewsContainer from  './containers/ReviewsContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <h1 className="title" >PHOTOGIGS</h1>
      <br/>
      <Home/>
      <PhotographersContainer/>
      <ReviewsContainer/>
      <h4>2020</h4>
      <br/>
    </div>
  );
}

export default App;
