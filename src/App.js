import React from 'react';
import './App.css';
import PhotographersContainer from  './containers/PhotographersContainer'
import ReviewsContainer from  './containers/ReviewsContainer'
import UsersContainer from './containers/UsersContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Component } from 'react';


 class App extends Component {
  render(){
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <h1 className="title" >PHOTOGIGS</h1>
      <br/>
      <Home/>
      <PhotographersContainer/>
      <ReviewsContainer/>
      <UsersContainer/>
      <h4>2020 	&#169;Claudia Cristina Vamesu</h4>
      <br/>
    </div>
  )};
}

export default App;
