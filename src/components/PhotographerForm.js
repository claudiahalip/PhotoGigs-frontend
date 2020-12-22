import React from 'react'
import {Component} from 'react';
import { withRouter } from 'react-router-dom'; 

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
            <div>
                <h2>Add your profile:</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name </label>
                    <input type="text" onChange = {this.handleOnChange} value={this.state.name} name="name"/>
                    <br></br>
                    <br></br>
                    <label>Website </label>
                    <input type="text" onChange = {this.handleOnChange} value={this.state.website} name="website"/>
                    <br></br>
                    <br></br>
                    <label>Years of Experience </label>
                    <input type="text" onChange = {this.handleOnChange} value={this.state.years_of_experience} name="years_of_experience"/>
                    <br></br>
                    <br></br>
                    <label>City </label>
                    <input type="text" onChange = {this.handleOnChange} value={this.state.city} name="city"/>
                    <br></br>
                    <br></br>
                    <label>State </label>
                    <input type="text" onChange = {this.handleOnChange} value={this.state.state} name="state"/>
                    <br></br>
                    <br></br>
                    <label>Your photo  </label>
                    <input type="text" onChange = {this.handleOnChange} value={this.state.image} name="image"/>
                    <br></br>
                    <br></br>
                    
                    <input type="submit" />
                </form>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default withRouter(PhotographerForm); 