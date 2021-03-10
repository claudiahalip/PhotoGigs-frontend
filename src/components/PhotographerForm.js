import React from 'react'
import {Component} from 'react';
import { withRouter } from 'react-router-dom'; 
import '../css/PhotographerForm.css'

class PhotographerForm extends Component {
    state = {
        name:'', website:'', years_of_experience:'', city:'', state: '', image: ''
    }

    

    handleOnChange = (event)=>{
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.createPhotographer(this.state)
        this.setState({
            name:'', website:'', years_of_experience:'', city:'', state: '', image: ''
        })
        this.props.history.push('/photographers')
    }

    render(){
        return(
            <div className="photographerForm">
                <p>Add your listing:</p>
                <div className="photo-form">
                <form onSubmit={this.handleOnSubmit}>
                    
                    <input className="select"
                    placeholder="Name"
                    type="text" onChange = {this.handleOnChange} value={this.state.name} name="name"/>
                    
                    
                    <input className="select"
                    placeholder="Website"
                    type="text" onChange = {this.handleOnChange} value={this.state.website} name="website"/>
                    
                    <label>Years of Experience </label>
                    <input className="select"
                    placeholder="Years of Experience"
                    type="text" onChange = {this.handleOnChange} value={this.state.years_of_experience} name="years_of_experience"/>
                    
                    
                    <input className="select"
                    placeholder="City"
                    type="text" onChange = {this.handleOnChange} value={this.state.city} name="city"/>
                    
                    
                    <input className="select"
                    placeholder="State"
                     type="text" onChange = {this.handleOnChange} value={this.state.state} name="state"/>
                    
                    
                    <input className="select"
                    placeholder="Profile photo address"
                    type="text" onChange = {this.handleOnChange} value={this.state.image} name="image"/>
                   
                    
                    <input
                    className="submit"
                    type="submit" />
                </form>
                </div>
                
            </div>
        )
    }
}

export default withRouter(PhotographerForm); 