import { TEAM_FETCHED }from '../actions/teams'
export default (state = {}, action = {}) => {
    switch (action.type) {
        case TEAM_FETCHED:
            return { ...action.payload}
        default:
            return state
    }
}