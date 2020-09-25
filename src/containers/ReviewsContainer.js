import React from 'react'
import {Component} from 'react'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import {connect} from 'react-redux'
import {createReview} from '../actions/reviewsActions'

class ReviewsContainer extends Component {
    filteredReviews = ()=>{
        return this.props.reviews.filter(review => review.photographerId===this.props.photographer.id)
    }
    render(){
        return(
            <div>
                <h1>ReviewContainer test</h1>
                <Reviews reviews = {this.filteredReviews}/>
                <ReviewForm createReview = {this.props.createReview} photographerId = {this.props.photographer.id}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {createReview})(ReviewsContainer)