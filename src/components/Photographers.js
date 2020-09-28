
import React, {Component} from 'react';
import Photographer from './Photographer';
import PhotographerAllInfo from './PhotographerAllInfo'
import {
  Route
} from "react-router-dom";

class Photographers extends Component {

  componentDidMount(){
    this.props.fetchingReviews();
}

    renderPhotographers=()=>{
      return this.props.photographers.map(photographer => {
        return <Photographer photographer={photographer} key={photographer.id}/>
        })
    }

    render(){
      //debugger
      return (
        <div >
          {this.renderPhotographers()}
          <Route exact path="/photographers/:id" component={({match})=>{
              return <PhotographerAllInfo id = {match.params.id} photographers={this.props.photographers} reviews={this.props.reviews} createReview={this.props.createReview} fetchingReviews={this.props.fetchingReviews}/>
            }}>
          </Route>
        </div>
      )
    }
}

export default Photographers;