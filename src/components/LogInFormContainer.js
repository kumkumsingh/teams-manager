import React from "react";
import LogInForm from "./LogInForm";
import { connect } from "react-redux";
import { logIn } from "../actions/login";
import { Redirect } from "react-router-dom";

class LogInFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
    // this.props.history.push('/') when redirecting like this,
    // it will always happen if login failed
    // Optimistic redirect
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return this.props.token ? (
      // If we have a token, redirect to Home
      <Redirect to="/teams" />
    ) : (
      <LogInForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth
  };
};

export default connect(
  mapStateToProps,
  { logIn }
)(LogInFormContainer);