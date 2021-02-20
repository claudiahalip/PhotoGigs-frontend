import React from 'react'
import  { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class NavBar extends Component {
    render(){
    return(
        <div>
            <div className="navbar">
            
            <Link to="/">
                <p className="navBarLinks">Home</p>
            </Link>

            <Link to="/photographers" >
                <p className="navBarLinks">All photographers</p>
            </Link>

            <Link to="/reviews" >
                <p className="navBarLinks">All reviews</p>
            </Link>
        
            <Link to="/login" >
                 {!this.props.loggedInStatus && <p className="navBarLinks">Login</p>}
            </Link>

            <Link to="/signup" >
                 {!this.props.loggedInStatus && <p className="navBarLinks">Sign up</p>}
            </Link>
           
            </div>
        </div>
    )
    }
}

export default NavBar