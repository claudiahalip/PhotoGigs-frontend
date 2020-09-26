import React from 'react'
import {
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavBar (props){
    return(
        <div>
            <div className="navbar">
            <Link to="/">
                <p className="navBarLinks">Home</p>
            </Link>
            <Link to="/photographers/new">
                <p className="navBarLinks">Add your profile</p>
            </Link>
            
            <Link to="/photographers" >
                <p className="navBarLinks">See all photographers</p>
            </Link>
            
            </div>
        </div>
    )
}

export default NavBar