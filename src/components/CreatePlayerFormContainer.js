import React, { Component } from 'react'
import PlayerForm from './PlayerForm'
import { createPlayer } from '../actions/players'
import { connect } from "react-redux";

 class CreatePlayerFormContainer extends Component {
    state = {
        name: "",
        number: ""
      };
    
      onChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      onSubmit = event => {
        console.table(this.state);
        event.preventDefault();
        this.props.createPlayer({
          ...this.state,
          teamId: this.props.teamId

        });
        this.setState({
          name: "",
          number: ""
        });
      };
    
      render() {
        return (
          <PlayerForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        );
      }
}
export default connect( null,{ createPlayer })(CreatePlayerFormContainer)