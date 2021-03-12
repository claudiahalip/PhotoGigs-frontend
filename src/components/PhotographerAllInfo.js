
import React, { Component } from 'react'
import PhotographerAvalableDates from './PhotographerAvalableDates'
import {Link, Route} from 'react-router-dom'
import '../css/PhotographerAllInfo.css'


class PhotographerAllInfo extends Component{
    state = {
        content:''
    }

    transformDate=(date)=> {
        let newDateFormat = date.substring(0,10)  
        return newDateFormat
    }

    
    handleOnChange =(e) =>{
        this.setState({
            content: e.target.value
        })
    }

    handleOnSubmit = (e) =>{
        e.preventDefault()
        this.props.createReview({content: this.state.content, photographer_id: this.props.id})
        this.setState({content: ''})
    }
    

    renderPhotographer(){
        const photographer = this.props.photographers.find(photographer => photographer.id == this.props.id)
        if (photographer){
            return <div className="profile">
                <div className="photo">
                    <img src={photographer.image}></img>
                </div>
                <div className="info">
                    <h3>{photographer.name}</h3>
                    <a target='_blank' href={photographer.website}>{photographer.website}</a>
                    <h4>YOE:{photographer.years_of_experience}</h4>
                    <h4>{photographer.city}, {photographer.state}</h4>
                </div>
            </div>
        }
        else{
            return <h2>photographer not found</h2>
        }
    }

    renderReviews(){
        //debugger
        const photographer = this.props.photographers.find(photographer => photographer.id == this.props.id)
        if(photographer){
            const reviews = this.props.reviews.filter(review => review.photographer_id == photographer.id)
            return  <div>{reviews.map(review => {
                return <div>
                       <li key={review.id} >{review.content} posted at: {this.transformDate(review.created_at)}</li>
                       <br/>
                       <br/>
                       </div>})
                    }</div>
        }
    }

    

    render(){
        return(
          <div className="reviews">
              
            {this.renderPhotographer()}
            
            <h3>Reviews:</h3>
                {this.renderReviews()}
            
            <div className="reviewForm">
            <form onSubmit={this.handleOnSubmit}>
                <label  className="reviewLabel">Add a review:</label>

                <input 
                className="reviewsInput"
                type="text" value={this.state.content} onChange={this.handleOnChange}/>
                <input 
                className="submitReview"
                type="submit"/>
            </form>
            </div>

         
          </div>
        )
    }
}

export default PhotographerAllInfo
