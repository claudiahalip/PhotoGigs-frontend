
import React, {Component} from 'react';
import Photographer from './Photographer';
import PhotographerAllInfo from './PhotographerAllInfo'
import {
  Route
} from "react-router-dom";

class Photographers extends Component {

  state = {
    searchTerm: "",
    currentDisplay: this.props.photographers
  }

  handleChange =(event)=>{
    const filteredPhotographers = this.props.photographers.filter(photographer => photographer.name.includes(event.target.value))
    this.setState({
      searchTerm: event.target.value,
      currentDisplay : filteredPhotographers
    })
  }

  renderPhotographers = ()=>{

    if (this.state.searchTerm == ""){
    return this.props.photographers
     .map(photographer => {
      return <Photographer photographer={photographer} key={photographer.id} />
      })}
      else{
        return this.state.currentDisplay.map(photographer => {
          return <Photographer photographer={photographer} key={photographer.id} />
          })
      }
  }

  render(){
      return (
        <div >
          <label>Search:</label>
          <input type="text" onChange={this.handleChange}/>
          <br></br>
          {this.renderPhotographers()}
          <Route exact path="/photographers/:id" component={({match})=>{
              return <PhotographerAllInfo id = {match.params.id} photographers={this.props.photographers} reviews={this.props.reviews} createReview={this.props.createReview} fetchingReviews={this.props.fetchingReviews}/>
            }}>
          </Route>
          <br></br>
          <br></br>
        </div>
      )
    }


}

export default Photographers;