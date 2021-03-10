import React from 'react';
import cameraLogo from '../img/camera-logo.jpg';
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../css/Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
              <Link>
              <img className="img-logo" src={cameraLogo}></img>
              </Link>
              <h2>Photogigs</h2>
            </div>

            <div className="headerCenter">
            <NavBar/>
            </div>

            <div className="headerRight">
            
            </div>
        </div>
    )
}
