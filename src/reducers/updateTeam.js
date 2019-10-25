import { TEAM_UPDATE_SUCCESS } from "../actions/teams"

export default (state = {}, action = {}) => {
    switch (action.type) {
        case TEAM_UPDATE_SUCCESS:

            return action.payload

        default:

            return state
    }
}
