import React, { Component } from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'


class Login extends Component {

  constructor (props) {
    super(props);
    this.state = {
        username: "",
        email: "",
        password: "",
        errors: ""
    }
  }

    componentWillMount(){
      return this.props.loggedInStatus ? this.redirect() : null
  }

    handleChange = (event)=>{
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const {username, email, password} = this.state
      let user = {
          username: username,
          email: email,
          password: password
      }

      axios.post('https://mysterious-retreat-20431.herokuapp.com/login', {user}, {withCredentials: true})
      .then(
        
        response =>{
          if(response.data.logged_in){
              this.props.handleLogin(response.data)
              this.redirect()
          }else{
              this.setState({
                  errors: response.data.errors
              })
          }
      })
      .catch(console.log('api errors:', this.errors))
  }


    redirect = () => {
      this.props.history.push('/photographers')
    }
    



    render(){
        return(
            <div>
              
                <h2>Login here:</h2>
                <form onSubmit={this.handleSubmit}>
                
  
                    <input
                    placeholder= "username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}></input>
                    <br></br>
                    <br></br>
                    <input
                    placeholder="email"
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    ></input>
                    <br></br>
                    <br></br>

                    <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    ></input>
                    <br></br>
                    <br></br>

                    <button
                    placeholder="submit"
                    type="submit"
                    >Log in</button>
                    
                </form>
                
            </div>
        )
    }
}

export default Login