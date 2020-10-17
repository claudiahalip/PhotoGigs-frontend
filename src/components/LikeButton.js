import React, { Component } from 'react'

class LikeButton extends Component {
    state={ likesCount: 0 }

    displayHeart=()=>{
        {if(this.state.likesCount === 0){
        return <button onClick={this.handleLikeClick}>♡ {this.state.likesCount}</button>}
          else{
          return <button onClick={this.handleLikeClick}>♥ {this.state.likesCount}</button>}}
      }

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
            {this.displayHeart()}
          </div>
      )
    }
}

export default LikeButton