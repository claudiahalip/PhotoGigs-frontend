export default function photographerReducer(
    state = { photographers: [],reviews: [], users: [], loading: false}, action){
        switch(action.type) {
            case "GOT_PHOTOGRAPHERS":
                return{...state, loading: false, photographers: action.payload}
            case "FETCHING_PHOTOGRAPHERS":
                return {...state, loading: true}
            case 'ADD_PHOTOGRAPHER':
                return {...state, photographers: [...state.photographers, action.payload]}
            case 'GOT_REVIEWS':
                return {...state, loading: false, reviews: action.payload}    
            case 'FETCHING_REVIEWS':
                return {...state, loading: true}
            case 'ADD_REVIEW':
                return {...state, reviews: [...state.reviews, action.payload]}

                //user reducer

            case "GOT_USERS":
                return{...state, loading: false, users: action.payload}
            case "FETCHING_USER":
                return {...state, loading:true}
            case "ADD_USER":
                return {...state, users: [...state.users, action.payload]}
                    
            default:
                return state;
        }


        

}