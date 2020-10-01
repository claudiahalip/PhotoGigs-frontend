import React, { Component } from 'react'

class Review extends Component {

    transformDate=(date)=> {
        let newDateFormat = date.substring(0,10)  
        return newDateFormat
    }

  render(){
    return(
      <div> 
        <li>{this.props.review.content}</li>
        <h4>posted at: {this.transformDate(this.props.review.created_at)}</h4>
        <h4>for: {this.props.review.photographer.name} </h4>
        <hr/>
      </div>
    )
  }
}
export default Review