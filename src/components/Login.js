import React, { Component } from 'react'
import axios from 'axios'


class Login extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        errors: ""
    }

    handleChange = (event)=>{
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        const {username, email, password} = this.state
        let user = {
            username: username,
            email: email,
            password: password
          }
          
      axios.post('http://localhost:3002/login', {user}, {withCredentials: true})
          .then(response => {
            if (response.data.logged_in) {
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