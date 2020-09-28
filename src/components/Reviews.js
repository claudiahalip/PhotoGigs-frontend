import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component{

  renderReviews = ()=>{
    
    return this.props.reviews.map(review => {
        return <Review review ={review} key = {review.id}/>
    })
  }
   
    render(){
      return(
        <div>
          {this.renderReviews()}
        </div>
        )
    }
}

export default Reviews