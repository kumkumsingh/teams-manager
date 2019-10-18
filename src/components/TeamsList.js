import React, { Component } from 'react'
//import { Link } from 'react-router-dom' 

export default class TeamsList extends Component {
  // //using simply react
  // state = {teams:null}
  // componentDidMount(){
  //   fetch('http://localhost:4000/team')
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(teams => this.setState({teams:teams}))
  // }
  render () {
    // const teams = this.props
    //console.log('checking props',this.props.teams)
    return <div>
      <h1>Welcome to class!</h1>
    
             <h1>hello Team</h1>
              {/* { this.state.teams && this.state.teams.map((team)=> <h1>{team.name}</h1>) }  */}
              {/* {this.props.team && this.props.teams.map(team => {
                return <div>
                  {team.name}
                </div>
              })} */}
              {this.props.teams === null ? "Loading" : this.props.teams.map(team =>(
                <div>
                  {team.name}
                </div>
              ))}
    
    </div>
  }
}