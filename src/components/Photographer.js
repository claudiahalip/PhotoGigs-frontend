import React from 'react';
import {Component} from 'react';
import PhotographerProfile from './PhotographerProfile'
import ReviewsContainer from '../containers/ReviewsContainer';

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Photographer extends Component {

    render(){
      return (
        <div>
          <Route exact path = '/photographers'>
        <div className="card-grid">
          
          <div className="flip_card">
            <div className="flip-card-inner">
              
                <div className = "flip-card-front">
                  <h1>{this.props.photographer.name}</h1>
                  <h3>{this.props.photographer.city}, {this.props.photographer.state}</h3>
                  <Link to ="/reviews">
                  <button id = {this.props.photographer.id} >View Reviews</button>
                  </Link>
                </div>
            
            
                <div className="flip-card-back" >
                  <PhotographerProfile name={this.props.photographer.name} 
                  website={this.props.photographer.website} 
                  yoe={this.props.photographer.years_of_experience} 
                  city={this.props.photographer.city} 
                  state={this.props.photographer.state} 
                  />
                </div>
            </div>
          </div>
          
        <ReviewsContainer photographer = {this.props.photographer}/>
        </div>
        </Route>
        </div>
      )
    }
}

export default Photographer