import request from 'superagent'

export const TEAMS_FETCHED = 'TEAMS_FETCHED'

const baseUrl = 'http://localhost:4000'

const teamsFetched = teams => ({
    type: TEAMS_FETCHED,
    payload: teams
})

export const loadTeams = () => (dispatch, getState) => {
    // when the state already contains events, we don't fetch them again
    if (getState().teams.length !== 0) return

    // a GET /events request
    request(`${baseUrl}/team`)
        .then(response => {
            // dispatch an EVENTS_FETCHED action that contains the events
            dispatch(teamsFetched(response.body))
        })
        .catch(console.error)
}

export const TEAM_CREATE_SUCCESS = 'TEAM_CREATE_SUCCESS'

const teamCreateSuccess = team => ({
    type: TEAM_CREATE_SUCCESS,
    payload: team
})

export const createTeam = (data) => (dispatch, getState) => {
    const token = getState().auth;
    request
        .post(`${baseUrl}/team`)
        .set("Authorization", `Bearer ${token}`)
        .send(data)
        .then(response => {
            dispatch(teamCreateSuccess(response.body))
        })
        .catch(console.error)
}

//DELETE REQUEST
export const TEAM_DELETE_SUCCESS = 'TEAM_DELETE_SUCCESS'

const teamDeleteSuccess = id => ({
    type: TEAM_DELETE_SUCCESS,
    payload: id

})

export const deleteTeam = (id) => dispatch => {
    request
        .delete(`${baseUrl}/team/${id}`)
        .then(response => {
            console.log(response.body)
            console.log('checking id ', id)
            dispatch(teamDeleteSuccess(id))

        })
        .catch(console.error)
}


export const TEAM_FETCHED = 'TEAM_FETCHED'

const teamDetail = team => ({
    type: TEAM_FETCHED,
    payload: team

})

export const fetchTeam = (id) => dispatch => {

    request
        .get(`${baseUrl}/team/${id}`)
        .then(response => {
            dispatch(teamDetail(response.body))
            console.log(response.body)
        })
        .catch(console.error)
}
// ...............update a team nae --------------
export const TEAM_UPDATE_SUCCESS = 'TEAM_UPDATE_SUCCESS'

const teamUpdateSuccess = team => ({
    type: TEAM_UPDATE_SUCCESS,
    payload: team
})

export const UpdateTeam = (id, name) => (dispatch, getState) => {

    const token = getState().auth;
    console.log('checking token in updateteamreducer',token)
    console.log('checking id,name for updateteamreducer',id ,name)
    request
        .put(`${baseUrl}/team/${id}`)
        .send(name)
        .then(response => {
            dispatch(teamUpdateSuccess(response.body))
            console.log('checking response in updateteam',response.body)
           
        })
        .catch(console.error)
}