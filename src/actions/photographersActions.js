export const gotPhotographers = (photographers) => {
    return { type: "GOT_PHOTOGRAPHERS", payload: photographers}
};

export const addPhotographer = (photographer) => {
    return {type: "ADD_PHOTOGRAPHER", payload: photographer}
}

export const fetchPhotographers = ()=>{
    return (dispatch) => {
        dispatch({type: "FETCHING_PHOTOGRAPHERS"})
    fetch("http://localhost:3001/photographers")
    .then(resp => resp.json())
    .then((resp)=>{
        //debugger
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
            fetch("http://localhost:3001/photographers", configObj)
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
      fetch("http://localhost:3001/reviews")
      .then(resp => resp.json())
      .then(resp => {
        dispatch(gotReviews(resp))
    })
  }
}

export const createReview = (review) =>{
    
    return dispatch => {
        console.log(review)
        const configObj ={
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify(review)};

        fetch("http://localhost:3001/reviews", configObj)
        .then(resp => resp.json())
        .then(newReview =>{
            dispatch(addReview(newReview))
        })
    }
}