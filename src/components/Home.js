import React from 'react';
import Background from '../img/5.jpg'
import {
    Route,
} from "react-router-dom";
import '../css/Home.css'

function Home(){

  return(
    <div className="homePage">
    <Route exact path='/'>
      <div className="home-container">
        <br/>
        <h2>Hire proven pros with confidence!</h2>
        <br/>
        <h2>Photogigs generates a shortlist of qualified photographers from around the country. With each shortlisted candidate, you'll be able to review detailed profiles, portfolios, and client reviews so you can find the perfect match for your project.</h2>
      </div>
    </Route>
    </div>
    )

}

export default Home