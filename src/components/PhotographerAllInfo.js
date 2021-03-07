
import React, { Component } from 'react'
import PhotographerAvalableDates from './PhotographerAvalableDates'
import {Link} from 'react-router-dom'



class PhotographerAllInfo extends Component{
    state ={
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
            return <div>
            <h3>{photographer.name}</h3>
            <a target='_blank' href={this.props.photographer.website}>{this.props.photographer.website}</a>
            <h4>YOE:{photographer.years_of_experience}</h4>
            <h4>{photographer.city}, {photographer.state}</h4>
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
            return <div>{reviews.map(review => {
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
          <div>
            {this.renderPhotographer()}
            {/* <h3>See available dates</h3>
            <PhotographerAvalableDates/> */}

       
            <h3>Reviews:</h3>
            {this.renderReviews()}
            <hr/>
            <br/>
            <form onSubmit={this.handleOnSubmit}>
            <label>Add a review:</label>
            <input type="text" value={this.state.content} onChange={this.handleOnChange}/>
            <input type="submit"/>
          </form>
          </div>
        )
    }
}

export default PhotographerAllInfo
