import React, { Component } from 'react'
import { Route } from 'react-router-dom'; 
import axios from 'axios'

class Signup extends Component {

    state={
        username:"",
        email:"",
        password: "",
        password_confirmation: "",
        errors:""
    }

    handleChange = (event)=>{
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
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
  }


    render() {
        return(
            <div>
              <Route exact path = '/signup'>
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}>
                    </input>
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

                    <input
                    placeholder="password confirmation"
                    type="password"
                    name="password_confirmation"
                    value={this.state.password_confirmation}
                    onChange={this.handleChange}
                    ></input>
                    <br></br>
                    <br></br>
                    <button
                    placeholder="submit"
                    type="submit"
                    >Sign up</button>
                </form>
                </Route>

            </div>
        )
    }
}

export default Signup