import { combineReducers } from 'redux'
import teams from './teams'
import team from './team'
import auth from './auth'
//import updateTeam from './updateTeam'

export default combineReducers({
  teams,
  team,
  auth
  //updateTeam
})