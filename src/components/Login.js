import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

class Login extends Comment{
    state = {
        username: "",
        email: "",
        password: "",
        errors: ""
    }



    render(){
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handlesubmit}>
                    <input
                    placeholder= "username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}></input>

                    <input
                    placeholder="email"
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