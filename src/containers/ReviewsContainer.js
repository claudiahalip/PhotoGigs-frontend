import React from 'react'
import {Component} from 'react'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import {connect} from 'react-redux'
import {createReview, fetchingReviews} from '../actions/reviewsActions'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

class ReviewsContainer extends Component {

    componentDidMount(){
        this.props.fetchingReviews();
    }

    filterReviews =()=>{
       return this.props.reviews.filter(review => review.photographer_id === this.props.photographer.id)
    }
   
     render(){
        return(
            <div>
                
               <Route exact path = "/reviews">
               <Reviews reviews = {this.filterReviews()}/>
               <ReviewForm createReview = {this.props.createReview} photographerId = {this.props.photographer.id}/>
               </Route>
               
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    //console.log(state)
    return state
}

export default connect(mapStateToProps, {createReview, fetchingReviews})(ReviewsContainer)