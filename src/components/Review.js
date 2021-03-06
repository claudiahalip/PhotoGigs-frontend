import React, { Component } from 'react'
import '../css/Review.css'

class Review extends Component {

    transformDate=(date)=> {
        let newDateFormat = date.substring(0,10)  
        return newDateFormat
    }

  render(){
    return(
      <div className="review"> 
        <p>{this.props.review.content}</p>
        <h4>posted at: {this.transformDate(this.props.review.created_at)}</h4>
        <h4>for: {this.props.review.photographer.name} </h4>
      </div>
    )
  }
}
export default Review