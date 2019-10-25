import { TEAM_FETCHED } from '../actions/teams'
import { PLAYER_CREATE_SUCCESS } from "../actions/players";
import { TEAM_UPDATE_SUCCESS } from "../actions/teams"


// import { identifier } from '@babel/types';
export default (state = {}, action = {}) => {
    switch (action.type) {
        case TEAM_FETCHED:
            return { ...action.payload }
        case PLAYER_CREATE_SUCCESS:
            return {
                ...state,
                players: [...state.players, action.payload]
            }
            case TEAM_UPDATE_SUCCESS:

                    return {...action.payload ,players:[...state.players]}
        default:
            return state
    }
}