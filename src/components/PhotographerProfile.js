import React from 'react'
import {Component} from 'react'

class PhotographerProfile extends Component {
//    renderReviews =()=>{
//        return this.props.reviews.map(review => <li key= {review.id}>{review.content}</li>)
//    }

    render(){
      //console.log(this.props.reviews)
      return(
        <div className="profile">
          
          <h1>{this.props.name}</h1>
          <h3>{this.props.website}</h3>
          <h3>{this.props.city}, {this.props.state}</h3>
          <h3>Years of expeience: {this.props.yoe}</h3>
          
        </div>
      )
    }
}

export default PhotographerProfile