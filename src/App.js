import React from 'react';
import './App.css';
import PhotographersContainer from  './containers/PhotographersContainer'
import ReviewsContainer from  './containers/ReviewsContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Component } from 'react';
import axios from 'axios';
import Signup from './components/Signup';
import Login from'./components/Login';
import Logout from './components/Logout';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'


 class App extends Component {
   
  constructor(props) {
    super(props); 
    this.state = {isLoggedIn: false,
    user: {}
    };
  }

  componentDidMount() {
    this.loginStatus();
  }

  handleLogin = (data)=>{
      //console.log(data)
      this.setState({
        isLoggedIn: true,
        user: data.user
      })
      
  }
  

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }
 
  loginStatus = () => {
    axios.get("https://mysterious-retreat-20431.herokuapp.com/logged_in", {withCredentials: true})
    .then(response=> {
      //console.log(response.data.user)
      if(response.data.logged_in){
        this.handleLogin(response.data)
      } else{
        this.handleLogout()
      }
    }).catch(
       error => console.log ('api error:', error)
    )}

  

  render(){
    return (
      <div className="App" >
        <Header loggedInStatus = {this.state.isLoggedIn} user = {this.state.user}/>

        <div className="loggedIn" >{this.state.isLoggedIn && `You are logged in as ${this.state.user.username}`}</div>

        <Route exact path = '/' render = {props => (
        <Logout {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
        )}/> 
        
        {/* <h1 className="title" >PHOTOGIGS</h1> */}
        
        
        <PhotographersContainer loggedInStatus = {this.state.isLoggedIn} user = {this.state.user}/>
   
        <ReviewsContainer loggedInStatus = {this.state.isLoggedIn} user = {this.state.user}/>
        

        <Route exct path = '/' render = { props => (
          <Home {...props}  loggedInStatus = {this.state.isLoggedIn} user = {this.state.user}/>
        )}
        />
        <Route exact path = '/login' render = { props => (
          <Login {...props} handleLogin = {this.handleLogin} loggedInStatus = {this.state.isLoggedIn} user = {this.state.user}/>
        )}
        />
        <Route exact path = '/signup' render = {props => (
          <Signup  {...props} handleLogin = {this.handleLogin} loggedInStatus = {this.state.isLoggedIn} user = {this.state.user}/>
        )}
        />

      
      <Footer/>
        
        
        
      </div>
  )};
}

export default App;
