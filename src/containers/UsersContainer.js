import React from 'react'
import {Component} from 'react'
import conect from 'react-redux'
import {Switch, Route, Link} from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'

class UsersContainer extends Component {
    render(){
        return(
            <div>
                <Login/>
                <Signup/>
            </div>
        )
    }
}

export default UsersContainer