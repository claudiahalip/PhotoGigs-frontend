import React from 'react'
import {Component} from 'react'
import Reviews from '../components/Reviews'
import {Route} from "react-router-dom";


class ReviewsContainer extends Component {
   
     render(){
        return(
            <div>
              <Route exact path = "/reviews">
                <Reviews reviews = {this.props.reviews}/>
              <br/><br/>
              </Route>
            </div>
        )
    }
}


export default ReviewsContainer