import { TEAM_FETCHED } from '../actions/teams'
import { PLAYER_CREATE_SUCCESS } from "../actions/players";

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

        default:
            return state
    }
}