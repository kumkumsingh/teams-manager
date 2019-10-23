import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import TeamsListContainer from './components/TeamListContainer'
import CreateTeamFormContainer from './components/CreateTeamFormContainer'
import TeamDetailsContainer from './components/TeamDetailsContainer'
import LogInFormContainer from './components/LogInFormContainer'
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (

      <div className="App">

        <header className="App-header">
          <h2>Team Management page</h2>
    
          {this.props.loggedIn ? (
            "You're logged in"
          ) : (
              <Link to="/login"> Login</Link>
            )}
          <Route path="/teams" exact component={TeamsListContainer} />
          <Route path="/teams" exact component={CreateTeamFormContainer}></Route>
          <Route path="/teams/:id" exact component={TeamDetailsContainer}></Route>
          <Route path="/login" excat component={LogInFormContainer}></Route>
        
        </header>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth !== null
  };
};

export default connect(mapStateToProps)(App);