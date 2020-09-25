import React, { Component } from 'react'


class Review extends Component {
    render(){
        return(
            <div>
                <h1> Review test</h1>
                <h2>{this.props.review.content}</h2>
            </div>
        )
    }
}
export default Review