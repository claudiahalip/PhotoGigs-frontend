export default function photographerReducer(
    state = { photographers: [],reviews: [], loading: false}, action){
        switch(action.type) {
            case "GOT_PHOTOGRAPHER":
                return{...state, loading: false, photographers: action.paylod}
            case "FETCHING_PHOTOGRAPHERS":
                return {...state, loading: true}
            case 'ADD_PHOTOGRAPHER':
                return {...state, photographers: [...state.photographers, action.payload]}
            case 'ADD_REVIEW':
                return {...state, reviews: [...state.reviews, action.payload]}
        }

}