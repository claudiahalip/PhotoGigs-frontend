import React, { Component } from 'react'
import Review from './Review'
import {Route} from "react-router-dom";
class Reviews extends Component{

  renderReviews = ()=>{
    
    return this.props.reviews.map(review => {
        return <Review review ={review} key = {review.id}/>
    })
  }
   
    render(){
      return(
        <div>
          <Route exact path = "/reviews">
            {this.renderReviews()}
          </Route>
        </div>
        )
    }
}

export default Reviews