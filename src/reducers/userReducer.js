export default function userReducer(
    state={users: [], errors: [], loading: false}, action){
        switch(action.type){
            case "GOT_USERS":
                return{...state, loading: false, users: action.payload}
             case "FETCHING_USER":
                return {...state, loading:true}
            case "ADD_USER":
                return {...state, users: [...state.users, action.payload]}

        }
    }

state = { photographers: [],reviews: [], loading: false}, action){
    switch(action.type) {
        case "GOT_PHOTOGRAPHERS":
            return{...state, loading: false, photographers: action.payload}
        case "FETCHING_PHOTOGRAPHERS":
            return {...state, loading: true}