import React, { Component } from 'react'
import {Link} from "react-router-dom";
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
    }

    render() {
        return(
            <div>
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}>
                    </input>

                    <input
                    plaseholder="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    ></input>
                    <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    ></input>

                    <input
                    placeholder="password confirmation"
                    type="password"
                    name="password_confirmation"
                    value="password_confirmation"
                    onChange={this.handleChange}
                    ></input>
                    <button
                    placeholder="submit"
                    type="submit"
                    >Sign up</button>
                </form>

            </div>
        )
    }
}

export default Signup