export const gotPhotographers = (photographers) => {
    return { type: "GOT_PHOTOGRAPHERS", payload: photographers}
};

export const addPhotographer = (photographer) => {
    return {type: "ADD_PHOTOGRAPHER", payload: photographer}
}

export const fetchPhotographers = ()=>{
    console.log("c")//second
    return (dispatch) => {
        dispatch({type: "FETCHING_PHOTOGRAPHERS"})
    fetch("https://mysterious-retreat-20431.herokuapp.com/photographers")
    .then(resp => resp.json())
    .then((resp)=>{
        //debugger
        console.log("d")//last
        dispatch(gotPhotographers(resp))
    });
  }
}

export const createPhotographer = (photographer) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            }, 
            body: JSON.stringify(photographer)
            };
            fetch("https://mysterious-retreat-20431.herokuapp.com/photographers", configObj)
            .then(resp => resp.json())
            .then((newPhotographer) => {
                //debugger
                dispatch(addPhotographer(newPhotographer))})

        
    }
}

export const gotReviews = (reviews) =>{
    return {type: 'GOT_REVIEWS', payload: reviews}
}

export const  addReview =(review)=>{
    return {type: 'ADD_REVIEW', payload: review}
}

export const fetchingReviews = () =>{
    return dispatch => {
      dispatch({type: 'FETCHING_REVIEWS'})
      fetch("https://mysterious-retreat-20431.herokuapp.com/reviews")
      .then(resp => resp.json())
      .then(resp => {
        dispatch(gotReviews(resp))
    })
  }
}

export const createReview = (review) =>{
    
    return dispatch => {
        const configObj ={
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify(review)};

        fetch("https://mysterious-retreat-20431.herokuapp.com/reviews", configObj)
        .then(resp => resp.json())
        .then(newReview =>{
            dispatch(addReview(newReview))
        })
    }
}


//user actions:

export const gotUsers = (users) =>{
    return {type: "GOT_USERS", payload: users}
}

export const addUser = (user)=>{
    return {type: "ADD_USER", payload: user}
}

export const createUser = (user) => {
    return dispatch => {
        const configObj ={
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify(user)};

        fetch("http://localhost:3001/users", configObj)
        .then(resp => resp.json())
        .then(newUser =>{
            dispatch(addUser(newUser))
        })
    }

}

export const fetchingUser = (user) => {
    return dispatch => {
        dispatch({type: 'FETCHING_USER'})
        fetch("http://localhost:3001/user")
        .then(resp => resp.json())
        .then(resp => {
          dispatch(gotUsers(resp))
      })
    }

}


