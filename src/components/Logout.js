import axios from 'axios'
import React, {Component} from 'react'
import {Route} from 'react-router-dom'

class Logout extends Component {

    handleLogoutClick = () => {
       axios.delete("http://localhost:3001/logout",{ withCredentials: true})
        .then(response =>
            {this.props.handleLogout()}
        ).catch(error => {console.log("logout error", error)})
    }


    render(){
        return(
            <div>
                <Route exact path = "/">
                <button onClick = {this.handleLogoutClick}>Logout</button>
                </Route>
            </div>
        )
    }
   
}
export default Logout