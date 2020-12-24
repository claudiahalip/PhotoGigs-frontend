import Axios from 'axios'
import React, {Component} from 'react'
import {Route} from 'react-router-dom'

class Logout extends Component {

    handleOnClickLogout = () => {
       Axios.delete("http://localhost:3001/logout",{ withCredentials: true})
        .then(response =>{this.props.handleLogout()}
        ).catch(error => {console.log("logout error", error)})
    }


    render(){
        return(
            <div>
                <Route exact path = "/">
                   <button onClick= {this.handleOnClickLogout}>Logout</button>
                </Route>
            </div>
        )
    }
   
}
export default Logout