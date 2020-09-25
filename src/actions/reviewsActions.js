export const  addReview =(review)=>{
    return {type: 'ADD_REVIEW', payload: review}
}

export const createReview = (review) =>{
    return dispatch => {
        const configObj ={
            method: "POST",
            header:{
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