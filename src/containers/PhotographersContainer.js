import React from 'react'
import { Component} from 'react'
import Photographers from '../components/Photographers'
import PhotographerForm from '../components/PhotographerForm'
import {connect} from 'react-redux'
import {fetchPhotographers, createPhotographer, createReview, fetchingReviews} from '../actions/photographersActions'
import {
    Switch,
    Route,
    Link
   } from "react-router-dom";
import ReviewsContainer from './ReviewsContainer'
class PhotographersContainer extends Component {
     
    componentDidMount(){
        this.props.fetchPhotographers();
        this.props.fetchingReviews();
    }

    render() {
    //debugger
      return (
        <div>
          <Switch>
          <Route exact path ="/photographers/new">
              <PhotographerForm createPhotographer = {this.props.createPhotographer}/>
            </Route>
            <Route path="/">
              <Photographers photographers= {this.props.photographers} reviews ={this.props.reviews} createReview={this.props.createReview} fetchingReviews={this.props.fetchingReviews} />
            </Route >
          </Switch> 
          <ReviewsContainer reviews = {this.props.reviews}/>
        </div>
      )
    }
}
const mapStateToProps = (state) => {
    //debugger
    //console.log(state)
    return state
}

export default connect(mapStateToProps, {fetchPhotographers, createPhotographer, createReview, fetchingReviews})(PhotographersContainer)