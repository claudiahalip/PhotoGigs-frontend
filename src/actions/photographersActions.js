const gotPhotographers = (photographers) => {
    return { type: "GOT_PHOTOGRAPHERS", payload: photographers}
};

const addPhotographer = (photographer) => {
    return {type: "ADD_PHOTOGRAPHER", payload: photographer}
}

export const fetchPhotographer = ()=>{
    dispatchEvent({type: "FETCHING_PHOTOGRAPHERS"})
    fetch("http://localhost:3001/photographers")
    .then(resp => resp.json())
    .then((resp)=>{
        dispatchEvent(gotPhotographers(resp))
    });
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
            fetch("http://localhost:3001/photographers")
            .then(resp => resp.json())
            .then((newPhotographer) => dispatch(addPhotographer(newPhotographer)))

        
    }
}