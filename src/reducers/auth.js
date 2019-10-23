import {LOGIN_SUCCESS} from '../actions/login'
//const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const token = localStorage.getItem("jwt");
const initialState = token ? token : null;
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.payload 
        default:
            return state
    }
}
