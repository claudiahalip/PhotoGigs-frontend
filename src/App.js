import React from 'react';
import './App.css';
import PhotographersContainer from  './containers/PhotographersContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <br/>
      <h1>PHOTOGIGS</h1>
      <br/>
      <PhotographersContainer/>
    </div>
  );
}

export default App;
