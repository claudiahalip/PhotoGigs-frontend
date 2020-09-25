import React from 'react';
import './App.css';
import PhotographersContainer from  './containers/PhotographersContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>PHOTOGIGS</h1>
      <PhotographersContainer/>
    </div>
  );
}

export default App;
