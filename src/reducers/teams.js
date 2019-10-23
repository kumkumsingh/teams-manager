import { TEAMS_FETCHED, TEAM_CREATE_SUCCESS } from '../actions/teams'
import { TEAM_DELETE_SUCCESS } from '../actions/teams'
export default (state = [], action) => {
    switch (action.type) {
        case TEAMS_FETCHED:
            return [...state, ...action.payload]

        case TEAM_CREATE_SUCCESS:

            return [...state, { ...action.payload }]
        case TEAM_DELETE_SUCCESS:
            //write if condition based on id check 
            console.log('state', state)
            console.log('checking from reducer id', action.payload)
            return state.filter(team => team.id !== action.payload);
        // return action.payload
        // return state.filter(team => team.id !== action.id)
        default:
            return state
    }
}