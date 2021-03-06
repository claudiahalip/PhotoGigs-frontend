
import React, {Component} from 'react';
import Photographer from './Photographer';
import PhotographerAllInfo from './PhotographerAllInfo'
import {
  Route, Switch
} from "react-router-dom";
import PhotographersContainer from '../containers/PhotographersContainer';

class Photographers extends Component {

  state = {
    searchTerm: "",
    currentDisplay: this.props.photographers
  }

  handleChange =(event)=>{
    const filteredPhotographers = this.props.photographers.filter(photographer => photographer.state.toLowerCase().includes(event.target.value.toLowerCase()))
    console.log(filteredPhotographers)
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
          
          <Route exact path = '/photographers'>
          <div className="searchInput">
          <label>Search by state:</label>
          <input type="text" onChange={this.handleChange}/>
          </div>
          </Route>
          
          
          <Route exact path="/photographers/:id" component={({match})=>{
              return <PhotographerAllInfo id = {match.params.id} photographers={this.props.photographers} reviews={this.props.reviews} createReview={this.props.createReview} fetchingReviews={this.props.fetchingReviews}/>
            }}>
          </Route>
          
          {this.renderPhotographers()}
        </div>
      )
    }


}

export default Photographers;