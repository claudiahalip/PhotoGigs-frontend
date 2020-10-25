import React from 'react';
import {Component} from 'react';
import Calendar from 'react-calendar';
import {
     Route,
    Link
  } from "react-router-dom";
import LikeButton from './LikeButton'
import LikeButtonReactIcons from './LikeButtonReactIcons'
import PhotographerAvalableDates from  './PhotographerAvalableDates'

class Photographer extends Component {


render(){
      return (
        <div className='card-grid'>
          <Route exact path = "/photographers">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className = "flip-card-front">
                <h2>{this.props.photographer.name}</h2>
                <img src={this.props.photographer.image} className="photographer-avatar"></img>
              </div>
              
              <div className="flip-card-back" >
                <h2>{this.props.photographer.name}</h2>
                <a target='_blank' href={this.props.photographer.website}>{this.props.photographer.website}</a>
                <h3>YOE: {this.props.photographer.years_of_experience} </h3>
                <h3>{this.props.photographer.city}, {this.props.photographer.state}</h3>
                <Link to = {`/photographers/${this.props.photographer.id}`}>
                <button id = {this.props.photographer.id} >View profile</button>
                </Link>
                <br></br>
                <br></br>
                {/* <LikeButton/> */}
                <LikeButtonReactIcons/>
                
              </div>
            </div>
          </div>
          
        </Route>
       </div>
      )
    }
}

export default Photographer