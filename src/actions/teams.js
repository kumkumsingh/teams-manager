import request from 'superagent'

export function getTeams() {
    return function (dispatch) {
      request('http://localhost:4000/team')
        .then(response => {
          dispatch({
            type : 'FETCH_TEAMS',  
            payload : response.body
        })
    
    })
    }}

// export const TEAMS_FETCHED = 'TEAMS_FETCHED'

// const baseUrl = 'http://localhost:4000'
// const teamsFetched = teams => ({
//     type: 'TEAMS_FETCHED',
//     teams
//   })
// export const loadTeams = () => (dispatch, getState) => {
//     // when the state already contains teams, we don't fetch them again
//     if (getState().teams) return
  
//     // a GET /TEAMS request
//     request(`${baseUrl}/team`)
//       .then(response => {
//           console.log('checking reponse', response.body)
//         // dispatch an TEAMS_FETCHED action that contains the TEAMS
//         dispatch(teamsFetched(response.body))
//       })
//       .catch(console.error)
//   }