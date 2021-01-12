import React from 'react'
import {
    Route,
  } from "react-router-dom";



function Home(){
  return(
    <div style = {{backgroundImage: 'url(https://images.unsplash.com/photo-1457608135803-4827addc43e0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGNhbWVyYXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60)', 
    backgroundRepeat: 'no-repeat'
     }}>
    <Route exact path = "/">
    <h2>Welcome! </h2>
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