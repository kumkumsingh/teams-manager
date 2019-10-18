import React from 'react'
import { Link } from 'react-router-dom'

export default function TeamsList(props) {
  // //using simply react
  // state = {teams:null}
  // componentDidMount(){
  //   fetch('http://localhost:4000/team')
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(teams => this.setState({teams:teams}))
  // }
  // const teams = this.props
  //console.log('checking props',this.props.teams)
  if(!props.teams) return 'Loading'

    return <div>
        {props.teams.map(team => {
            return <li key={team.id}><Link to={`/teams/${team.id}`}>{team.name}</Link></li>
        })}
    </div>

}