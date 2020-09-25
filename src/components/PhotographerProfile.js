import React from 'react'
import {Component} from 'react'

class PhotographerProfile extends Component {
   renderReviews =()=>{
       return this.props.reviews.map(review => <li key= {review.id}>{review.content}</li>)
   }

    render(){
      //console.log(this.props.reviews)
      return(
        <div>
          <h1>TEST</h1>
          <h2>{this.props.name}</h2>
          <h3>{this.props.website}</h3>
          <h3>{this.props.city}, {this.props.state}</h3>
          <h3>Years of expeience: {this.props.yoe}</h3>
          <ul>Reviews: {this.renderReviews()} </ul> 
        </div>
      )
    }
}

export default PhotographerProfile