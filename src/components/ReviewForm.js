import React from 'react'
import {Component} from 'react';

class ReviewForm extends Component{
    state ={
        content:''
    }
     
    handleOnChange =(e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handleOnSubmit = (e) =>{
        e.preventDefault()
        this.props.createReview({content: this.state.content, photographer_id: this.props.photographerId})
    }

    render(){
      return(
        <div>
          <h1>ReviewForm test</h1>
          <form>
            <label>Add a review:</label>
            <input type="text" value={this.state.content} onChange={this.handleOnChange}/>
            <input type="submit"/>
          </form>
        </div>
      )
    }
}
export default ReviewForm