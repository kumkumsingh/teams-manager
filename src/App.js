import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import TeamsListContainer from './components/TeamListContainer'
import CreateTeamFormContainer from './components/CreateTeamFormContainer'
import TeamDetailsContainer from './components/TeamDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Route path="/" exact component={TeamsListContainer} />
            <Route path="/" exact component = {CreateTeamFormContainer}></Route>
            <Route path ="/teams/:id" exact component = {TeamDetailsContainer}></Route>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App