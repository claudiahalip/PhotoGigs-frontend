import axios from 'axios'
import React, {Component} from 'react'
import {Route} from 'react-router-dom'

class Logout extends Component {

    handleLogoutClick = () => {
       axios.delete("https://mysterious-retreat-20431.herokuapp.com/logout",{ withCredentials: true})
        .then(response =>
            {this.props.handleLogout()}
        ).catch(error => {console.log("logout error", error)})
        this.props.history.push('/photographers')
    }


    render(){
        return(
            <div>
                
                  <div className="logout">
                    {this.props.loggedInStatus && <button  onClick = {this.handleLogoutClick}>Logout</button>}
                  </div>
                
            </div>
        )
    }
   
}
export default Logout