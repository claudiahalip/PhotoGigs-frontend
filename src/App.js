import React from 'react';
import './App.css';
import PhotographersContainer from  './containers/PhotographersContainer'
import ReviewsContainer from  './containers/ReviewsContainer'
import UsersContainer from './containers/UsersContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Component } from 'react';
import Axios from 'axios';


 class App extends Component {

  constructor(props) {
    super(props); 
    this.state = { isLoggedIn: false,
    user: {}
    };
  }

  handleLogin = (data)=>{
      this.setState({
        isLoggedIn: true,
        user: data.user
      }
      )
  }

  componentDidMount() {
    this.loginStatus()
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    Axios.get("http://localhost:3002/users", {withCredentials: true})
    .then(response=> {
      if(response.isLoggedIn){
         this.handleLogin(response)
      } else{
        this.handleLogout()
      }
    }).catch(
       error => console.log ('api error:', error)
    )}

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
