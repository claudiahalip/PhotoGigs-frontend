import React from 'react'
import {Component} from 'react'
import Reviews from '../components/Reviews'
import {connect} from 'react-redux'
import {fetchingReviews} from '../actions/photographersActions'

class ReviewsContainer extends Component {
    
    componentDidMount(){
       this.props.fetchingReviews();
    }
   
     render(){
        return(
            <div>
              <Reviews reviews = {this.props.reviews}/>
              <br/><br/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {reviews: state.reviews}
}

export default connect(mapStateToProps, {fetchingReviews})(ReviewsContainer)