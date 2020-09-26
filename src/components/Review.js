import React, { Component } from 'react'
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Review extends Component {

    // renderDate=(date)=> {
    //     let arrDate = date.split(/[- :]/);
    //     let newDateFormat =  
    //     return newDateFormat
    // }

  render(){
    return(
      <div> 
        <Route exact path = "/reviews">
        <li>{this.props.review.content}</li>
        <h4>{this.props.review.created_at}</h4>
        </Route>
      </div>
    )
  }
}
export default Review