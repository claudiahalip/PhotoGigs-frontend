import React from 'react'
import {
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home(props){
  return(
    <div>
    <Route exact path = "/">
      <h1>TEST HOME  and flip cards</h1>
      <div class="flip-card">
       <div class="flip-card-inner">
        <div class="flip-card-front">
          <p>test</p>
        </div>
        <div class="flip-card-back">
          <h1>Claudia</h1>
          <p>Chicago</p>
          <p>Illinois</p>
        </div>
       </div>
      </div>
    </Route> 
    </div>
    )

}

export default Home