import React, { Component } from 'react'
import axios from 'axios'
import {
  Link
} from "react-router-dom";
import '../css/SignUp.css';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
        username:"",
        email:"",
        password: "",
        password_confirmation: "",
        errors:""
      }
    }

    handleChange = (event)=>{
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    axios.post('https://mysterious-retreat-20431.herokuapp.com/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
      this.props.history.push('/photographers')
  };


handleErrors = ()=>{
  return(
      <div>
  <ul>{this.state.errors.map((error) => {
    return <li key={error}>{error}</li>
  })}
  </ul> 
</div>
    )
};


    render() {
        return(
            <div className="Form">
              
                <p>Create an account:</p>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input
                    className="select"
                    placeholder="username"
                    type="text"
                    name="username"
                    value={this.username}
                    onChange={this.handleChange}>
                    </input>
                    
                    <input
                    className="select"
                    placeholder="email"
                    type="text"
                    name="email"
                    value={this.email}
                    onChange={this.handleChange}
                    ></input>
                    
                    <input
                    className="select"
                    placeholder="password"
                    type="password"
                    name="password"
                    value={this.password}
                    onChange={this.handleChange}
                    ></input>

                    <input
                    className="select"
                    placeholder="password confirmation"
                    type="text"
                    name="password_confirmation"
                    value={this.password_confirmation}
                    onChange={this.handleChange}
                    ></input>
                    
                    <button
                    className="submit"
                    placeholder="submit"
                    type="submit"
                    >Sign up</button>
                </form>
                </div>

            <p className="">
              Already an account?
              <Link to="/login" >
                <p className="fake_button">Login</p>
              </Link>
            </p>
            
                
              

            </div>
        )
    }
}

export default Signup