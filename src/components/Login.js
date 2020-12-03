import React, { Component } from 'react'
import {Link} from "react-router-dom";
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
    }



    render(){
        return(
            <div>
                <h2>Login</h2>
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
                    <div>
                        or <Link to='/signup'>Sign up</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login