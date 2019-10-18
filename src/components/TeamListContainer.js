import React from 'react'
import { getTeams } from '../actions/teams'
import {connect} from 'react-redux'
import TeamsList from '../components/TeamsList'

class TeamsListContainer extends React.Component {
  componentDidMount() {
    // this.props.loadTeams()
    // console.log('checking my props',this.props)
    this.props.getTeams()
    
  }

  render() {
    //console.log('checkig props',this.props.teams)
    return (
  
    <TeamsList teams={this.props.teams} /> 
    )
   
  }
}

const mapStateToProps = state => ({
  teams: state.teams
})

export default connect(mapStateToProps, {getTeams})(TeamsListContainer)