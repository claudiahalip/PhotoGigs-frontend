import React, { Component } from 'react'
import {FaHeart} from 'react-icons/fa'

class LikeButtonReactIcons extends Component {
    state={ likesCount: 0 }

    handleLikeClick=(e)=>{
    e.preventDefault();
    let newLikeClick = this.state.likesCount+1
    this.setState({
        likesCount: newLikeClick
      })
    }
  
    render(){
      return(
          <div>
            <label>
                <input type="radio" onClick={this.handleLikeClick}/>
                <FaHeart
                 color = {this.state.likesCount==0 ? "black" : "orange"}
                 size = {18}
                />  {this.state.likesCount}</label>
          </div>
      )
    }
}
export default LikeButtonReactIcons