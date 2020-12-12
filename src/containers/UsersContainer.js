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
                
                    <Route exact path="/login">
                       <Login/>
                    </Route>
                    <Route exact path="/signup">
                        <Signup/>
                    </Route>
                
            </div>
        )
    }
}

export default UsersContainer