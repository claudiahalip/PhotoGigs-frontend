import React from 'react';
import {Component} from 'react';
import PhotographerProfile from './PhotographerProfile'
import ReviewsContainer from '../containers/ReviewsContainer';

import {
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Photographer extends Component {

    // handeleOnClick = () => {
    //   return <PhotographerProfile/>
    // }

    render(){
        //debugger
        console.log(this.props.photographer.reviews)
      return (
        <div>
            <div className = "card" id= {`photographer-${this.props.photographer.id}`}>
              <h1>{this.props.photographer.name}</h1>
              <h3>{this.props.photographer.website}</h3>
              <h3>YOE:{this.props.photographer.years_of_experience}</h3>
              <h3>{this.props.photographer.city}, {this.props.photographer.state}</h3>
              <button id = {this.props.photographer.id} onClick={ (e) => this.handeleOnClick(this.props.photographer.id)}>View Profile</button>
            </div>
            
            <div>
            
            <PhotographerProfile name={this.props.photographer.name} 
            website={this.props.photographer.website} 
            yoe={this.props.photographer.years_of_experience} 
            city={this.props.photographer.city} 
            state={this.props.photographer.state} 
            reviews = {this.props.photographer.reviews}/>
           
            </div>
            <ReviewsContainer photographer = {this.props.photographer}/>
            
        </div>
      )
    }
}

export default Photographer