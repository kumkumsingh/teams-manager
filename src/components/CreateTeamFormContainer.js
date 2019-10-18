import React from 'react'
import TeamForm from './TeamForm'
import {connect} from 'react-redux'
import {createTeam} from '../actions/teams'

class CreateTeamFormContainer extends React.Component {
    state = {
      name: '',
    }
  
    onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    onSubmit = (event) => {
      event.preventDefault()
      this.props.createTeam(this.state)
      this.setState({
        name: '',
      })
    }
  
    render() {
      return (<TeamForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />)
    }
  }
  
  export default connect(null, {createTeam})(CreateTeamFormContainer)
  
