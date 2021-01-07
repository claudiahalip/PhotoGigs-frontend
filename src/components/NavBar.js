import React from 'react'
import {
    Link
  } from "react-router-dom";

function NavBar (){
    return(
        <div>
            <div className="navbar">
            <Link to="/">
                <p className="navBarLinks">Home</p>
            </Link>
            <Link to="/photographers/new">
                <p className="navBarLinks">Add your listing</p>
            </Link>
            
            <Link to="/photographers" >
                <p className="navBarLinks">All photographers</p>
            </Link>

            <Link to="/reviews" >
                <p className="navBarLinks">All reviews</p>
            </Link>

            <Link to="/login" >
                <p className="navBarLinks">Login</p>
            </Link>

            <Link to="/signup" >
                <p className="navBarLinks">Sign up</p>
            </Link>
           
            </div>
        </div>
    )
}

export default NavBar